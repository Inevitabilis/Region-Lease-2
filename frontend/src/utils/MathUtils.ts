

type ClampArgs = {
    top?: number;
    bottom?: number;
};

export function clamp(x: number, {top, bottom} : ClampArgs):number {
    if(!(bottom === undefined) && x < bottom) return bottom;
    if(!(top === undefined) && x > top) return top;
    return x;
}