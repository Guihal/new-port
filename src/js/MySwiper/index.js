import { throttle } from '../utils/throttle'

export class MySwiper {
    trfRegExp = /([-0-9.]+(?=px))/
    grabClass = 'grabbing'

    animSpeed = -0.1
    animSpeedScaled = this.animSpeed
    animSpeedAbs = Math.abs(this.animSpeedScaled)

    animSpeedAccelerateStart = -0.00002
    animSpeedAccelerate = this.animSpeedAccelerateStart
    animSpeedAccelerated = this.animSpeedScaled

    posStart
    posEnd

    friction = 0.01
    frictionCalulate = 1 - this.friction
    isDragging = false
    velocity = 0

    swipeTime
    swipeEndTime

    posClickStart = { x: 0, y: 0 }
    posClickEnd = { x: 0, y: 0 }

    velocityAnim
    defaultAnim

    clickShift = 0.1

    isVisible = false

    constructor(swiper, swiperAn) {
        this.swiper = swiper
        this.swiperAn = swiperAn

        this.wrapper = this.swiper.querySelector('.booster__wrapper')
        this.wrapperContent = this.wrapper.innerHTML.replaceAll(
            'loading="lazy"',
            'loading="eager"'
        )
        this.wrapperWidth = this.wrapper.offsetWidth

        this.#initSwiper()
    }

    #initSwiper() {
        this.wrapper.style.translate = '0'

        this.#initEvents()
        this._mutatuionSwiper()
        this._intersectionAnim()
    }

    #initEvents() {
        this.swiper.addEventListener('mousedown', this._startSwipe)
        this.swiper.addEventListener('touchstart', this._startSwipe)
    }

    _startSwipe = (ev) => {
        this.posStart = this._getPos(ev)
        this.posEnd = this._getPos(ev)
        this.posClickStart = this.posStart

        this._endAnimation()

        this.swipeTime = Date.now()

        document.documentElement.addEventListener('mousemove', this._swiping)
        document.documentElement.addEventListener('touchmove', this._swiping)
        document.documentElement.addEventListener('mouseup', this._endSwipe)
        document.documentElement.addEventListener('touchend', this._endSwipe)
    }

    _swiping = throttle((ev) => {
        this.posEnd = this._getPos(ev)

        const deltaPos = this.posEnd.x - this.posStart.x

        cancelAnimationFrame(this.velocityAnim)
        this._endAnimation()

        const delta = this._getTransform() + deltaPos

        if (delta > 0) {
            this.wrapper.style.translate = `${0}px`
            return
        }

        this._calcVelocity()

        this.posStart = this.posEnd

        this.wrapper.style.translate = `${delta}px`
    }, 4)

    _endSwipe = (ev) => {
        this.isDragging = false

        this._checkClick(ev)
        this._addVelocity()

        document.documentElement.removeEventListener('mousemove', this._swiping)
        document.documentElement.removeEventListener('touchmove', this._swiping)
        document.documentElement.removeEventListener('mouseup', this._endSwipe)
        document.documentElement.removeEventListener('touchend', this._endSwipe)
    }

    _getPos(ev) {
        if (ev.touches !== undefined) {
            ev.preventDefault()

            if (ev.touches.length === 0) return

            return { x: ev.touches[0].clientX, y: ev.touches[0].clientY }
        }

        return { x: ev.clientX, y: ev.clientY }
    }

    _calcVelocity() {
        this.swipeEndTime = Date.now()

        this.velocity =
            (this.posEnd.x - this.posStart.x) /
            (this.swipeEndTime - this.swipeTime)

        this.swipeTime = this.swipeEndTime
    }

    _addVelocity() {
        const callback = () => {
            const delta = this._getTransform() + this.velocity

            this.wrapper.style.translate = `${delta}px`

            this.velocity *= this.frictionCalulate

            if (delta > 0) {
                this.wrapper.style.translate = `${0}px`
                this.velocity = 0
                this._startAnimation(true)
                return
            }

            if (
                Math.abs(this.velocity) < this.animSpeedAbs &&
                this.velocity < 0
            ) {
                this._startAnimation(false)
                this.velocity = 0
                return
            }

            if (Math.abs(this.velocity) < 0.1) {
                this.velocity = 0
                this._startAnimation(true)
                return
            }

            this.velocityAnim = requestAnimationFrame(callback)
        }

        this.velocityAnim = requestAnimationFrame(callback)
    }

    _checkClick(ev) {
        if (
            Math.abs(this.posClickStart.x - this.posEnd.x) > this.clickShift &&
            Math.abs(this.posClickStart.y - this.posEnd.y) > this.clickShift
        )
            return

        const card = ev.target.closest('.booster__card')

        if (!card) return

        this.swiperAn.slideTo(Number(card.dataset.id), 300, false)
    }

    _mutatuionSwiper() {
        const callback = throttle(() => {
            if (
                this.wrapper.getBoundingClientRect().right -
                    this.swiper.getBoundingClientRect().right >
                this.wrapperWidth
            )
                return

            this.wrapper.innerHTML += this.wrapperContent
        }, 200)

        const observer = new MutationObserver(callback)

        callback()

        observer.observe(this.wrapper, {
            attributes: true,
            childList: true,
            subtree: true,
        })
    }

    _getTransform() {
        return Number(this.wrapper.style.translate.replace('px', ''))
    }

    _intersectionAnim() {
        const callback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this._startAnimation()
                } else {
                    this._endAnimation()
                }
            })
        }

        const options = {
            // root: по умолчанию window,
            // но можно задать любой элемент-контейнер
            rootMargin: '0px 0px 75px 0px',
            threshold: 0,
        }

        const observer = new IntersectionObserver(callback, options)

        observer.observe(this.wrapper)
    }

    _startAnimation(withAccelerate) {
        if (this.defaultAnim !== false) {
            return
        }

        if (withAccelerate) {
            this.animSpeedAccelerated = 0
        } else {
            this.animSpeedAccelerated = this.animSpeedScaled
        }

        const callback = () => {
            if (
                withAccelerate &&
                Math.abs(this.animSpeedAccelerated) < this.animSpeedAbs
            ) {
                this.animSpeedAccelerated += this.animSpeedAccelerate
                this.animSpeedAccelerate *= 1.1
            } else {
                this.animSpeedAccelerate = this.animSpeedAccelerateStart
            }

            const delta = this._getTransform() + this.animSpeedAccelerated

            this.wrapper.style.translate = `${delta}px`

            this.defaultAnim = requestAnimationFrame(callback)
        }

        this.defaultAnim = requestAnimationFrame(callback)
    }

    _endAnimation() {
        cancelAnimationFrame(this.defaultAnim)
        this.defaultAnim = false
    }
}
