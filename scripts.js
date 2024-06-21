

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
});

let reviews = document.querySelectorAll('.feedback');
let currentIndex = 0;

function prevReview() {
    let lastReview = reviews[reviews.length - 1];
    let firstReview = reviews[0];

    if (currentIndex === 0) {
        reviews[0].style.display = 'none';
        reviews[reviews.length - 1].style.display = 'block';
        reviews = Array.from(reviews).reverse();
        currentIndex = reviews.length - 1;
    } else {
        reviews[currentIndex].style.display = 'none';
        reviews[currentIndex - 1].style.display = 'block';
        currentIndex--;
    }
}

function nextReview() {
    let lastReview = reviews[reviews.length - 1];
    let firstReview = reviews[0];

    if (currentIndex === reviews.length - 1) {
        reviews[reviews.length - 1].style.display = 'none';
        reviews[0].style.display = 'block';
        reviews = Array.from(reviews).reverse();
        currentIndex = 0;
    } else {
        reviews[currentIndex].style.display = 'none';
        reviews[currentIndex + 1].style.display = 'block';
        currentIndex++;
    }
}



