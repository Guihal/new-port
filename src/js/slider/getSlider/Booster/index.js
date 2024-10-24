import { Card } from "./Card";

export function Booster(data) {
	return `<div class="booster">
		<div class="booster__wrapper">
            ${data.map((obj, index) => Card(obj, index)).join(" ")}
		</div>
	</div>`;
}
