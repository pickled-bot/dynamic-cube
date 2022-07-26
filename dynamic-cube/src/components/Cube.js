import React from 'react';
// import PropTypes from 'prop-types';
import * as THREE from 'three';

const Cube = (props) => {

    const mainCube = () => {
        const canvas = document.querySelector('#canvas');
        const renderer = new THREE.WebGLRenderer({canvas});

        //camera//
        // field of view, vertical direction, in degrees //
        const fov = 75;
        // display aspect of canvas // 
        const aspect = 2; // the canvas default
        // near and far represent the rendered space in front of camera
        const near = 0.1;
        const far = 5;
        // camera "frustrum" - 3D pyramid
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

        // cameras position // 
        camera.position.z = 2;

        // creating a scene
        const scene = new THREE.Scene();

        const boxWidth = 3;
        const boxHeight = 3;
        const boxDepth = 3;
        const bwSegments = 3;
        const bhSegments = 3;
        const bdSegments = 3;
        
        const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth,
            bwSegments, bhSegments, bdSegments);


        const material = new THREE.MeshBasicMaterial({color: "#ffccd5"});

        const cube = new THREE.Mesh(geometry, material);

        scene.add(cube);

        renderer.render(scene,camera);
    };
    

    return (
        <body>
            <canvas id="canvas">{mainCube()}</canvas>
        </body>
    );

}

export default Cube;
