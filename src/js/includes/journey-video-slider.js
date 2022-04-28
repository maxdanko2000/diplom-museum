import Swiper, { Navigation, Pagination } from 'swiper';


const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    slidesPerView: 3,
    pagination: {
        el: '.slider-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1920: {
            slidesPerView: 3,
        },
        1536: {
            slidesPerView: 3,
        },
        860: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        }
    }

    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});
