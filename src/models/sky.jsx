/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/rules-of-hooks */
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react';
import skyScene from "../assets/3d/sky.glb"
import { useFrame } from '@react-three/fiber';

const sky = ({isRotating}) => {
    const sky = useGLTF(skyScene);
    const skyRef = useRef();

    useFrame((_, delta) => {
        if(isRotating) {
            skyRef.current.rotation.y += 0.15 * delta
        }
    })
    
    return (
        <mesh ref={skyRef}>
            <primitive object={sky.scene} />
        </mesh>
    )
}

export default sky