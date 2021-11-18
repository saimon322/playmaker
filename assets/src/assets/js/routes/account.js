import editAccount from '../utils/editAccount';
import tabs from '../utils/tabs';
import dropdown from '../utils/dropdown';
import clipboard from '../utils/clipboard';

export default {
    init() {
        editAccount();
        tabs();
        dropdown();
        clipboard();
    },
    finalize() {}
}