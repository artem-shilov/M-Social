import { Swiper } from './libs/swiper-bundle.esm.browser.min';

const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },
  breakpoints: {
    320: {
      slidesPerView: 0.58,
    },
    560: {
      slidesPerView: 0.7,
    },
    768: {
      slidesPerView: 0.9,
    },
    900: {
      slidesPerView: 1,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
