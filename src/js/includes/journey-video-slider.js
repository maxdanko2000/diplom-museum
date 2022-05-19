import { Navigation, Pagination } from "swiper";

export const journeyOptions = {
  modules: [Navigation, Pagination],
  direction: "horizontal",
  slidesPerView: 4,
  spaceBetween: 80,
  pagination: {
    el: ".journey-slider__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".journey-slider__btn-next",
    prevEl: ".journey-slider__btn-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    620: {
      slidesPerView: 2,
      spaceBetween: 100,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 200,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 80,
    },
  },
};
