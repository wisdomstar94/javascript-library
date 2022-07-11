import { getCharCodeArrayToString, getCharCodeToChar, getCharToCharCode, getStringToCharCodeArray } from "./chars";

(async() => {
  const charCode = getCharToCharCode('a');
  console.log('charCode', charCode);

  const char = getCharCodeToChar(charCode);
  console.log('char', char);

  const testKey = `test key....`;
  console.log('testKey', testKey);
  const testKeyToCharCodeArray = getStringToCharCodeArray(testKey, -3);
  testKeyToCharCodeArray.forEach((item, index) => {
    console.log(index + '__', item);
  });
  const charCodeArrayToString = getCharCodeArrayToString(testKeyToCharCodeArray, 3);
  console.log('charCodeArrayToString', charCodeArrayToString);
})();