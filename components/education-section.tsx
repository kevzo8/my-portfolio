"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FadeIn, StaggerContainer, StaggerItem } from "./motion-wrapper"
import { GraduationCap, Award, Trophy, ChevronDown, ChevronUp, MapPin, Calendar, Star } from "lucide-react"

const education = [
  {
    degree: "M.S. Computer Science",
    school: "University of the Philippines Diliman",
    period: "2016 - 2020",
    details: "22 Units Earned",
    specialization: "Computer Vision, Machine Learning, Intelligent Systems Group (CVMIG)",
    location: "Quezon City, Philippines",
    highlights: ["Research on Prostate Cancer MRI Classification", "Human Activity Recognition", "Content-Based Image Retrieval"],
    logo: "/images/uplb_logo.png",
    isHigherEd: true
  },
  {
    degree: "B.S. Computer Science",
    school: "University of the Philippines Los Baños",
    period: "2010 - 2014",
    details: "DOST Scholar",
    specialization: "Computer Science with focus on Software Development, Bioinformatics & Artificial Intelligence",
    location: "Laguna, Philippines",
    highlights: ["Chess Varsity Team", "Student Assistant at Institute of Computer Science", "IRRI Internship"],
    logo: "/images/uplb_logo.png",
    isHigherEd: true
  },
  {
    degree: "High School",
    school: "Naga City Science High School",
    period: "2006 - 2010",
    details: "Honor Student",
    specialization: "Science and Technology Curriculum",
    location: "Naga City, Philippines",
    highlights: ["Atomatika Science Club", "Chess Varsity Team", "Drum/Xylophone Marching Corps"],
    logo: "/images/ncshs_logo.png",
    isHigherEd: false
  },
  {
    degree: "Elementary",
    school: "Planza Elementary School",
    period: "2000 - 2006",
    details: "Valedictorian",
    specialization: "General Education",
    location: "San Fernando, Camarines Sur, Philippines",
    highlights: ["Consistent 1st Honors", "Class Valedictorian"],
    logo: "/images/planza logo.png",
    isHigherEd: false
  },
]

const achievements = [
  { title: "StormWatch", award: "1st Place, AI.DEAS for Impact 2025 (Aug 19-20)", org: "DICT Bicol - Adviser - Lotus Blu Hotel, Naga City", type: "hackathon" },
  { title: "HARIBON", award: "1st Place, RSTW 2025 Hack4Dev Sprint (Aug 14-15)", org: "DOST-Bicol - Mentor - La Piaza Hotel, Legazpi City", type: "hackathon" },
  { title: "NFTPadala", award: "1st Place, Quantum Computing & Blockchain Hackathon (Jun 19)", org: "QCSP - Coach - Ateneo de Naga University", type: "hackathon" },
  { title: "MARBeL", award: "Poster Presentation, Python Conference APAC 2025 (Mar 1-2)", org: "PyCon APAC - Adviser - Ateneo de Manila University, Quezon City", type: "conference" },
  { title: "StormWatch, HARIBON, STUBU.AI", award: "Seed Funding Grants", org: "Naga City LGU", type: "funding" },
  { title: "Resource Speaker", award: "Multiple Tech Conferences", org: "Various Organizations", type: "speaking" },
  { title: "Judge & Mentor", award: "Hackathons & Startup Events", org: "YouthHack, DICT, etc.", type: "mentorship" },
]

const conferences = [
  { name: "Whitecloak Academy - Android and Flutter", date: "Aug 2021 - Jan 2022", role: "Training", description: "Online training for Android application development with Java and Kotlin, as well as Flutter for mobile and web application development at Whitecloak Technologies, Inc., Pasig City" },
  { name: "inTECHrated: Forum on Technopreneurship", date: "Mar 4, 2017", role: "Coach", description: "Mentored startup teams on tech product development at Colegio de San Juan de Letran, Calamba City, Laguna" },
  { name: "YouthHack: Startup Challenge", date: "Sep 8, 2016", role: "Judge", description: "Evaluated student startup pitches and prototypes at University of Batangas, Batangas City, Batangas" },
  { name: "YouthHack CALABARZON: Code Weekend", date: "Mar 12-13, 2016", role: "Resource Speaker & Judge", description: "Conducted technical workshops and judged hackathon submissions at University of the Philippines, Los Baños" },
  { name: "Symposium on Mathematical Aspects of Computer Science (SMACS 2014)", date: "Nov 24-28, 2014", role: "Participant", description: "A venue for teachers, researchers and graduate students of Computer Science to share and upgrade knowledge - Computing Society of the Philippines at Ateneo de Naga University" },
  { name: "71st Seminar-Workshop on College Teaching", date: "Jul 21-25, 2014", role: "Participant", description: "Teaching seminar to enrich teachers' cognitive skills and attitudes necessary for effective instruction at Institute of Mathematical Sciences and Physics, University of the Philippines, Los Baños" },
  { name: "Google Developers Group Developer's Fest (GDG DevFest)", date: "Sep 17, 2013", role: "Attendee", description: "Community-run event for developers to exchange ideas hosted by Google Developers Group Philippines at Alphaland Southgate Tower" },
  { name: "EMERGING TECHNOLOGIES: Seminar Workshop on Android and Agile in Game Development", date: "Dec 3, 2012", role: "Participant", description: "Interactive seminar on Android and Agile in game development hosted by Orange & Bronze Software Labs at University of the Philippines, Los Baños" },
]

export function EducationSection() {
  const [showAllAchievements, setShowAllAchievements] = useState(false)
  const [showAllConferences, setShowAllConferences] = useState(false)
  const [showEarlyEducation, setShowEarlyEducation] = useState(false)

  const displayedAchievements = showAllAchievements ? achievements : achievements.slice(0, 4)
  const displayedConferences = showAllConferences ? conferences : conferences.slice(0, 4)
  const higherEducation = education.filter(edu => edu.isHigherEd)
  const earlyEducation = education.filter(edu => !edu.isHigherEd)
  const displayedEducation = showEarlyEducation ? education : higherEducation

  return (
    <section id="education" className="py-16 md:py-20 bg-card/30">
      <div className="container px-4 max-w-[1400px] mx-auto">
        <FadeIn className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">
              Education & <span className="text-primary">Achievements</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            From valedictorian to UP Diliman, and from hackathon winner to conference speaker
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Education Timeline */}
          <div className="lg:col-span-1">
            <FadeIn delay={0.2}>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Academic Journey
              </h3>
            </FadeIn>
            
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {displayedEducation.map((edu, index) => (
                  <motion.div
                    key={edu.school}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden">
                      <CardHeader className="pb-0">
                        <div className="flex items-start gap-3">
                          {edu.logo && (
                            <div className="w-12 h-12 flex-shrink-0 relative">
                              <Image
                                src={edu.logo}
                                alt={edu.school}
                                fill
                                className="object-contain"
                              />
                            </div>
                          )}
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <CardTitle className="text-lg leading-tight">{edu.degree}</CardTitle>
                                <p className="text-primary font-medium text-sm leading-tight">{edu.school}</p>
                              </div>
                              <Badge variant="secondary" className="text-xs">
                                {edu.details}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-3 pt-2">
                        <p className="text-sm text-muted-foreground mb-1">{edu.specialization}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {edu.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {edu.location}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {edu.highlights.map((highlight) => (
                            <Badge key={highlight} variant="outline" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {earlyEducation.length > 0 && (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4"
                >
                  <Button
                    onClick={() => setShowEarlyEducation(!showEarlyEducation)}
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-medium shadow-lg hover:shadow-primary/30 transition-all border-0"
                  >
                    {showEarlyEducation ? (
                      <>
                        <ChevronUp className="w-4 h-4 mr-2" />
                        Hide Early Education
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4 mr-2" />
                        Show High School & Elementary
                      </>
                    )}
                  </Button>
                </motion.div>
              )}
            </div>
          </div>

          {/* Achievements */}
          <div className="lg:col-span-1">
            <FadeIn delay={0.3}>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                Achievements & Recognition
              </h3>
            </FadeIn>

            <div className="space-y-3">
              <AnimatePresence mode="popLayout">
                {displayedAchievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="p-4 rounded-lg bg-card/80 border border-border/50 hover:border-yellow-400/30 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-yellow-400/10">
                        <Star className="w-4 h-4 text-yellow-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                        <p className="text-sm text-primary">{achievement.award}</p>
                        <p className="text-xs text-muted-foreground">{achievement.org}</p>
                      </div>
                      <Badge variant="outline" className="text-xs capitalize">
                        {achievement.type}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {achievements.length > 4 && (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4"
                >
                  <Button
                    onClick={() => setShowAllAchievements(!showAllAchievements)}
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-medium shadow-lg hover:shadow-primary/30 transition-all border-0"
                  >
                    {showAllAchievements ? (
                      <>
                        <ChevronUp className="w-4 h-4 mr-2" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4 mr-2" />
                        See All {achievements.length} Achievements
                      </>
                    )}
                  </Button>
                </motion.div>
              )}
            </div>
          </div>

          {/* Conferences */}
          <div className="lg:col-span-1">
            <FadeIn delay={0.4}>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Conferences & Seminars
              </h3>
            </FadeIn>

            <div className="space-y-3">
              <AnimatePresence mode="popLayout">
                {displayedConferences.map((conf, index) => (
                  <motion.div
                    key={conf.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="p-4 rounded-lg bg-card/80 border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h4 className="font-semibold text-sm text-foreground flex-1">{conf.name}</h4>
                      <Badge variant="outline" className="text-xs">{conf.date}</Badge>
                    </div>
                    <p className="text-xs text-primary font-medium mb-1">{conf.role}</p>
                    <p className="text-xs text-muted-foreground">{conf.description}</p>
                  </motion.div>
                ))}
              </AnimatePresence>

              {conferences.length > 4 && (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4"
                >
                  <Button
                    onClick={() => setShowAllConferences(!showAllConferences)}
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-medium shadow-lg hover:shadow-primary/30 transition-all border-0"
                  >
                    {showAllConferences ? (
                      <>
                        <ChevronUp className="w-4 h-4 mr-2" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4 mr-2" />
                        See All {conferences.length} Conferences
                      </>
                    )}
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
