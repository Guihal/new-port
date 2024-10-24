import { Booster } from "./Booster";
import { MainSlider } from "./MainSlider";

export function getSlider() {
	return Object.assign(document.createElement("div"), { innerHTML: `${MainSlider(this.data)} ${Booster(this.data)}`, className: "slider" });
}
