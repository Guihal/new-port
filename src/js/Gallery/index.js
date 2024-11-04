import { addElsInBlock } from './methods/addElsInBlock'
import { getEl } from './methods/getEl'

export class Gallery {
    gallery
    images
    pags
    lastIndex = -1

    constructor(block) {
        this.gallery = block
        this.images = this.gallery.querySelectorAll('.gallery__img')
        this.length = this.images.length

        this.imgHoverCon = this.gallery.querySelector(
            '.gallery__img-hover__con'
        )
        this.pag = this.gallery.querySelector('.gallery__pag-con')

        this.#addBlocks()
        this.#initEvents()
        this.#showImg(0)
    }

    #addBlocks() {
        this.#addElsInBlock(this.pag, this.length, 'gallery__pag')
        this.#addElsInBlock(this.imgHoverCon, this.length, 'gallery__img-hover')

        this.pags = this.pag.querySelectorAll('.gallery__pag')
        this.hovers = this.imgHoverCon.querySelectorAll('.gallery__img-hover')
    }

    #addElsInBlock(block, length, className) {
        addElsInBlock(this, block, length, className)
    }

    getEl(index, className) {
        return getEl(index, className)
    }

    #initEvents() {
        this.hovers.forEach((hov) => {
            hov.addEventListener('mouseenter', () => {
                this.#showImg(Number(hov.dataset.index))
            })
        })

        this.pags.forEach((pag) => {
            pag.addEventListener('click', () => {
                this.#showImg(Number(pag.dataset.index))
            })
        })
    }

    #showImg(index) {
        if (this.lastIndex == index) return
        if (index > this.length - 1 || index < 0) return

        this.#hideImage()
        this.#unactivePag()

        this.images[index].classList.add('active')
        this.pags[index].classList.add('active')

        this.lastIndex = index
    }

    #hideImage() {
        const activeImages = this.gallery.querySelectorAll(
            '.gallery__img.active'
        )

        activeImages.forEach((el) => {
            el.classList.remove('active')
        })
    }

    #unactivePag() {
        const activePags = this.gallery.querySelectorAll('.gallery__pag.active')

        activePags.forEach((el) => {
            el.classList.remove('active')
        })
    }
}
