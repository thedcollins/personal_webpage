// script.js

document.addEventListener('DOMContentLoaded', function() {
  const contactLink = document.getElementById('contact-link');
  const contactSection = document.getElementById('contact');

  contactLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior

    // Toggle the 'show' class on the contact section
    if (contactSection.classList.contains('hidden')) {
      contactSection.classList.remove('hidden');
      contactSection.classList.add('show');
    } else {
      contactSection.classList.remove('show');
      contactSection.classList.add('hidden');
    }
  });
});