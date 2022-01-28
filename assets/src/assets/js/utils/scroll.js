export default function () {
    const scrollContainer = document.querySelectorAll(".filter__group");

    scrollContainer && scrollContainer.forEach(content => {
        const pos = { left: 0, x: 0 };

        // Mouse wheel
        content.addEventListener("wheel", (e) => {
            if (content.scrollWidth > content.offsetWidth) {
                e.preventDefault();
                content.scrollLeft += e.deltaX + e.deltaY;
            }
        });

        // Mouse drag
        const mouseDownHandler = function (e) {
            pos.left = content.scrollLeft;
            pos.x = e.clientX;

            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);

            content.style.cursor = 'grabbing';
            content.style.userSelect = 'none';
        };

        const mouseMoveHandler = function (e) {
            const dx = e.clientX - pos.x;
            content.scrollLeft = pos.left - dx;
        };

        const mouseUpHandler = function () {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);

            content.style.cursor = 'grab';
            content.style.removeProperty('user-select');
        };

        content.addEventListener('mousedown', mouseDownHandler);
    });
}