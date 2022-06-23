import { JSEncrypt } from 'jsencrypt';

export const rsaEncrypt = (data: string, key: string, keyType: 'public' | 'private'): string => {
  let sign = new JSEncrypt();
  if (keyType === 'private') {
    sign.setPrivateKey(key);
  } else {
    sign.setPublicKey(key);
  }

  return sign.encrypt(data).toString();
};

export const rsaDecrypt = (encData: string, key: string, keyType: 'public' | 'private'): string => {
  let sign = new JSEncrypt();
  if (keyType === 'private') {
    sign.setPrivateKey(key);
  } else {
    sign.setPublicKey(key);
  }

  return sign.decrypt(encData).toString();
};

// function test() {
//   const data = 'hello! ha. ha.';
//   console.log('data', data);
//   const dataEnc = rsaEncrypt(data, getSamplePublicKey(), 'public');
//   console.log('dataEnc', dataEnc);
//   const dataDec = rsaDecrypt(dataEnc, getSamplePrivateKey(), 'private');
//   console.log('dataDec', dataDec);
// }
// test();