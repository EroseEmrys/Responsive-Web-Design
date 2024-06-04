
const menuToggle = document.getElementById('mobile-menu');
const nav = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
    menuToggle.classList.toggle('active');
});
