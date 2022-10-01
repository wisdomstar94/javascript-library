import { INumberUtilLibrary } from "./number-util.interface";

export const isBetweenNumber = (start: number, target: number, end: number): boolean => {
  return target >= start && target <= end;
};

export const getPureNumber = (v: number | string): number => {
  if (typeof v === 'number') {
    return v;
  }

  if (typeof v === 'string') {
    return Number(v.replace(/,/gi, ''));
  }

  return Number(v);
};

export const getMinimumMaximumBetween = (min: number, target: number, max: number) => {
  if (min > target) {
    return min;
  }

  if (max < target) {
    return max;
  }

  return target;
};

export const getEqualPartsRangeNumberInfo = (params: INumberUtilLibrary.NumberRangeBlockInfo): number[] => {
  const {
    rangeStart,
    // target,
    rangeEnd,
    equalParts,
  } = params;

  const totalSize = rangeEnd - rangeStart;
  const unitSize = totalSize / equalParts;

  const infos: number[] = [];
  for (let i = 0; i <= equalParts; i++) {
    infos.push(rangeStart + (i * unitSize));
  }

  return infos;
};
