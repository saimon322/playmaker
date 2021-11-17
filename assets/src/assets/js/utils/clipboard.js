export default function () {
    const copyButtons = document.getElementsByClassName('js-copy');
    const codeFields = document.getElementsByClassName('code__field-input');

    const copyToClipboard = (value, fields) => {
        value.select();
        value.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(value.value).then(
            () => {
                [...fields].forEach(field => {
                    field.classList.contains('copied') && field.classList.remove('copied');
                });
                !value.classList.contains('copied') && value.classList.add('copied');
            },
            () => {
                value.classList.contains('copied') && value.classList.remove('copied');
            }
        );
    }

    copyButtons && [...copyButtons].forEach(copy => {
        copy.addEventListener('click', e => {
            e.preventDefault();

            if (copy.contains(e.target)) {
                const code = copy.previousElementSibling;
                copyToClipboard(code, codeFields);
            }
        }, false);
    });

    codeFields && [...codeFields].forEach(field => {
        field.addEventListener('click', e => {
            e.preventDefault();
            if (window.innerWidth < 576) {
                copyToClipboard(field, codeFields);
            }
        });
    });

    document.addEventListener('click', e => {
        if (!e.target.matches('.js-copy') && !e.target.matches('.code__field-input')) {
            [...codeFields].forEach(field => {
                field.classList.contains('copied') && field.classList.remove('copied');
            });
        }
    });
}