import './App.css';
import ReactDOM from 'react-dom';
import React, {useState, useRef} from 'react';
// import Cube from './components/Cube.js';
// import * as THREE from 'three';
import {Canvas, useFrame} from '@react-three/fiber';
// import { AmbientLight, BoxGeometry, MeshStandardMaterial } from 'three';
import {OrbitControls} from '@react-three/drei'


const CubeRendering = ({animate}) => {
  return (
    <Cube
    animate = {animate}/>
  );
};


const Cube = ({animate}) => {
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
      <meshStandardMaterial color={"#84a98c"}/>
      <OrbitControls />
    </mesh>
  );
};

const App = () => {
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
  };


  return (
    <div>
      <header>
        <h1>dynamic cube generator</h1>
      </header>
      <div>
        <button onClick={() =>
          {rotationButtonTxtToggle();
          (animate.current = !animate.current)}}>{buttonText}</button>
      </div>
      <div id="canvasContainer">
        <Canvas camera={{position:[1,1,1], zoom:1}} gl={{antialias:false}}>
          <ambientLight />
          <directionalLight position={[6,3,12]}/>
          <CubeRendering animate={animate}/>
        </Canvas>
      </div>
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));
export default App;
