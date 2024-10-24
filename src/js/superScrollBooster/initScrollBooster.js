export function initScrollBooster() {
	const viewport = this.viewport;
	const content = this.content;

	this.booster = new ScrollBooster({
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
	});
}
