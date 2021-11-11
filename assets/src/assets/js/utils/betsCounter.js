export default function () {
    window.addEventListener('load', () => {
        const betsTotal = document.querySelector('.js-total');
        const betsWins = document.querySelector('.js-wins');
        const betsLoses = document.querySelector('.js-loses');
        const percentage = document.querySelector('.js-percentage');
        const percentageText = document.querySelector('.js-percentage-text');

        const animateCounter = (obj, start, end, duration) => {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start) + '%';
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        if (betsTotal) {
            const diff = Math.round((betsWins.textContent - betsLoses.textContent) / betsTotal.textContent * 100);

            percentage.setAttribute('stroke-dasharray', diff + ', 100');
            percentageText.textContent = diff + '%';

            animateCounter(percentageText, 0, diff, 1000);
        }
    });
}