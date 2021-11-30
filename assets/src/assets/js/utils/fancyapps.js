import {Fancybox} from "@fancyapps/ui";

export default function () {
    const closePopup = document.querySelectorAll('.js-close-popup');

    Fancybox.bind("[data-fancybox]", {
        dragToClose: false
    });

    closePopup.forEach(close => {
        close.addEventListener('click', e => {
           e.preventDefault();
            Fancybox.getInstance() && Fancybox.getInstance().close();
        });
    });
}