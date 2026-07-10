/**
 * キャンペーンスケジュールの開閉。
 * コーディングルール「開くで詳細が開くように」。
 * 閉じているとき: ラベル「開く」+ 下向き chevron
 * 開いたとき    : ラベル「閉じる」+ 上向き chevron（CSS の [aria-expanded] で回転）
 */
export function initScheduleAccordion() {
  const toggle = document.querySelector('[data-schedule-toggle]');
  if (!(toggle instanceof HTMLElement)) return;

  const detailId = toggle.getAttribute('aria-controls');
  const detail = detailId ? document.getElementById(detailId) : null;
  const label = toggle.querySelector('[data-schedule-toggle-label]');
  if (!detail || !label) return;

  toggle.addEventListener('click', () => {
    const willOpen = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(willOpen));
    detail.hidden = !willOpen;
    label.textContent = willOpen ? '閉じる' : '開く';

    if (!willOpen) {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      toggle.scrollIntoView({ block: 'nearest', behavior: reduceMotion ? 'auto' : 'smooth' });
    }
  });
}
