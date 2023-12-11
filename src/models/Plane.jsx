import { useGLTF } from "@react-three/drei";
import planeScene from '../assets/3d/plane.glb'

const Plane = ({ isRotating, ...props }) => {
    const plane = useGLTF(planeScene);

    return (
        <mesh {...props}>
            <primitive object={plane.scene} />
        </mesh>
    )
}

export default Plane