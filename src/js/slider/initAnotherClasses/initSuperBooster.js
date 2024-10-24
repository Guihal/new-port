export function initSuperBooster() {
	const viewport = this.slider.querySelector(".booster");
	const content = this.slider.querySelector(".booster__wrapper");

	this.booster = {
		viewport: viewport,
		content: content,
		booster: new ScrollBooster({
			viewport,
			content,
			bounce: true,
			textSelection: true,
			emulateScroll: true,
			friction: 0.1,
			direction: "horizontal",
			scrollMode: "transform",
			onClick: (state, event, isTouchDevice) => {
				// // prevent default link event
				// const isLink = event.target.nodeName.toLowerCase() === "link";
				// if (isLink) {
				// 	event.preventDefault();
				// }
			},
		}),
	};
}
