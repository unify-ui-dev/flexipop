import { Dimensions, ElementType } from "./types";

export const getDimensions = ({ reference, popper }: ElementType): Dimensions => {
    const popperRect = popper.getBoundingClientRect();
    const refRect = reference.getBoundingClientRect();
    return {
        popperHeight: popperRect.height,
        popperWidth: popperRect.width,
        refHeight: refRect.height,
        refWidth: refRect.width,
        refLeft: refRect.left,
        refTop: refRect.top,
        refRight: refRect.right
    };
};

