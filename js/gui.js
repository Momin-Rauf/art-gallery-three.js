import * as dat from 'dat.gui';

export function initializeGUI(scene) {
    const gui = new dat.GUI();
    const parameters = {
        lightIntensity: 100,
        lightColor: '#ffffff'
    };

    gui.add(parameters, 'lightIntensity', 100, 200); // Control light intensity
    gui.addColor(parameters, 'lightColor').onChange((color) => {
        // Update light colors in the scene
        scene.traverse((child) => {
            if (child.isLight) {
                child.color.set(color);
            }
        });
    });


    


}

