export function Gallery(images) {
    return `<div class="gallery">
				<div class="gallery__img-con">
                    ${images
                        .map(
                            (image) =>
                                `<img class="gallery__img" src="${image}" width="850" height="479" alt="Красивый город" loading="lazy" />`
                        )
                        .join(' ')}
				</div>
				<div class="gallery__img-hover__con"></div>
				<div class="gallery__pag-con"></div>
                <div class="gallery__prev gallery__nav"><svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.75 6L1.25 3.5L3.75 1" stroke="black"/></svg></div>
                <div class="gallery__next gallery__nav"><svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.25 6L3.75 3.5L1.25 1" stroke="black"/></svg></div>
			</div>`
}
