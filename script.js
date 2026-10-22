const menu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".bar");

hamburger.addEventListener("click", function () {
    menu.classList.toggle("active");
});

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

// Next button
nextBtn.addEventListener("click", () => {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
});

// Previous button
prevBtn.addEventListener("click", () => {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
});

const monials = document.querySelector(".monials");
const cards = document.querySelectorAll(".nials, .nail");

let currentIndex = 0;
const visibleCards = 4;

function moveTestimonials() {
    const cardWidth = cards[0].offsetWidth + 3
    0; // 20px gap

    currentIndex++;

    if (currentIndex > cards.length - visibleCards) {
        currentIndex = 0;
    }

    monials.style.transform =
        `translateX(-${currentIndex * cardWidth}px)`;
}

// Move every 3 seconds
setInterval(moveTestimonials, 3000);