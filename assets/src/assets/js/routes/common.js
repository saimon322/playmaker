import headerMenu from '../utils/headerMenu';

export default {
    init() {
        headerMenu();
    },
    finalize() {
        console.log('common finalize')
    }
}
