/**
 * 宝探し。
 * コーディングルール「LPの中に隠れているアイテムをクリックしたらポップアップが表示
 * MVにあるスタンプ帳にスタンプが押される」。
 *
 * 見つけた状態は sessionStorage に持たせる（リロードで消えるのは許容。
 * 永続化が必要なら localStorage に切り替える）。
 */
const ITEMS = ['matcha', 'chasen', 'chawan'];
const STORAGE_KEY = 'morihan5th:treasure';

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

export function initTreasureHunt() {
  const triggers = Array.from(document.querySelectorAll('[data-treasure-trigger]'));
  const stampsOpeners = Array.from(document.querySelectorAll('[data-treasure-stamps-open]'));
  const popups = Array.from(document.querySelectorAll('[data-treasure-popup]'));
  if (triggers.length === 0 && stampsOpeners.length === 0) return;

  const found = loadFound();
  let lastFocused = null;

  const syncStamps = () => {
    document.querySelectorAll('[data-treasure-slot]').forEach((slot) => {
      const item = slot.getAttribute('data-treasure-slot');
      slot.classList.toggle('is-found', found.has(item));
    });
    triggers.forEach((trigger) => {
      const item = trigger.getAttribute('data-treasure-trigger');
      trigger.classList.toggle('is-found', found.has(item));
    });
  };

  const closePopup = (popup) => {
    popup.hidden = true;
    document.body.classList.remove('is-treasure-open');
    if (lastFocused instanceof HTMLElement) lastFocused.focus();
  };

  const openPopup = (item, trigger) => {
    const popup = document.querySelector(`[data-treasure-popup="${item}"]`);
    if (!(popup instanceof HTMLElement)) return;

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
      found.add(item);
      saveFound(found);
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
