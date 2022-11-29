import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="canvas-container">
      <Canvas>
        <OrbitControls/>
        <ambientLight intensity={0.1} />
        {/* shadows */}
        <directionalLight color="white" position={[0, 0, 5]} />
        <mesh position={[2,0,0]}>
          {/* material */}
          <meshStandardMaterial color="magenta" />
          {/* geometry */}
          <boxGeometry args={[1, 2, 3]} />
        </mesh>
        <mesh position={[0,-2, 0]}>
          {/* material */}
          <meshStandardMaterial color="yellow" />
          {/* geometry */}
          <boxGeometry args={[5, 2, 1]} />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App
