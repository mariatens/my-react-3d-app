import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function App() {
  const [count, setCount] = useState(0)
  const boxArr: JSX.Element[] = []
  for (let i= 0; i<100;i++){
    boxArr.push(<YellowBox/>)
  }
  return (
    <div id="canvas-container">
      <Canvas>
        <OrbitControls  autoRotate={false} autoRotateSpeed={10}/>
        <ambientLight intensity={0.1} />
        {/* shadows */}
        <directionalLight color="white" position={[0, 0, 5]} />
        <directionalLight color="grey" position={[-10, 2, 0]} />
        {/* <MagentaBox/> */}
        {boxArr}

      </Canvas>
    </div>
  )
}

export default App

//10 random colors positions dimensions boxes/meshes
//function for random position

//function for random size
//function for random color

const palette = [
  "#e94e77",
  "#d68189",
  "#c6a49a",
  "#c6e5d9",
  "#f4ead5"
]
export function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
function randomDimension(): [number, number, number]{
  const w = Math.random()
  const h = Math.random()
  const d = Math.random()
  return [w,h,d]
}
function randomPosition(range: number): [number, number, number]{
  return [
    (Math.random()-0.5)*range,
    (Math.random()-0.5)*range,
    (Math.random()-0.5)*range
  ]
}



function YellowBox(): JSX.Element {
  return <mesh position={randomPosition(4)}>
    {/* material */}
    <meshStandardMaterial color= {pick(palette)}/>
    {/* geometry */}
    <boxGeometry args={randomDimension()} />
  </mesh>
}

function MagentaBox(): JSX.Element {
  return (<mesh position={[0, 0, 0]}>
    {/* material */}
    <meshStandardMaterial color="magenta" />
    {/* geometry */}
    <boxGeometry args={[1, 2, 3]} />
  </mesh>)
}