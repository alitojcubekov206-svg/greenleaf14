// auth.js — Registration, Login, Logout (LocalStorage)
// Designed for easy backend connection in the future

const AUTH_KEY = 'glg_users';
const SESSION_KEY = 'glg_user';

function getUsers() {
  return JSON.parse(localStorage.getItem(AUTH_KEY) || '[]');
}
function saveUsers(users) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(users));
}
function getCurrentUser() {
  return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
}
function setCurrentUser(user) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}
function clearCurrentUser() {
  localStorage.removeItem(SESSION_KEY);
}

/* ── Validation ── */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}
function isValidPassword(pw) {
  return pw.length >= 6;
}

/* ── Register ── */
function register(name, email, password) {
  const users = getUsers();
  if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
    return { ok: false, error: 'Этот email уже зарегистрирован' };
  }
  const user = {
    id: Date.now().toString(),
    name: name.trim(),
    email: email.trim().toLowerCase(),
    password, // In a real backend this would be hashed
    createdAt: new Date().toISOString(),
    wishlist: []
  };
  users.push(user);
  saveUsers(users);
  setCurrentUser({ id: user.id, name: user.name, email: user.email });
  return { ok: true };
}

/* ── Login ── */
function login(email, password) {
  const users = getUsers();
  const user = users.find(u => u.email.toLowerCase() === email.trim().toLowerCase() && u.password === password);
  if (!user) {
    return { ok: false, error: 'Неверный email или пароль' };
  }
  setCurrentUser({ id: user.id, name: user.name, email: user.email });
  return { ok: true };
}

/* ── Logout ── */
function logout() {
  clearCurrentUser();
  window.location.href = 'index.html';
}

/* ── Wishlist helpers ── */
function getWishlist() {
  const cur = getCurrentUser();
  if (!cur) return [];
  const users = getUsers();
  const user = users.find(u => u.id === cur.id);
  return user ? (user.wishlist || []) : [];
}
function toggleWishlist(productId) {
  const cur = getCurrentUser();
  if (!cur) {
    showNotif('Войдите в аккаунт, чтобы добавить в избранное', 'info');
    return false;
  }
  const users = getUsers();
  const idx = users.findIndex(u => u.id === cur.id);
  if (idx === -1) return false;
  const wl = users[idx].wishlist || [];
  const pos = wl.indexOf(productId);
  if (pos === -1) {
    wl.push(productId);
    showNotif('Добавлено в избранное ❤️', 'success');
  } else {
    wl.splice(pos, 1);
    showNotif('Удалено из избранного', 'info');
  }
  users[idx].wishlist = wl;
  saveUsers(users);
  return pos === -1; // true = was added
}
function isInWishlist(productId) {
  return getWishlist().includes(productId);
}

/* ── Auth forms init (login.html) ── */
document.addEventListener('DOMContentLoaded', () => {
  // Tab switching
  const tabs = document.querySelectorAll('.auth-tab');
  const contents = document.querySelectorAll('.auth-tab-content');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(`tab-${target}`)?.classList.add('active');
    });
  });

  // Switch tab via link
  document.querySelectorAll('[data-switchtab]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const target = el.dataset.switchtab;
      tabs.forEach(t => { t.classList.toggle('active', t.dataset.tab === target); });
      contents.forEach(c => { c.classList.toggle('active', c.id === `tab-${target}`); });
    });
  });

  // Password toggle
  document.querySelectorAll('.pass-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.previousElementSibling;
      if (!input) return;
      input.type = input.type === 'password' ? 'text' : 'password';
      btn.textContent = input.type === 'password' ? '👁️' : '🙈';
    });
  });

  // Register form
  const regForm = document.getElementById('register-form');
  if (regForm) {
    regForm.addEventListener('submit', e => {
      e.preventDefault();
      clearFormErrors(regForm);
      const name = document.getElementById('reg-name').value;
      const email = document.getElementById('reg-email').value;
      const pw = document.getElementById('reg-pw').value;
      const pw2 = document.getElementById('reg-pw2').value;
      let valid = true;
      if (!name.trim()) { showFieldError('reg-name', 'Введите имя'); valid = false; }
      if (!isValidEmail(email)) { showFieldError('reg-email', 'Неверный email'); valid = false; }
      if (!isValidPassword(pw)) { showFieldError('reg-pw', 'Минимум 6 символов'); valid = false; }
      if (pw !== pw2) { showFieldError('reg-pw2', 'Пароли не совпадают'); valid = false; }
      if (!valid) return;
      const result = register(name, email, pw);
      if (result.ok) {
        showNotif(`Добро пожаловать, ${name}! 🌿`, 'success');
        setTimeout(() => window.location.href = 'profile.html', 1000);
      } else {
        showFieldError('reg-email', result.error);
      }
    });
  }

  // Login form
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      clearFormErrors(loginForm);
      const email = document.getElementById('login-email').value;
      const pw = document.getElementById('login-pw').value;
      if (!isValidEmail(email)) { showFieldError('login-email', 'Неверный email'); return; }
      if (!pw) { showFieldError('login-pw', 'Введите пароль'); return; }
      const result = login(email, pw);
      if (result.ok) {
        showNotif('Вы успешно вошли! 👋', 'success');
        setTimeout(() => window.location.href = 'profile.html', 900);
      } else {
        showFieldError('login-email', result.error);
      }
    });
  }

  // Redirect if already logged in
  if ((regForm || loginForm) && getCurrentUser()) {
    window.location.href = 'profile.html';
  }
});

function showFieldError(fieldId, msg) {
  const field = document.getElementById(fieldId);
  if (field) field.classList.add('err');
  const errEl = field?.parentElement?.querySelector('.form-err') ||
                field?.closest('.form-group')?.querySelector('.form-err');
  if (errEl) { errEl.textContent = msg; errEl.classList.add('show'); }
}
function clearFormErrors(form) {
  form.querySelectorAll('.err').forEach(el => el.classList.remove('err'));
  form.querySelectorAll('.form-err.show').forEach(el => el.classList.remove('show'));
}
