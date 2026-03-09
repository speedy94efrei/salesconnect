/* ═══════════════════════════════════════
   SALESCONNECT — main.js
═══════════════════════════════════════ */

const CALENDLY_URL = 'https://calendly.com/salesconnect/30min';

// ── Calendly popup ──
function openCalendly(e) {
  if (e) e.preventDefault();
  Calendly.initPopupWidget({ url: CALENDLY_URL });
}

// ── Sticky nav ──
window.addEventListener('scroll', () => {
  const nav = document.getElementById('stickyNav');
  if (nav) nav.classList.toggle('visible', window.scrollY > window.innerHeight * 0.5);
});

// ── Mobile menu ──
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const burger = document.getElementById('burger');
  if (!menu) return;
  const isOpen = menu.classList.toggle('open');
  burger.textContent = isOpen ? '✕' : '☰';
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

// ── FAQ accordion ──
function toggleFaq(el) {
  const item = el.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ── Scroll reveal ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Close mobile menu on outside click ──
document.addEventListener('click', (e) => {
  const menu = document.getElementById('mobileMenu');
  const burger = document.getElementById('burger');
  if (menu && menu.classList.contains('open') && !menu.contains(e.target) && !burger.contains(e.target)) {
    toggleMenu();
  }
});
