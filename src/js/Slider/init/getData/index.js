import { getTextData } from '../../../utils/getTextData'
import { getImages } from './getImages'

export function getData(context, block) {
    //@ get data from tildaBlock
    // {
    // 	title: '',
    // 	smallDescr: '',
    // 	descr: '',
    // 	city: '',
    // 	images: [],
    // };

    const data = []

    const cards = block.querySelectorAll('.js-product.t-item')
    const popups = block.querySelectorAll('.t754__product-full')

    popups.forEach((popup, index) => {
        data.push({
            id: index,
            title: getTextData(popup.querySelector('.t754__title')),
            smallDescr: getTextData(cards[index].querySelector('.t754__descr')),
            descr: getTextData(popup.querySelector('.t754__descr')),
            city: getTextData(cards[index].querySelector('.t754__mark')),
            images: getImages(popup),
        })
    })

    return data
}
