import * as customFunctions from './modules/functions.js'

customFunctions.handleBurger()
customFunctions.handleAccordion()
customFunctions.handlePaginationProject()
customFunctions.handlePaginationLicense()

const progressBar = document.querySelector('.swiper-spinner__progress')

// vendors
const swiperShowcase = new Swiper('.swiper--showcase', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 1,
    spaceBetween: 40,
    // speed: 1000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: '.swiper-button-next--showcase',
        prevEl: '.swiper-button-prev--showcase',
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressBar.style.setProperty('--progress', 1 - progress)
        },
    },
})

const swiperTestimonials = new Swiper('.swiper--testimonials', {
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    centeredSlidesBounds: true,
    loop: true,

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next--testimonials',
        prevEl: '.swiper-button-prev--testimonials',
    },
})
