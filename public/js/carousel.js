const slides = document.querySelectorAll('#slide-carousel');
const $forwardButton = document.querySelector('#forward');
const $backButton = document.querySelector('#back');

let currentSlide = 0;
let maxSlides = slides.length - 1;

slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 100}%)`;
});

$forwardButton.addEventListener('click', () => {
    if(currentSlide === maxSlides){
        currentSlide = 0;
    }else{
        currentSlide ++;
    }

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide) }%)`;
    });
});

$backButton.addEventListener('click', () => {
    if(currentSlide === 0){
        currentSlide = maxSlides;
    }else{
        currentSlide --;
    }

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index -currentSlide) }%)`;
    });
});