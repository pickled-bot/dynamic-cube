import './App.css';
import ReactDOM from 'react-dom';
import React, {useState, useRef, useCallback} from 'react';
import * as THREE from 'three';
import {Canvas, useFrame} from '@react-three/fiber';
import {OrbitControls, softShadows} from '@react-three/drei'

const red = new THREE.Color("#f28482");
const orange = new THREE.Color("#f4a261");
const yellow = new THREE.Color("#f6bd60");
const green = new THREE.Color("#84a98c");
const blue = new THREE.Color("#118ab2");
const purple = new THREE.Color("#7678ed");

const colorArray = [{color:red, label: 'red', hex:'f28482'},
{color: orange, label: 'orange', hex: 'f4a261'},
{color:yellow, label: 'yellow', hex: 'f6bd60'},
{color:green, label: 'green', hex: '84a98c'}, 
{color: blue, label:'blue', hex: '118ab2'},
{color: purple, label: 'purple', hex: '7678ed'}];


const CubeRendering = ({animate, color, animateSpeed}) => {
  return (
    <Cube
    animate = {animate}
    color = {color}
    animateSpeed = {animateSpeed}/>

  );
};


const Cube = ({animate, color, animateSpeed}) => {
  let boxWidth = 1;
  let boxHeight = 1;
  let boxDepth = 1;
  let bwSegments = 1;
  let bhSegments = 1;
  let bdSegments = 1;

  const cubeRef = useRef();

  useFrame((state) => {
      if (animate.current) {
        cubeRef.current.rotation.y += animateSpeed;
        cubeRef.current.rotation.x += animateSpeed;
      }
  });
  
  return (
    <mesh ref={cubeRef} >
      <boxGeometry args={[boxWidth,boxHeight,boxDepth, bwSegments, bhSegments, bdSegments]} />
      {/* <planeGeometry args={[boxWidth,boxHeight]}/> */}
      <meshStandardMaterial color={color} clipShadows={true}/>
      <OrbitControls 
      zoomSpeed={0.25} 
      minZoom={40}
      maxZoom={1000}/>
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


const Instructions = () => {
  return (
    <div id="instructions">
      <h2>
      instructions
      </h2>
      <p className='grey'>(scroll)</p>
      <p>
        click or press on the (rotate off / rotate on) button to toggle rotation animation
        click &gt;&gt;&gt; to speed up the rotation and &lt;&lt;&lt; to slow down rotation
      </p>
      <p>
        click or press on a color button or add any
        hex code color to the input box to change the color of the cube.
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


const ColorInput = ({setCubeColor, color}) => {
  const [colorHex, setColorHex] = useState("#84a98c")
  // const cubeRef = useRef();

  const onInput =(event ) => {
    // const newColor = colorHex.slice();
    // console.log(event.target.value)
    setColorHex(event.target.value)
  }
  
  const onSubmit = (event) => {
    console.log("onSubmit")
    if (event.key === "Enter") {
      setCubeColor(colorHex)
    }
  }
  console.log(color)
  const RGBToHex = (color)=>{
    let r = (color.r*255).toString(16);
    let g = (color.g*255).toString(16);
    let b = (color.b*255).toString(16);

    if (r.length === 1){
      r = "0"+ r;
    }
    if (g.length === 1) {
      g = "0" + g;
    }
    if (b.length === 1) {
      b = "0" + g;
    }
    return "#" + r + g + b;
  };
  console.log(RGBToHex(color));
  return(
    <div>
    <span>hex color:</span>
    <input type="text" key={RGBToHex(color)} defaultValue={RGBToHex(color)} onChange={onInput} onKeyDown={onSubmit}/>
    </div>
  );
};


const App = () => {
  const [buttonText, setButtonText] = useState("rotation off");
  const [color, setColor] = useState(green);
  const [animateSpeed, setAnimateSpeed] = useState(0.005)

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
    let threeColor = new THREE.Color(newColor)
    setColor(threeColor);
  }, [setColor])  

  return (

    <div>
      <header>
        <h1>dynamic cube generator</h1>
        <Instructions />
        <div id="buttons">
          <button id="animateDwn" onClick={() =>
            {setAnimateSpeed(animateSpeed - 0.005);
            }}>
              &lt;&lt;&lt;
          </button>
          <button id="animateBtn" onClick={() =>
            {rotationButtonTxtToggle();
              (animate.current = !animate.current)}}>{buttonText}
          </button>
          <button id="animateUp" onClick={() =>
          {setAnimateSpeed(animateSpeed + 0.005);
          }}>
            &gt;&gt;&gt;
          </button>
          <ToggleColor setCubeColor={setCubeColor}/>
          <ColorInput  setCubeColor={setCubeColor} color={color} />
        </div>
      </header>

      <div id="canvasContainer">
        <Canvas camera={{position:[1,1,1], zoom:300}} gl={{antialias:false}} orthographic shadows dpr={[1,2]}>
          <ambientLight intensity={0.5}/>
          <directionalLight position={[3,1,6]} castShadow intensity={0.5}/>
          <CubeRendering animate={animate} color={color} animateSpeed={animateSpeed}/>
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