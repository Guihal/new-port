export function initSwiper(context) {
    context.swiper = new Swiper(`${context.query} .swiper`, {
        slidesPerView: 1,
        // allowTouchMove: false,
        loop: true,
        spaceBetween: 24,
    })
}
