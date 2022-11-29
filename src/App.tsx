import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div id="canvas-container">
      <Canvas>
      <mesh>
          {/* material */}
          <meshStandardMaterial/>
          {/* geometry */}
          <boxGeometry />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App
