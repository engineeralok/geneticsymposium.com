document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    const heroSection = document.querySelector('.hero');
    const aboutSection = document.querySelector('.about');

    // navigation menu on mobile screens
    menuToggle.addEventListener('click', function () {
        navUl.classList.toggle('show');
    });

    //sqares in grid section
    // var squareSection = document.querySelector('.square-section');
    // var numberOfSquares = 1000; // You can adjust the number of squares
    // var gridSize = 10; // Number of squares in a row or column
    // var squareSize = 10;
    // var gap = 0; // Gap between squares

    // for (var i = 0; i < numberOfSquares; i++) {
    //     var row = Math.floor(i / gridSize);
    //     var col = i % gridSize;

    //     var square = document.createElement('div');
    //     square.className = 'square';
    //     square.style.left = col * (squareSize + gap) + 'px';
    //     square.style.top = row * (squareSize + gap) + 'px';
    //     squareSection.appendChild(square);
    // }

    var squareSection = document.querySelector('.square-section');
    var squareSize = 20;
    var gap = 0;
    
    var sectionWidth = squareSection.clientWidth;
    var sectionHeight = squareSection.clientHeight;
    
    var numberOfSquaresX = Math.floor(sectionWidth / (squareSize + gap));
    var numberOfSquaresY = Math.floor(sectionHeight / (squareSize + gap));
    var numberOfSquares = numberOfSquaresX * numberOfSquaresY;
    
    for (var i = 0; i < numberOfSquares; i++) {
        var row = Math.floor(i / numberOfSquaresX);
        var col = i % numberOfSquaresX;
    
        var square = document.createElement('div');
        square.className = 'square';
        square.style.left = col * (squareSize + gap) + 'px';
        square.style.top = row * (squareSize + gap) + 'px';
        squareSection.appendChild(square);
    }
    

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
            aboutParallaxContainer.style.transform = `translateY(-${(scrollPosition - aboutSection.offsetTop) * 0.1}px)`;
            aboutParallaxImage.style.transform = `translateY(-${scrollPosition * 0.1}px)`;
        }
    });

});

