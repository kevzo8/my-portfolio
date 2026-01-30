"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "./motion-wrapper"
import { FolderGit2, ChevronDown, ChevronUp, Trophy, Building2, GraduationCap, Sparkles, Briefcase } from "lucide-react"

interface Project {
  title: string
  description: string
  period: string
  category: "enterprise" | "hackathon" | "research" | "academic" | "personal"
  technologies: string[]
  achievement?: string
}

const projects: Project[] = [
  {
    title: "MyRLC - Robinsons Land Corporation",
    description: "Flutter-based mobile app + CMS for enterprise property management. Developed comprehensive features for property listings, tenant management, and corporate communications.",
    period: "Feb 2023 - Feb 2024",
    category: "enterprise",
    technologies: ["Flutter", "Dart", "Firebase", "Node.js", "GraphQL"],
  },
  {
    title: "UnionDigital Bank",
    description: "Mobile payment system for digital banking. Implemented secure payment flows, KYC verification, and real-time transaction processing.",
    period: "Oct 2022 - Jan 2023",
    category: "enterprise",
    technologies: ["Flutter", "Dart", "REST API", "Firebase"],
  },
  {
    title: "Vertex - Internal Management System",
    description: "Internal employee and project management system in mobile and web used by Whitecloak staff.",
    period: "Jan - Sep 2022",
    category: "enterprise",
    technologies: ["Flutter", "React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Fortis Accommodations",
    description: "Android booking app for hotels and apartments with reservation system and payment integration.",
    period: "Aug - Dec 2021",
    category: "enterprise",
    technologies: ["Kotlin", "Android", "Firebase", "REST API"],
  },
  {
    title: "StormWatch",
    description: "IoT-enabled, computer vision and AI-powered disaster response and early warning platform for real-time hazard detection, monitoring, and decision support.",
    period: "2025",
    category: "hackathon",
    technologies: ["Python", "TensorFlow", "IoT", "Computer Vision", "React"],
    achievement: "1st Place, AI.DEAS for Impact 2025 (DICT)",
  },
  {
    title: "HARIBON",
    description: "Integrated hazard assessment and rescue coordination system supporting LGUs and first responders with real-time mapping and resource allocation.",
    period: "2025",
    category: "hackathon",
    technologies: ["React", "Node.js", "Python", "GIS", "Firebase"],
    achievement: "1st Place, RSTW 2025 (DOST)",
  },
  {
    title: "NFTPadala",
    description: "Blockchain-enabled digital remittance and asset transfer platform leveraging quantum-inspired security concepts.",
    period: "2024",
    category: "hackathon",
    technologies: ["Blockchain", "Solidity", "React", "Node.js"],
    achievement: "1st Place, Quantum Computing & Blockchain Hackathon (QCSP)",
  },
  {
    title: "STUBU.AI",
    description: "AI-powered student buddy system for personalized learning assistance and academic support.",
    period: "2024",
    category: "hackathon",
    technologies: ["Python", "LLM", "React", "Node.js"],
    achievement: "Seed Funding Grant - Naga City LGU",
  },
  {
    title: "Prostate Cancer MRI Classification",
    description: "ML-based tumor Gleason score classification using AdaBoost, SVM, and RFE-SVM for early cancer detection.",
    period: "Dec 2017 - 2020",
    category: "research",
    technologies: ["Python", "AdaBoost", "SVM", "RFE-SVM", "Medical Imaging"],
  },
  {
    title: "MARBeL: Recursive Belief-Based Learning",
    description: "Poster presentation on Recursive Belief-Based Learning for Intelligent Agents at Python Conference APAC 2025.",
    period: "Mar 2025",
    category: "research",
    technologies: ["Python", "Machine Learning", "AI Agents"],
    achievement: "Poster Presentation at PyCon APAC 2025",
  },
  {
    title: "Content-Based Image Retrieval",
    description: "CBIR system for holiday photos using SIFT for feature detection and matching.",
    period: "Mar - May 2018",
    category: "research",
    technologies: ["Python", "SIFT", "OpenCV", "Image Processing"],
  },
  {
    title: "Human Activity Recognition",
    description: "Identification of human activity using ensemble classifiers for sensor data analysis.",
    period: "Sep - Dec 2017",
    category: "research",
    technologies: ["Python", "Ensemble Learning", "Sensor Data"],
  },
  {
    title: "TailorFit",
    description: "Digital anthropometric measurements for clothing sizes using Android and OpenCV.",
    period: "Aug - Sep 2017",
    category: "research",
    technologies: ["Android", "OpenCV", "Computer Vision", "Java"],
  },
  {
    title: "Fake News Classification",
    description: "Classifying social media posts as fake or real news using Naive Bayes classifier.",
    period: "Feb - Apr 2017",
    category: "research",
    technologies: ["Python", "Naive Bayes", "NLP"],
  },
  {
    title: "TidyApp",
    description: "Inventory management system for UP Diliman custodians using Laravel framework.",
    period: "Oct - Dec 2017",
    category: "academic",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
  },
  {
    title: "Interactive Phylogenetic Tree Visualization",
    description: "Web application for rice phylogeny visualization using JavaScript frameworks at IRRI.",
    period: "Sep 2013 - Mar 2014",
    category: "academic",
    technologies: ["JavaScript", "D3.js", "HTML5", "CSS3"],
  },
  {
    title: "BIMS User Management",
    description: "User management module for Breeding Information Management System at IRRI.",
    period: "Apr - May 2013",
    category: "academic",
    technologies: ["PHP", "Yii Framework", "MySQL"],
  },
  {
    title: "ICS-SAIS",
    description: "Web-based academic information system for CS students and faculty using CodeIgniter.",
    period: "Jan - Mar 2013",
    category: "academic",
    technologies: ["PHP", "CodeIgniter", "MySQL"],
  },
  {
    title: "Pokémon Plushies Online",
    description: "E-commerce web app for selling Pokémon plushies and merchandise. My first complete web application!",
    period: "Sep 2012 - Jan 2013",
    category: "personal",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
  },
  {
    title: "Pokémon Legends",
    description: "Java-based game featuring Legendary Pokémon. One of my earliest programming projects!",
    period: "Oct - Dec 2011",
    category: "personal",
    technologies: ["Java", "Swing", "Game Development"],
  },
]

const categoryConfig = {
  enterprise: { label: "Enterprise", icon: Building2, color: "text-blue-400 bg-blue-400/10 border-blue-400/30" },
  hackathon: { label: "Hackathon", icon: Trophy, color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30" },
  research: { label: "Research", icon: Sparkles, color: "text-purple-400 bg-purple-400/10 border-purple-400/30" },
  academic: { label: "Academic", icon: GraduationCap, color: "text-green-400 bg-green-400/10 border-green-400/30" },
  personal: { label: "Personal", icon: FolderGit2, color: "text-pink-400 bg-pink-400/10 border-pink-400/30" },
}

function ProjectCard({ project, index }: { project: Project, index: number }) {
  const config = categoryConfig[project.category]
  const Icon = config.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <Card className="h-full bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between gap-2">
            <Badge variant="outline" className={`text-xs ${config.color}`}>
              <Icon className="w-3 h-3 mr-1" />
              {config.label}
            </Badge>
            <span className="text-xs text-muted-foreground">{project.period}</span>
          </div>
          <CardTitle className="text-lg mt-2">{project.title}</CardTitle>
          {project.achievement && (
            <div className="flex items-center gap-1 text-yellow-400 text-sm">
              <Trophy className="w-3 h-3" />
              <span className="font-medium">{project.achievement}</span>
            </div>
          )}
        </CardHeader>
        <CardContent>
          <CardDescription className="text-muted-foreground mb-4">
            {project.description}
          </CardDescription>
          <div className="flex flex-wrap gap-1">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
  const [filter, setFilter] = useState<string>("all")

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter)

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="container px-4">
        <FadeIn className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Briefcase className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl md:text-3xl font-bold">
              Projects & <span className="text-blue-400">Portfolio</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            From enterprise apps to hackathon winners, research projects to personal experiments
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { key: "all", label: "All" },
            { key: "enterprise", label: "Enterprise" },
            { key: "hackathon", label: "Hackathon" },
            { key: "research", label: "Research" },
            { key: "academic", label: "Academic" },
            { key: "personal", label: "Personal" },
          ].map((cat) => (
            <motion.div key={cat.key} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant={filter === cat.key ? "default" : "outline"}
                size="sm"
                onClick={() => { setFilter(cat.key); setShowAll(false); }}
                className={filter === cat.key ? "bg-primary" : ""}
              >
                {cat.label}
                {cat.key !== "all" && (
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {projects.filter(p => p.category === cat.key).length}
                  </Badge>
                )}
              </Button>
            </motion.div>
          ))}
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length > 6 && (
          <FadeIn delay={0.3} className="text-center mt-8">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={() => setShowAll(!showAll)}
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-medium shadow-lg hover:shadow-primary/30 transition-all border-0"
              >
                {showAll ? (
                  <>
                    <ChevronUp className="w-4 h-4 mr-2" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 mr-2" />
                    See All {filteredProjects.length} Projects
                  </>
                )}
              </Button>
            </motion.div>
          </FadeIn>
        )}
      </div>
    </section>
  )
}
