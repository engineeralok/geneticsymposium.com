document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    // Toggle the navigation menu on mobile screens
    menuToggle.addEventListener('click', function () {
        navUl.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const heroSection = document.querySelector('.hero');
    const animatedText = document.querySelector('.animated-text');

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;

        if (scrollPosition > heroSection.offsetTop - window.innerHeight / 2) {
            heroSection.classList.add('scrolled');
        } else {
            heroSection.classList.remove('scrolled');
        }
    });
});

// Get the parallax image element
const parallaxImage = document.querySelector('.parallax-image');

// Listen for the scroll event
window.addEventListener('scroll', function () {
    // Get the scroll position
    const scrollPosition = window.scrollY;

    // Update the transform property of the parallax image based on the scroll position
    parallaxImage.style.transform = `translateY(-${scrollPosition * 0.5}px)`;
});
