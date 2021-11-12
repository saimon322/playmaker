import IMask from 'imask';

export default function () {
    const editAccount = document.querySelector('.js-edit-account');
    const sidebarForm = document.querySelector('.js-sidebar-form');
    const phoneFields = document.querySelectorAll('[type="tel"]');
    const sidebarFormInputs = sidebarForm.elements;

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

    [...sidebarFormInputs].forEach(input => {
        ['input', 'change'].forEach(event => {
            input.addEventListener(event, e => {
                if (!input.validity.valid) {
                    !input.classList.contains('invalid') && input.classList.add('invalid');
                    input.classList.contains('valid') && input.classList.remove('valid');
                } else {
                    input.classList.contains('invalid') && input.classList.remove('invalid');
                    !input.classList.contains('valid') && input.classList.add('valid');
                }
            });
        });
    });

    editAccount && editAccount.addEventListener('click', e => {
        e.preventDefault();

        [...sidebarFormInputs].forEach(input => {

            if (input.validity.valid) {
                input.classList.contains('valid') && input.classList.remove('valid');
            }

            if (isFieldsValid(sidebarFormInputs)) {
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