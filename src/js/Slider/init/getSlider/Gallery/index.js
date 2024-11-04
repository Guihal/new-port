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
			</div>`
}
