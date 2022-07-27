import React from 'react';
// import PropTypes from 'prop-types';
import * as THREE from 'three';
import threeOrbitControls from 'three-orbit-controls';
import oc from 'three-orbit-controls';


const Cube = (props) => {
        // create a scene //
        const scene = new THREE.Scene();
        scene.background = new THREE.Color("#2f3e46");

        // !! create renderer !! //
        const renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setPixelRatio(window.devicePixelRatio.pixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        
        // introducing OrbitControls
        const OrbitControls = oc(THREE);

        //camera//
        // field of view, vertical direction, in degrees //
        const fov = 75;
        // display aspect of canvas // 
        const aspect = (window.innerWidth / window.innerHeight); // the canvas default
        // near and far represent the rendered space in front of camera
        const near = 0.1;
        const far =  100;
        // camera "frustrum" - 3D pyramid
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        // cameras position // 
        camera.position.z = 1.5;
    
        
        // controls.update();

        // const controls = new OrbitControls(camera, renderer.domElement);
    

    
    
    
        const boxWidth = 1;
        const boxHeight = 1;
        const boxDepth = 1;
        const bwSegments = 1;
        const bhSegments = 1;
        const bdSegments = 1;
        
        const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth,
            bwSegments, bhSegments, bdSegments);
    
        const material = new THREE.MeshBasicMaterial({color: "#84a98c"});
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        // controls.update();
        
        const toggleAnimate = () => {
            const animate = true;
            if (animate) {
                cube.rotation.x += 0.005;
                cube.rotation.y += 0.005;
                requestAnimationFrame( toggleAnimate );
                // controls.update();
                renderer.render(scene, camera);
            } else {
                cube.rotation.x += 0;
                cube.rotation.y += 0;
                requestAnimationFrame( toggleAnimate );
                // controls.update();
            }; 
        };
        toggleAnimate();

        const onWindowResize = () => {
            camera.aspect = (window.innerWidth)/(window.innerHeight);
            camera.updateProjectionMatrix();

            renderer.setSize((window.innerWidth), (window.innerHeight));
            // controls.update();
            handleRender();
        };

        const handleRender = () => {
            renderer.render(scene, camera);
            // controls.update();
        };
        
        onWindowResize();

    return (
        <canvas id="canvas">{Cube}</canvas>
    );

};

export default Cube;
