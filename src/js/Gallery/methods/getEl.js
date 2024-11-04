export function getEl(index, className) {
    const block = Object.assign(document.createElement('div'), {
        className: className,
    })

    block.dataset.index = index

    return block
}
