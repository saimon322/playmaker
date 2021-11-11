import betsCounter from '../utils/betsCounter';
import editAccount from '../utils/editAccount';

export default {
    init() {
        betsCounter();
        editAccount();
    },
    finalize() {}
}