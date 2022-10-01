export declare namespace IClientUtilLibrary {
  export type CSSStyleParam = keyof CSSStyleDeclaration;

  export interface FileNameAndTypeInfo {
    name: string;
    type: string;
  }

  export interface StyleInfo {
    key: CSSStyleParam;
    value: string;
  }

  export interface SetStyleParams {
    element: HTMLElement | HTMLInputElement | HTMLCanvasElement | null | undefined;
    styles: StyleInfo[];
  }
}
