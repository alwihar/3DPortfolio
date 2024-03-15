import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'

import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import HomeInfo from '../components/HomeInfo'
import sakura from '../assets/sakura.mp3'
import { soundon, soundoff } from '../assets/icons'

const Home = () => {
  const audioRef = useRef(new Audio(sakura))
  audioRef.current.volume = 0.4
  audioRef.current.loop = true
  const [isRotating, setIsRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)
  const [isPlayingMusic, setIsPlayingMusic] = useState(false)

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play()
    }
    return () => {
      audioRef.current.pause()
    }
  }, [isPlayingMusic])

  const adjustIslandForScreenSize = () => {
    let screenScale = null
    let screenPosition = [0, -6.5, -45]
    let rotation = [0.1, 0, 0]

    if (window.innerWidth < 768) {
      screenScale = [6, 6, 6]
    } else {
      screenScale = [8, 8, 8]
    }
    return [screenScale, screenPosition, rotation]
  }

  const [islandScale, islandPosition, rotation] = adjustIslandForScreenSize()

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex justify-center items-center">
        {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{near: 0.1, far: 1000}}
      >
        <Suspense fallback={<Loader/>}>
          <directionalLight position={[10, 1, 1]} intensity={2}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={2}/>
          <Bird/>
          <Sky isRotating={isRotating}/>
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />

        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <img src={isPlayingMusic ? soundoff : soundon} alt="sound"
             className="w-10 h-10 cursor-pointer object-contain"
             onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  )
}

export default Home