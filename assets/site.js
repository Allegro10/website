// Shared behaviour for every page. Loaded with `defer` from the build:head region.

// Mobile navigation toggle.
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

if (toggle && nav) {
  const setOpen = (open) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Close' : 'Menu';
  };
  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false); toggle.focus(); }
  });
}

// Scroll reveal: content below the fold fades up as it enters the viewport.
// Applied by selector so pages need no extra markup. Content already on screen
// is left alone, so nothing flashes or hides if this script is slow or fails.
const revealTargets = '.section__intro, .section__head, .section__body, .cell, .row, .cta .wrapper';
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('IntersectionObserver' in window && !reduceMotion) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px' });

  document.querySelectorAll(revealTargets).forEach((el) => {
    if (el.parentElement.closest('.reveal')) return; // parent already animates
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    // Stagger siblings of the same kind (cards in a grid, rows in a list).
    const siblings = [...el.parentElement.children].filter((c) => c.classList[0] === el.classList[0]);
    el.style.setProperty('--i', Math.min(siblings.indexOf(el), 4));
    el.classList.add('reveal');
    observer.observe(el);
  });
}

// Any element with data-print opens the browser print dialog (used for the CV).
document.querySelectorAll('[data-print]').forEach((el) => el.addEventListener('click', () => window.print()));
