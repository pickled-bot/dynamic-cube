import React from 'react';
// import PropTypes from 'prop-types';
import * as THREE from 'three';


const Cube = (props) => {
        // creating a scene
        const scene = new THREE.Scene();
        // const canvas = document.querySelector('#canvas');
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
    
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
        camera.position.z = 2;
    
    
        const boxWidth = 1;
        const boxHeight = 1;
        const boxDepth = 1;
        const bwSegments = 1;
        const bhSegments = 1;
        const bdSegments = 1;
        
        const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth,
            bwSegments, bhSegments, bdSegments);
    
    
        const material = new THREE.MeshBasicMaterial({color: "purple"});
    
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        
        const toggleAnimate = () => {
            const animate = true;
            if (animate) {
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
                requestAnimationFrame( toggleAnimate );
                renderer.render(scene, camera);
            } else {
                cube.rotation.x += 0;
                cube.rotation.y += 0;
                requestAnimationFrame( toggleAnimate );
            }; 
        };
        toggleAnimate();

        const onWindowResize = () => {
            camera.aspect = (window.innerWidth)/(window.innerHeight);
            camera.updateProjectionMatrix();

            renderer.setSize((window.innerWidth), (window.innerHeight));
            handleRender();
        };

        const handleRender = () => {
            renderer.render(scene, camera);
        };
        
        onWindowResize();

    return (
        <canvas id="canvas">{Cube}</canvas>
    );

};

export default Cube;
