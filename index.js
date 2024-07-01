document.addEventListener('DOMContentLoaded', function () {
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

    // Existing fade-in functionality
    var fadeIns = document.querySelectorAll('.section-h1, .section-h2');

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
});
