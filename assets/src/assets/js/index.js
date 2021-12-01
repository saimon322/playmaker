// FIXES
import "./fixes"

import Router from './utils/Router';
import common from './routes/common';
import home from './routes/home';
import account from './routes/account';

/** Populate Router instance with DOM routes */
const routes = new Router({
    common,
    home,
    account
})

window.addEventListener("DOMContentLoaded", () => {
    routes.loadEvents()
})