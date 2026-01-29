"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Stars } from "@react-three/drei"
import { useRef, useMemo } from "react"
import type * as THREE from "three"
import * as THREE_BASE from "three"

function Snowflake({ position, scale, rotationSpeed }: { position: [number, number, number], scale: number, rotationSpeed: number }) {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += rotationSpeed * 0.3
      groupRef.current.rotation.y += rotationSpeed
      groupRef.current.rotation.z += rotationSpeed * 0.5
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef} position={position} scale={scale}>
        {/* Create 6-pointed snowflake */}
        {[0, 60, 120, 180, 240, 300].map((angle) => {
          const rad = (angle * Math.PI) / 180
          return (
            <group key={angle} rotation={[0, 0, rad]}>
              {/* Main branch */}
              <mesh position={[0, 0.6, 0]}>
                <coneGeometry args={[0.15, 1.2, 8]} />
                <meshStandardMaterial
                  color="#e0f2fe"
                  transparent
                  opacity={0.7}
                  roughness={0.1}
                  metalness={0.7}
                  emissive="#0ea5e9"
                  emissiveIntensity={0.2}
                />
              </mesh>
              
              {/* Sub-branches */}
              <group position={[0, 0.3, 0]}>
                <mesh position={[0.2, 0.15, 0]} rotation={[0, 0, -Math.PI / 6]}>
                  <coneGeometry args={[0.06, 0.35, 6]} />
                  <meshStandardMaterial
                    color="#e0f2fe"
                    transparent
                    opacity={0.7}
                    roughness={0.1}
                    metalness={0.7}
                    emissive="#0ea5e9"
                    emissiveIntensity={0.2}
                  />
                </mesh>
                <mesh position={[-0.2, 0.15, 0]} rotation={[0, 0, Math.PI / 6]}>
                  <coneGeometry args={[0.06, 0.35, 6]} />
                  <meshStandardMaterial
                    color="#e0f2fe"
                    transparent
                    opacity={0.7}
                    roughness={0.1}
                    metalness={0.7}
                    emissive="#0ea5e9"
                    emissiveIntensity={0.2}
                  />
                </mesh>
              </group>
            </group>
          )
        })}
        
        {/* Center point */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial
            color="#e0f2fe"
            transparent
            opacity={0.8}
            roughness={0.1}
            metalness={0.8}
            emissive="#0ea5e9"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>
    </Float>
  )
}

function Scene() {
  const crystals = useMemo(() => [
    { position: [-5.5, 2, -2] as [number, number, number], scale: 0.25, rotationSpeed: 0.0008 },
    { position: [5.5, -2, -1] as [number, number, number], scale: 0.55, rotationSpeed: -0.0012 },
    { position: [4, 2.5, -2.5] as [number, number, number], scale: 0.3, rotationSpeed: -0.0009 },
    { position: [-6, -1.5, -3] as [number, number, number], scale: 0.6, rotationSpeed: 0.0010 },
    { position: [2.5, 0, -1.5] as [number, number, number], scale: 0.35, rotationSpeed: -0.0011 },
    { position: [-3, -2.5, -2] as [number, number, number], scale: 0.22, rotationSpeed: 0.0009 },
    { position: [6, 1.5, -2.5] as [number, number, number], scale: 0.5, rotationSpeed: -0.0010 },
    { position: [-4.5, 3, -1.5] as [number, number, number], scale: 0.28, rotationSpeed: 0.0008 },
    { position: [3.5, -1, -2] as [number, number, number], scale: 0.48, rotationSpeed: -0.0013 },
    { position: [-2.5, 1.5, -1] as [number, number, number], scale: 0.26, rotationSpeed: 0.0011 },
  ], [])

  return (
    <>
      <Stars radius={100} depth={50} count={500} factor={3} saturation={0} fade speed={0.5} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} color="#88ccff" />
      
      {crystals.map((crystal, i) => (
        <Snowflake key={i} {...crystal} />
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
