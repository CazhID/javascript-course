function checkAuth() {
  const currentPage = location.pathname.split('/').pop();
  const loggedInUser = localStorage.getItem('loggedInUser');

  if (loggedInUser) {
    if (
      currentPage === 'login.html' ||
      currentPage === 'register.html' ||
      currentPage === ''
    ) {
      location.href = 'dashboard.html';
    }
  } else {
    if (currentPage === 'dashboard.html') {
      location.href = 'login.html';
    }
  }
}

function handleRegister(e) {
  e.preventDefault();

  const username = document.getElementById('regUsername').value.trim();
  const password = document.getElementById('regPassword').value;

  if (!username || !password) {
    alert('Semua field harus diisi!');
    return;
  }

  let users = JSON.parse(localStorage.getItem('users')) || [];

  if (users.some((user) => user.username === username)) {
    alert('Username sudah terdaftar!');
    return;
  }

  users.push({ username, password });
  localStorage.setItem('users', JSON.stringify(users));
  alert('Registrasi berhasil! Silakan login.');
  location.href = 'login.html';
}

function handleLogin(e) {
  e.preventDefault();

  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value;

  let users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(
    (user) => user.username === username && user.password === password,
  );

  if (user) {
    localStorage.setItem('loggedInUser', username);
    location.href = 'dashboard.html';
  } else {
    alert('Username atau password salah!');
  }
}

function handleDashboard() {
  const username = localStorage.getItem('loggedInUser');
  if (username) {
    const msg = document.getElementById('welcomeMsg');
    if (msg) {
      msg.textContent = `Halo, ${username}!`;
    }

    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', function () {
        localStorage.removeItem('loggedInUser');
        location.href = 'login.html';
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  checkAuth();

  if (document.getElementById('registerForm')) {
    document
      .getElementById('registerForm')
      .addEventListener('submit', handleRegister);
  }

  if (document.getElementById('loginForm')) {
    document
      .getElementById('loginForm')
      .addEventListener('submit', handleLogin);
  }

  if (location.pathname.includes('dashboard.html')) {
    handleDashboard();
  }
});
