import { Gallery } from '../../Gallery/index'

export function initGallery(context) {
    context.slider.querySelectorAll('.gallery').forEach((gallery) => {
        const gall = new Gallery(gallery)
    })
}
