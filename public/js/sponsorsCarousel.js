const sponsorsSlides = document.querySelectorAll('#sponsor-slide');
const $forwardSlide = document.querySelector('#forward-sponsor');
const $backSlide = document.querySelector('#back-sponsor');

let currentSponsor = 0;
let maxSponsor = sponsorsSlides.length - 1;

sponsorsSlides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 100}%)`;
});

$forwardSlide.addEventListener('click', () => {
    if(currentSponsor === maxSponsor){
        currentSponsor = 0;
    }else{
        currentSponsor ++;
    }

    sponsorsSlides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSponsor) }%)`;
    });
});

$backSlide.addEventListener('click', () => {
    if(currentSponsor === 0){
        currentSponsor = maxSponsor;
    }else{
        currentSponsor --;
    }

    sponsorsSlides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSponsor) }%)`;
    });
});