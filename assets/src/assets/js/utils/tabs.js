export default function tabs(evt, links, panels) {
    evt.preventDefault();
    const target = document.getElementById(evt.target.hash.replace('#', ''));

    for (let panel of panels) {
        panel.classList.remove('active');
    }

    for (let link of links) {
        link.classList.remove('active');
    }

    evt.target.classList.add('active');
    target.classList.add('active');
}