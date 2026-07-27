import { initScheduleAccordion } from './schedule.js';
import { initTreasureHunt } from './treasure.js';

export function initSiteScripts() {
  initPageTop();
  initScheduleAccordion();
  initTreasureHunt();
}

/**
 * ページトップへ戻る。
 * 追従表示。1 画面ぶんスクロールしたら is-visible を付けて出す（CSS でフェード）。
 * scroll は passive + rAF で 1 フレーム 1 回に間引く。
 */
function initPageTop() {
  const button = document.querySelector('[data-pagetop]');
  if (!(button instanceof HTMLElement)) return;

  let ticking = false;
  const update = () => {
    ticking = false;
    button.classList.toggle('is-visible', window.scrollY > window.innerHeight);
  };

  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    },
    { passive: true },
  );
  update();

  button.addEventListener('click', () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });
}

initSiteScripts();
