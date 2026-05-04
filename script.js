const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const siteHeader = document.querySelector('.site-header');
const year = document.getElementById('year');
const orbA = document.querySelector('.orb-a');
const orbB = document.querySelector('.orb-b');
const languageToggleMetric = document.querySelector('.metric-toggle');
const languagePanel = document.getElementById('languages-panel');
const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');

const SCROLL_KEY = 'portfolio_scroll_y';
const THEME_KEY = 'portfolio_theme';
const LANG_KEY = 'portfolio_lang';
const DEFAULT_THEME = 'dark';
const DEFAULT_LANG = 'fr';

const i18n = {
  fr: {
    nav_experience: 'Expérience',
    nav_education: 'Formation',
    nav_contact: 'Contact',
    menu_toggle: 'Ouvrir le menu',
    theme_light: 'Mode clair',
    theme_dark: 'Mode sombre',
    hero_photo_alt: 'Portrait de Anh Tu Nguyen',
    hero_eyebrow: 'Candidate en alternance',
    hero_copy: "Etudiante en Master 2 Gestion de Production, Logistique, Achats. Recherche d'alternance rythme 2 semaines / 2 semaines.",
    hero_cta_exp: 'Voir expériences',
    hero_cta_contact: 'Me contacter',
    metric_internships: 'Stages professionnels',
    metric_languages: 'Langues parlées',
    languages_title: 'Langues',
    lang_fr: 'Français: niveau intermédiaire avancé (TCF 481/699)',
    lang_en: 'Anglais: courant (TOEIC 925/990)',
    lang_vi: 'Vietnamien: langue maternelle',
    skills_eyebrow: 'Compétences',
    skills_title: 'Mes compétences principales',
    skill_supply_title: 'Supply Chain',
    skill_supply_text: 'Planification de la production, gestion des stocks, pilotage des flux logistiques, approvisionnements et sourcing international.',
    skill_data_title: 'Analyse & Data',
    skill_data_text: 'Excel avancé, VBA, SQL, Power BI, analyse de données et prévision de la demande.',
    skill_tools_title: 'Outils',
    skill_tools_text: 'SAP S/4HANA, SAGE X3 et Pack Office pour le suivi opérationnel et le reporting.',
    exp_eyebrow: 'Expériences professionnelles',
    exp_title: "Stages en achats, gestion et développement d'applications",
    exp1_title: 'Stage assistante achats',
    exp1_date: 'Mars 2026 - Présent',
    exp1_b1: "Sourcing de fournisseurs à l'international",
    exp1_b2: 'Analyse et comparaison des offres fournisseurs',
    exp1_b3: 'Mise à jour et fiabilisation des bases de données fournisseurs',
    exp1_b4: "Suivi des commandes d'achats",
    exp1_b5: "Participation à l'amélioration des processus achats et sourcing",
    exp2_title: "Stage développement d'application de gestion d'événements sportifs",
    exp2_date: 'Février 2023 - Août 2023',
    exp2_b1: "Conception et développement d'une application de gestion d'événements sportifs",
    exp2_b2: 'Gestion de projet et collaboration',
    exp2_b3: "Optimisation de l'interface utilisateur et des performances de l'application",
    exp3_title: "Stage développement d'une plateforme e-learning",
    exp3_date: 'Mai 2022 - Août 2022',
    exp3_b1: 'Conception d\'une plateforme de vente de cours en ligne intégrant la gestion des clients et commandes',
    exp3_b2: 'Mise en place d\'un back-office pour la gestion des utilisateurs, contenus, produits et commandes',
    exp3_b3: "Développement du front-end de l'application",
    edu_eyebrow: 'Formations',
    edu_title: 'Parcours ingénierie logistique et génie des systèmes industriels',
    contact_eyebrow: 'Contact & compétences',
    contact_title: 'Disponible pour une alternance en achats et supply chain',
    contact_skills: '<strong>Compétences:</strong> Supply chain, analyse de données, SAP S/4HANA, SAGE X3, Pack Office.',
    contact_languages: '<strong>Langues:</strong> Français (intermédiaire avancé), Anglais (courant), Vietnamien (langue maternelle).'
  },
  en: {
    nav_experience: 'Experience',
    nav_education: 'Education',
    nav_contact: 'Contact',
    menu_toggle: 'Open menu',
    theme_light: 'Light mode',
    theme_dark: 'Dark mode',
    hero_photo_alt: 'Portrait of Anh Tu Nguyen',
    hero_eyebrow: 'Work-study candidate',
    hero_copy: 'Master 2 student in Production Management, Logistics, and Purchasing. Looking for a work-study role with a 2-weeks/2-weeks schedule.',
    hero_cta_exp: 'View experience',
    hero_cta_contact: 'Contact me',
    metric_internships: 'Professional internships',
    metric_languages: 'Spoken languages',
    languages_title: 'Languages',
    lang_fr: 'French: upper-intermediate (TCF 481/699)',
    lang_en: 'English: fluent (TOEIC 925/990)',
    lang_vi: 'Vietnamese: native language',
    skills_eyebrow: 'Skills',
    skills_title: 'My key skills',
    skill_supply_title: 'Supply Chain',
    skill_supply_text: 'Production planning, stock management, logistics flow coordination, procurement, and international sourcing.',
    skill_data_title: 'Analysis & Data',
    skill_data_text: 'Advanced Excel, VBA, SQL, Power BI, data analysis, and demand forecasting.',
    skill_tools_title: 'Tools',
    skill_tools_text: 'SAP S/4HANA, SAGE X3, and Microsoft Office for operations and reporting.',
    exp_eyebrow: 'Professional experience',
    exp_title: 'Internships in purchasing, management, and application development',
    exp1_title: 'Purchasing assistant internship',
    exp1_date: 'March 2026 - Present',
    exp1_b1: 'International supplier sourcing',
    exp1_b2: 'Supplier offer analysis and comparison',
    exp1_b3: 'Supplier database updates and data quality improvements',
    exp1_b4: 'Purchase order follow-up',
    exp1_b5: 'Contribution to sourcing and purchasing process improvements',
    exp2_title: 'Internship in sports event management application development',
    exp2_date: 'February 2023 - August 2023',
    exp2_b1: 'Design and development of a sports event management application',
    exp2_b2: 'Project management and collaboration',
    exp2_b3: 'UI and application performance optimization',
    exp3_title: 'E-learning platform development internship',
    exp3_date: 'May 2022 - August 2022',
    exp3_b1: 'Design of an online course sales platform with customer and order management',
    exp3_b2: 'Back-office setup for users, content, products, and orders management',
    exp3_b3: 'Front-end development of the application',
    edu_eyebrow: 'Education',
    edu_title: 'Academic path in logistics engineering and industrial systems engineering',
    contact_eyebrow: 'Contact & skills',
    contact_title: 'Available for a work-study position in purchasing and supply chain',
    contact_skills: '<strong>Skills:</strong> Supply chain, data analysis, SAP S/4HANA, SAGE X3, Microsoft Office.',
    contact_languages: '<strong>Languages:</strong> French (upper-intermediate), English (fluent), Vietnamese (native language).'
  }
};

if (year) {
  year.textContent = new Date().getFullYear();
}

const getStoredTheme = () => localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
const getStoredLang = () => localStorage.getItem(LANG_KEY) || DEFAULT_LANG;

const icons = {
  moon: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><path d="M14.9 2.3a8.9 8.9 0 1 0 6.8 13.7 9.3 9.3 0 0 1-3.5.7c-5.1 0-9.3-4.2-9.3-9.3 0-2.1.7-4 2-5.6z" fill="currentColor"/></svg>',
  sun: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="4.2" fill="currentColor"/><path d="M12 1.8v3.1M12 19.1v3.1M1.8 12h3.1M19.1 12h3.1M4.3 4.3l2.2 2.2M17.5 17.5l2.2 2.2M19.7 4.3l-2.2 2.2M6.5 17.5l-2.2 2.2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  flagFr: '<span aria-hidden="true">🇫🇷</span>',
  flagGb: '<span aria-hidden="true">🇬🇧</span>'
};

const renderControlButtons = () => {
  const theme = getStoredTheme();
  const lang = getStoredLang();
  const isDark = theme !== 'light';

  if (themeToggle) {
    themeToggle.innerHTML = isDark ? icons.sun : icons.moon;
    themeToggle.setAttribute('title', isDark ? i18n[lang].theme_light : i18n[lang].theme_dark);
    themeToggle.setAttribute('aria-label', isDark ? i18n[lang].theme_light : i18n[lang].theme_dark);
  }

  if (langToggle) {
    langToggle.innerHTML = lang === 'fr' ? icons.flagGb : icons.flagFr;
    langToggle.setAttribute('title', lang === 'fr' ? 'Switch to English' : 'Passer en français');
    langToggle.setAttribute('aria-label', lang === 'fr' ? 'Switch to English' : 'Passer en français');
  }
};

const applyTheme = (theme) => {
  const isDark = theme !== 'light';
  document.body.classList.toggle('theme-dark', isDark);
  document.body.classList.toggle('theme-light', !isDark);
  renderControlButtons();
};

const applyLanguage = (lang) => {
  const currentLang = i18n[lang] ? lang : DEFAULT_LANG;
  document.documentElement.lang = currentLang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = i18n[currentLang][key];
    if (typeof value !== 'undefined') {
      if (value.includes('<strong>')) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    }
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt');
    const value = i18n[currentLang][key];
    if (typeof value !== 'undefined') el.setAttribute('alt', value);
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria-label');
    const value = i18n[currentLang][key];
    if (typeof value !== 'undefined') el.setAttribute('aria-label', value);
  });

  renderControlButtons();
  applyTheme(getStoredTheme());
};

applyTheme(getStoredTheme());
applyLanguage(getStoredLang());

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = getStoredTheme() === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, nextTheme);
    applyTheme(nextTheme);
  });
}

if (langToggle) {
  langToggle.addEventListener('click', () => {
    const nextLang = getStoredLang() === 'fr' ? 'en' : 'fr';
    localStorage.setItem(LANG_KEY, nextLang);
    applyLanguage(nextLang);
  });
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

if (languageToggleMetric && languagePanel) {
  languageToggleMetric.addEventListener('click', () => {
    const isExpanded = languageToggleMetric.getAttribute('aria-expanded') === 'true';
    languageToggleMetric.setAttribute('aria-expanded', String(!isExpanded));
    languagePanel.hidden = isExpanded;

    if (!isExpanded) {
      languagePanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
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
