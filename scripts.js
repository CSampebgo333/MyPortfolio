// Wait until the page is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Find the menu button
    const menuToggle = document.querySelector('.menu-toggle');
    // Find the navigation menu
    const nav = document.querySelector('nav ul');

    // When the menu button is clicked
    menuToggle.addEventListener('click', function () {
        // Toggle the 'open' class on the navigation menu
        nav.classList.toggle('open');
    });
});

// Add smooth scrolling when navigation links are clicked
document.querySelectorAll('nav a').forEach(anchor => {
    // For each link in the navigation
    anchor.addEventListener('click', function (e) {
        // Prevent the default action
        e.preventDefault();

        // Scroll smoothly to the section linked to
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Smooth scrolling effect
        });
    });
});