import { PopupGallery } from '../../PopupGallery'

export function mainClickEvent(context) {
    context.slider.addEventListener('click', (ev) => {
        if (window.innerWidth > 960) return
        if (
            !ev.target.closest('.swiper-slide_btn') &&
            !ev.target.closest('.gallery')
        )
            return

        const slideNumber = Number(
            ev.target.closest('.swiper-slide').dataset.swiperSlideIndex
        )

        context.popupGallery = new PopupGallery(context.data[slideNumber])
    })
}
