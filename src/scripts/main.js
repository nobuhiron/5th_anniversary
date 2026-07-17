import { initScheduleAccordion } from './schedule.js';
import { initTreasureHunt } from './treasure.js';

export function initSiteScripts() {
  initPageTop();
  initScheduleAccordion();
  initTreasureHunt();
}

/**
 * ページトップへ戻る。
 * カンプではフッター右上（前セクションとの境界にまたがる位置）に常時置かれるので、
 * スクロール量による表示切替は行わない。
 */
function initPageTop() {
  const button = document.querySelector('[data-pagetop]');
  if (!(button instanceof HTMLElement)) return;

  button.addEventListener('click', () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });
}

initSiteScripts();
