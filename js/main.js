const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ============ WORLD FLIP (cream hero -> olive rest) ============
const heroSection = document.getElementById('chi-sono');
if (heroSection) {
  const worldObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      document.body.classList.toggle('in-hero', entry.isIntersecting);
    });
  }, { threshold: .35 });
  worldObserver.observe(heroSection);
}

// ============ FULLSCREEN MENU ============
const menuToggle = document.getElementById('menuToggle');
const menuOverlay = document.getElementById('menuOverlay');
if (menuToggle && menuOverlay) {
  const firstLink = menuOverlay.querySelector('a');

  const openMenu = () => {
    menuOverlay.classList.add('show');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
    document.body.style.overflow = 'hidden';
    firstLink?.focus();
  };
  const closeMenu = () => {
    menuOverlay.classList.remove('show');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
    document.body.style.overflow = '';
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  });

  menuOverlay.querySelectorAll('[data-menu-link]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      closeMenu();
      const target = document.getElementById(link.getAttribute('href').slice(1));
      setTimeout(() => target?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 200);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuToggle.focus();
    }
  });
}

// ============ MAGNETIC CV BUTTON ============
const magnetCv = document.getElementById('magnetCv');
if (magnetCv && !prefersReduced) {
  magnetCv.addEventListener('pointermove', (e) => {
    const r = magnetCv.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.3;
    const y = (e.clientY - r.top - r.height / 2) * 0.3;
    magnetCv.style.transform = `translate(${x}px, ${y}px)`;
  });
  magnetCv.addEventListener('pointerleave', () => { magnetCv.style.transform = 'translate(0,0)'; });
}

// ============ HERO CURSOR GLOW ============
const heroGlow = document.getElementById('heroGlow');
if (heroGlow && heroSection && !prefersReduced) {
  heroSection.addEventListener('pointermove', (e) => {
    const r = heroSection.getBoundingClientRect();
    heroGlow.style.left = (e.clientX - r.left) + 'px';
    heroGlow.style.top = (e.clientY - r.top) + 'px';
  });
}

// ============ REVEAL ON SCROLL ============
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('in'); });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ============ TYPEWRITER EFFECT (hero) ============
const typedEl = document.getElementById('typedText');
if (typedEl) {
  const getLines = () => {
    const byLang = window.i18nTypedLines || {};
    return byLang[document.documentElement.lang] || byLang.it || [''];
  };
  if (prefersReduced) {
    typedEl.textContent = getLines()[0];
    document.addEventListener('langchange', () => { typedEl.textContent = getLines()[0]; });
  } else {
    let lineIndex = 0, charIndex = 0, deleting = false;
    function tick() {
      const lines = getLines();
      const current = lines[lineIndex % lines.length];
      if (!deleting) {
        charIndex++;
        typedEl.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) { deleting = true; setTimeout(tick, 1600); return; }
      } else {
        charIndex--;
        typedEl.textContent = current.slice(0, charIndex);
        if (charIndex === 0) { deleting = false; lineIndex = (lineIndex + 1) % lines.length; }
      }
      setTimeout(tick, deleting ? 28 : 46);
    }
    document.addEventListener('langchange', () => {
      lineIndex = 0; charIndex = 0; deleting = false; typedEl.textContent = '';
    });
    tick();
  }
}

// ============ TOAST ============
function showToast(msg) {
  const stack = document.getElementById('toastStack');
  if (!stack) return;
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  stack.appendChild(t);
  setTimeout(() => {
    t.style.opacity = '0';
    t.style.transition = 'opacity .3s';
    setTimeout(() => t.remove(), 300);
  }, 2400);
}

// ============ COPY EMAIL / PHONE ============
document.querySelectorAll('[data-copy]').forEach(el => {
  el.addEventListener('click', () => {
    const text = el.getAttribute('data-copy');
    const copiedLabel = document.documentElement.lang === 'en' ? 'Copied: ' : 'Copiato: ';
    navigator.clipboard?.writeText(text)
      .then(() => showToast(copiedLabel + text))
      .catch(() => showToast(text));
  });
});

// ============ BACK TO TOP ============
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 700);
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ============ WELCOME MODAL ============
const welcomeOverlay = document.getElementById('welcomeOverlay');
if (welcomeOverlay && !sessionStorage.getItem('welcomeSeen')) {
  const welcomeClose = document.getElementById('welcomeClose');

  const openModal = () => {
    welcomeOverlay.classList.add('show');
    welcomeClose?.focus();
  };
  const closeModal = () => welcomeOverlay.classList.remove('show');
  const dismissForGood = () => {
    sessionStorage.setItem('welcomeSeen', '1');
    closeModal();
  };

  setTimeout(openModal, 400);

  welcomeClose?.addEventListener('click', closeModal);
  document.getElementById('welcomeOk')?.addEventListener('click', dismissForGood);
  welcomeOverlay.addEventListener('click', (e) => {
    if (e.target === welcomeOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}
