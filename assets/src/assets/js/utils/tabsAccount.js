import tabs from "./tabs";

export default function () {
    const tabsLinks = document.getElementsByClassName('js-tab-link');
    const tabsPanels = document.getElementsByClassName('js-tab-panel');
    const sidebarForm = document.querySelector('.js-sidebar-form');
    const account = document.querySelector('.js-account');
    const results = document.querySelector('.js-results');
    const bp1200 = window.matchMedia('(min-width: 1200px)');

    const codes = document.querySelector('.js-codes');

    const handleTransferSidebarIntoTabs = (bp) => {
        if (bp.matches) {
            results.contains(sidebarForm) && account.prepend(sidebarForm);
            sidebarForm.classList.contains('tabs-content__panel') && sidebarForm.classList.remove('tabs-content__panel', 'js-tab-panel', 'active');

            if (tabsLinks[0].classList.contains('active')) {
                for (let panel of tabsPanels) {
                    panel.classList.remove('active');
                }

                for (let link of tabsLinks) {
                    link.classList.remove('active');
                }

                tabsLinks[1].classList.add('active');
                tabsPanels[0].classList.add('active');
            }
        } else {
            account.contains(sidebarForm) && results.prepend(sidebarForm);
            !sidebarForm.classList.contains('tabs-content__panel') && sidebarForm.classList.add('tabs-content__panel', 'js-tab-panel');
        }
    }

    handleTransferSidebarIntoTabs(bp1200);
    bp1200.onchange = handleTransferSidebarIntoTabs;

    // const handleCodesScroll = el => {
    //     let h = 0;
    //     const fields = el.children;
    //
    //     for (let i = 0; i < 3; i++) {
    //         const styles = window.getComputedStyle(fields[i]);
    //         h += fields[i].scrollHeight + parseFloat(styles.marginTop);
    //     }
    //
    //     if (fields.length > 3) {
    //         el.style.height = h + 'px';
    //     } else {
    //         el.hasAttribute('style') && el.removeAttribute('style');
    //     }
    // }

    [...tabsLinks].forEach(link => {
        link.addEventListener('click', e => {
            tabs(e, tabsLinks, tabsPanels);

            // if (codes) {
            //     handleCodesScroll(codes);
            //     window.addEventListener('resize', () => {
            //         handleCodesScroll(codes);
            //     });
            // }
        });
    });
}