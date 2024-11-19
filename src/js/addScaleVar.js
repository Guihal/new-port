import { elementReady } from './utils/elementReady'

export async function addScaleVar(slider) {
    const scaled = await elementReady('[style*="zoom"]')

    const callback = () => {
        const zoom = Number(scaled.style.zoom)

        document.documentElement.style.setProperty('--scale', zoom)
        slider.swiper.params.spaceBetween = 24 * zoom
        slider.swiper.update()
        slider.mySwiper.animSpeedScaled = slider.mySwiper.animSpeed * zoom
    }

    callback()

    const observer = new MutationObserver(callback)

    observer.observe(scaled, {
        attributes: true,
    })
}
