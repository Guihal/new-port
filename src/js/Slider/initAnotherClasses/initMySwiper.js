import { MySwiper } from '../../MySwiper'

export function initMySwiper(context) {
    context.mySwiper = new MySwiper(
        context.slider.querySelector('.booster'),
        context.swiper
    )
}
