export default function () {
    const copyButtons = document.getElementsByClassName('js-copy');
    const copyLink = document.querySelector('.js-link-copy');
    const codeFields = document.getElementsByClassName('code__field-input');

    function copyToClipboard(field, value, fields) {
        if (field.type === 'text') field.select();
        if (field.type === 'text') field.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(value).then(
            () => {
                [...fields].forEach(field => {
                    field.classList.contains('copied') && field.classList.remove('copied');
                });
                !field.classList.contains('copied') && field.classList.add('copied');
            },
            () => {
                field.classList.contains('copied') && field.classList.remove('copied');
            }
        );
    }

    copyButtons && [...copyButtons].forEach(copy => {
        copy.addEventListener('click', e => {
            e.preventDefault();

            if (copy.contains(e.target)) {
                const code = copy.previousElementSibling;
                copyToClipboard(code, code.value, codeFields);
            }
        }, false);
    });

    codeFields && [...codeFields].forEach(field => {
        field.addEventListener('click', e => {
            e.preventDefault();
            if (window.innerWidth < 576) {
                copyToClipboard(field, field.value, codeFields);
            }
        }, false);
    });

    copyLink.addEventListener('click', e => {
        e.preventDefault();

        if (copyLink.contains(e.target)) {
            const code = copyLink.previousElementSibling;
            copyToClipboard(code, code.dataset.link, codeFields);
        }
    }, false);

    document.addEventListener('click', e => {
        if (!e.target.matches('.js-copy') && !e.target.matches('.js-link-copy') && !e.target.matches('.code__field-input')) {
            [...codeFields].forEach(field => {
                field.classList.contains('copied') && field.classList.remove('copied');
            });
            copyLink.previousElementSibling.classList.contains('copied') && copyLink.previousElementSibling.classList.remove('copied');
        }
    });
}