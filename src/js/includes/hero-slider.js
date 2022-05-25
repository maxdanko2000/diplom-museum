import { Navigation, Pagination, Scrollbar, Autoplay, EffectFade } from "swiper";

export const heroOptions = {
  modules: [Navigation, Pagination, Scrollbar, Autoplay, EffectFade],
  direction: "horizontal",
  autoplay: { delay: 3000 },
  slidesPerView: 1,
  speed: 2000,
  effect: "fade",
  pagination: {
    el: ".hero-slider__pagination",
    clickable: true,
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return `<span class="${currentClass}"></span>|<span class="${totalClass}"></span>`;
    },
  },

  navigation: {
    nextEl: ".hero-slider__next",
    prevEl: ".hero-slider__prev",
  },

  scrollbar: {
    el: ".hero-slider__scroll",
    draggable: true,
  },
};
