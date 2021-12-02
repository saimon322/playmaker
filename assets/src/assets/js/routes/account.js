import editAccount from '../utils/editAccount';
import tabsAccount from "../utils/tabsAccount";
import dropdown from '../utils/dropdown';
import clipboard from '../utils/clipboard';
import PieChart from "../utils/PieChart";

export default {
    init() {
        editAccount();
        tabsAccount();
        dropdown();
        clipboard();
        PieChart();
    },
    finalize() {}
}