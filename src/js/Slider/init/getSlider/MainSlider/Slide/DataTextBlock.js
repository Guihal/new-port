export function DataTextBlock(data) {
    return `<div class="swiper-slide__text-wrapper">
				<div class="swiper-slide__city">${data.city}</div>
				<div class="swiper-slide__text-inner">
					<div class="swiper-slide__title">${data.title}</div>
					<div class="swiper-slide__descr_short">${data.smallDescr}</div>
					<div class="swiper-slide__descr">${data.descr}</div>
					<button class="swiper-slide_btn">посмотреть поближе <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 4H8M8 4L5 1M8 4L5 7" stroke="white"/></svg></button>
				</div>
			</div>`
}
