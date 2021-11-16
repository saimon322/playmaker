export default function () {
    const dropTrigger = document.getElementsByClassName('js-dropdown-trigger');
    const dropContent = document.getElementsByClassName('js-dropdown-content');

    if (dropTrigger) {
        [...dropTrigger].forEach(trigger => {
            trigger.addEventListener('click', e => {
                e.preventDefault();

                e.target.classList.toggle('active');
                const content = e.target.nextElementSibling;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });

            document.addEventListener('click', e => {
                if (!trigger.parentElement.contains(e.target)) {
                    trigger.classList.remove('active');
                    trigger.nextElementSibling.style.maxHeight = null;
                }
            });

            const inputs = trigger.nextElementSibling.querySelectorAll('input');
            inputs.forEach(input => {
               input.addEventListener('change', () => {
                   trigger.textContent = input.checked && input.nextElementSibling.textContent;
                   trigger.classList.remove('active');
                   trigger.nextElementSibling.style.maxHeight = null;
               });
            });
        });
    }
}