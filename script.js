
const hamburgerMenu = document.getElementById('hamburger-menu');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');


hamburgerMenu.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});


closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
});
