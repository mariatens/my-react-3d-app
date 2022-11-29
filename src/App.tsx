import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMemo, useState } from 'react'

function App() {
  const [autoRotate, setAutoRotate] = useState(false);

  //Generate IBox[] infos only once, on first render.  after that, give back the same value each time.
  const infos = useMemo(createBoxInfos, []);


  interface IBox {
    dim: [number, number, number];
    pos: [number, number, number];
    color: string;
    id: number;
  }
  function createBoxInfos() {
    const infosTmp: IBox[] = []
    for (let i = 0; i < 1000; i++) {
      infosTmp.push({
        id: i,  //it's just useful to have one!
        dim: randomDimension(),
        pos: randomPosition(30),
        color: pick(palette),
      });
    }
    return infosTmp;
  }

  return (
    <>
      <div id="canvas-container">
        <button className="button" onClick={() => setAutoRotate(!autoRotate)}>{autoRotate === true ? "Click here to stop rotation" : "Click here to start rotation"}</button>

        <Canvas>
          <OrbitControls autoRotate={autoRotate} autoRotateSpeed={20} />
          <ambientLight intensity={0.1} />
          <directionalLight color="white" position={[0, 0, 5]} />
          <directionalLight color="grey" position={[-10, 2, 0]} />
          {infos.map(info => <YellowBox key={info.id} color={info.color} position={info.pos} args={info.dim} />)}
        </Canvas>
      </div>
    </>
  )
}

export default App

const palette = [
  "#e94e77",
  "#d68189",
  "#c6a49a",
  "#c6e5d9",
  "#f4ead5"
]
function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
function randomDimension(): [number, number, number] {
  const w = Math.random()
  const h = Math.random()
  const d = Math.random()
  return [w, h, d]
}
function randomPosition(range: number): [number, number, number] {
  return [
    (Math.random() - 0.5) * range,
    (Math.random() - 0.5) * range,
    (Math.random() - 0.5) * range
  ]
}

interface YellowBoxProps {
  position: [number, number, number]
  color: string
  args: [number, number, number]
}

function YellowBox(props: YellowBoxProps): JSX.Element {
  return <mesh position={props.position}>
    <meshStandardMaterial color={props.color} />
    <boxGeometry args={props.args} />
  </mesh>
}
