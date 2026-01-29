"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Youtube, Mail, Twitch, ExternalLink, Code, GraduationCap, Gamepad2, Sparkles, Laptop, ChevronLeft, ChevronRight, Ear } from "lucide-react"
import { IceCrystalScene } from "./ice-crystal-scene"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useCallback } from "react"

const personas = [
  {
    id: "developer",
    title: "Software Engineer",
    subtitle: "Building the Future",
    description: "Full-stack developer specializing in web and mobile applications. From enterprise systems at IRRI to hackathon-winning apps, I craft solutions that make a difference.",
    image: "/images/professional.jpg",
    icon: Code,
    color: "from-blue-500 to-cyan-400",
    stats: ["8+ Years Experience", "15+ Projects", "Multiple Hackathon Wins"]
  },
  {
    id: "freelancer",
    title: "Freelance Developer",
    subtitle: "Kevin Devs",
    description: "Building affordable websites and apps to help businesses grow. Sharing my dev journey and helping anyone who wants to learn. Let's build something great together!",
    image: "/images/kevzo_chibi.png",
    icon: Laptop,
    color: "from-sky-500 to-blue-400",
    stats: ["Affordable Pricing", "Custom Design", "Clear Communication"]
  },
  {
    id: "educator",
    title: "CS & IT Educator",
    subtitle: "Shaping Minds",
    description: "Lecturer at UP Los Banos and Ateneo de Naga, teaching the next generation of computer scientists. From algorithms to capstone projects, I guide students to success.",
    image: "/images/academic.jpg",
    icon: GraduationCap,
    color: "from-emerald-500 to-teal-400",
    stats: ["500+ Students Taught", "15+ Courses", "Thesis Adviser"]
  },
  {
    id: "creator",
    title: "Content Creator",
    subtitle: "The Winter Tsar",
    description: "VTuber and variety streamer on Twitch and YouTube. I create cozy, inclusive spaces where everyone can relax, laugh, and be themselves.",
    image: "/images/vtuber-character.jpg",
    icon: Gamepad2,
    color: "from-purple-500 to-pink-400",
    stats: ["4.4K Twitch", "2.9K Twitter", "160+ YouTube"]
  },
  {
    id: "cosplayer",
    title: "Cosplayer",
    subtitle: "Bringing Characters to Life",
    description: "Casual cosplayer bringing favorite characters from Genshin Impact, Wuthering Waves, and more to life. Crafting costumes and sharing the joy of fandom.",
    image: "/images/cosplay.jpg",
    icon: Sparkles,
    color: "from-amber-500 to-orange-400",
    stats: ["Genshin Impact", "Wuthering Waves", "Convention Attendee"]
  }
]

const typingRoles = [
  "a Software Engineer",
  "a CS & IT Educator",
  "a Freelance Developer",
  "a Content Creator",
  "a Cosplayer",
  "Hearing Impaired",
  "an Accessibility Advocate",
]

const socialLinks = [
  { icon: Twitch, href: "https://twitch.tv/kevzo8", label: "Twitch", color: "hover:text-purple-400" },
  { icon: Youtube, href: "https://youtube.com/kevzo8", label: "YouTube", color: "hover:text-red-400" },
  { icon: Twitter, href: "https://twitter.com/kevzo8", label: "Twitter", color: "hover:text-sky-400" },
  { icon: Github, href: "https://github.com/kevzo8", label: "GitHub", color: "hover:text-foreground" },
  { icon: Linkedin, href: "https://linkedin.com/in/kgvega", label: "LinkedIn", color: "hover:text-blue-400" },
]

export function HeroSection() {
  const [activePersona, setActivePersona] = useState(0)
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  
  const persona = personas[activePersona]

  // Auto-advance carousel (5 seconds)
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setActivePersona((prev) => (prev + 1) % personas.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isPaused])

  // Typing animation
  useEffect(() => {
    const role = typingRoles[currentRole]
    const typingSpeed = isDeleting ? 30 : 80
    const pauseTime = 2000

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === role) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false)
        setCurrentRole((prev) => (prev + 1) % typingRoles.length)
      } else if (isDeleting) {
        setDisplayText(role.substring(0, displayText.length - 1))
      } else {
        setDisplayText(role.substring(0, displayText.length + 1))
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  const goToPrevious = useCallback(() => {
    setActivePersona((prev) => (prev - 1 + personas.length) % personas.length)
  }, [])

  const goToNext = useCallback(() => {
    setActivePersona((prev) => (prev + 1) % personas.length)
  }, [])

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <IceCrystalScene />
      
      <div className="container px-4 py-16 md:py-20 relative z-10">
        {/* Main Hero Content */}
        <div className="text-center mb-8 md:mb-10">
          <motion.p 
            className="text-primary font-medium mb-2 tracking-wide text-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to my portfolio :)
          </motion.p>
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-foreground">Hi, I&apos;m </span>
            <span className="bg-gradient-to-r from-primary via-sky-300 to-primary bg-clip-text text-transparent">
              Kevin!
            </span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div 
            className="h-8 md:h-10 flex items-center justify-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-lg md:text-xl text-muted-foreground">
              I&apos;m{" "}
              <span className="text-primary font-semibold">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </span>
          </motion.div>

          <motion.p 
            className="text-muted-foreground text-sm md:text-base mb-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I wear many hats - with over {new Date().getFullYear() - 2014} years of experience building software, 
            teaching the next generation, creating content, and advocating for inclusivity. 
            I leverage AI technologies and modern frameworks to craft intelligent, scalable solutions.
          </motion.p>

          {/* Social Links */}
          <motion.div 
            className="flex flex-wrap gap-2 justify-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {socialLinks.map((social) => (
              <Link 
                key={social.label}
                href={social.href} 
                target="_blank"
                className={`flex items-center justify-center w-9 h-9 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 text-muted-foreground transition-all hover:scale-110 ${social.color}`}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Persona Carousel */}
        <motion.div 
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 z-20 p-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            aria-label="Previous persona"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 z-20 p-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            aria-label="Next persona"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Active Persona Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={persona.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-card/80 backdrop-blur-md rounded-2xl border border-border/50 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {/* Persona Image */}
                  <div className="relative w-full md:w-72 h-64 md:h-80 flex-shrink-0">
                    <Image
                      src={persona.image || "/placeholder.svg"}
                      alt={persona.title}
                      fill
                      className={`object-cover ${persona.id === 'freelancer' ? 'object-center bg-gradient-to-br from-sky-900 to-blue-950' : 'object-top'}`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r ${persona.color} opacity-20`} />
                  </div>

                  {/* Persona Content */}
                  <div className="flex-1 p-5 md:p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2">
                      <persona.icon className="w-5 h-5 text-primary" />
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">{persona.subtitle}</span>
                    </div>
                    
                    <h2 className="text-xl md:text-2xl font-bold mb-3">{persona.title}</h2>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{persona.description}</p>
                    
                    {/* Stats */}
                    <div className="flex flex-wrap gap-2">
                      {persona.stats.map((stat) => (
                        <span 
                          key={stat}
                          className="px-2 py-1 text-xs rounded-full bg-secondary/50 text-muted-foreground"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {personas.map((p, index) => (
              <button
                key={p.id}
                onClick={() => setActivePersona(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activePersona === index 
                    ? "w-6 bg-primary" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to ${p.title}`}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-wrap gap-3 justify-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Button asChild size="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#contact">
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Link>
          </Button>
          <Button asChild variant="outline" size="default" className="border-primary/50 hover:bg-primary/10 bg-transparent">
            <Link href="#services">
              <Laptop className="w-4 h-4 mr-2" />
              Work With Me!
            </Link>
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="flex justify-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1, y: { duration: 1.5, repeat: Number.POSITIVE_INFINITY } }}
        >
          <Link href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
            <span className="sr-only">Scroll to experience</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
