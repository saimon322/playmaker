export default function () {
    const scrollContainer = document.querySelectorAll(".filter__group");

    scrollContainer && scrollContainer.forEach(container => {
        container.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            container.scrollLeft += evt.deltaY;
        });
    });
}