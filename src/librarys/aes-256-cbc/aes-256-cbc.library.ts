import { AES, enc } from 'crypto-js';

export const aesEncrypt = (data: string, key: string): string => {
  const dataWA = enc.Utf8.parse(data);
  const keyWA = enc.Utf8.parse(key);
  const ivWA = enc.Utf8.parse(key.substring(0, 16));

  const cipher = AES.encrypt(dataWA, keyWA, { iv: ivWA });
  return cipher.ciphertext.toString(enc.Base64url); // url query 파라미터 대응하기 위해 일반 base64 가 아닌 base64url 로 변환
};

export const aesDecrypt = (encData: string, key: string): string => {
  const keyWA = enc.Utf8.parse(key);
  const ivWA = enc.Utf8.parse(key.substring(0, 16));

  const cipher = AES.decrypt(enc.Base64url.parse(encData.replace(/=/gi, '')).toString(enc.Base64), keyWA, { iv: ivWA }); // 해쉬된 값이 url encode 일 수도 있으므로 base64url 로 파싱하고 다시 base64 로 인코딩
  return cipher.toString(enc.Utf8);
};
