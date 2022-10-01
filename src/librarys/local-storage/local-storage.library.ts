import { aesDecrypt, aesEncrypt } from "../aes-256-cbc/aes-256-cbc.library";
import { ILocalStorageLibrary } from "./local-storage.interface";


export const setLocalStorageValue = (params: ILocalStorageLibrary.SetParams): void => {
  let value = params.value;
  if (typeof params.encryptKey === 'string') {
    value = aesEncrypt(value, params.encryptKey);
  }
  localStorage.setItem(params.name, value);
};

export const getLocalStorageValue = (params: ILocalStorageLibrary.GetAndRemoveParams): string | null => {
  let value = localStorage.getItem(params.name);
  if (typeof params.decryptKey === 'string' && value !== null) {
    value = aesDecrypt(value, params.decryptKey);
  }
  return value;
};

export const removeLocalStorageValue = (params: ILocalStorageLibrary.GetAndRemoveParams): void => {
  localStorage.removeItem(params.name);
};
