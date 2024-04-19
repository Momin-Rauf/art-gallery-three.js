import * as THREE from 'three';
import { createPainting } from './paintings.js'; // Import the createPainting function
import { setupScene } from './setup.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
const { camera, scene, renderer} = setupScene();
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import { depth } from 'three/examples/jsm/nodes/Nodes.js';


const loader = new FontLoader();

loader.load( '../font/The Queen Marker Alternate_Regular.json', function ( font ) {

	const geometry = new TextGeometry( 'My Sketch', {
		font: font,
		size: 2,
		depth:.5,
	});

    const geometry2 = new TextGeometry( 'pencil', {
		font: font,
		size: 2,
		depth:.5,
	});
    const textMesh = new THREE.Mesh(
        geometry,[
            new THREE.MeshPhongMaterial({color:'red'}),
            new THREE.MeshPhongMaterial({color:'blue'}),
            
        ]
    );

    const textMesh1 = new THREE.Mesh(
        geometry2,[
            new THREE.MeshPhongMaterial({color:'red'}),
            new THREE.MeshPhongMaterial({color:'blue'}),
            
        ]
    );

    textMesh.castShadow = true;
    textMesh.position.y += 15; 
    textMesh.position.z -= 20;
    textMesh.position.x = -5;
    textMesh.position.y =  5;
    scene.add(textMesh);

    textMesh1.castShadow = true;
    textMesh1.position.y += 25; 
    textMesh1.position.z -= 20;
    textMesh1.position.x = 0;
    textMesh1.position.y =  3;
    scene.add(textMesh1);

} );


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
const light4 = new THREE.PointLight( 'gray', 200, 30 );
const light7 = new THREE.PointLight( 'gray', 100, 30 );
const light8 = new THREE.PointLight( 'gray', 100, 30 );
const light9 = new THREE.PointLight( 'gray', 200, 30 );
const light5 = new THREE.PointLight( 'gray', 400, 30 );

const light6 = new THREE.PointLight( 'gray', 400, 30 );
const paintlight = new THREE.PointLight( 'white', 10, 10 );
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
paintlight.position.set(17,3,5);

fontLight1.position.set(0,12,-19.5);
fontLight1.lookAt(0,0,-30);
light.castShadow = true; // default false
light1.castShadow = true;
light4.castShadow = true;
light5.castShadow = true;
paintlight.castShadow = true;
light7.castShadow = true;
light8.castShadow = true;
light9.castShadow = true;

light6.castShadow = true;
light1.castShadow = true;
scene.add(light,light5,light6,light4,fontLight1);
scene.add(light1,light7,light8,light9)
scene.add(light2,light3,paintlight);

//Set up shadow properties for the light
light.shadow.mapSize.width = 512; // default
light.shadow.mapSize.height = 512; // default
light.shadow.camera.near = 0.5; // default
light.shadow.camera.far = 500; // default





const painting10 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 10));
painting10.rotation.y = Math.PI / 2;

const painting11 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 0));
painting11.rotation.y = Math.PI / 2;


const painting12 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 20));
painting12.rotation.y = Math.PI / 2;

const painting13 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 30));
painting13.rotation.y = Math.PI / 2;


const painting14 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 50));
painting14.rotation.y = Math.PI / 2;

const painting15 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 60));
painting15.rotation.y = Math.PI / 2;


const painting16 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 70));
painting16.rotation.y = Math.PI / 2;

const painting17 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 80));
painting17.rotation.y = Math.PI / 2;


const painting18 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 90));
painting18.rotation.y = Math.PI / 2;

const painting19 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 90));
painting19.rotation.y = Math.PI / 2;


const painting20 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 10));
painting20.rotation.y = Math.PI / 2;

const painting21 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 5));
painting21.rotation.y = Math.PI / 2;


const painting22 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 10));
painting22.rotation.y = Math.PI / 2;

const painting23 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 5));
painting23.rotation.y = Math.PI / 2;


const painting24 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 10));
painting24.rotation.y = Math.PI / 2;

const painting25 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 5));
painting25.rotation.y = Math.PI / 2;


const painting26 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 10));
painting26.rotation.y = Math.PI / 2;

const painting27 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 5));
painting27.rotation.y = Math.PI / 2;


const painting28 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 10));
painting28.rotation.y = Math.PI / 2;

const painting29 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 5));
painting29.rotation.y = Math.PI / 2;



const painting30 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 10));
painting30.rotation.y = Math.PI / 2;

const painting31 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 5));
painting31.rotation.y = Math.PI / 2;



const painting32 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 10));
painting32.rotation.y = Math.PI / 2;

const painting33 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 5));
painting33.rotation.y = Math.PI / 2;



const painting34 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 10));
painting34.rotation.y = Math.PI / 2;

const painting35 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 5));
painting35.rotation.y = Math.PI / 2;



const painting36 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 10));
painting36.rotation.y = Math.PI / 2;

const painting37 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 5));
painting37.rotation.y = Math.PI / 2;



const painting38 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 10));
painting38.rotation.y = Math.PI / 2;

const painting39 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 5));
painting39.rotation.y = Math.PI / 2;






const painting1 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, 10));
painting1.rotation.y = Math.PI / 2;

const painting = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(19, 3, 5));
painting.rotation.y = Math.PI / 2;
painting.material.side = THREE.DoubleSide;



const painting3 = createPainting("../css/p1.jpg", 5, 8, new THREE.Vector3(-19.5, 3, -1));
painting3.rotation.y = Math.PI / 2;

const painting4 = createPainting("../css/p4.jpg", 5, 8, new THREE.Vector3(-19.5, 3, -10));
painting4.rotation.y = Math.PI / 2;


const painting5 = createPainting("../css/p5.jpg", 5, 5, new THREE.Vector3(15, 3, -19.5));
scene.add(painting,painting1,painting2,painting3,painting4,painting5,painting10,painting11,
painting12,painting13,painting14,painting16,painting17, painting18,painting19,painting20,painting21,painting22,painting23,painting24,
painting25,painting26,painting27,painting28,painting29,painting30,painting31,painting32,painting33,painting34,painting35,painting36,painting38,painting39);

// Plane
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('../css/floor.jpg');
const planeGeometry = new THREE.PlaneGeometry(50, 210);
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
backWall.position.z = +100;
backWall.position.y = 4;

const ceiling = new THREE.Mesh(
    new THREE.BoxGeometry(50, 220),
    new THREE.MeshStandardMaterial({ map: Ceiltexture })
);
wallGroup.add(ceiling);
ceiling.rotation.x = Math.PI / 2;
ceiling.position.y = 12;

const leftWall = new THREE.Mesh(
    new THREE.BoxGeometry(220, 20, 0.001),
    new THREE.MeshStandardMaterial({ map: walltexture })
);
wallGroup.add(leftWall);
leftWall.position.z = -5;
leftWall.rotation.y = Math.PI / 2;
leftWall.position.x = -20;
leftWall.position.y = 4;

const rightWall = new THREE.Mesh(
    new THREE.BoxGeometry(210, 20, 0.001),
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
        controls.moveRight(0.7);
    } else if (keycode == 37 || keycode == 65) {
        controls.moveRight(-0.7);
    } else if (keycode == 38 || keycode == 87) {
        controls.moveForward(0.7);
    } else if (keycode == 40 || keycode == 83) {
        controls.moveForward(-0.7);
    }
}

document.addEventListener('keydown', onkeyDown);

// Animation function
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
