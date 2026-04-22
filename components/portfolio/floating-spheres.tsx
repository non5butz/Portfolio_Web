"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial } from "@react-three/drei"
import * as THREE from "three"

interface SphereProps {
  position: [number, number, number]
  scale: number
  color: string
  speed: number
  distort: number
  floatIntensity: number
}

function FloatingSphere({ position, scale, color, speed, distort, floatIntensity }: SphereProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.15
    }
  })

  return (
    <Float
      speed={speed}
      rotationIntensity={0.2}
      floatIntensity={floatIntensity}
      floatingRange={[-0.2, 0.2]}
    >
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.25}
          distort={distort}
          speed={speed * 0.5}
          roughness={0.1}
          metalness={0.0}
          depthWrite={false}
        />
      </mesh>
    </Float>
  )
}

function Scene() {
  const spheres = useMemo<SphereProps[]>(() => [
    // Large soft blue sphere - left side (overlapping with pink)
    {
      position: [-2.5, 0.5, -1],
      scale: 2.2,
      color: "#A8C8E8",
      speed: 0.6,
      distort: 0.3,
      floatIntensity: 0.6
    },
    // Large soft pink sphere - overlapping with blue
    {
      position: [-1, -0.5, -1.5],
      scale: 1.8,
      color: "#F5D5D0",
      speed: 0.7,
      distort: 0.25,
      floatIntensity: 0.8
    },
    // Medium white-blue sphere - right side
    {
      position: [3.5, 1, -2],
      scale: 1.5,
      color: "#D0E4F5",
      speed: 0.8,
      distort: 0.35,
      floatIntensity: 0.9
    },
    // Medium pink - bottom right area
    {
      position: [4, -1, -2.5],
      scale: 1.3,
      color: "#F2CEC8",
      speed: 0.75,
      distort: 0.28,
      floatIntensity: 0.85
    }
  ], [])

  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} color="#ffffff" />
      <pointLight position={[-5, -5, -5]} intensity={0.4} color="#F5D5D0" />
      
      {spheres.map((sphere, index) => (
        <FloatingSphere key={index} {...sphere} />
      ))}
    </>
  )
}

export function FloatingSpheres() {
  return (
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        style={{ 
          background: "transparent",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
