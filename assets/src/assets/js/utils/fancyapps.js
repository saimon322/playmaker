import {Fancybox} from "@fancyapps/ui";

export default function () {
    const closePopup = document.querySelectorAll('.js-close-popup');
    const openPopup = document.querySelectorAll('[data-fancybox]');

    Fancybox.bind("[data-fancybox]", {
        dragToClose: false
    });

    closePopup.forEach(close => {
        close.addEventListener('click', e => {
           e.preventDefault();
            Fancybox.getInstance().close();
        });
    });

    openPopup.forEach(open => {
        open.addEventListener('click', () => {
            Fancybox.getInstance() && Fancybox.getInstance().close();
        });
    });
}