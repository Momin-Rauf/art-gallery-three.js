import { createPainting } from "./paintings";
import * as THREE from 'three';
export function paintingSetup(scene){




// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

//Create a PointLight and turn on shadows for the light
const light = new THREE.PointLight( 'gray', 100, 30 );
const light1 = new THREE.PointLight( 'gray', 100, 30 );
const light2 = new THREE.PointLight( 'gray', 100, 30 );
const light3 = new THREE.PointLight( 'gray', 100, 30 );
const light4 = new THREE.PointLight( 'gray', 200, 30 );
const light7 = new THREE.PointLight( 'gray', 100, 30 );
const light8 = new THREE.PointLight( 'gray', 100, 30 );
const light9 = new THREE.PointLight( 'gray', 200, 30 );
const light5 = new THREE.PointLight( 'gray', 400, 30 );

const light6 = new THREE.PointLight( 'gray', 400, 30 );
const fontLight1 = new THREE.RectAreaLight('gray',0.5,150,25);
light.position.set( 15, 10, 30 );
light5.position.set( 15, 10, 60 );


light6.position.set( 15, 10, 90 );

light7.position.set( -15, 10, 30 );
light8.position.set( -15, 10, 60 );
light9.position.set( -15, 10, 90 );

light1.position.set( 15, 10, -15 );
light2.position.set( -15, 10, 15 );
light3.position.set( -15, 10, -15 );
light4.position.set(0,10,0);

fontLight1.position.set(0,20,-19.5);
fontLight1.lookAt(0,0,-30);
light.castShadow = true; // default false
light1.castShadow = true;
light4.castShadow = true;
light5.castShadow = true;
light7.castShadow = true;
light8.castShadow = true;
light9.castShadow = true;

light6.castShadow = true;
light1.castShadow = true;
scene.add(light,light5,light6,light4,fontLight1);
scene.add(light1,light7,light8,light9)

//Set up shadow properties for the light
light.shadow.mapSize.width = 512; // default
light.shadow.mapSize.height = 512; // default
light.shadow.camera.near = 0.5; // default
light.shadow.camera.far = 500; // default



// Add paintings'

// const painting1 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 10));
// painting1.rotation.y = Math.PI / 2;

// const painting = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(19, 3, 5));
// painting.rotation.y = Math.PI / 2;
// painting.material.side = THREE.DoubleSide;
// const paintlight = new THREE.PointLight( 'white', 10, 10 );
// paintlight.position.set(17,3,5);
// paintlight.castShadow = true;



// const painting3 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, -1));
// painting3.rotation.y = Math.PI / 2;

// const painting4 = createPainting("../css/p4.jpg", 5, 8, new THREE.Vector3(-19.5, 3, -10));
// painting4.rotation.y = Math.PI / 2;


// const painting2 = createPainting("../css/p3.jpg", 5, 5, new THREE.Vector3(-5, 3, -19.5));
// scene.add(painting2);

// const painting10 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 10));
// painting10.rotation.y = Math.PI / 2;

// const painting11 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 0));
// painting11.rotation.y = Math.PI / 2;


// const painting12 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 20));
// painting12.rotation.y = Math.PI / 2;

// const painting13 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 30));
// painting13.rotation.y = Math.PI / 2;


// const painting14 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 50));
// painting14.rotation.y = Math.PI / 2;

// const painting15 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 60));
// painting15.rotation.y = Math.PI / 2;


// const painting16 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 70));
// painting16.rotation.y = Math.PI / 2;

// const painting17 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 80));
// painting17.rotation.y = Math.PI / 2;


// const painting18 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 90));
// painting18.rotation.y = Math.PI / 2;

// const painting19 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 90));
// painting19.rotation.y = Math.PI / 2;


// const painting20 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 10));
// painting20.rotation.y = Math.PI / 2;

// const painting21 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 5));
// painting21.rotation.y = Math.PI / 2;


// const painting22 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 10));
// painting22.rotation.y = Math.PI / 2;

// const painting23 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 5));
// painting23.rotation.y = Math.PI / 2;


// const painting24 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 10));
// painting24.rotation.y = Math.PI / 2;

// const painting25 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 5));
// painting25.rotation.y = Math.PI / 2;
// scene.add(painting25);

// const painting26 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 10));
// painting26.rotation.y = Math.PI / 2;

// const painting27 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 5));
// painting27.rotation.y = Math.PI / 2;


// const painting28 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 10));
// painting28.rotation.y = Math.PI / 2;

// const painting29 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 5));
// painting29.rotation.y = Math.PI / 2;



// const painting30 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 10));
// painting30.rotation.y = Math.PI / 2;

// const painting31 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 5));
// painting31.rotation.y = Math.PI / 2;



// const painting32 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 10));
// painting32.rotation.y = Math.PI / 2;

// const painting33 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 5));
// painting33.rotation.y = Math.PI / 2;



// const painting34 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 10));
// painting34.rotation.y = Math.PI / 2;

// const painting35 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 5));
// painting35.rotation.y = Math.PI / 2;



// const painting36 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 10));
// painting36.rotation.y = Math.PI / 2;

// const painting37 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 5));
// painting37.rotation.y = Math.PI / 2;



// const painting38 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 10));
// painting38.rotation.y = Math.PI / 2;

const createPhoto=(p,x,y,z,P,J,K,L,PaintLight)=>{
P = createPainting(`../css/p${p}.jpg`, 10, 10, new THREE.Vector3(x, y, z));
P.rotation.y = Math.PI / 2;
P.material.side = THREE.DoubleSide;
const paintlight = new THREE.PointLight( 'white', 5, 5 );
paintlight.position.set(J,K,L);
paintlight.castShadow = true;
paintlight.castShadow = true;
scene.add(paintlight,P)
}

let x = 19;
let y = 6;
let z = -10;

let j = 17;
let k = 6;
let l = -10;
for (let index = 0; index < 7; index++) {
    z=z+15;
    l=l+15;
    createPhoto(index,x,y,z,`p${index}`,j,k,l,`pa${index}`);
}


let x1 = -19.5;
let y1 = 6;
let z1 = -15;

let j1 = -17;
let k1 = 6;
let l1 = -15;

for (let index = 8; index < 14; index++) {
    z1=z1+15;
    l1=l1+15;
    console.log(index);
    createPhoto(index,x1,y1,z1,`p${index}`,j1,k1,l1,`pa${index}`);
}




}