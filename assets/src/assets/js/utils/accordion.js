export default function () {
    const accordionBtns = document.getElementsByClassName('js-accordion-btn');
    const accordionPanels = document.getElementsByClassName('js-accordion-panel');

    accordionBtns && [...accordionBtns].forEach(acc => {
        acc.addEventListener('click', e => {
            e.preventDefault();

            e.target.classList.toggle("active");
            const panel = e.target.closest('.js-accordion').querySelector('.js-accordion-panel');

            if (e.target.closest('.comments__block')) {
                e.target.textContent = e.target.textContent === 'Развернуть' ? 'Свернуть' : 'Развернуть';
            }

            if (e.target.closest('.card__wrapper')) {
                e.target.textContent = e.target.textContent === 'Смотреть результаты' ? 'Свернуть' : 'Смотреть результаты';
            }

            for (let i = 0; i < accordionBtns.length; i++) {
                !accordionBtns[i].contains(e.target) && accordionBtns[i].classList.remove('active');

                if (accordionBtns[i].closest('.comments__block') && !accordionBtns[i].contains(e.target)) {
                    accordionBtns[i].textContent = 'Развернуть';
                }

                if (accordionBtns[i].closest('.card__wrapper') && !accordionBtns[i].contains(e.target)) {
                    accordionBtns[i].textContent = 'Смотреть результаты';
                }
            }

            for (let i = 0; i < accordionPanels.length; i++) {
                accordionPanels[i].style.maxHeight = !accordionPanels[i].contains(panel) && null;
            }

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 1 + "px";
            }
        });
    });
}