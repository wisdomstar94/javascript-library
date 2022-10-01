import { BackEasingFactory, interpolate } from "d3";

/**
 * @description 사용예제 : const plusIconScale = scaleLinear().domain([100, 400]).interpolate(easeInterpolate(easeBackOut)).range([0, 1]);
 */
export const easeInterpolate = (ease: BackEasingFactory | ((a: number) => number)) => {
  return function(a: any, b: any) {
    const i = interpolate(a, b);
    return function(t: any) {
        return i(ease(t));
    };
  };
};

