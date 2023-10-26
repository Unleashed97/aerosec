import * as customFunctions from './modules/functions.js'

customFunctions.handleBurger()
customFunctions.handleModal()
customFunctions.handleAccordion()
customFunctions.handleTabs()

// vendors
const swiper = new Swiper('.swiper--showcase', {
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
