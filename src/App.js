import './App.css';
import ReactDOM from 'react-dom';
import React, {useState, useRef} from 'react';
// import Cube from './components/Cube.js';
import * as THREE from 'three';
import {Canvas, useFrame} from '@react-three/fiber';
// import { AmbientLight, BoxGeometry, MeshStandardMaterial } from 'three';
import {OrbitControls, softShadows} from '@react-three/drei'

const red = new THREE.Color("#f28482");
const yellow = new THREE.Color("#f6bd60");
const blue = new THREE.Color("#118ab2");
const green = new THREE.Color("#84a98c");
const orange = new THREE.Color("#f4a261");
const purple = new THREE.Color("#7678ed");


const CubeRendering = ({animate, color}) => {
  return (
    <Cube
    animate = {animate}
    color = {color}/>
  );
};
// add a propery color
// use ref to get color
// onclick for each button to change the cube to that color


const Cube = ({animate, color}) => {
  let boxWidth = 1;
  let boxHeight = 1;
  let boxDepth = 1;
  let bwSegments = 1;
  let bhSegments = 1;
  let bdSegments = 1;

  const cubeRef = useRef();

  useFrame((state) => {
      if (animate.current) {
        cubeRef.current.rotation.y += 0.005;
        cubeRef.current.rotation.x += 0.005;
      }
  });


  return (
    <mesh ref={cubeRef} >
      <boxGeometry args={[boxWidth,boxHeight,boxDepth, bwSegments, bhSegments, bdSegments]} />
      {/* <planeGeometry args={[boxWidth,boxHeight]}/> */}
      <meshStandardMaterial color={green} clipShadows={true}/>
      <OrbitControls 
      zoomSpeed={0.25} 
      minZoom={40}
      maxZoom={1000}/>
    </mesh>
  );
};

const ToggleColor = (props) => {
  return (
  <section className="colorButtons">
    <button id="red" onClick={()=>{
      props.color = red;
    }}>
    red
    </button>
    <button id="orange">
    orange
    </button>
    <button id="yellow">
      yellow
    </button>
    <button id="green">
      green
    </button>
    <button id="blue">
      blue
    </button>
    <button id="purple">
      purple
    </button>
  </section>
  )
};

const Instructions = () => {
  return (
    <div id="instructions">
      <h2>
      instructions
      </h2>
      <p className='grey'>(scroll)</p>
      <p>
        click or press on the (rotate off / rotate on) button to toggle rotation animation
      </p>
      <p>
        click or press on a color button to change the color of the cube
      </p>
      <p>
        mobile: use one finger to rotate and turn cube,
        use two fingers to zoom in or out by pinching
        fingers together or pulling fingers apart,
        or keep one finger stationary on the space background
        and use another finger to move the cube
      </p>
      <p>
        desktop: left click to rotate cube, right click to move cube through space,
        use the scroll wheel to make the cube larger or smaller
      </p>
    </div>
  )
}

const App = () => {
  const [buttonText, setButtonText] = useState("rotation off");
  const [color, setColor] = useState("#84a98c");
  const animate = useRef(true);
  let newText = "";

  
  const rotationButtonTxtToggle = () => {
    if (buttonText === "rotation off") {
      newText = "rotation on";
    } else {
      newText = "rotation off"
    }
    setButtonText(newText);
  };

  const setCubeColor = (newColor) => {
    setColor(newColor);
  }


  return (

    <div>
      <header>
        <h1>dynamic cube generator</h1>
      </header>
      <Instructions />
      <div id="buttons">
        <button id="animateBtn" onClick={() =>
          {rotationButtonTxtToggle();
          (animate.current = !animate.current)}}>{buttonText}
        </button>
        <ToggleColor />
      </div>
      <div id="canvasContainer">
        <Canvas camera={{position:[1,1,1], zoom:300}} gl={{antialias:false}} orthographic shadows dpr={[1,2]}>
          <ambientLight intensity={0.5}/>
          <directionalLight position={[3,1,6]} castShadow intensity={0.5}/>
          <CubeRendering animate={animate}/>
        </Canvas>
      </div>
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));
export default App;
