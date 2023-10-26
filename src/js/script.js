import * as customFunctions from './modules/functions.js'

customFunctions.handleBurger()
customFunctions.handleModal()
customFunctions.handleAccordion()
customFunctions.handleTabs()

// vendors
const swiperShowcase = new Swiper('.swiper--showcase', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 1,
    spaceBetween: 40,

    navigation: {
        nextEl: '.swiper-button-next--showcase',
        prevEl: '.swiper-button-prev--showcase',
    },
})

const swiperTestimonials = new Swiper('.swiper--testimonials', {
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    // centeredSlidesBounds: true,

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next--testimonials',
        prevEl: '.swiper-button-prev--testimonials',
    },
})
