import { Slide } from "./Slide";

export function MainSlider(data) {
	return `<div class="swiper">
		<div class="swiper-wrapper">
            ${data.map((obj) => Slide(obj)).join(" ")}
        </div>
	</div>`;
}
