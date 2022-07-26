import './App.css';
import React from 'react';
import Cube from './components/Cube.js';
import * as THREE from 'three';

function App() {



  return (
    <body>
      <main>
        <h1>dynamic cube generator</h1>
        <button>rotate off</button>
        <Cube />
      </main>

      <footer>
      </footer>
    </body>
  );
}

export default App;
