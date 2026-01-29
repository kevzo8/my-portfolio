"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Stars } from "@react-three/drei"
import { useRef, useMemo } from "react"
import type * as THREE from "three"

function IceCrystal({ position, scale, rotationSpeed }: { position: [number, number, number], scale: number, rotationSpeed: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#a8d4ff"
          transparent
          opacity={0.6}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

function Scene() {
  const crystals = useMemo(() => [
    { position: [-3, 1, -2] as [number, number, number], scale: 0.5, rotationSpeed: 0.002 },
    { position: [3, -0.5, -1] as [number, number, number], scale: 0.35, rotationSpeed: -0.003 },
    { position: [2.5, 1.5, -2] as [number, number, number], scale: 0.3, rotationSpeed: -0.002 },
    { position: [-3.5, 0, -3] as [number, number, number], scale: 0.4, rotationSpeed: 0.003 },
  ], [])

  return (
    <>
      <Stars radius={100} depth={50} count={500} factor={3} saturation={0} fade speed={0.5} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} color="#88ccff" />
      
      {crystals.map((crystal, i) => (
        <IceCrystal key={i} {...crystal} />
      ))}
      
      <fog attach="fog" args={['#0a1628', 5, 20]} />
    </>
  )
}

export function IceCrystalScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
