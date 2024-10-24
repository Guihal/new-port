export function Card(data, index) {
	let cardData = {};

	const cardSizeCount = 4;
	const indexRest = index % cardSizeCount;

	console.log(index);
	console.log(indexRest);

	switch (indexRest) {
		case 0:
			cardData = {
				size: 1,
				width: 125,
				height: 156,
			};
			break;
		case 1:
			cardData = {
				size: 2,
				width: 94,
				height: 125,
			};
			break;
		case 2:
			cardData = {
				size: 3,
				width: 125,
				height: 94,
			};
			break;
		case 3:
			cardData = {
				size: 4,
				width: 156,
				height: 125,
			};
			break;
	}

	return `<div class="booster__card" data-size="${cardData.size}" data-id="${data.id}">
        ${data.images.length > 0 ? `<img src="${data.images[0]}" height="${cardData.height}" width="${cardData.width}" alt="Красивый город" loading="lazy" />` : ""}
        <div class="booster__card_id">${`${data.id + 1}`.padStart(2, "0")}</div>
    </div>`;
}
