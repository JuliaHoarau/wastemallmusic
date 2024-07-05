document.addEventListener('DOMContentLoaded', function () {
    // Hide loading overlay when page is fully loaded
    var loadingOverlay = document.querySelector('.loading-overlay');
    if (loadingOverlay) {
        window.addEventListener('load', function () {
            loadingOverlay.style.display = 'none';
        });
    }

    // Logo animation
    var logo = document.getElementById('header-logo');
    var headerH1 = document.getElementById('latest-release-h1');

    if (logo) {
        logo.classList.add('animate');
    }

    // Add animation to h1 after the logo animation
    setTimeout(function () {
        if (headerH1) {
            headerH1.classList.add('animate');
        }
    }, 1000); // Adjust this delay (in milliseconds) as needed

    // Existing fade-in functionality for section headers
    var fadeIns = document.querySelectorAll('.section-h1, .section-h2, .contact-lines');

    function checkPosition() {
        var windowHeight = window.innerHeight;
        fadeIns.forEach(function (fadeIn) {
            var position = fadeIn.getBoundingClientRect().top;
            if (position < windowHeight - 100) {
                fadeIn.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkPosition);
    checkPosition();

    // IntersectionObserver for song-cover elements
    var songCovers = document.querySelectorAll('.song-cover');
    var musicSection = document.getElementById('music');

    var observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                songCovers.forEach(function (songCover, index) {
                    setTimeout(function () {
                        songCover.classList.add('visible');
                    }, index * 500); // Stagger the animations by 500ms
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (musicSection) {
        observer.observe(musicSection);
    }
});
