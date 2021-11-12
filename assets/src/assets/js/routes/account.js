import betsCounter from '../utils/betsCounter';
import editAccount from '../utils/editAccount';
import tabs from '../utils/tabs';

export default {
    init() {
        betsCounter();
        editAccount();
        tabs();
    },
    finalize() {}
}