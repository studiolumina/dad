
export const headingSizes = (level:number|`${number}`) => {
    level = +level;
    const fontSizes = [
        8,
        6,
        4,
        3,
        2,
        1
    ]
    return fontSizes[level - 1] ?? fontSizes[0];
}