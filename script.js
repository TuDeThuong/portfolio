const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const siteHeader = document.querySelector('.site-header');
const year = document.getElementById('year');
const orbA = document.querySelector('.orb-a');
const orbB = document.querySelector('.orb-b');
const SCROLL_KEY = 'portfolio_scroll_y';

if (year) {
  year.textContent = new Date().getFullYear();
}

const INTRO_MIN_MS = 1500;
const introStart = performance.now();
const savedScrollY = Number(sessionStorage.getItem(SCROLL_KEY) || 0);
const updateHeaderState = () => {
  if (!siteHeader) return;
  siteHeader.classList.toggle('minimized', window.scrollY > 70);
};

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('beforeunload', () => {
  sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
});

window.addEventListener('load', () => {
  const elapsed = performance.now() - introStart;
  const wait = Math.max(0, INTRO_MIN_MS - elapsed);
  window.setTimeout(() => {
    document.body.classList.remove('is-loading');
    if (savedScrollY > 0) {
      window.scrollTo(0, savedScrollY);
    }
    updateHeaderState();
  }, wait);
});

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
}

if (siteHeader) {
  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, { passive: true });
}

if (orbA && orbB) {
  let boost = 0;
  let lastY = window.scrollY;

  const makeOrbState = (el, speedX, speedY, scale) => ({
    el,
    x: Math.random() * (window.innerWidth * 0.7),
    y: Math.random() * (window.innerHeight * 0.7),
    baseVx: speedX,
    baseVy: speedY,
    dirX: Math.sign(speedX) || 1,
    dirY: Math.sign(speedY) || 1,
    scale
  });

  const orbs = [
    makeOrbState(orbA, 0.34, 0.24, 1.05),
    makeOrbState(orbB, -0.28, 0.2, 0.95)
  ];

  window.addEventListener('scroll', () => {
    const currentY = window.scrollY;
    const delta = currentY - lastY;
    if (delta > 0) {
      boost = Math.min(2.4, boost + delta * 0.0025);
    }
    lastY = currentY;
  }, { passive: true });

  window.addEventListener('resize', () => {
    orbs.forEach((orb) => {
      orb.x = Math.min(orb.x, window.innerWidth - 120);
      orb.y = Math.min(orb.y, window.innerHeight - 120);
    });
  }, { passive: true });

  const animateOrbs = () => {
    boost *= 0.94;
    const speedFactor = 1 + boost;
    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 120;

    orbs.forEach((orb) => {
      const vx = Math.abs(orb.baseVx) * orb.dirX * speedFactor;
      const vy = Math.abs(orb.baseVy) * orb.dirY * speedFactor;
      orb.x += vx;
      orb.y += vy;

      if (orb.x < -160 || orb.x > maxX) orb.dirX *= -1;
      if (orb.y < -160 || orb.y > maxY) orb.dirY *= -1;

      orb.el.style.transform = `translate3d(${orb.x}px, ${orb.y}px, 0) scale(${orb.scale})`;
    });

    requestAnimationFrame(animateOrbs);
  };

  animateOrbs();
}

const transitionLinks = document.querySelectorAll('a[href$=".html"]');

transitionLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    const current = window.location.pathname.split('/').pop() || 'index.html';
    if (!href || href === current) return;
    if (link.target === '_blank' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    document.body.classList.add('is-leaving');
    window.setTimeout(() => {
      window.location.href = href;
    }, 520);
  });
});
