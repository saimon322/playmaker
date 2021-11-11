export default function () {
    const bp1200 = window.matchMedia('(min-width: 1200px)');
    const openMenu = document.querySelector('.js-open-menu');
    const closeMenu = document.querySelector('.js-close-menu');
    const menu = document.querySelector('.js-menu');
    const menuLayout = document.querySelector('.js-layout');

    const toggleMenuClass = (bp) => {
        if (bp.matches) {
            menu.classList.contains('dark') && menu.classList.remove('dark');
            menu.classList.contains('shown') && menu.classList.remove('shown');
            menuLayout.classList.contains('mobile') && menuLayout.classList.remove('mobile');
            menuLayout.classList.contains('active') && menuLayout.classList.remove('active');
        } else {
            !menu.classList.contains('dark') && menu.classList.add('dark');
            !menuLayout.classList.contains('mobile') && menuLayout.classList.add('mobile');
        }
    }

    const handleCloseMenu = (e) => {
        e.preventDefault();
        menu.classList.remove('shown');
        menuLayout.classList.remove('active');
    }

    openMenu && openMenu.addEventListener('click', e => {
       e.preventDefault();
        menu.classList.add('shown');
        menuLayout.classList.add('active');
    });

    closeMenu && closeMenu.addEventListener('click', handleCloseMenu);
    menuLayout && menuLayout.addEventListener('click', handleCloseMenu);

    menu && toggleMenuClass(bp1200);
    bp1200.onchange = menu && toggleMenuClass;
}