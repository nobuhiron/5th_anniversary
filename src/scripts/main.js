import { initScheduleAccordion } from './schedule.js';
import { initTreasureHunt } from './treasure.js';

export function initSiteScripts() {
  initPageTop();
  initScheduleAccordion();
  initTreasureHunt();
}

function initPageTop() {
  const button = document.querySelector('[data-pagetop]');
  if (!(button instanceof HTMLElement)) return;

  const showThreshold = 600;

  const updateVisibility = () => {
    button.classList.toggle('is-visible', window.scrollY > showThreshold);
  };

  let ticking = false;
  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      ticking = false;
      updateVisibility();
    });
  };

  button.addEventListener('click', () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  requestUpdate();
}

initSiteScripts();
