import { Gallery } from '../../Gallery/index'

export function initGallery(context) {
    context.slider.querySelectorAll('.gallery').forEach((gallery) => {
        const prev = gallery.querySelector('.gallery__prev')
        const next = gallery.querySelector('.gallery__next')

        const gall = new Gallery(gallery, prev, next)
    })
}
