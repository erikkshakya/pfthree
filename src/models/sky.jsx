/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/rules-of-hooks */
import { useGLTF } from '@react-three/drei'

import skyScene from "../assets/3d/sky.glb"

const sky = () => {
    const sky = useGLTF(skyScene);
    
    return (
        <mesh>
            <primitive object={sky.scene} />
        </mesh>
    )
}

export default sky