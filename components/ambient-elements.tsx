"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Particle {
  id: number
  top: number
  left: number
  duration: number
  delay: number
  size: number
}

interface Star {
  id: number
  top: number
  left: number
  duration: number
  delay: number
}

export function AmbientElements() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [stars, setStars] = useState<Star[]>([])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Generate nebula particles - floating gently
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 15 + Math.random() * 10,
      delay: Math.random() * 3,
      size: 2 + Math.random() * 4,
    }))
    setParticles(newParticles)

    // Generate stars - more subtle twinkling
    const newStars = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      top: Math.random() * 50,
      left: Math.random() * 100,
      duration: 4 + Math.random() * 3,
      delay: Math.random() * 2,
    }))
    setStars(newStars)
  }, [])

  if (!isMounted) return null

  return (
    <>
      {/* Floating Nebula Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={`particle-${particle.id}`}
            className="absolute rounded-full"
            style={{
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `radial-gradient(circle, rgba(147, 197, 253, 0.4), rgba(96, 165, 250, 0.1))`,
              boxShadow: `0 0 ${particle.size * 2}px rgba(147, 197, 253, 0.3)`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 80, 0],
              x: [0, (Math.random() - 0.5) * 80, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Subtle Twinkling Stars */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={`star-${star.id}`}
            className="absolute rounded-full"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: "2px",
              height: "2px",
              background: "radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(147, 197, 253, 0.4))",
              boxShadow: "0 0 4px rgba(147, 197, 253, 0.4)",
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Ambient Nebula Glow - More Subtle */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-40 dark:opacity-30">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-400/20 via-indigo-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tl from-cyan-400/15 via-blue-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-bl from-purple-400/15 via-indigo-500/10 to-transparent rounded-full blur-3xl" />
      </div>
    </>
  )
}
