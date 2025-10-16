// Toggle Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Dark Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Scroll Animations + Skill Bar Animation
const fadeElements = document.querySelectorAll('.fade-in');
const skillBars = document.querySelectorAll('.progress');

function handleScroll() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) el.classList.add('visible');
  });

  // Animate skill bars
  const skillsSection = document.querySelector('.skills');
  const rect = skillsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 150) {
    skillBars.forEach(bar => bar.style.width = bar.classList.contains('html') ? '70%' :
                                           bar.classList.contains('css') ? '60%' :
                                           bar.classList.contains('js') ? '40%' :
                                           bar.classList.contains('python') ? '40%' :
                                           bar.classList.contains('java') ? '20%' : '0');
  }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);