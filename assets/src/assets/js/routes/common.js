import headerMenu from '../utils/headerMenu';
import headerAccount from '../utils/headerAccount';
import betsCounter from '../utils/betsCounter';

export default {
    init() {
        headerMenu();
        headerAccount();
        betsCounter();
    },
    finalize() {}
}
