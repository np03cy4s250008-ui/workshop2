// ================
// NAV MENU TOGGLE
// ================
const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  function toggleMenu() {
    // 1. Toggle the "open" class to show/hide links
    navLinks.classList.toggle('open');

    // 2. Update ARIA attribute and button symbol
    const isExpanded = navLinks.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isExpanded);
    menuButton.innerHTML = isExpanded ? '✕' : '☰';
  }

  menuButton.addEventListener('click', toggleMenu);

  // Optional: close menu when a link is clicked (mobile UX)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        toggleMenu();
      }
    });
  });
}

// =====================
// SCROLL PROGRESS BAR
// =====================
const scrollIndicator = document.getElementById('scroll-indicator');

if (scrollIndicator) {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollIndicator.style.width = scrolled + '%';
  });
}

// ===================
// CONTACT FORM LOGIC
// ===================
const contactForm = document.getElementById('contact-form');
const messageDiv = document.getElementById('form-message');

if (contactForm && messageDiv) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // stop page refresh

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
      messageDiv.textContent = 'Please fill out all required fields.';
      messageDiv.style.color = 'red';
      return;
    }

    // Very simple email check
    if (!emailInput.value.includes('@')) {
      messageDiv.textContent = 'Please enter a valid email address.';
      messageDiv.style.color = 'red';
      return;
    }

    // Success message
    messageDiv.textContent = 'Thank you for your message! I will be in touch shortly.';
    messageDiv.style.color = 'lightgreen';

    // Clear the form
    contactForm.reset();
  });
}

// ===============
// FOOTER YEAR
// ===============
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
