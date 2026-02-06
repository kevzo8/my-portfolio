"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FadeIn, StaggerContainer, StaggerItem } from "./motion-wrapper"
import { Briefcase, ChevronDown, ChevronUp, Calendar, MapPin, Award, Code, ExternalLink } from "lucide-react"

interface Experience {
  role: string
  specialization: string
  company: string
  companyUrl: string
  location: string
  period: string
  type: string
  description: string
  achievements: string[]
  skills: string[]
  logo?: string
}

const experiences: Experience[] = [
  {
    role: "IT & Operations Manager",
    specialization: "Hospitality Operations, Web & Brand Systems",
    company: "Villa Kathreyna",
    companyUrl: "https://villakathreyna.com",
    location: "San Fernando, Camarines Sur",
    period: "Sep 2024 - Present",
    type: "Part-time",
    logo: "/images/villa_kathreyna.png",
    description: "Led the villa's end-to-end digital and brand transformation by building the official website, designing the logo and visual identity, and establishing a consistent brand system. Set up and optimized social media presence and booking platform listings to improve visibility and bookings, while streamlining operations through automation, better graphics, and clearer processes.",
    achievements: [
      "Website & Brand Identity: Built the official website, created the logo, and developed the overall design and branding system",
      "Social Media & Booking Platform Setup: Established and optimized Facebook, Instagram, Agoda, Booking.com, and Airbnb profiles",
      "Operational Automation: Improved automations and streamlined internal workflows to reduce manual effort",
      "Creative Direction: Produced updated graphics and visual assets to strengthen brand consistency",
      "Process Optimization: Standardized procedures and communication to improve operational efficiency"
    ],
    skills: [
      "Web Design",
      "Branding",
      "UI/UX",
      "Social Media",
      "Booking Platforms",
      "Operations",
      "Automation",
      "Graphic Design"
    ]
  },
  {
    role: "Instructor & Lecturer",
    specialization: "Computer Science & Information Technology",
    company: "College of Computer Studies, Ateneo de Naga University",
    companyUrl: "https://www.adnu.edu.ph",
    location: "Naga City, Philippines",
    period: "Feb 2023 - Dec 2025",
    type: "Full-time",
    logo: "/images/Ateneo_de_Naga_University_logo.png",
    description: "Built and led a vibrant community of students and junior instructors, designing comprehensive curricula across web/mobile development, cloud computing, and machine learning. Mentored award-winning hackathon teams, advised thesis and capstone projects, and supported student startups in securing seed funding from the city government.",
    achievements: [
      "Team Leadership & Mentorship: Built and led a community of students and junior instructors, providing structured feedback, performance assessment, and professional development guidance",
      "Curriculum Design & Technical Instruction: Designed and delivered courses across software development (web/mobile), cloud computing, machine learning, data mining, cybersecurity, and IT ethics, integrating Agile, CI/CD, UI/UX, and full SDLC practices",
      "Hackathon Coaching & Startup Advising: Mentored multiple award-winning teams including StormWatch (1st Place, AI.DEAS for Impact 2025 - DICT), HARIBON (1st Place, RSTW 2025 - DOST), and NFTPadala (1st Place, Quantum Computing & Blockchain Hackathon - QCSP)",
      "Startup Enablement & External Partnerships: Supported early-stage student startups that secured seed funding grants from the Naga City LGU",
      "Thesis, Capstone & Special Projects Advisory: Advised theses and special projects, guiding students through problem framing, system design, implementation, evaluation, and ethical considerations"
    ],
    skills: ["Flutter", "React", "Node.js", "Machine Learning", "Cloud Computing", "Agile", "Mentorship"]
  },
  {
    role: "Software Engineer",
    specialization: "SaaS / Fintech",
    company: "Whitecloak Technologies, Inc.",
    companyUrl: "https://whitecloak.com",
    location: "Pasig City, Philippines",
    period: "Aug 2021 - Feb 2024",
    type: "Full-time",
    logo: "/images/whitecloak.png",
    description: "Delivered robust mobile and web applications for banking and enterprise clients using Flutter, React, Node.js, Java, and GraphQL. Optimized frontend performance and user experience while handling quality assurance testing, backend API integration, and technical documentation. Performed cross-functional roles spanning frontend optimization, QA testing, and backend coordination. Led daily stand-ups and sprint ceremonies to maintain team momentum and ensure consistent delivery.",
    achievements: [
      "SaaS Product Delivery & Client Collaboration: Delivered mobile and web applications for banking and enterprise clients using Flutter, React, Node.js, Java, and GraphQL. Worked closely with clients to clarify requirements and ensure overall client satisfaction",
      "Cross-Functional & Vendor Coordination: Collaborated daily with Product Owners, Tech Leads, Business Analysts, UI/UX Designers, QA Testers, and Engineering Managers, as well as external vendors, SaaS/BaaS providers, and security teams (including VAPT)",
      "Agile Execution & Team Facilitation: Led daily stand-up meetings and presented progress, risks, and outcomes during sprint reviews. Maintained a consistent 100% story point burn rate",
      "End-to-End Engineering & Quality: Worked across frontend, backend, and design teams to ensure cohesive implementations, clean architecture, and maintainable code",
      "Mentorship & Onboarding: Supported junior engineers through onboarding, technical guidance, and continuous feedback"
    ],
    skills: ["Flutter", "Dart", "React", "Node.js", "Java", "Kotlin", "GraphQL", "Firebase"]
  },
  {
    role: "Instructor & Student Assistant",
    specialization: "Computer Science",
    company: "Institute of Computer Science, University of the Philippines Los Baños",
    companyUrl: "https://ics.uplb.edu.ph",
    location: "Laguna, Philippines",
    period: "Jun 2012 - Jul 2016",
    type: "Full-time",
    logo: "/images/uplb_logo.png",
    description: "Taught foundational and advanced CS courses to hundreds of students while managing IT infrastructure and academic systems. Conducted professional Yii Framework training for DOST-SEI IT professionals, and provided comprehensive guidance on projects, assessments, and career development.",
    achievements: [
      "Teaching & Mentorship: Taught foundational and advanced CS courses while guiding students on projects and assessments, developing both technical and professional skills",
      "IT Support: Managed lab systems, software setup, and academic tools to support faculty and students",
      "Yii Framework Training: Conducted hands-on Yii Framework training for IT professionals at DOST-SEI (Oct 28-30 & Nov 13-15, 2014)"
    ],
    skills: ["PHP", "Yii Framework", "CodeIgniter", "JavaScript", "Teaching"]
  },
  {
    role: "Web Developer",
    specialization: "Internship",
    company: "International Rice Research Institute (IRRI)",
    companyUrl: "https://www.irri.org",
    location: "Los Baños, Laguna",
    period: "Apr - May 2013",
    type: "Internship",
    logo: "/images/irri.png",
    description: "Developed user management modules for the Breeding Information Management System (BIMS) supporting researchers, developers, and institutional stakeholders. Worked across Waterfall and Agile methodologies, led daily stand-ups, and presented system progress to international collaborators in Finland.",
    achievements: [
      "Web Application Development: Developed user management modules for the Breeding Information Management System (BIMS), supporting researchers, developers, and institutional stakeholders",
      "Software Delivery Processes: Worked under both Waterfall and Agile delivery models, gaining hands-on experience in structured planning and iterative development",
      "Team Coordination & Communication: Led daily stand-up meetings to report progress, surface blockers, and align development tasks",
      "Stakeholder Presentations: Presented system features and development progress to researchers and international collaborators based in Finland"
    ],
    skills: ["PHP", "Yii Framework", "MySQL", "Agile", "Waterfall"]
  },
  {
    role: "Computer Shop Attendant",
    specialization: "IT Support & Operations",
    company: "Davianne's Net Cafe",
    companyUrl: "#",
    location: "Naga City, Philippines",
    period: "Nov 2006 - Apr 2010",
    type: "Part-time",    logo: "/images/daviannes-logo.svg",    description: "My first job! Managed computer rentals, troubleshooting, and software assistance for clients during high school.",
    achievements: [
      "Customer Service & IT Support: Managed computer rentals, troubleshooting, and software assistance for clients",
      "Early Tech Experience: Fostered early experience in tech support and client satisfaction that shaped my career path"
    ],
    skills: ["Customer Service", "IT Support", "Troubleshooting"]
  }
]

function ExperienceCard({ experience }: { experience: Experience }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <StaggerItem>
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <Card className="bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              {experience.logo && (
                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0">
                  <Image
                    src={experience.logo}
                    alt={experience.company}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div className="flex-1">
                    <CardTitle className="text-lg md:text-xl text-foreground mb-1">
                      {experience.role}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mb-2">{experience.specialization}</p>
                    <a
                      href={experience.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline inline-flex items-center gap-1"
                    >
                      {experience.company}
                      {experience.companyUrl !== "#" && <ExternalLink className="w-3 h-3" />}
                    </a>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{experience.location}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {experience.type}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{experience.description}</p>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4 pt-4 border-t border-border/50">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-1">*</span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Code className="w-4 h-4 text-primary" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, i) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                          >
                            <Badge variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4"
            >
              <Button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-medium shadow-lg hover:shadow-primary/30 transition-all border-0"
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="w-4 h-4 mr-2" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 mr-2" />
                    Explore Full Details
                  </>
                )}
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </StaggerItem>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-20 bg-card/30">
      <div className="container px-4">
        <FadeIn className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Briefcase className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl md:text-3xl font-bold">
              Work <span className="text-blue-400">Experience</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            From my first job at a computer shop to building enterprise SaaS products 
            and teaching the next generation of developers
          </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
