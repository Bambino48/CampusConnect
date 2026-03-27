document.addEventListener("DOMContentLoaded", function initCarousel() {
    const slides = Array.from(document.querySelectorAll(".testimonial-card"));
    const previousButton = document.getElementById("prevSlide");
    const nextButton = document.getElementById("nextSlide");

    if (!slides.length || !previousButton || !nextButton) {
        return;
    }

    let currentIndex = 0;

    function renderSlide(nextIndex) {
        currentIndex = (nextIndex + slides.length) % slides.length;
        slides.forEach(function updateSlide(slide, index) {
            slide.classList.toggle("active", index === currentIndex);
        });
    }

    previousButton.addEventListener("click", function showPrevious() {
        renderSlide(currentIndex - 1);
    });

    nextButton.addEventListener("click", function showNext() {
        renderSlide(currentIndex + 1);
    });

    window.setInterval(function autoplay() {
        renderSlide(currentIndex + 1);
    }, 4200);
});
