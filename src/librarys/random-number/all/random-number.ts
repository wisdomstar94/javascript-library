export const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomNumberFromRange = (range: {min: number, max: number}[]): number => {
  const random = getRandomNumber(0, range.length - 1);
  const randomValues = range.map(x => getRandomNumber(x.min, x.max));
  return randomValues[random];
};