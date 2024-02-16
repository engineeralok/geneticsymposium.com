document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    const heroSection = document.querySelector('.hero');
    const aboutSection = document.querySelector('.about');

    // navigation menu on mobile screens
    menuToggle.addEventListener('click', function () {
        navUl.classList.toggle('show');
    });

    //  parallax effect to hero section
    const parallaxImage = document.querySelector('.parallax-image');
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        parallaxImage.style.transform = `translateY(-${scrollPosition * 0.5}px)`;
    });

    // parallax effect to about section
    const aboutParallaxContainer = document.querySelector('.about-parallax-container');
    const aboutParallaxImage = document.querySelector('.about-parallax-image');
    const aboutParallaxHeader = document.querySelector('.about-parallax-header');
    const aboutParallaxFooter = document.querySelector('.about-parallax-footer');

    let hasReachedAboutSection = false;

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;


        if (scrollPosition > aboutSection.offsetTop - window.innerHeight / 2 && !hasReachedAboutSection) {
            hasReachedAboutSection = true;


            heroSection.classList.add('scrolled');
        }


        if (hasReachedAboutSection) {

            if (scrollPosition > aboutSection.offsetTop - window.innerHeight / 2) {
                aboutSection.classList.add('scrolled');
            } else {
                aboutSection.classList.remove('scrolled');
            }

            // parallax effect to about section 
            aboutParallaxContainer.style.transform = `translateY(-${(scrollPosition - aboutSection.offsetTop) * 0.5}px)`;
            aboutParallaxImage.style.transform = `translateY(-${scrollPosition * 0.1}px)`;
        }
    });
});

