import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { IThreeObjectLibrary } from './three-object-util.interface';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export class ThreeCannonObject {
  world: CANNON.World;
  scene?: THREE.Scene;
  threeObject: THREE.Object3D<any>;
  cannonObject: CANNON.Body;

  constructor(params: IThreeObjectLibrary.ThreeCannonObjectParams) {
    this.world = params.world;
    this.scene = params.scene;

    this.threeObject = params.threeObject();
    this.cannonObject = params.cannonObject(this.threeObject);

    this.cannonObject.position.copy(new CANNON.Vec3(
      this.threeObject.position.x,
      this.threeObject.position.y,
      this.threeObject.position.z,
    ));

    this.world.addBody(this.cannonObject);
    this.scene?.add(this.threeObject);
  }

  update(): void {
    this.threeObject.position.x = this.cannonObject.position.x;
    this.threeObject.position.y = this.cannonObject.position.y;
    this.threeObject.position.z = this.cannonObject.position.z;
  }
}

const getIntersects = (params: IThreeObjectLibrary.GetObjectRequireParams) => {
  if (params.event === null) {
    return [];
  }
  params.event.preventDefault();

  //  Statement  raycaster  and  mouse  Variable
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  const rect = params.canvasElement.getBoundingClientRect();

  //  Click the location with the mouse , To calculate the  raycaster  The location of the desired point , Focus on the screen , Range  -1  To  1
  mouse.x = ( ( params.event.clientX - rect.left ) / ( rect.right - rect.left ) ) * 2 - 1;
  mouse.y = - ( ( params.event.clientY - rect.top ) / ( rect.bottom - rect.top) ) * 2 + 1;

  // Location by mouse click ( Two dimensional coordinates ) And the matrix of the current camera
  raycaster.setFromCamera(mouse, params.camera);

  //  To obtain and raycaster A collection of arrays where rays intersect , The elements are sorted by distance , The closer it is, the more forward it is
  const intersects = raycaster.intersectObjects(params.scene.children);

  // Returns an array of selected objects
  return intersects;
};

export const getObjectFromMouseEvent = (params: IThreeObjectLibrary.GetObjectRequireParams): null | THREE.Object3D<THREE.Event> => {
  if (params.event === null) {
    return null;
  }

  const intersects = getIntersects({
    event: params.event,
    camera: params.camera,
    scene: params.scene,
    canvasElement: params.canvasElement,
  });

  if (intersects.length > 0) {
    const object = intersects[0].object;
    return object;
  }

  return null;
};

export const getObjectFromExternal = (params: IThreeObjectLibrary.GetObjectFromExternalParams) => {
  return new Promise<GLTF>(function(resolve, reject) {
    const loader = new GLTFLoader();
    loader.load(params.path, function (gltf) {
      console.log('???', gltf);
      resolve(gltf);
    });
  });
};

export const getTextureFromExternal = (params: IThreeObjectLibrary.GetTextureFromExternalParams) => {
  return new Promise<THREE.Texture>(function(resolve, reject) {
    const texture = new THREE.TextureLoader(params.manager);
    texture.load(params.path, function (texture) {
      resolve(texture);
    });
  });
};
