import * as THREE from 'three';
import { createPainting } from './paintings.js'; // Import the createPainting function
import { setupScene } from './setup.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
const { camera, scene, renderer} = setupScene();

import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';



// Add paintings
const painting2 = createPainting("../css/p3.jpg", 5, 5, new THREE.Vector3(-5, 3, -19.5));
scene.add(painting2);

// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

//Create a PointLight and turn on shadows for the light
const light = new THREE.PointLight( 'gray', 100, 30 );
const light1 = new THREE.PointLight( 'gray', 100, 30 );
const light2 = new THREE.PointLight( 'gray', 100, 30 );
const light3 = new THREE.PointLight( 'gray', 100, 30 );
const light4 = new THREE.PointLight( 'green', 200, 30 );
light.position.set( 15, 10, 15 );
light1.position.set( 15, 10, -15 );
light2.position.set( -15, 10, 15 );
light3.position.set( -15, 10, -15 );
light4.position.set(0,10,0);
light.castShadow = true; // default false
light1.castShadow = true;
light4.castShadow = true;
light1.castShadow = true;
scene.add(light,light4);
scene.add(light1)
scene.add(light2,light3);

//Set up shadow properties for the light
light.shadow.mapSize.width = 512; // default
light.shadow.mapSize.height = 512; // default
light.shadow.camera.near = 0.5; // default
light.shadow.camera.far = 500; // default

// Create a sphere that cast shadows (but does not receive them)
// const sphereGeometry = new THREE.SphereGeometry( 5, 32, 32 );
// const sphereMaterial = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
// const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
// sphere.castShadow = true; //default is false
// sphere.receiveShadow = false; //default
// scene.add( sphere );

// // Create a plane that receives shadows (but does not cast them)
// const planeGeometry1 = new THREE.PlaneGeometry( 20, 20, 32, 32 );
// const planeMaterial1 = new THREE.MeshStandardMaterial( { color:'blue' } )
// const plane1 = new THREE.Mesh( planeGeometry1, planeMaterial1);
// plane1.receiveShadow = false;
// scene.add( plane1 );






const painting3 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, -1));
painting3.rotation.y = Math.PI / 2;
scene.add(painting3);

const painting4 = createPainting("../css/p4.jpg", 5, 8, new THREE.Vector3(-19.5, 3, -10));
painting4.rotation.y = Math.PI / 2;
scene.add(painting4);

const painting5 = createPainting("../css/p5.jpg", 5, 5, new THREE.Vector3(15, 3, -19.5));
scene.add(painting5);

// Plane
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('../css/floor.jpg');
const planeGeometry = new THREE.PlaneGeometry(50, 50);
const planeMaterial = new THREE.MeshStandardMaterial({ map: texture, side: THREE.DoubleSide });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2
plane.position.y = -Math.PI;
scene.add(plane);
// Pointer Lock Controls
const controls = new PointerLockControls(camera, document.body);
const play = document.getElementById('play');
play.addEventListener('click', startExperience);

function startExperience() {
    controls.lock();
    hideMenu();
}

function hideMenu() {
    const menu = document.getElementById('menu');
    menu.style.visibility = 'hidden';
}

// Walls
const wallGroup = new THREE.Group();
scene.add(wallGroup);
const walltexture = textureLoader.load('../css/ceil.jpg');
const Ceiltexture = textureLoader.load('../css/ceil.jpg');

const planeGeometry2 = new THREE.PlaneGeometry( 50, 50, 32, 32 );
const planeMaterial2 = new THREE.MeshStandardMaterial({map: walltexture });

const frontWall = new THREE.Mesh( planeGeometry2, planeMaterial2);
frontWall.receiveShadow = true;
wallGroup.add( frontWall );



frontWall.position.z -= 20;
frontWall.receiveShadow = true;
scene.add(frontWall);

const backWall = new THREE.Mesh(
    new THREE.BoxGeometry(50, 20, 0.001),
    new THREE.MeshStandardMaterial({ map: walltexture })
);
wallGroup.add(backWall);
backWall.position.z = +20;
backWall.position.y = 4;

const ceiling = new THREE.Mesh(
    new THREE.BoxGeometry(50, 50),
    new THREE.MeshStandardMaterial({ map: Ceiltexture })
);
wallGroup.add(ceiling);
ceiling.rotation.x = Math.PI / 2;
ceiling.position.y = 12;

const leftWall = new THREE.Mesh(
    new THREE.BoxGeometry(50, 20, 0.001),
    new THREE.MeshStandardMaterial({ map: walltexture })
);
wallGroup.add(leftWall);
leftWall.position.z = -5;
leftWall.rotation.y = Math.PI / 2;
leftWall.position.x = -20;
leftWall.position.y = 4;

const rightWall = new THREE.Mesh(
    new THREE.BoxGeometry(50, 20, 0.001),
    new THREE.MeshStandardMaterial({ map: walltexture })
);
wallGroup.add(rightWall);
rightWall.position.z = -5;
rightWall.rotation.y = Math.PI / 2;
rightWall.position.x = 20;
rightWall.position.y = 4;

const x = document.getElementById('back');
x.addEventListener('click', () => {
    const menu = document.getElementById('menu');
    menu.style.display = 'block';
});

function onkeyDown(event) {
    let keycode = event.which;

    if (keycode == 39 || keycode == 68) {
        controls.moveRight(0.1);
    } else if (keycode == 37 || keycode == 65) {
        controls.moveRight(-0.1);
    } else if (keycode == 38 || keycode == 87) {
        controls.moveForward(0.1);
    } else if (keycode == 40 || keycode == 83) {
        controls.moveForward(-0.1);
    }
}

document.addEventListener('keydown', onkeyDown);

// Animation function
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
