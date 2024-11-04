export function addElsInBlock(context, block, length, className) {
    for (let i = 0; i < length; i++) {
        const el = context.getEl(i, className)

        block.append(el)
    }
}
