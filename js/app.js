const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  
  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

const arrow = document.querySelector(".scroll-arrow");
const intro = document.querySelector('#intro');

arrow.addEventListener('click', e => {
  intro.remove();
} )