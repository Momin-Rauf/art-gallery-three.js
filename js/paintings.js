import * as THREE from 'three';

// Paintings
export function createPainting(imageURL, width, height, position) {
    const textureLoader = new THREE.    TextureLoader();
    const paintingTexture = textureLoader.load(imageURL);

    const paintingMaterial = new THREE.MeshBasicMaterial({ map: paintingTexture });
    const paintingGeometry = new THREE.PlaneGeometry(width, height);
    const painting = new THREE.Mesh(paintingGeometry, paintingMaterial);

    painting.position.set(position.x, position.y, position.z);

    return painting;
}
