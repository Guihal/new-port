import { elementReady } from "../utils/elementReady";
import { hideBlock } from "./utils/hideBlock";

export function waitLoadSliderBlock(selector) {
	//find, hide and wait loading block
	return new Promise(async (resolve, reject) => {
		const block = await elementReady(selector);

		hideBlock(block);
		callback();

		const observer = new MutationObserver(() => {
			callback();
		});

		observer.observe(block, { childList: true, subtree: true });

		function callback() {
			const cards = block.querySelectorAll(".js-product.t-item");
			const popups = block.querySelectorAll(".t754__product-full");

			if (cards.length > 0 && popups.length > 0 && popups.length == cards.length) {
				// observer.disconnect();
				resolve(block);
			}
		}
	});
}
