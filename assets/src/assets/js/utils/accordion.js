export default function () {
    const accordionBtns = document.getElementsByClassName('js-accordion-btn');
    const accordionPanels = document.getElementsByClassName('js-accordion-panel');

    accordionBtns && [...accordionBtns].forEach(acc => {
        acc.addEventListener('click', e => {
            e.preventDefault();

            e.target.classList.toggle("active");
            const panel = e.target.closest('.js-accordion').querySelector('.js-accordion-panel');

            for (let i = 0; i < accordionBtns.length; i++) {
                !accordionBtns[i].contains(e.target) && accordionBtns[i].classList.remove('active');
            }

            for (let i = 0; i < accordionPanels.length; i++) {
                accordionPanels[i].style.maxHeight = !accordionPanels[i].contains(panel) && null;
            }


            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });
}