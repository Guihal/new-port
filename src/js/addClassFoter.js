import { elementReady } from './utils/elementReady'

export async function addClassFoter() {
    const foot = await elementReady('.uc-sticky-foot')

    foot.classList.add('uc-dark')
}
