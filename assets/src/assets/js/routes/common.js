import headerMenu from '../utils/headerMenu';
import headerAccount from '../utils/headerAccount';
import betsCounter from '../utils/betsCounter';
import scroll from '../utils/scroll';

export default {
    init() {
        headerMenu();
        headerAccount();
        betsCounter();
        scroll();
    },
    finalize() {}
}
