const changer = document.getElementById('theme-changer');
const changerMobile = document.getElementById('theme-changer-mobile');
const html = document.documentElement;

changer.addEventListener('change', function() {
    html.toggleAttribute('data-theme-dark');
    changerMobile.checked = !changerMobile.checked;
});
