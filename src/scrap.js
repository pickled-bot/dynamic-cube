// !!!!! wave 2 graveyard !!!!
// components Cube.js

// const Cube = (props) => {
//     // physical components of cube 
    
//     // create a scene //
//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color("#2f3e46");

//     // !! create renderer !! //
//     const renderer = new THREE.WebGLRenderer({antialias: true});
//     renderer.setPixelRatio(window.devicePixelRatio.pixelRatio);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement); // is there a better way to do this with react 
    

//     //camera//
//     // field of view, vertical direction, in degrees //
//     const fov = 75;
//     // display aspect of canvas // 
//     const aspect = (window.innerWidth / window.innerHeight); // the canvas default
//     // near and far represent the rendered space in front of camera
//     const near = 0.1;
//     const far =  100;
//     // camera "frustrum" - 3D pyramid
//     const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
//     // cameras position // 
//     camera.position.z = 1.5;

//     // let controls = new threeOrbitControls(camera, renderer.domElement);
//     // controls.listenToKeyEvents(window);
//     // controls.update();

//     // const controls = new OrbitControls(camera, renderer.domElement);





//     const boxWidth = 1;
//     const boxHeight = 1;
//     const boxDepth = 1;
//     const bwSegments = 1;
//     const bhSegments = 1;
//     const bdSegments = 1;
    
//     const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth,
//         bwSegments, bhSegments, bdSegments);

//     const material = new THREE.MeshBasicMaterial({color: "#84a98c"});
//     const cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);
//     // controls.update();
    
//     const toggleAnimate = () => {
//         const animate = true;
//         if (animate) {
//             cube.rotation.x += 0.005;
//             cube.rotation.y += 0.005;
//             requestAnimationFrame( toggleAnimate );
//             // controls.update();
//             renderer.render(scene, camera);
//         } else {
//             cube.rotation.x += 0;
//             cube.rotation.y += 0;
//             requestAnimationFrame( toggleAnimate );
//             // controls.update();
//         }; 
//     };
//     toggleAnimate();

//     const onWindowResize = () => {
//         camera.aspect = (window.innerWidth)/(window.innerHeight);
//         camera.updateProjectionMatrix();

//         renderer.setSize((window.innerWidth), (window.innerHeight));
//         // controls.update();
//         handleRender();
//     };

//     window.addEventListener("resize", onWindowResize, false);

//     const handleRender = () => {
//         renderer.render(scene, camera);
//         // controls.update();
//     };
    

// return (
//     <canvas id="canvas">{Cube}</canvas>
// );

// };


/// Cube.js scrap 2

// import React, { useRef, useState} from 'react';
// // import PropTypes from 'prop-types';
// // import threeOrbitControls from 'three-orbit-controls';
// import * as THREE from 'three';
// import {useLoader, useFrame, useThree} from "@react-three/fiber";
// import { BoxGeometry } from 'three';


// let x = 0;
// let y = 0;
// let z = 0;

// const Cube = ({x, y, z, animate}) =>{
    // const mesh = useRef();
    // // const ref =  useRef(null);

    // const [active, setActive] = useState(false);
    
    // // create a scene //
    // const scene = new THREE.Scene();
    // scene.background = new THREE.Color("#2f3e46");
    
    // !! create renderer !! //
    // const renderer = new THREE.WebGLRenderer({antialias: true});
    // renderer.setPixelRatio(window.devicePixelRatio.pixelRatio);
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.appendChild(renderer.domElement); // is there a better way to do this with react 

    // const renderCube = (toggleAnimate) => {
        
    //     return <Cube 
    //             // x = {x}
    //             // y = {y}
    //             // z = {z}
    //             toggleAnimate ={toggleAnimate}
    //             />
    // };
    
    
    // const OrbitControls = oc(THREE);
    // const controls = new OrbitControls(camera, renderer.domElement);
    // controls.keyPanSpeed = 2;
    // controls.rotateSpeed = 2;
    // controls.maxDistance = 10;
    // controls.listenToKeyEvents(window);
    // controls.update();
    
    // const controls = new OrbitControls(camera, renderer.domElement);
    
    // const boxWidth = 1;
    // const boxHeight = 1;
    // const boxDepth = 1;
    // const bwSegments = 1;
    // const bhSegments = 1;
    // const bdSegments = 1;
    
    // const boxDimensions = [
    //     boxWidth,
    //     boxHeight,
    //     boxDepth,
    //     bwSegments,
    //     bhSegments,
    //     bdSegments
    // ];
    


    
    // const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth,
    //     bwSegments, bhSegments, bdSegments);

    // const material = new THREE.MeshBasicMaterial({color: "#84a98c"});
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);
    // controls.update();

    // useFrame((state) => {
    //     if (animate.current) {
    //         mesh.current.rotation.x+= 0.005;
    //         mesh.current.rotation.y += 0.005;
    //     }
    //     else {
    //         mesh.current.rotation.x+= 0;
    //         mesh.current.rotation.y += 0;
    //     };

    // if (toggleAnimate.current) {
    //     ref.current.rotation.x += 0.005;
    //     ref.current.rotation.y += 0.005;
        // requestAnimationFrame( useFrame );
        // controls.update();
        // renderer.render(scene, camera);
    // } else {
    //     ref.current.rotation.x = 0;
    //     ref.current.rotation.y = 0;
        // requestAnimationFrame( !toggleAnimate );
        // renderer.render(scene, camera);

        // controls.update();
    // }; 
    // });


        // return(
            // // <React.Fragment>
            // <mesh {...[x,y,z,animate]}
            //     position={[x, y, z]}
            //     ref={mesh}
            //     onClick={(event) => setActive(!active)}>
            //     <renderCube/>
            //     <BoxGeometry args={boxDimensions}/>
            //     <meshStandardMaterial color ={"#84a98c"} />
            // </mesh>
            // // </React.Fragment>
        // )
    
// };

// export default Cube;
/////////////////////////////////////////////////
////// basic three that works: ///

  // const setAnimate = () => {
  //   animate.current = !animate.current;
  // };

    // const mountRef = useRef(null);
    
    // useEffect(() => {
      // console.log("inside useEffect");
    // physical components of cube 
    
    // create a scene //
    // const scene = new THREE.Scene();
    // scene.background = new THREE.Color("#2f3e46");

    // !! create renderer !! //
    // const renderer = new THREE.WebGLRenderer({antialias: true});
    // renderer.setPixelRatio(window.devicePixelRatio.pixelRatio);
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // mountRef.current.appendChild(renderer.domElement); // is there a better way to do this with react 
    

    //camera//
    // field of view, vertical direction, in degrees //
    // const fov = 75;
    // // display aspect of canvas // 
    // const aspect = (window.innerWidth / window.innerHeight); // the canvas default
    // // near and far represent the rendered space in front of camera
    // const near = 0.1;
    // const far =  100;
    // // camera "frustrum" - 3D pyramid
    // const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    // // cameras position // 
    // camera.position.z = 1.5;

    // let controls = new threeOrbitControls(camera, renderer.domElement);
    // controls.listenToKeyEvents(window);
    // controls.update();
    
    // const controls = new OrbitControls(camera, renderer.domElement);
    
    
    
    
    
  
    // const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth,
    //   bwSegments, bhSegments, bdSegments);
      
    //   const material = new THREE.MeshBasicMaterial({color: "#84a98c"});
    //   const cube = new THREE.Mesh(geometry, material);
    //   scene.add(cube);
      // controls.update();

      // controls !!
      // const controls = new DragControls( cube, camera, renderer.domElement);
      // controls.addEventListener('dragstart', function(event)
      // {
      //   event.object.material.emissive.set(0x000000);
      // });
      
      // const toggleAnimate = () => {
      //   if (buttonText === "rotation off") {
      //     cube.rotation.x += 0.005;
      //       cube.rotation.y += 0.005;
      //       requestAnimationFrame( toggleAnimate );
      //       // controls.update();
      //       renderer.render(scene, camera);
      //   } else if (buttonText === "rotation on") {
      //       cube.rotation.x = 0;
      //       cube.rotation.y = 0;
      //       // requestAnimationFrame( !toggleAnimate );
      //       renderer.render(scene, camera);
      //       requestAnimationFrame(toggleAnimate.paused())
      //   }; 

    // };
    // toggleAnimate();

  // const onWindowResize = () => {
  //       camera.aspect = (window.innerWidth)/(window.innerHeight);
  //       camera.updateProjectionMatrix();
  //       renderer.setSize((window.innerWidth), (window.innerHeight));
  //       handleRender();
  // };


  // const handleRender = () => {
  //     renderer.render(scene, camera);
  // };
  // return () => mountRef.current.removeChild(renderer.domElement);
  // ,[]);


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
  


  /// set color  //

  // return (
  // <section className="colorButtons">
  //   <button id="red" onClick={()=>{
  //     color = red;
  //   }}>
  //   red
  //   </button>
  //   <button id="orange">
  //     orange
  //   </button>
  //   <button id="yellow">
  //     yellow
  //   </button>
  //   <button id="green">
  //     green
  //   </button>
  //   <button id="blue">
  //     blue
  //   </button>
  //   <button id="purple">
  //     purple
  //   </button>
  // </section>
  // )