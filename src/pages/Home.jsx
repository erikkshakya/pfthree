/* eslint-disable react/no-unknown-property */
import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../Components/Loader'
import Island from '../models/Island'
import Sky from '../models/sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../Components/HomeInfo'

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreen = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0]

    if (window.innerHeight < 768) {
      screenScale = [0.9, 0.9, 0.9]
    } else {
      screenScale = [1, 1, 1]
    }
    return [screenScale, screenPosition, rotation]
  }

  const adjustPlaneForScreen = () => {
    let screenScale, screenPosition;

    if (window.innerHeight < 768) {
      screenScale = [1.5, 1.5, 1.5]
      screenPosition = [0, -1.5, 0]
    } else {
      screenScale = [3, 3, 3]
      screenPosition = [0, -4, -4]
    }
    return [screenScale, screenPosition]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreen()
  const [planeScale, planePosition] = adjustPlaneForScreen()

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />        }
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={1} />
          <ambientLight intensity={0.5} />
          {/* <pointLight />
          <spotLight /> */}
          <hemisphereLight skyColor='#b1e1ff' groundColor="#000000" />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Sky isRotating />
          <Bird isRotating />
          <Plane
            isRotating={isRotating}
            planeScale={planeScale}
            planePosition={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home