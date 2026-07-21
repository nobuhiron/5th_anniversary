/**
 * キャンペーンスケジュールの開閉。
 * コーディングルール「開くで詳細が開くように」。
 * 閉じているとき: カレンダー上部だけをプレビュー表示し下端をグラデーションでフェード
 *                 + ラベル「開く」+ 下向き chevron
 * 開いたとき    : カレンダー全体 + ラベル「閉じる」+ 上向き chevron（CSS の [aria-expanded] で回転）
 *
 * 折りたたみは JS があるときだけ効かせる（is-collapsible を付けてから閉じる）。
 * JS が無い環境ではクリップが掛からず、カレンダー全体がそのまま読める。
 */
export function initScheduleAccordion() {
  const toggle = document.querySelector('[data-schedule-toggle]');
  if (!(toggle instanceof HTMLElement)) return;

  const detailId = toggle.getAttribute('aria-controls');
  const detail = detailId ? document.getElementById(detailId) : null;
  const label = toggle.querySelector('[data-schedule-toggle-label]');
  if (!detail || !label) return;

  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    detail.classList.toggle('is-open', open);
    label.textContent = open ? '閉じる' : '開く';
  };

  detail.classList.add('is-collapsible');
  setOpen(false);

  toggle.addEventListener('click', () => {
    const willOpen = toggle.getAttribute('aria-expanded') !== 'true';
    setOpen(willOpen);

    if (!willOpen) {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      toggle.scrollIntoView({ block: 'nearest', behavior: reduceMotion ? 'auto' : 'smooth' });
    }
  });
}
