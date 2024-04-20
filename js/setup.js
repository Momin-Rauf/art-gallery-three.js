import * as THREE from 'three';

export function setupScene() {
    const scene = new THREE.Scene();

    // Set camera position and orientation
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 4, 5); // Move the camera back 5 units
    scene.add(camera);

    // Create a WebGL renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight); // Set renderer size to match window size
    renderer.setClearColor(0xffffff, 1);
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    return { scene, camera, renderer };
}
