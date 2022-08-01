import './App.css';
import React, {useState, useEffect, useRef} from 'react';
// import Cube from './components/Cube.js';
import * as THREE from 'three';
import {Canvas, useFrame} from '@react-three/fiber';

function App() {
  const [buttonText, setButtonText] = useState("rotation off");
  const animate = useRef(true);
  let newText = "";

  const rotationButtonTxtToggle = () => {
    if (buttonText === "rotation off") {
      newText = "rotation on";
    } else {
      newText = "rotation off"
    }
    setButtonText(newText);
    // setAnimate();
  };

  // const setAnimate = () => {
  //   animate.current = !animate.current;
  // };

    const mountRef = useRef(null);
    
    useEffect(() => {
      console.log("inside useEffect");
    // physical components of cube 
    
    // create a scene //
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#2f3e46");

    // !! create renderer !! //
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setPixelRatio(window.devicePixelRatio.pixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement); // is there a better way to do this with react 
    

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

    // let controls = new threeOrbitControls(camera, renderer.domElement);
    // controls.listenToKeyEvents(window);
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

      // controls !!
      // const controls = new DragControls( cube, camera, renderer.domElement);
      // controls.addEventListener('dragstart', function(event)
      // {
      //   event.object.material.emissive.set(0x000000);
      // });
      
      const toggleAnimate = () => {
        if (buttonText === "rotation off") {
          cube.rotation.x += 0.005;
            cube.rotation.y += 0.005;
            requestAnimationFrame( toggleAnimate );
            // controls.update();
            renderer.render(scene, camera);
        } else if (buttonText === "rotation on") {
            cube.rotation.x = 0;
            cube.rotation.y = 0;
            // requestAnimationFrame( !toggleAnimate );
            renderer.render(scene, camera);
            requestAnimationFrame(toggleAnimate.paused())
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
    return () => mountRef.current.removeChild(renderer.domElement);
  }, []);


  // toggleRotation function
  // pass in the animate() function
  // create a state handler for rotation and set rotation (true/false)
  // default is on 
  // button text is "rotate off"
  // if rotation is turned off
  // change the rotation speed to x 0/ y 0
  // change the button text to "rotate on"
  // if rotation turned back onto true
  // set rotation speed to x 0.1 /  y 0.1

  // add on click for the button toggle
  

  return (
    <div>
      <main>
        <h1>dynamic cube generator</h1>
        <button onClick={rotationButtonTxtToggle}>{buttonText}</button>
        <div ref={mountRef}></div>
        {/* {useEffect()} */}
      </main>
    </div>
  );
}

export default App;
