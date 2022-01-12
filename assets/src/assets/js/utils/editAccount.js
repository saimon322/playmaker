import IMask from 'imask';

export default function () {
    const editAccount = document.querySelector('.js-edit-account');
    const sidebarForm = document.querySelector('.js-sidebar-form');
    const phoneFields = document.querySelectorAll('[type="tel"]');
    const upload = document.querySelector('.account-avatar__upload');

    const isFieldsValid = fields => {
        return [...fields].every(field => {
            return field.validity.valid === true;
        });
    }

    phoneFields && phoneFields.forEach(phone => {
        let phoneMask = IMask(phone, {
            mask: '+{7} 000 000 00 00',
        }).on('accept', () => {
            phone.setCustomValidity('Fill number correctly');
        }).on('complete', () => {
            phone.setCustomValidity('');
        });
    });

    editAccount && editAccount.addEventListener('click', e => {
        e.preventDefault();

        const uploadStyles = getComputedStyle(upload);
        const elements = sidebarForm.querySelectorAll('.form__input')

        if (uploadStyles.display === "none") {
            upload.style.display = "block";
        } else {
            upload.style.display = "none";
        }

        elements.forEach(input => {

            if (input.validity.valid) {
                input.classList.contains('valid') && input.classList.remove('valid');
            }

            if (isFieldsValid(elements)) {
                input.toggleAttribute('disabled');

                if (!editAccount.classList.contains('save')) {
                    editAccount.textContent = 'Сохранить изменения';
                    editAccount.classList.add('save');
                } else {
                    editAccount.textContent = 'Редактировать данные';
                    editAccount.classList.remove('save');
                }
            }
        });
    });
}