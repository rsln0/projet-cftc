/* ===========================
   CFTC Paris UD75 - main.js
   =========================== */

/* ---- Navbar scroll effect ---- */
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ---- Mobile menu ---- */
const burger = document.querySelector('.nav-burger');
const navLinks = document.querySelector('.nav-links');
if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const spans = burger.querySelectorAll('span');
    burger.classList.toggle('active');
  });
  document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });
}

/* ---- Active nav link on scroll ---- */
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link[href^="#"]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => observer.observe(s));

/* ---- Countdown Timer ---- */
function updateCountdown() {
  const eventDate = new Date('2026-06-26T10:00:00');
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0) {
    document.getElementById('countdown-days')  && (document.getElementById('countdown-days').textContent  = '00');
    document.getElementById('countdown-hours') && (document.getElementById('countdown-hours').textContent = '00');
    document.getElementById('countdown-mins')  && (document.getElementById('countdown-mins').textContent  = '00');
    document.getElementById('countdown-secs')  && (document.getElementById('countdown-secs').textContent  = '00');
    return;
  }

  const days  = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins  = Math.floor((diff % 3600000) / 60000);
  const secs  = Math.floor((diff % 60000) / 1000);

  const pad = n => String(n).padStart(2, '0');
  if (document.getElementById('countdown-days'))  document.getElementById('countdown-days').textContent  = pad(days);
  if (document.getElementById('countdown-hours')) document.getElementById('countdown-hours').textContent = pad(hours);
  if (document.getElementById('countdown-mins'))  document.getElementById('countdown-mins').textContent  = pad(mins);
  if (document.getElementById('countdown-secs'))  document.getElementById('countdown-secs').textContent  = pad(secs);
}
updateCountdown();
setInterval(updateCountdown, 1000);

/* ---- Scroll animations ---- */
const animateEls = document.querySelectorAll('.animate-in');
const animObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      animObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
animateEls.forEach(el => animObserver.observe(el));

/* ---- Contact Form ---- */
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.textContent = 'Envoi en cours…';
    btn.disabled = true;

    setTimeout(() => {
      form.style.display = 'none';
      const success = document.getElementById('form-success');
      if (success) success.style.display = 'block';
      showToast('✅ Message envoyé avec succès !');
    }, 1200);
  });
}

/* ---- Toast notification ---- */
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span class="toast-icon">📬</span><span>${message}</span>`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

/* ---- Smooth scroll for anchor links ---- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navH = document.querySelector('.navbar')?.offsetHeight || 70;
      window.scrollTo({ top: target.offsetTop - navH - 16, behavior: 'smooth' });
      navLinks && navLinks.classList.remove('open');
    }
  });
});
