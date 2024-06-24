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
        // Toggle the 'close' class on the menu button to change its appearance
        menuToggle.classList.toggle('close');
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

// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0; // Variable to store the last scroll position
    const aboutNameContainer = document.querySelector(".about-name-container");

    // Add an event listener to the window to detect scroll events
    window.addEventListener("scroll", function () {
        let st = window.pageYOffset || document.documentElement.scrollTop; // Get the current scroll position

        if (st > lastScrollTop) {
            // Downscroll
            aboutNameContainer.style.animationDirection = 'normal';
        } else {
            // Upscroll
            aboutNameContainer.style.animationDirection = 'reverse';
        }

        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);
});