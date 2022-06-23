import { getRandomNumber } from "../../random-number/all/random-number";
import { getRandomString } from "../../random-string/all/random-string";

export const getRandomToken = (strLength: number): string => {
  const timestamp = new Date().getTime();
  const timestamp_length = timestamp.toString().length;
  const str_max_length = strLength - timestamp_length;
  const first_length = getRandomNumber(1, str_max_length);
  const second_length = str_max_length - first_length;
  return ''.concat(
    getRandomString(first_length),
    new Date().getTime().toString(),
    getRandomString(second_length),
  );
};
