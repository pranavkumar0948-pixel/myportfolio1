// script.js
// Small JS helpers: mobile nav toggle and contact form behavior

// Toggle mobile nav
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
navToggle && navToggle.addEventListener('click', ()=>{
  if(nav.style.display === 'flex'){
    nav.style.display = '';
  } else {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '0.5rem';
  }
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Handle contact form submit: open user's email client with prefilled subject/body
const contactForm = document.getElementById('contact-form');
if(contactForm){
  contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    const email = 'pranavkumar0948@gmail.com';
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(message + '\n\n— ' + name);
    // Open the default mail client using mailto (works on most systems)
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  });
}

// Optional: close mobile nav when clicking a link (improves UX)
document.querySelectorAll('#nav a').forEach(a=>{
  a.addEventListener('click', ()=>{
    if(window.innerWidth <= 600 && nav){
      nav.style.display = 'none';
    }
  });
});