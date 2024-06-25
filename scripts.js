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

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    nodes = [];
    for (let i = 0; i < numNodes; i++) {
        nodes.push(new Node());
    }
});

let nodes = [];
const numNodes = 100;
const nodeRadius = 2;
const maxLineLength = 150;

class Node {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
    }
}

function connectNodes() {
    for (let i = 0; i < numNodes; i++) {
        for (let j = i + 1; j < numNodes; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxLineLength) {
                ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / maxLineLength})`;
                ctx.beginPath();
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(nodes[j].x, nodes[j].y);
                ctx.stroke();
            }
        }
    }
}

for (let i = 0; i < numNodes; i++) {
    nodes.push(new Node());
}

function animate() {
    ctx.clearRect(0, 0, width, height);

    nodes.forEach(node => {
        node.update();
        node.draw();
    });

    connectNodes();

    requestAnimationFrame(animate);
}

animate();