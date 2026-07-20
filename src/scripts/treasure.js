/**
 * 宝探し。
 * LP に隠れたアイテムをクリックするとポップアップが出て、スタンプ帳に
 * スタンプ（logo-stamp）が 1 つ増える。
 *
 * 発見順は不定なので:
 *  - 「○/3個獲得」は found.size を差し込む（焼き込みの数字は使わない）。
 *  - 「特別セットを見る」CTA と完了メッセージは、3 つ目を見つけた“最後のカード”
 *    （= completedBy）だけに出す。どの道具でも良い。
 *  - スタンプは発見した順に左から埋める（道具固定ではなく件数で埋める）。
 *
 * 状態は sessionStorage（リロードで消えるのは許容）。
 */
const ITEMS = ['matcha', 'chasen', 'chawan'];
const TOTAL = ITEMS.length;
const STORAGE_KEY = 'morihan5th:treasure';
const DONE_KEY = 'morihan5th:treasure:completedBy';

function loadFound() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    return new Set(Array.isArray(parsed) ? parsed.filter((i) => ITEMS.includes(i)) : []);
  } catch {
    return new Set();
  }
}

function saveFound(found) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify([...found]));
  } catch {
    /* ストレージが使えない環境では状態を保持しないだけ */
  }
}

function loadCompletedBy() {
  try {
    const v = sessionStorage.getItem(DONE_KEY);
    return v && ITEMS.includes(v) ? v : null;
  } catch {
    return null;
  }
}

function saveCompletedBy(item) {
  try {
    sessionStorage.setItem(DONE_KEY, item);
  } catch {
    /* noop */
  }
}

export function initTreasureHunt() {
  const triggers = Array.from(document.querySelectorAll('[data-treasure-trigger]'));
  const stampsOpeners = Array.from(document.querySelectorAll('[data-treasure-stamps-open]'));
  const popups = Array.from(document.querySelectorAll('[data-treasure-popup]'));
  if (triggers.length === 0 && stampsOpeners.length === 0) return;

  const found = loadFound();
  let completedBy = loadCompletedBy();
  let lastFocused = null;

  // スタンプは件数で左から埋める（発見順）。トリガーは見つけたものを薄く。
  const syncStamps = () => {
    const n = found.size;
    document.querySelectorAll('[data-treasure-stamp]').forEach((slot) => {
      const idx = Number(slot.getAttribute('data-treasure-stamp'));
      slot.classList.toggle('is-found', Number.isFinite(idx) && idx < n);
    });
    triggers.forEach((trigger) => {
      const item = trigger.getAttribute('data-treasure-trigger');
      trigger.classList.toggle('is-found', found.has(item));
    });
  };

  // カードごとに、その時点の獲得数・完了状態を反映する。
  const applyState = (popup, item) => {
    const isCompleter = found.size === TOTAL && item === completedBy;

    const countEl = popup.querySelector('[data-treasure-count]');
    if (countEl) countEl.textContent = String(found.size);

    const normalBody = popup.querySelector('[data-treasure-body="normal"]');
    const doneBody = popup.querySelector('[data-treasure-body="done"]');
    if (normalBody) normalBody.hidden = isCompleter;
    if (doneBody) doneBody.hidden = !isCompleter;

    const cta = popup.querySelector('[data-treasure-cta]');
    if (cta) cta.hidden = !isCompleter;
  };

  const closePopup = (popup) => {
    popup.hidden = true;
    document.body.classList.remove('is-treasure-open');
    if (lastFocused instanceof HTMLElement) lastFocused.focus();
  };

  const openPopup = (item, trigger) => {
    const popup = document.querySelector(`[data-treasure-popup="${item}"]`);
    if (!(popup instanceof HTMLElement)) return;

    if (item !== 'stamps') applyState(popup, item);

    lastFocused = trigger;
    popup.hidden = false;
    document.body.classList.add('is-treasure-open');
    popup.querySelector('[data-treasure-close]')?.focus();
  };

  // 閉じる操作は開くたびではなく最初に 1 回だけ結び付ける
  // （開くたびに addEventListener すると同じハンドラが積み上がる）
  popups.forEach((popup) => {
    popup.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest('[data-treasure-close]') || target === popup) closePopup(popup);
    });
  });

  // スタンプボタン: 見つけた状態は変えず、スタンプ帳だけを開く
  stampsOpeners.forEach((opener) => {
    opener.addEventListener('click', () => openPopup('stamps', opener));
  });

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const item = trigger.getAttribute('data-treasure-trigger');
      if (!item || !ITEMS.includes(item)) return;

      const wasNew = !found.has(item);
      found.add(item);
      saveFound(found);

      // 3 つ目を“初めて”見つけた瞬間の道具を completedBy に記録（CTA/完了文の出し先）
      if (wasNew && found.size === TOTAL && !completedBy) {
        completedBy = item;
        saveCompletedBy(item);
      }

      syncStamps();
      openPopup(item, trigger);
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    document.querySelectorAll('[data-treasure-popup]').forEach((popup) => {
      if (!popup.hidden) closePopup(popup);
    });
  });

  syncStamps();
}
