document.querySelectorAll('.song-cover').forEach(function (cover) {
    cover.addEventListener('click', function () {
        // Toggle visibility of overlay on click
        var overlay = cover.querySelector('.song-overlay');
        overlay.style.opacity = overlay.style.opacity === '1' ? '0' : '1';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var fadeIns = document.querySelectorAll('.section-h1');

    function checkPosition() {
        var windowHeight = window.innerHeight;
        fadeIns.forEach(function (fadeIn) {
            var position = fadeIn.getBoundingClientRect().top;
            if (position < windowHeight - 50) {
                fadeIn.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkPosition);
    checkPosition();
});