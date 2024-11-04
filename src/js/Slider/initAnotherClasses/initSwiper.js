export function initSwiper(context) {
    context.swiper = new Swiper(`${context.query} .swiper`, {
        slidesPerView: 1,
        allowTouchMove: false,
        loop: true,

        breakpoints: {
            240: {
                spaceBetween: 10,
            },
            768: {
                spaceBetween: 30,
            },
        },
    })
}
