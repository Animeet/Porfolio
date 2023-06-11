const hamburger = document.querySelector(".menu-toggle");
const navBar = document.querySelector("#navbar-default");
const navbarLinks = document.querySelectorAll('nav#navbar-default ul li a');

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
})

navbarLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default jump behavior

    const targetId = link.getAttribute('href'); // Get the target section's ID
    const targetSection = document.querySelector(targetId); // Get the target section element

    if (targetSection) {
      // Scroll to the target section with smooth behavior
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(form);

    // Send form data using fetch
    fetch(form.action, {
      method: form.method,
      body: formData
    })
    .then(response => {
      // Handle the response here if needed
      console.log('Form submitted successfully');
      // You can display a success message or perform any other desired action
    })
    .catch(error => {
      // Handle any errors that occur during form submission
      console.error('Form submission error:', error);
      // You can display an error message or perform any other desired action
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const popup = document.getElementById('popup');
  const closePopup = document.getElementById('closePopup');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show the popup
    popup.style.display = 'block';

    // Clear the form fields
    form.reset();

    // Start the gradual fade-out effect
    setTimeout(function() {
      popup.style.opacity = '0'; // Reduce opacity to 0
      setTimeout(function() {
        popup.style.display = 'none'; // Hide the popup
      }, 500); // Delay before hiding the popup completely (500ms = 0.5 seconds)
    }, 2000); // Delay before starting the fade-out effect (2000ms = 2 seconds)

    // Add an event listener to close the popup when the close button is clicked
    closePopup.addEventListener('click', function() {
      popup.style.display = 'none';
      popup.style.opacity = '1'; // Reset the opacity
    });
  });
});