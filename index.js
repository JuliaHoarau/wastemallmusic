document.querySelectorAll('.song-cover').forEach(function (cover) {
    cover.addEventListener('click', function () {
        // Toggle visibility of overlay on click
        var overlay = cover.querySelector('.song-overlay');
        overlay.style.opacity = overlay.style.opacity === '1' ? '0' : '1';
    });
});