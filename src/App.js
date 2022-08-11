import './App.css';
import ReactDOM from 'react-dom';
import React, {useState, useRef, useCallback} from 'react';
// import Cube from './components/Cube.js';
import * as THREE from 'three';
import {Canvas, useFrame} from '@react-three/fiber';
// import { AmbientLight, BoxGeometry, MeshStandardMaterial } from 'three';
import {OrbitControls, softShadows} from '@react-three/drei'
import { Scene } from 'three';

const red = new THREE.Color("#f28482");
const yellow = new THREE.Color("#f6bd60");
const blue = new THREE.Color("#118ab2");
const green = new THREE.Color("#84a98c");
const orange = new THREE.Color("#f4a261");
const purple = new THREE.Color("#7678ed");

const colorArray = [{color:red, label: 'red'}, {color: orange, label: 'orange'}, {color:yellow, label: 'yellow'},
{color:green, label: 'green'},  {color: blue, label:'blue'}, {color: purple, label: 'purple'}];

let positions = [];
let normals = [];
let uvs = [];

const cubeVertices = [
  // front
  { pos: [-1, -1,  1], norm: [ 0,  0,  1], uv: [0, 1], },
  { pos: [ 1, -1,  1], norm: [ 0,  0,  1], uv: [1, 1], },
  { pos: [-1,  1,  1], norm: [ 0,  0,  1], uv: [0, 0], },

  { pos: [-1,  1,  1], norm: [ 0,  0,  1], uv: [0, 0], },
  { pos: [ 1, -1,  1], norm: [ 0,  0,  1], uv: [1, 1], },
  { pos: [ 1,  1,  1], norm: [ 0,  0,  1], uv: [1, 0], },
  // right
  { pos: [ 1, -1,  1], norm: [ 1,  0,  0], uv: [0, 1], },
  { pos: [ 1, -1, -1], norm: [ 1,  0,  0], uv: [1, 1], },
  { pos: [ 1,  1,  1], norm: [ 1,  0,  0], uv: [0, 0], },

  { pos: [ 1,  1,  1], norm: [ 1,  0,  0], uv: [0, 0], },
  { pos: [ 1, -1, -1], norm: [ 1,  0,  0], uv: [1, 1], },
  { pos: [ 1,  1, -1], norm: [ 1,  0,  0], uv: [1, 0], },
  // back
  { pos: [ 1, -1, -1], norm: [ 0,  0, -1], uv: [0, 1], },
  { pos: [-1, -1, -1], norm: [ 0,  0, -1], uv: [1, 1], },
  { pos: [ 1,  1, -1], norm: [ 0,  0, -1], uv: [0, 0], },

  { pos: [ 1,  1, -1], norm: [ 0,  0, -1], uv: [0, 0], },
  { pos: [-1, -1, -1], norm: [ 0,  0, -1], uv: [1, 1], },
  { pos: [-1,  1, -1], norm: [ 0,  0, -1], uv: [1, 0], },
  // left
  { pos: [-1, -1, -1], norm: [-1,  0,  0], uv: [0, 1], },
  { pos: [-1, -1,  1], norm: [-1,  0,  0], uv: [1, 1], },
  { pos: [-1,  1, -1], norm: [-1,  0,  0], uv: [0, 0], },

  { pos: [-1,  1, -1], norm: [-1,  0,  0], uv: [0, 0], },
  { pos: [-1, -1,  1], norm: [-1,  0,  0], uv: [1, 1], },
  { pos: [-1,  1,  1], norm: [-1,  0,  0], uv: [1, 0], },
  // top
  { pos: [ 1,  1, -1], norm: [ 0,  1,  0], uv: [0, 1], },
  { pos: [-1,  1, -1], norm: [ 0,  1,  0], uv: [1, 1], },
  { pos: [ 1,  1,  1], norm: [ 0,  1,  0], uv: [0, 0], },

  { pos: [ 1,  1,  1], norm: [ 0,  1,  0], uv: [0, 0], },
  { pos: [-1,  1, -1], norm: [ 0,  1,  0], uv: [1, 1], },
  { pos: [-1,  1,  1], norm: [ 0,  1,  0], uv: [1, 0], },
  // bottom
  { pos: [ 1, -1,  1], norm: [ 0, -1,  0], uv: [0, 1], },
  { pos: [-1, -1,  1], norm: [ 0, -1,  0], uv: [1, 1], },
  { pos: [ 1, -1, -1], norm: [ 0, -1,  0], uv: [0, 0], },

  { pos: [ 1, -1, -1], norm: [ 0, -1,  0], uv: [0, 0], },
  { pos: [-1, -1,  1], norm: [ 0, -1,  0], uv: [1, 1], },
  { pos: [-1, -1, -1], norm: [ 0, -1,  0], uv: [1, 0], },
];
// translate the 36 vertices into 3 parallel arrays

for (const vertex of cubeVertices) {
  positions.push(...vertex.pos);
  normals.push(...vertex.norm);
  uvs.push(...vertex.uv);
};

// create a variable to hold the location of planes


const CubeRendering = ({animate, color}) => {

  return (
    <Cube
    animate = {animate}
    color = {color}/>
  );
};


const Cube = ({animate, color}) => {
  let boxWidth = 3;
  let boxHeight = 3;
  let boxDepth = 3;
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

  window.debugCube = cubeRef;

  return (
    <mesh ref={cubeRef} >
      <boxGeometry 
        args={[boxWidth,boxHeight,boxDepth, bwSegments, bhSegments, bdSegments]} 
        attatch="geometry"
        />
      {/* <planeGeometry args={[boxWidth,boxHeight]}/> */}
      <meshStandardMaterial color={color} clipShadows={true} attatch="material"/>
      <OrbitControls 
        zoomSpeed={0.25} 
        minZoom={1}
        maxZoom={1000}
        onChange={({...args})=>{console.log("**orbitControls change**", args)}}/>
    </mesh>
  );
};


const ToggleColor = ({setCubeColor}) => {
  return (
    <section className="colorButtons">
      {colorArray.map((item, i) => {
        const {color, label} = item;
        return (
          <button id={label} onClick={() => {
            setCubeColor(color);
          }} key = {label}>{label}</button>
        )
      })}
    </section>
  );
};



const PlaneRender = ({animate, color, position}) => {
  return (
    <group>
      <Plane animate={animate} color={color}/>
      <Plane animate={animate} color={color}/>
      <OrbitControls 
        zoomSpeed={0.25} 
        minZoom={1}
        maxZoom={1000}
        onChange={({...args})=>{console.log("**orbitControls change**", args)}}/>
    </group>
  )
}

const Plane = ({animate, color}) => {
  const planeRef = useRef();
  return (
    <mesh ref={planeRef}>
    {/* <bufferGeometry>
      <bufferAttribute attatch="attributes-position" count={Float32Array(positions)} />
    </bufferGeometry> */}
    <planeGeometry animate={animate} color={color}/>
    <meshStandardMaterial color={color} clipShadows={true} attach="material"/>
    </mesh>
  )
};
// creating a function to handle ONE plane

// const togglePlanes
// creating a function to handle multiple planes

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


  const setCubeColor = useCallback((newColor) =>{
    setColor(newColor);
  }, [setColor])  

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
        <ToggleColor setCubeColor={setCubeColor}/>
      </div>
      <div id="canvasContainer">
        <Canvas camera={{position:[3,3,3], zoom:50}} gl={{antialias:false}} orthographic shadows dpr={[1,2]}>
          <ambientLight intensity={0.5}/>
          <directionalLight position={[3,1,6]} castShadow intensity={1}/>
          <CubeRendering animate={animate} color={color}/>
          {/* <PlaneRender animate={animate} color={color}/> */}
        </Canvas>
      </div>
      <footer>
      <p>
      &#169; shelby r faulconer, ada c17 capstone project, 2022
      </p>
      <p>
      space photo from NASA image gallery
      </p>
      </footer>
    </div>
  );
}


ReactDOM.render(<App/>, document.getElementById('root'));
export default App;
