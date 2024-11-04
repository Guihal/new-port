import { Booster } from './Booster'
import { MainSlider } from './MainSlider'

export function getSlider(context) {
    return Object.assign(document.createElement('div'), {
        innerHTML: `${MainSlider(context.data)} ${Booster(context.data)}`,
        className: `slider ${context.query.replace('.', '')}`,
    })
}
