export default function () {
    const tabsLinks = document.getElementsByClassName('js-tab-link');
    const tabsPanels = document.getElementsByClassName('js-tab-panel');
    const sidebarForm = document.querySelector('.js-sidebar-form');
    const account = document.querySelector('.js-account');
    const results = document.querySelector('.js-results');
    const bp1200 = window.matchMedia('(min-width: 1200px)');

    const tabs = (evt, links, panels) => {
        evt.preventDefault();
        const target = document.getElementById(evt.target.hash.replace('#', ''));

        for (let panel of panels) {
            panel.classList.remove('active');
        }

        for (let link of links) {
            link.classList.remove('active');
        }

        evt.target.classList.add('active');
        target.classList.add('active');
    }

    const handleTransferSidebarIntoTabs = (bp) => {
        if (bp.matches) {
            results.contains(sidebarForm) && account.prepend(sidebarForm);
            sidebarForm.classList.contains('tabs-content__panel') && sidebarForm.classList.remove('tabs-content__panel', 'js-tab-panel', 'active');

            for (let panel of tabsPanels) {
                panel.classList.remove('active');
            }

            for (let link of tabsLinks) {
                link.classList.remove('active');
            }

            tabsLinks[1].classList.add('active');
            tabsPanels[0].classList.add('active');
        } else {
            account.contains(sidebarForm) && results.prepend(sidebarForm);
            !sidebarForm.classList.contains('tabs-content__panel') && sidebarForm.classList.add('tabs-content__panel', 'js-tab-panel');
        }
    }

    handleTransferSidebarIntoTabs(bp1200);
    bp1200.onchange = handleTransferSidebarIntoTabs;

    [...tabsLinks].forEach(link => {
        link.addEventListener('click', e => {
            tabs(e, tabsLinks, tabsPanels)
        });
    });
}