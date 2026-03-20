// ========== Scroll Reveal ==========
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px',
  }
);

revealElements.forEach((el) => revealObserver.observe(el));

// ========== Navbar scroll effect ==========
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ========== Smooth scroll for nav links ==========
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ========== Parallax hero on scroll ==========
const hero = document.getElementById('hero');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (scrolled < window.innerHeight) {
    const heroContent = hero.querySelector('.hero-content');
    heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    heroContent.style.opacity = 1 - scrolled / (window.innerHeight * 0.8);
  }
});

// ========== Active hero reveals on load ==========
window.addEventListener('DOMContentLoaded', () => {
  const heroReveals = hero.querySelectorAll('.reveal');
  heroReveals.forEach((el) => {
    // Small delay so the CSS transitions actually fire
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.classList.add('active');
      });
    });
  });
});
