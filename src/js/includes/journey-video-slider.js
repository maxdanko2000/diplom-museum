import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.journey-slider-inner', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    spaceBetween: 40,
    pagination: {
        el: '.journey-slider__pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.journey-slider__btn-next',
        prevEl: '.journey-slider__btn-prev',
    },
});
