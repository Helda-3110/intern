// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      // Adjusting for header offset if necessary
      const target = document.querySelector(this.getAttribute('href'));
      const headerOffset = 60; // Adjust this value based on your fixed header height
      const elementPosition = target.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });
  
  // Form Validation
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        return;
      }
  
      // If you'd like to display a success message
      alert('Form submitted successfully!');
  
      // Here you could send the form data to a server if needed
      // Example: fetch('/submit-form', { method: 'POST', body: new FormData(contactForm) });
    });
  }
  
  // Bonus Enhancements
  // Animation on Scroll (assuming 'animate' class has defined animations in your CSS)
  document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight;
  
      if (scrollPosition > sectionTop + sectionHeight / 2) {
        section.classList.add('animate');
      } else {
        section.classList.remove('animate');
      }
    });
  });
  
  // Dark/Light Mode
  const toggleSwitch = document.getElementById('toggle-switch');
  
  if (toggleSwitch) {
    toggleSwitch.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
    });
  }
  
  // Google Analytics Integration
  // Replace with your actual Google Analytics tracking ID
  const trackingId = 'UA-XXXXX-X';
  
  (function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
  
  ga('create', trackingId, 'auto');
  ga('send', 'pageview');
  
  // Blog Section (if you have one)
  // Add JavaScript code for any dynamic blog section functionality here.  