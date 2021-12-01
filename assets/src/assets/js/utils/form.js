export default function () {
    const textAreas = document.querySelectorAll('textarea');
    const forms = document.querySelectorAll('.form');

    function autosize() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    }

    textAreas && textAreas.forEach(area => {
       area.addEventListener('input', autosize, false);
    });

    forms && forms.forEach(form => {
        [...form.elements].forEach(input => {
            ['input', 'change'].forEach(event => {
                input.addEventListener(event, e => {
                    if (input.required) {
                        if (!input.validity.valid) {
                            !input.classList.contains('invalid') && input.classList.add('invalid');
                            input.classList.contains('valid') && input.classList.remove('valid');
                        } else {
                            input.classList.contains('invalid') && input.classList.remove('invalid');
                            !input.classList.contains('valid') && input.classList.add('valid');
                        }
                    }
                });
            });
        });
    });
}