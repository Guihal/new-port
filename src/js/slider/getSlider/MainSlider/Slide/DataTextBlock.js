export function DataTextBlock(data) {
	return `<div class="swiper-slide__text-wrapper">
				<div class="swiper-slide__city">${data.city}</div>
				<div class="swiper-slide__text-inner">
					<div class="swiper-slide__title">${data.title}</div>
					<div class="swiper-slide__descr_short">${data.smallDescr}</div>
					<div class="swiper-slide__descr">${data.descr}</div>
				</div>
			</div>`;
}
