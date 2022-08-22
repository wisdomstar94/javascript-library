export const addComma = (numberValue: number | string): string => {
  let returnValue = '';
  if (typeof numberValue === 'number') {
    returnValue = numberValue.toString().replace(/,/gi, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else if (typeof numberValue === 'string') {
    returnValue = numberValue.replace(/,/gi, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return returnValue;
};
