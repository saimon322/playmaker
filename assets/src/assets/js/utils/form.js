export default function () {
    const textAreas = document.querySelectorAll('textarea');

    function autosize() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    }

    textAreas && textAreas.forEach(area => {
       area.addEventListener('input', autosize, false);
    });
}