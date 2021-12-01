import headerMenu from '../utils/headerMenu';
import headerAccount from '../utils/headerAccount';
import betsCounter from '../utils/betsCounter';
import scroll from '../utils/scroll';
import form from '../utils/form';
import accordion from "../utils/accordion";
import select from "../utils/select";
import fancyApps from "../utils/fancyapps";
import tabsPopup from "../utils/tabsPopup";

export default {
    init() {
        headerMenu();
        headerAccount();
        betsCounter();
        scroll();
        form();
        accordion();
        select();
        fancyApps();
        tabsPopup();
    },
    finalize() {}
}
