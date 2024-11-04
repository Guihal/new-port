import { Slider } from './Slider'
import { waitLoad } from './utils/waitLoad'

export async function sliderInit() {
    const query = '.uc-projects'
    const sliderDataBlock = await waitLoad(query)
    const slider = new Slider(sliderDataBlock, query)
}
