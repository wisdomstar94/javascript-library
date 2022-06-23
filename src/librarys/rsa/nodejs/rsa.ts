import NodeRSA from 'node-rsa';

export const rsaEncrypt = (data: string, key: string, keyType: 'public' | 'private'): string => {
  let rsaKey = key;

  if (keyType === 'private') {
    if (!rsaKey.includes('-----BEGIN PRIVATE KEY-----')) {
      rsaKey = '-----BEGIN PRIVATE KEY-----' + rsaKey;
    }
    if (!rsaKey.includes('-----END PRIVATE KEY-----')) {
      rsaKey = rsaKey + '-----END PRIVATE KEY-----';
    }

    const privateKey = new NodeRSA(rsaKey);
    return privateKey.encrypt(data, 'base64');
  } else {
    if (!rsaKey.includes('-----BEGIN PUBLIC KEY-----')) {
      rsaKey = '-----BEGIN PUBLIC KEY-----' + rsaKey;
    }
    if (!rsaKey.includes('-----END PUBLIC KEY-----')) {
      rsaKey = rsaKey + '-----END PUBLIC KEY-----';
    }

    const publicKey = new NodeRSA(rsaKey);
    return publicKey.encrypt(data, 'base64');
  }
};

export const rsaDecrypt = (encData: string, key: string, keyType: 'public' | 'private'): string => {
  let rsaKey = key;

  if (keyType === 'private') {
    if (!rsaKey.includes('-----BEGIN PRIVATE KEY-----')) {
      rsaKey = '-----BEGIN PRIVATE KEY-----' + rsaKey;
    }
    if (!rsaKey.includes('-----END PRIVATE KEY-----')) {
      rsaKey = rsaKey + '-----END PRIVATE KEY-----';
    }

    const privateKey = new NodeRSA(rsaKey);
    return privateKey.decrypt(encData, 'utf8');
  } else {
    if (!rsaKey.includes('-----BEGIN PUBLIC KEY-----')) {
      rsaKey = '-----BEGIN PUBLIC KEY-----' + rsaKey;
    }
    if (!rsaKey.includes('-----END PUBLIC KEY-----')) {
      rsaKey = rsaKey + '-----END PUBLIC KEY-----';
    }

    const publicKey = new NodeRSA(rsaKey);
    return publicKey.decrypt(encData, 'utf8');
  }
};
