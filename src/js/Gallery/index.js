import { addElsInBlock } from './methods/addElsInBlock'
import { getEl } from './methods/getEl'

export class Gallery {
    gallery
    images
    pags
    lastIndex = -1

    constructor(block, prev, next) {
        this.prev = prev
        this.next = next
        this.gallery = block
        this.images = this.gallery.querySelectorAll('.gallery__img')
        this.length = this.images.length
        this.pag = this.gallery.querySelector('.gallery__pag-con')

        this.#addIndexForImage()
        this.#addBlocks()
        this.#initEvents()
        this.#showImg(0)
    }

    #addBlocks() {
        this.#addElsInBlock(this.pag, this.length, 'gallery__pag')

        this.pags = this.pag.querySelectorAll('.gallery__pag')
    }

    #addIndexForImage() {
        this.images.forEach((img, index) => {
            img.dataset.index = index
        })
    }

    #addElsInBlock(block, length, className) {
        addElsInBlock(this, block, length, className)
    }

    getEl(index, className) {
        return getEl(index, className)
    }

    #initEvents() {
        this.prev.addEventListener('click', () => {
            this.#showImg(this.lastIndex - 1)
        })

        this.next.addEventListener('click', () => {
            this.#showImg(this.lastIndex + 1)
        })

        this.pags.forEach((pag) => {
            pag.addEventListener('click', () => {
                this.#showImg(Number(pag.dataset.index))
            })
        })
    }

    #showImg(index) {
        if (this.lastIndex == index) return

        if (index < 0) {
            index = this.images.length - 1
        } else if (index > this.images.length - 1) {
            index = 0
        }

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
