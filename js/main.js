import * as THREE from 'three';
import { createPainting } from './paintings.js'; // Import the createPainting function
import { setupScene } from './setup.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import * as dat from 'dat.gui';

const { camera, scene, renderer} = setupScene();
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { initializeGUI } from './gui.js';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import { depth } from 'three/examples/jsm/nodes/Nodes.js';
import { paintingSetup } from './paintingSetup.js';

initializeGUI(scene);

const loader = new FontLoader();

loader.load( '../font/The Queen Marker Alternate_Regular.json', function ( font ) {

	const geometry = new TextGeometry( 'My Sketch', {
		font: font,
		size: 4,
		depth:.5,
	});

    const geometry2 = new TextGeometry( 'pencil', {
		font: font,
		size: 4,
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
    textMesh.position.x = -10;
    textMesh.position.y =  5;
    scene.add(textMesh);
//text
    textMesh1.castShadow = true;
    textMesh1.position.y += 25; 
    textMesh1.position.z -= 20;
    textMesh1.position.x = -10;
    textMesh1.position.y =  2;
    scene.add(textMesh1);

} );

paintingSetup(scene);
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
    new THREE.BoxGeometry(50, 30, 0.001),
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
ceiling.position.y = 20;

const leftWall = new THREE.Mesh(
    new THREE.BoxGeometry(220, 30, 0.001),
    new THREE.MeshStandardMaterial({ map: walltexture })
);
wallGroup.add(leftWall);
leftWall.position.z = -5;
leftWall.rotation.y = Math.PI / 2;
leftWall.position.x = -20;
leftWall.position.y = 4;

const rightWall = new THREE.Mesh(
    new THREE.BoxGeometry(210, 30, 0.001),
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

            
     
        if (keycode == 38 || keycode == 87) {
            if (camera.position.x <18 && camera.position.z <80 && camera.position.z > -80  && camera.position.x > -18){
                controls.moveForward(0.7);}
                else{
                    controls.moveRight(0.7);
                }
        }
     }
           
    


document.addEventListener('keydown', onkeyDown);

// Animation function
function animate() {
    requestAnimationFrame(animate);

    

    // Render the scene
    renderer.render(scene, camera);
}


animate();
