"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { GraduationCap, Users, BookOpen, Award, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const teachingPositions = [
  {
    institution: "University of the Philippines Los Baños",
    role: "Instructor",
    period: "Jul 2014 - Jul 2016",
    location: "Los Baños, Laguna",
    logo: "/images/uplb_logo.png",
    courses: [
      { code: "IT 1", name: "Information Technology Literacy", description: "A General Education Course under the MST Cluster covering IT concepts and applications (AY 2014-2016)" },
      { code: "CMSC 2", name: "Introduction to the Internet", description: "Tools and services of the Internet, protocols, search engines, FTP, email, listservers, and HTML programming (AY 2014-2016)" },
      { code: "CMSC 11", name: "Introduction to Computer Science", description: "Major areas of CS: software systems, methodology, computer theory, organization, and architecture (AY 2014-2016)" },
      { code: "CMSC 56", name: "Discrete Mathematical Structures I", description: "Principles of logic, set theory, relations and functions, Boolean algebra (2nd Sem AY 2015-2016)" },
      { code: "CMSC 57", name: "Discrete Mathematical Structures II", description: "Principles of combinatorics, probability, algebraic systems, and graph theory (1st Sem AY 2015-2016)" },
      { code: "NSTP 1 & 2", name: "National Service Training Program (LTS)", description: "Literacy Training Service - community outreach and literacy programs (AY 2015-2016)" },
      { code: "Yii Framework", name: "Training Workshop for DOST Region IX", description: "Conducted seminar workshop on Yii Framework for IT employees at DOST-SEI Bicutan (Oct-Nov 2014)" },
    ],
    highlights: [
      "First teaching experience during undergraduate studies",
      "Taught foundational CS courses to hundreds of students",
      "Conducted professional training workshop for DOST employees",
      "Managed Literacy Training Service community programs"
    ]
  },
  {
    institution: "Ateneo de Naga University",
    role: "Part-time then Full-time Instructor",
    period: "Feb 2023 - Dec 2025",
    location: "Naga City, Camarines Sur",
    logo: "/images/Ateneo_de_Naga_University_logo.png",
    courses: [
      { code: "CSMC 411 / ITMC 411", name: "Thesis & Capstone", description: "Supervised students on thesis and capstone projects, providing mentorship, technical guidance, and project supervision (AY 2024-2025)" },
      { code: "ITEC 304", name: "Cloud Computing Technologies", description: "Cloud computing concepts using AWS, Google Cloud, Convex, MongoDB, and cloud service integration (1st Sem 2025)" },
      { code: "ITEC 306", name: "Ethical Hacking", description: "Ethics in IT and ethical hacking techniques using Nmap, Wireshark, BurpSuite, HackTheBox (1st Sem 2025)" },
      { code: "CSEC 302", name: "Data Mining Tools & Techniques", description: "Data mining techniques using R, Python, Numpy, Pandas, Jupyter (2nd Sem 2024)" },
      { code: "ITMC 313", name: "Web Systems & Technologies", description: "Web development with planning and analysis using UML: ERD, DFD, PFD, Swimlane diagrams (1st Sem 2024)" },
      { code: "CSDC 101", name: "Fundamentals of Programming", description: "Introduction to programming using Dart/Flutter, Java/Kotlin, React Native, Node.js (1st Sem 2024)" },
      { code: "CSEC 306", name: "Machine Learning", description: "ML techniques including ANN, CNN, Naive Bayes, Regression, and predictive modeling (2nd Sem 2023)" },
      { code: "ITMC 121", name: "Quantitative Methods with Simulations", description: "Quantitative problem-solving and simulation techniques using R (2nd Sem 2023)" },
      { code: "ITMC 223 / ITMC 311", name: "Integrative Programming I & II", description: "Full SDLC, project management, UI/UX using Figma, Github, React, Node.js, Render (AY 2023-2024)" },
      { code: "ITMC 231", name: "Platform Technologies", description: "Deployment tools: Firebase, Vercel, Render, and cloud CI/CD pipelines (Intercession 2023-2025)" },
      { code: "CSMC 324", name: "Social Issues, Ethics & Professional Practice", description: "Ethics, IT professional standards, and societal impact of technology (2nd Sem 2022)" },
      { code: "ITEC 303", name: "Mobile Computing & Communication", description: "Mobile and web computing using Dart/Flutter, Java/Kotlin, React Native, Node.js (2nd Sem 2022-2024)" },
    ],
    highlights: [
      "Started part-time, promoted to full-time instructor",
      "Taught 12+ different courses across CS, IT, and Software Engineering",
      "Supervised multiple thesis and capstone teams to successful completion",
      "Integrated modern industry tools: AWS, Vercel, React, Flutter, ML frameworks",
      "Pioneered ethical hacking and cloud computing curriculum"
    ]
  }
]

const teachingPhilosophy = [
  {
    icon: Users,
    title: "Inclusive Learning",
    description: "Creating accessible environments where every student can thrive, regardless of background or ability"
  },
  {
    icon: BookOpen,
    title: "Practical Focus",
    description: "Bridging theory and practice by integrating real-world projects and industry-relevant skills"
  },
  {
    icon: Award,
    title: "Student Success",
    description: "Mentoring students beyond the classroom to help them achieve their academic and career goals"
  }
]

export function TeachingSection() {
  const [expandedPositions, setExpandedPositions] = useState<Record<number, boolean>>({ 0: true, 1: true })
  const [showAllCourses, setShowAllCourses] = useState<Record<number, boolean>>({})
  const [expandedPosition, setExpandedPosition] = useState<number | null>(null);

  return (
    <section id="teaching" className="py-16 md:py-20 bg-card/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Teaching Experience</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            Shaping the next generation of computer scientists and software engineers through 
            inclusive, practical, and engaging education.
          </p>
        </motion.div>

        {/* Teaching Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
        >
          {teachingPhilosophy.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card/50 rounded-xl p-4 border border-border/50 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
              <p className="text-muted-foreground text-xs">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Teaching Positions */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {teachingPositions.map((position, index) => {
            const isExpanded = expandedPositions[index] ?? false
            const showAll = showAllCourses[index] || false
            const visibleCourses = showAll ? position.courses : position.courses.slice(0, 4)

            return (
              <motion.div
                key={position.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card/50 rounded-xl border border-border/50 overflow-hidden"
              >
                <div className="w-full p-4 md:p-5 text-left">
                  <div className="flex items-start gap-3 flex-1 mb-4">
                    {position.logo && (
                      <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 relative">
                        <Image
                          src={position.logo}
                          alt={position.institution}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-bold text-base md:text-lg">{position.institution}</h3>
                        <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary">
                          {position.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">{position.role}</p>
                      <p className="text-muted-foreground text-xs">{position.location}</p>
                    </div>
                  </div>

                  <div className="space-y-4 border-t border-border/50 pt-4">
                    {/* Courses */}
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      Courses Taught
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
                      {visibleCourses.map((course) => (
                        <div
                          key={course.code}
                          className="bg-secondary/30 rounded-lg p-3"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-mono text-primary">{course.code}</span>
                          </div>
                          <p className="font-medium text-sm">{course.name}</p>
                          <p className="text-muted-foreground text-xs">{course.description}</p>
                        </div>
                      ))}
                    </div>

                    {position.courses.length > 4 && (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mb-4"
                      >
                        <Button
                          onClick={() => setShowAllCourses(prev => ({ ...prev, [index]: !showAll }))}
                          className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-medium shadow-lg hover:shadow-primary/30 transition-all border-0 text-xs"
                        >
                          {showAll ? (
                            <>
                              <ChevronUp className="w-3 h-3 mr-1" />
                              Show Less Courses
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-3 h-3 mr-1" />
                              Show {position.courses.length - 4} More Courses
                            </>
                          )}
                        </Button>
                      </motion.div>
                    )}

                    {/* Highlights */}
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      Highlights
                    </h4>
                    <ul className="space-y-1">
                      {position.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1.5">-</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
