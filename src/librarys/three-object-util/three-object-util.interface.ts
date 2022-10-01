import * as CANNON from 'cannon-es';

export declare namespace IThreeObjectLibrary {
  export type CannonObjectType = 'box' | 'sphere';

  export interface ThreeCannonObjectParams {
    world: CANNON.World;
    scene: THREE.Scene | undefined;
    threeObject: () => THREE.Object3D<any>;
    cannonObject: (object: THREE.Object3D<any>) => CANNON.Body;
  }

  export interface GetObjectRequireParams {
    event: MouseEvent | null;
    camera: THREE.PerspectiveCamera;
    scene: THREE.Scene;
    canvasElement: HTMLCanvasElement;
  }

  export interface GetObjectFromExternalParams {
    path: string;
  }

  export interface GetTextureFromExternalParams {
    path: string;
    manager?: THREE.LoadingManager;
  }
}
