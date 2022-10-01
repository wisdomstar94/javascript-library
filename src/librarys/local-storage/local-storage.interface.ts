export declare namespace ILocalStorageLibrary {
  export interface SetParams {
    name: string;
    value: string;
    encryptKey?: string;
  }

  export interface GetAndRemoveParams {
    name: string;
    decryptKey?: string;
  }
}
