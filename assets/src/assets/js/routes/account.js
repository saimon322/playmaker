import betsCounter from '../utils/betsCounter';
import editAccount from '../utils/editAccount';
import tabs from '../utils/tabs';
import dropdown from '../utils/dropdown';

export default {
    init() {
        betsCounter();
        editAccount();
        tabs();
        dropdown();
    },
    finalize() {}
}