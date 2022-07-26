import './App.css';
import React from 'react';
import Cube from './components/Cube.js';
import * as THREE from 'three';

function App() {
  const mainCube = () => {
    // creating a scene
    const scene = new THREE.Scene();
    const canvas = document.querySelector('#canvas');
    const renderer = new THREE.WebGLRenderer({canvas});

    //camera//
    // field of view, vertical direction, in degrees //
    const fov = 75;
    // display aspect of canvas // 
    const aspect = window.innerWidth / window.innerHeight; // the canvas default
    // near and far represent the rendered space in front of camera
    const near = 0.1;
    const far =  1000;
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

    renderer.render(scene, camera);
  };

  return (
    <body>
      <header>
        <h1>dynamic cube generator</h1>
      </header>
      <main>
        <Cube />
        {mainCube()}
      </main>

      <footer>
      </footer>
    </body>
  );
}

export default App;
