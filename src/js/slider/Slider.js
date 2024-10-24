import { getData } from "./getData/getData";
import { getSlider } from "./getSlider";
import { initBooster } from "./initAnotherClasses/initSuperBooster";

export class Slider {
	data;

	constructor(slider) {
		this.sliderDataBlock = slider;
		this.data = this._getData(slider);

		this._addHtml();
		this._initBooster();
	}

	_addHtml() {
		this.slider = this._getSlider();

		this.sliderDataBlock.after(this.slider);
		this.sliderDataBlock.remove();
	}

	_getSlider = getSlider.bind(this);
	_getData = getData.bind(this);
	_initBooster = initBooster.bind(this);
}
