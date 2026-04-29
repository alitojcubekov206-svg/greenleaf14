// app.js — Shared utilities, nav state, notifications, loader

const IG_URL = 'https://www.instagram.com/greenleaf_bishkek14';
const IG_HANDLE = '@greenleaf_bishkek14';

/* ── Notifications ── */
function showNotif(message, type = 'success', duration = 3200) {
  let container = document.querySelector('.notif-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'notif-container';
    document.body.appendChild(container);
  }
  const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
  const el = document.createElement('div');
  el.className = `notif ${type}`;
  el.innerHTML = `<span class="notif-icon">${icons[type] || '✅'}</span><span>${message}</span>`;
  container.appendChild(el);
  setTimeout(() => {
    el.classList.add('notif-out');
    setTimeout(() => el.remove(), 320);
  }, duration);
}

/* ── Loader ── */
function showLoader() {
  let overlay = document.getElementById('loader-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'loader-overlay';
    overlay.className = 'loader-overlay';
    overlay.innerHTML = `<div class="spinner"></div><p class="spinner-text">Загружаем...</p>`;
    document.body.appendChild(overlay);
  }
  overlay.classList.remove('hidden');
}
function hideLoader() {
  const overlay = document.getElementById('loader-overlay');
  if (overlay) overlay.classList.add('hidden');
}

/* ── Navbar state ── */
function updateNavAuth() {
  const user = JSON.parse(localStorage.getItem('glg_user') || 'null');
  const guestActions = document.getElementById('nav-guest');
  const userActions = document.getElementById('nav-user-area');
  const userNameEl = document.getElementById('nav-username');

  if (user) {
    if (guestActions) guestActions.classList.add('hidden');
    if (userActions) userActions.classList.remove('hidden');
    if (userNameEl) userNameEl.textContent = user.name || user.email.split('@')[0];
    const avatar = document.getElementById('nav-avatar-char');
    if (avatar) avatar.textContent = (user.name || user.email)[0].toUpperCase();
  } else {
    if (guestActions) guestActions.classList.remove('hidden');
    if (userActions) userActions.classList.add('hidden');
  }
}

/* ── Active nav link ── */
function setActiveNavLink() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
}

/* ── Mobile menu toggle ── */
function initMobileMenu() {
  const btn = document.getElementById('hamburger');
  const links = document.querySelector('.nav-links');
  if (!btn || !links) return;
  btn.addEventListener('click', () => {
    links.classList.toggle('open');
    btn.classList.toggle('open');
  });
  // Close on outside click
  document.addEventListener('click', e => {
    if (!btn.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove('open');
    }
  });
}

/* ── Nav search redirect ── */
function initNavSearch() {
  const input = document.getElementById('nav-search-input');
  if (!input) return;
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && input.value.trim()) {
      window.location.href = `catalog.html?q=${encodeURIComponent(input.value.trim())}`;
    }
  });
}

/* ── Cart utilities (shared across all pages) ── */
const CART_KEY_GLOBAL = 'glg_cart';

function addToCartFromCard(productId) {
  const cart = JSON.parse(localStorage.getItem(CART_KEY_GLOBAL) || '[]');
  const existing = cart.find(x => x.id === productId);
  if (existing) existing.qty++;
  else cart.push({ id: productId, qty: 1 });
  localStorage.setItem(CART_KEY_GLOBAL, JSON.stringify(cart));
  showNotif('Добавлено в корзину 🛒', 'success');
}

/* ── Format price ── */
function formatPrice(price) {
  return price.toLocaleString('ru-KG') + ' сом';
}

/* ── Init (runs on every page) ── */
document.addEventListener('DOMContentLoaded', () => {
  showLoader();
  setTimeout(hideLoader, 480);
  updateNavAuth();
  setActiveNavLink();
  initMobileMenu();
  initNavSearch();
});

