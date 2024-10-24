export function getImages(popup) {
	// возвращает массив фото
	const images = [];

	popup.querySelectorAll(".t-slds__main .t-slds__bgimg").forEach((image) => {
		images.push(image.dataset.original);
	});

	return images;
}
