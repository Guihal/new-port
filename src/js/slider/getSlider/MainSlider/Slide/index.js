import { Gallery } from "../../Gallery";
import { DataTextBlock } from "./DataTextBlock";

export function Slide(data) {
	return `<div class="swiper-slide">
                ${DataTextBlock(data)}
                ${Gallery(data.images)}
            </div>`;
}
