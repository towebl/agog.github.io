let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
}

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn => {
    btn.onclick = () => {
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})
