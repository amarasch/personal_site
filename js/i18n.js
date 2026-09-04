// ============ I18N (IT default in markup, EN dictionary below) ============
(function () {
  const STORAGE_KEY = 'site-lang';

  const en = {
    'meta-description': 'Portfolio and CV of Antonio Maraschiello, Web Developer with 5 years of experience.',
    'skip-link': 'Skip to main content',
    'menu-toggle-aria': 'Open menu',
    'menu-nav-aria': 'Main navigation',
    'menu-esperienza': 'Experience',
    'menu-competenze': 'Skills',
    'menu-progetti': 'Projects',
    'menu-approccio': 'Approach',
    'menu-hobby': 'Hobbies',
    'menu-contatti': 'Contact',

    'hero-statement': '<b>Curious</b> by nature. <b>Practical</b> by choice.',
    'hero-kicker': 'Open to new projects',
    'hero-word-1': 'Hi,',
    'hero-word-2': "I'm",
    'hero-role': 'Web Developer, 5 years of experience — from Trani, for anyone in the world. Corporate sites, e-commerce, custom web apps.',
    'hero-btn-contact': 'Contact me',

    'esp-title-serif': "Where I've",
    'esp-title-sans': 'worked.',
    'esp-sub': 'Five years of web development, from my first junior role to my most recent projects.',
    'exp1-period': '2021 — Present',
    'exp1-company': 'LOUD Agency SRL · Remote',
    'exp1-li1': "Responsible for the design and development of corporate and e-commerce websites, from front-end to back-end integration, supporting clients with UX/UI consulting and delivering intuitive, efficient and effective interfaces",
    'exp1-li2': "Technical lead for custom web application development, helping clients identify the best technical solution for their project and taking full ownership of the project lifecycle, ensuring agreed deadlines are met",
    'exp1-li3': "Responsible for the ongoing maintenance of the entire company portfolio (70+ projects), with decision-making autonomy on stability, security and performance, keeping the infrastructure efficient over time",
    'exp1-li4': "Direct management of landing pages and DEM campaigns for clients, guiding them toward the most effective graphic and technical solution for the project, with attention to loading performance",
    'exp1-li5': "Design and development of reusable templates for the Pharma sector, taking full responsibility for the production process and cutting delivery time by 60%",
    'exp2-li1': "Co-managed the client portfolio, directly overseeing the maintenance and updating of company websites",
    'exp2-li2': "Customized and developed e-learning websites with efficient, functional solutions",
    'exp2-li3': "Created and managed online training courses, ensuring a high-quality production process",

    'comp-title-serif': 'Tools I',
    'comp-title-sans': 'work with.',
    'comp-sub': 'Core stack and tools I use every day.',
    'skill-label-1': 'Languages',
    'skill-label-2': 'Platforms',
    'skill-label-3': 'Design',
    'skill-label-4': 'Tools',
    'skill-label-5': 'Spoken languages',
    'pill-more': '[more]',
    'lang-it-pill': 'Italian — native',
    'lang-en-pill': 'English — B2 (Cambridge certified)',
    'edu-title': 'Education',
    'edu-diploma': 'IT Technical Diploma',
    'about-title': 'More about me:',
    'about-1': 'Active Agesci (Italian Scouting) member since 2008, and for the past 5 years leader of a group of 30 kids',
    'about-2': "Full driving licence, own car",

    'proj-title-serif': "What I've",
    'proj-title-sans': 'built.',
    'proj-sub': 'Three demo projects of increasing complexity',
    'proj1-iframe-title': 'Cascara preview',
    'proj1-cap': 'Showcase · Low complexity',
    'proj1-desc': 'Showcase site for a micro-roastery: tells the story of the beans, tasting notes and a brewing guide, with SVG animations that accompany the reading.',
    'proj1-tag1': 'HTML/CSS',
    'tag-vanilla-js': 'Vanilla JS',
    'proj1-tag3': 'SVG animations',
    'proj2-iframe-title': 'Studio Meridian preview',
    'proj2-cap': 'Showcase · Medium complexity',
    'proj2-desc': 'Site for an architecture studio: project portfolio filterable by category, animated counters, testimonial carousel and contact form — all in vanilla JS.',
    'proj2-tag2': 'Dynamic filters',
    'proj2-tag3': 'Scroll animations',
    'proj3-iframe-title': 'SportHub preview',
    'proj3-cap': 'Dashboard · High complexity',
    'proj3-desc': 'Membership management tool for a multi-sport club: deadline and renewal tracking, a filterable, sortable and paginated member table, charts, modal CRUD and light/dark theme.',
    'proj3-tag2': 'In-memory CRUD',
    'proj3-tag3': 'Dashboard UI',
    'proj-open': 'Open project',

    'appr-title-serif': 'My',
    'appr-title-sans': 'approach.',
    'appr-sub': "Not just what I deliver, but how I get there.",
    'appr-word-1': 'Observe.',
    'appr-support-1': "I study the project's context, requirements and constraints before proposing any solution, so I never lose sight of the bigger picture.",
    'appr-word-2': 'Deduce.',
    'appr-support-2': 'I identify causes and priorities, weighing technical alternatives by impact, timeline and long-term sustainability.',
    'appr-word-3': 'Share.',
    'appr-support-3': 'I compare the chosen solution with the team, gathering feedback to validate it before presenting it to the client.',
    'appr-word-4': 'Act.',
    'appr-support-4': 'I implement the best solution, monitoring results all the way through to release.',

    'hobby-title-serif': 'Outside of',
    'hobby-title-sans': 'work.',
    'hobby-sub': 'What I do when I step away from the keyboard.',
    'hobby-1-name': 'Tech',
    'hobby-1-desc': "I try out new tools and languages outside of work hours, just to understand how they tick.",
    'hobby-2-name': 'Hiking',
    'hobby-2-desc': 'In the mountains, when I need to unplug and reset.',
    'hobby-3-name': 'Tennis',
    'hobby-3-desc': "A mix of coordination and mental focus. It helps me reset and start fresh.",
    'hobby-4-name': 'Video games',
    'hobby-4-desc': 'Stories, challenges, mechanics — another form of design worth studying.',

    'contact-title': "Let's talk.",
    'contact-sub': 'I always reply within 24-48 hours.',
    'contact-email-label': 'Email',
    'btn-copy': 'Copy',
    'btn-write': 'Write',
    'btn-download-cv': 'Download CV',

    'back-to-top-aria': 'Back to top',

    'modal-close-aria': 'Close',
    'modal-title': 'Hey, welcome 👋',
    'modal-p1': "If you're here, my CV did its job — thanks for stopping to take a closer look.",
    'modal-p2': "One thing before you dive in: this site and the projects inside it were built with AI (Claude, specifically) — not because I can't do it myself, but because it's the right tool to work better and faster. The AI handles the boring part. The part that matters is still mine.",
    'modal-p3': "Alright then — go explore.",
    'modal-ok': "Let's go",
  };

  const translations = { en };

  function getStoredLang() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function storeLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const attr = el.getAttribute('data-i18n-attr');

      if (el.__i18nOriginal === undefined) {
        el.__i18nOriginal = attr ? el.getAttribute(attr) : el.innerHTML;
      }

      if (lang === 'it') {
        if (attr) el.setAttribute(attr, el.__i18nOriginal);
        else el.innerHTML = el.__i18nOriginal;
      } else {
        const dict = translations[lang] || {};
        const value = dict[key];
        if (value != null) {
          if (attr) el.setAttribute(attr, value);
          else el.innerHTML = value;
        }
      }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
    });

    storeLang(lang);
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  document.addEventListener('DOMContentLoaded', () => {
    const initial = getStoredLang() === 'en' ? 'en' : 'it';
    if (initial === 'en') applyLanguage('en');

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        if (lang !== document.documentElement.lang) applyLanguage(lang);
      });
    });
  });

  window.i18nTypedLines = {
    it: [
      "sviluppo interfacce curate nei dettagli",
      "scrivo codice leggibile e testato",
      "uso strumenti AI per lavorare più in fretta",
      "risolvo problemi, non solo ticket"
    ],
    en: [
      "I build interfaces with an eye for detail",
      "I write readable, tested code",
      "I use AI tools to move faster",
      "I solve problems, not just tickets"
    ]
  };
})();
