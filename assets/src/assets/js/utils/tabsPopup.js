import tabs from "./tabs";

export default function () {
    const links = document.getElementsByClassName('js-login-tab');
    const panels = document.getElementsByClassName('js-login-panel');

    links && [...links].forEach(tab => {
       tab.addEventListener('click', e => {
          tabs(e, links, panels);
       });
    });
}