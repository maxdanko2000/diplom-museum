import Swiper, { Navigation, Pagination } from 'swiper';


const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: true,


    pagination: {
        el: '.slider-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});
