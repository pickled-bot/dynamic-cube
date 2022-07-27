import './App.css';
import React, {useState} from 'react';
import Cube from './components/Cube.js';
import * as THREE from 'three';

function App() {
  const [buttonText, setButtonText] = useState("rotation off");
  let newText = "";

  const rotationButtonTxtToggle = () => {
    
    if (buttonText === "rotation off") {
      newText = "rotation on";
    } else {
      newText = "rotation off"
    }
    setButtonText(newText);
  };


  // toggleRotation function
  // pass in the animate() function
  // create a state handler for rotation and set rotation (true/false)
  // default is on 
  // button text is "rotate off"
  // if rotation is turned off
  // change the rotation speed to x 0/ y 0
  // change the button text to "rotate on"
  // if rotation turned back onto true
  // set rotation speed to x 0.1 / y 0.1

  // add on click for the button toggle
  
//   const toggleAnimate = () => {
//     const animate = true;
//     if (animate) {
//         Cube.rotation.x += 0.01;
//         Cube.rotation.y += 0.01;
//         requestAnimationFrame( toggleAnimate );
//         renderer.render(scene, camera);
//     } else {
//         Cube.rotation.x += 0;
//         Cube.rotation.y += 0;
//         requestAnimationFrame( toggleAnimate );
//         renderer.render(scene, camera);
//     }; 
// };
// toggleAnimate();
  // next will be to toggle button rotation on click of cube

  return (
    <body>
      <main>
        <h1>dynamic cube generator</h1>
        <button onClick={rotationButtonTxtToggle}>{buttonText}</button>
        <Cube/>
        
      </main>
    </body>
  );
}

export default App;
