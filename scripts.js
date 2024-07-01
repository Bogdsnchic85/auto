document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    });

    const gap = 16;
    const carousel = document.getElementById("carousel");
    const content = document.getElementById("content");
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");
    const width = carousel.offsetWidth;

    next.addEventListener("click", e => {
        carousel.scrollBy(width + gap, 0);
        if (carousel.scrollWidth - width - gap <= carousel.scrollLeft + width) {
            next.style.display = "none";
        }
        if (carousel.scrollLeft !== 0) {
            prev.style.display = "flex";
        }
    });

    prev.addEventListener("click", e => {
        carousel.scrollBy(-(width + gap), 0);
        if (carousel.scrollLeft - width - gap <= 0) {
            prev.style.display = "none";
        }
        if (carousel.scrollWidth - width - gap > carousel.scrollLeft + width) {
            next.style.display = "flex";
        }
    });
});
const tooltip = document.querySelector('.tooltip');
const continents = document.querySelectorAll('.continent');


    continents.forEach(continent => {
        continent.addEventListener('mouseenter', function () {
            tooltip.style.display = 'block';
            tooltip.innerText = this.dataset.title;
            
        });

        continent.addEventListener('mouseleave', function () {
            tooltip.style.display = 'none';
        });
    });