export class PopupGallery {
    constructor(data) {
        this.data = data
        this.#addHTML()
        this.close = this.gallery.querySelector('.popup__close')
        this.#initCloseEvent()
        this.#initSwiper()
        this.show()
    }

    #addHTML() {
        this.gallery = Object.assign(document.createElement('div'), {
            className: 'popup',
            innerHTML: this.#getContent(),
        })
        document.documentElement.append(this.gallery)
    }

    #getContent() {
        return `<div class="popup__close"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.82812 8.82812L5.9997 5.9997L3.17127 3.17127" stroke="white"/><path d="M3.17188 8.82812L6.0003 5.9997L8.82873 3.17127" stroke="white"/></svg></div>
    <div class="swiper popup__swiper">
        <div class="swiper-wrapper">
            ${this.data.images
                .map(
                    (img) => `<div class="swiper-slide popup__slide">
    <div class="swiper-zoom-container">
        <img
            height="181"
            width="${window.innerWidth - 20}"
            src="${img}"
            alt="Очень красивые пейзажи"
        />
    </div>
</div>`
                )
                .join(' ')}
        </div>
        <div class="popup__prev"><svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.75 6L1.25 3.5L3.75 1" stroke="white"/></svg></div>
        <div class="popup__next"><svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.25 6L3.75 3.5L1.25 1" stroke="white"/></svg></div>
    </div>
    <div class="popup__wrapper">
    </div>
        `
    }

    #initSwiper() {
        this.swiper = new Swiper('.popup__swiper', {
            slidesPerView: 1,
            loop: true,
            spaceBetween: 10,
            zoom: true,
            navigation: {
                nextEl: '.popup__next',
                prevEl: '.popup__prev',
            },
        })
    }

    show() {
        document.documentElement.style.overflow = 'hidden'
        this.gallery.classList.add('show')
    }

    hide() {
        document.documentElement.style.overflow = 'auto'
        this.gallery.classList.remove('show')

        setTimeout(() => {
            this.destroy()
        }, 350)
    }

    #closeEvent = () => {
        this.hide()
    }

    #initCloseEvent() {
        this.close.addEventListener('click', this.#closeEvent)
    }

    destroy() {
        this.swiper.destroy()
        this.close.removeEventListener('click', this.#closeEvent)
        this.gallery.remove()
    }
}
