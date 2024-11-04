export function mainClickEvent(context) {
    context.slider.addEventListener('click', (ev) => {
        if (!ev.target.closest('.swiper-slide_btn')) return

        const slideNumber = Number(
            ev.target.closest('.swiper-slide').dataset.swiperSlideIndex
        )

        console.log(context.products[slideNumber])

        context.products[slideNumber].click()
    })
}
