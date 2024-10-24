import { getData } from "./getData/getData";
import { Slider } from "./Slider";
import { waitLoadSliderBlock } from "./waitLoadSliderBlock";

export async function sliderInit() {
	const sliderDataBlock = await waitLoadSliderBlock(".uc-projects");
	const slider = new Slider(sliderDataBlock);

	// sliderDataBlock;
}
