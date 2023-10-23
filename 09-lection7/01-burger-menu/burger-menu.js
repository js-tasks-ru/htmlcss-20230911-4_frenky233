const menu = document.getElementById('burger-menu');
const menuClose = document.getElementById('burger-menu-close');
const menuOpen = document.getElementById('burger-menu-open');
const body = document.querySelector('BODY');

if (menuOpen) {
    menuOpen.addEventListener('click', function() {
        if (menu) {
            body.style.overflow = 'hidden';
            menu.setAttribute('data-open', '');
        }
    });
}

if (menuClose) {
    menuClose.addEventListener('click', function() {
        if (menu) {
            body.removeAttribute('style');
            menu.removeAttribute('data-open');
        }
    });
}
