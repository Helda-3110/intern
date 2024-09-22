// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark/Light Mode
const toggleSwitch = document.getElementById('toggle-switch');

toggleSwitch.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

// Form Validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("All fields are required.");
        e.preventDefault();
    } else {
        alert("Message sent!");
    }
});