"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { FadeIn, StaggerContainer, StaggerItem } from "./motion-wrapper"
import { Code2, Users, Cloud, Brain, Wrench, MessageSquare } from "lucide-react"

const skillCategories = [
  {
    icon: Users,
    title: "Leadership & Management",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    skills: [
      "Team Mentorship",
      "Agile Coaching (Scrum/Kanban)",
      "Performance Feedback",
      "OKRs",
      "Conflict Resolution",
      "Professional Growth",
      "Startup Advising",
      "Hackathon Coaching"
    ],
  },
  {
    icon: Code2,
    title: "Frontend Development",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    skills: [
      "Flutter",
      "Dart",
      "React",
      "React Native",
      "Next.js",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS"
    ],
  },
  {
    icon: Cloud,
    title: "Backend & Cloud",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    skills: [
      "Node.js",
      "Java",
      "Kotlin",
      "GraphQL",
      "REST APIs",
      "Firebase",
      "AWS",
      "Google Cloud",
      "Vercel",
      "MongoDB",
      "PostgreSQL",
      "Convex"
    ],
  },
  {
    icon: Brain,
    title: "Machine Learning & AI",
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
    skills: [
      "ANN",
      "CNN",
      "LLM",
      "Naive Bayes",
      "Computer Vision",
      "Predictive Models",
      "Regression",
      "AdaBoost",
      "SVM",
      "Data Mining"
    ],
  },
  {
    icon: Wrench,
    title: "Web Systems & Analysis",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    skills: [
      "UML Diagrams",
      "ERD",
      "DFD",
      "PFD",
      "Swimlane",
      "Activity Diagrams",
      "State Diagrams",
      "System Analysis",
      "SDLC Planning"
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    skills: [
      "Git",
      "Jira",
      "Linear",
      "Trello",
      "Figma",
      "Notion",
      "Miroboard",
      "n8n",
      "CI/CD Pipelines",
      "Docker"
    ],
  },
  {
    icon: MessageSquare,
    title: "Content Creation",
    color: "text-rose-400",
    bgColor: "bg-rose-400/10",
    skills: [
      "Video Editing",
      "Thumbnail Design",
      "OBS Studio",
      "Streaming Setup",
      "VTuber Rigging",
      "Canva",
      "Social Media",
      "Community Building"
    ],
  },
  {
    icon: MessageSquare,
    title: "Soft Skills",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    skills: [
      "Clear Communication",
      "Empathy",
      "Quality Assurance",
      "Bilingual (EN/FIL)",
      "Results-Driven",
      "Attention to Detail",
      "Teaching & Training",
      "Public Speaking"
    ],
  },
]

const systemAnalysis = [
  "UML Diagrams",
  "ERD",
  "DFD",
  "PFD",
  "Swimlane",
  "Activity Diagrams",
  "State Diagrams",
  "System Analysis",
  "SDLC Planning"
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="container px-4">
        <FadeIn className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Code2 className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">
              Skills & <span className="text-primary">Expertise</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            A diverse skillset spanning from frontend development to machine learning,
            built over years of industry experience and academic research
          </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
                className="h-full p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${category.bgColor}`}>
                    <category.icon className={`w-5 h-5 ${category.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.03 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge variant="secondary" className="text-xs cursor-default">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        
      </div>
    </section>
  )
}
