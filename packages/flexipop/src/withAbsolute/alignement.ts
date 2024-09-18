export const canBeAlignedOnMiddleXAbsolute = (popperWidth: number, refWidth: number, refLeft: number, windowWidth: number): boolean => {
    const spaceOnLeft = refLeft;
    const spaceOnRight = windowWidth - (refLeft + refWidth);
    return spaceOnLeft >= (popperWidth - refWidth) / 2 && spaceOnRight >= (popperWidth - refWidth) / 2;
};

export const canBeAlignedOnMiddleYAbsolute = (popperHeight: number, refHeight: number, refTop: number, windowHeight: number): boolean => {
    return (popperHeight - refHeight) / 2 <= refTop &&
        refTop + popperHeight / 2 + refHeight / 2 <= windowHeight;
};

export const adjustYForTopVisibilityAbsolute = (
    canAdjustYToFitTop: () => boolean,
    canAdjustYToFitBottom: () => boolean,
    refTop: number, refHeight: number, popperHeight: number): number => {

    return refTop > popperHeight - refHeight ?
        (
            canAdjustYToFitBottom() ? window.innerHeight - (popperHeight + refTop)
                : -popperHeight
        ) :
        canAdjustYToFitTop() ? -refTop : refHeight;
};

export const canAdjustYToFitBottomAbsolute = (
    refTop: number,
    refHeight: number,
    popperHeight: number,
    windowHeight: number
): boolean => {
    return refTop <= windowHeight &&
        popperHeight - refTop <= refHeight;
};

export const canAdjustYToFitTopAbsolute = (refTop: number, refHeight: number, popperHeight: number, windowHeight: number): boolean => {
    return popperHeight <= windowHeight && -refTop <= refHeight;
};

export const adjustXForVisibilityAbsolute = (
    canAdjustXToFitRightAbsolute: () => boolean,
    refLeft: number, popperWidth: number, windowWidth: number,
    refWidth: number
) => {
    const spaceOnLeft = refLeft;
    const spaceOnRight = windowWidth - (popperWidth + refLeft);
    return canAdjustXToFitRightAbsolute() ? -refLeft : spaceOnLeft > spaceOnRight && windowWidth - (popperWidth + refLeft -refWidth) + popperWidth <= windowWidth ?
     windowWidth - (popperWidth + refLeft) :-refLeft;
}

export const canAdjustXToFitRightAbsolute = (refLeft: number,
    windowWidth: number, popperWidth: number, refWidth: number) => {
    return windowWidth - (refLeft + refWidth) >= popperWidth && windowWidth - (popperWidth + refLeft) <= windowWidth
}