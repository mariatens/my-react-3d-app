import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useState } from 'react'

function App() {
    const boxArr: JSX.Element[] = []
    const [autoRotate, setAutoRotate] = useState(false);

    for (let i = 0; i < 100; i++) {
        boxArr.push(<YellowBox args={randomDimension()}
            color={pick(palette)}
            position={randomPosition(10)} />)
    }
    return (
        <>
            <div id="canvas-container">
                <button className="button" onClick={() => setAutoRotate(!autoRotate)}>{autoRotate === true ? "Click here to stop rotation" : "Click here to start rotation"}</button>

                <Canvas>
                    <OrbitControls autoRotate={autoRotate} autoRotateSpeed={20} />
                    <ambientLight intensity={0.1} />
                    {/* shadows */}
                    <directionalLight color="white" position={[0, 0, 5]} />
                    <directionalLight color="grey" position={[-10, 2, 0]} />
                    {/* <MagentaBox/> */}
                    {boxArr}
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
        {/* material */}
        <meshStandardMaterial color={props.color} />
        {/* geometry */}
        <boxGeometry args={props.args} />
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
