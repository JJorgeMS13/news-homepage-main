const btnMenuToggle = document.getElementById('btnmenu-toggle');
const navContainer = document.getElementById('nav__container');
const iconMenu = document.getElementById('iconMenu');

btnMenuToggle.addEventListener('click', () => {
    const isExpanded = btnMenuToggle.getAttribute('aria-expanded') === 'true';
    navContainer.classList.toggle('active');

    btnMenuToggle.setAttribute('aria-expanded', !isExpanded);
    btnMenuToggle.style.width = '3rem';

    if (isExpanded) {
        iconMenu.src = './assets/images/icon-menu.svg';
        btnMenuToggle.style.width = '4rem';
        btnMenuToggle.style.position = 'static';
    } else {
        iconMenu.src = './assets/images/icon-menu-close.svg';
        btnMenuToggle.style.position = 'fixed';
    }
});