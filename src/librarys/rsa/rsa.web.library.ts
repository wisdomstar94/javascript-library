import { JSEncrypt } from 'jsencrypt';
import { IRsa } from './rsa.interface';

export abstract class RsaWeb {
  static rsaEncrypt(data: string, key: string, keyType: IRsa.KeyType): string {
    let sign = new JSEncrypt();
    if (keyType === 'private') {
      sign.setPrivateKey(key);
    } else {
      sign.setPublicKey(key);
    }

    return sign.encrypt(data).toString();
  };

  static rsaDecrypt(encData: string, key: string, keyType: IRsa.KeyType): string {
    let sign = new JSEncrypt();
    if (keyType === 'private') {
      sign.setPrivateKey(key);
    } else {
      sign.setPublicKey(key);
    }

    return sign.decrypt(encData).toString();
  };
}
