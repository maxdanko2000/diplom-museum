import Swiper, { Navigation, Pagination } from "swiper";

const swiper = new Swiper(".journey-slider-inner", {
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
    // breakpoints: {
    //     1200: {
    //         slidesPerView: 4,
    //         spaceBetween: 80
    //     },
    //     992: {
    //         slidesPerView: 3,
    //         spaceBetween: 120
    //     },
    //     768: {
    //         slidesPerView: 2,
    //         spaceBetween: 160
    //     },
    //     // 480: {
    //     //     slidesPerView: 2,
    //     //     spaceBetween: 160
    //     // },
    //     // 375: {
    //     //     slidesPerView: 1,
    //     //     spaceBetween: 120
    //     // }
    // }
});
