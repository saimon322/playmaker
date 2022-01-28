export default function () {
    const showAccountDropdown = document.querySelector('.js-show-account');
    const accountDropdown = document.querySelector('.js-dropdown');

    showAccountDropdown && showAccountDropdown.addEventListener('click', function(e) {
       e.preventDefault();
       if (window.innerWidth >= 1200) {
           const w = this.scrollWidth;

           this.classList.toggle('active');
           accountDropdown.style.width = w + 'px';
           accountDropdown.classList.toggle('active');
       }
       return false;
    });

    document.addEventListener('click', e => {
        if (accountDropdown && !accountDropdown.contains(e.target) && !showAccountDropdown.contains(e.target)) {
            showAccountDropdown.classList.remove('active');
            accountDropdown.classList.remove('active');
        }
    });
}