// ===== MENU HAMBURGER =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Fermer le menu au clic sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== HEADER SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 2px 20px rgba(230, 57, 70, 0.3)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// ===== ANNÉE DYNAMIQUE DANS LE FOOTER =====
const footerYear = document.querySelector('footer p');
if (footerYear) {
  const currentYear = new Date().getFullYear();
  footerYear.innerHTML = `&copy; ${currentYear} Jordy Biaya. Tous droits réservés.`;
}