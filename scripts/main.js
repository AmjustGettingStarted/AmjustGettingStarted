const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Simple scroll reveal
const revealEls = [...document.querySelectorAll('[data-reveal]')];
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
revealEls.forEach((el) => io.observe(el));

// Mobile nav (progressive enhancement)
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    const next = !open;
    toggle.setAttribute('aria-expanded', String(next));
    links.classList.toggle('open', next);
    document.body.classList.toggle('menu-open', next);
  });
  // Close on link click (mobile)
  links.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
    links.classList.remove('open');
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

// Motion preferences
const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Tilt on project cards
if (!reduceMotion) {
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card) => {
    const rect = () => card.getBoundingClientRect();
    card.addEventListener('mousemove', (e) => {
      const r = rect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// Sticky header scrolled state
const header = document.querySelector('.site-header');
const setHeaderState = () => {
  if (!header) return;
  if (window.scrollY > 6) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

// Interactive skill chips (ripple + toggle)
document.querySelectorAll('.chips button').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    btn.classList.toggle('active');
    if (reduceMotion) return;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.2;
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    ripple.style.width = ripple.style.height = `${size}px`;
    btn.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  });
});

// Scrollspy for nav links
const sections = [...document.querySelectorAll('section.section')];
const navLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
if (sections.length && navLinks.length) {
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach((a) => {
        const active = a.getAttribute('href') === `#${id}`;
        a.classList.toggle('active', active);
        if (active) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '0px 0px -70% 0px', threshold: 0.1 });
  sections.forEach((s) => spy.observe(s));
}
