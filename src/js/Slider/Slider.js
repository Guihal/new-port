import { mainClickEvent } from './events/mainClickEvent'
import { getData } from './init/getData/index'
import { getSlider } from './init/getSlider/index'
import { initMySwiper } from './initAnotherClasses/initMySwiper'
import { initSwiper } from './initAnotherClasses/initSwiper'
import { initGallery } from './initAnotherClasses/initGallery'

export class Slider {
    data
    sliderDataBlock

    constructor(slider, query) {
        this.query = query
        this.sliderDataBlock = slider
        this.products = this.sliderDataBlock.querySelectorAll(
            '.js-product.t754__col'
        )
        this.data = this.#getData(slider)

        this.#addHtml()

        //another classes
        this.#initSwiper()
        this.#initMySwiper()
        this.#initGallery()
        this.#mainClickEvent()
        this.#changeHeightSlide()
    }

    // init methods

    #addHtml() {
        this.slider = this.#getSlider()

        this.sliderDataBlock.after(this.slider)
        this.sliderDataBlock.remove()
        this.swiperBlock = this.slider.querySelector('.swiper')
        this.swiperWrapper = this.slider.querySelector('.swiper-wrapper')
    }

    #getSlider() {
        return getSlider(this)
    }

    #getData(block) {
        return getData(this, block)
    }

    // init another classes method

    #initMySwiper() {
        initMySwiper(this)
    }

    #initSwiper() {
        initSwiper(this)
    }

    #initGallery() {
        initGallery(this)
    }

    #mainClickEvent() {
        mainClickEvent(this)
    }

    #changeHeightSlide() {
        this.swiper.on('slideChange', () => {
            setTimeout(() => {
                const slideActive = this.swiperBlock.querySelector(
                    '.swiper-slide-active'
                )

                this.swiperBlock.style.marginBottom = `${
                    slideActive.offsetHeight - this.swiperWrapper.offsetHeight
                }px`
            }, 50)
        })
    }
}
