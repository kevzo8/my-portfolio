"use client"

import { useState } from "react"
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
    highlights: ["Research on Prostate Cancer MRI Classification", "Human Activity Recognition", "Content-Based Image Retrieval"]
  },
  {
    degree: "B.S. Computer Science",
    school: "University of the Philippines Los Banos",
    period: "2010 - 2014",
    details: "DOST Scholar",
    specialization: "Computer Science with focus on Software Development",
    location: "Laguna, Philippines",
    highlights: ["Chess Varsity Team", "Student Assistant at Institute of Computer Science", "IRRI Internship"]
  },
  {
    degree: "High School",
    school: "Naga City Science High School",
    period: "2006 - 2010",
    details: "Honor Student",
    specialization: "Science and Technology Curriculum",
    location: "Naga City, Philippines",
    highlights: ["Atomatika Science Club", "Chess Varsity Team", "Drum/Xylophone Marching Corps"]
  },
  {
    degree: "Elementary",
    school: "Planza Elementary School",
    period: "2000 - 2006",
    details: "Valedictorian",
    specialization: "General Education",
    location: "San Fernando, Camarines Sur, Philippines",
    highlights: ["Consistent 1st Honors", "Class Valedictorian"]
  },
]

const achievements = [
  { title: "StormWatch", award: "1st Place, AI.DEAS for Impact 2025", org: "DICT", type: "hackathon" },
  { title: "HARIBON", award: "1st Place, RSTW 2025", org: "DOST", type: "hackathon" },
  { title: "NFTPadala", award: "1st Place, Quantum Computing & Blockchain Hackathon", org: "QCSP", type: "hackathon" },
  { title: "StormWatch, HARIBON, STUBU.AI", award: "Seed Funding Grants", org: "Naga City LGU", type: "funding" },
  { title: "MARBeL", award: "Poster Presentation", org: "PyCon APAC 2025", type: "conference" },
  { title: "Resource Speaker", award: "Multiple Tech Conferences", org: "Various Organizations", type: "speaking" },
  { title: "Judge & Mentor", award: "Hackathons & Startup Events", org: "YouthHack, DICT, etc.", type: "mentorship" },
]

const conferences = [
  { name: "Python Conference APAC 2025", date: "Feb 2025", role: "Poster Presentation", description: "Presented MARBeL research on AI-powered solutions" },
  { name: "Whitecloak Academy", date: "Aug 2021 - Jan 2022", role: "Android & Flutter Training", description: "Completed professional mobile development training program" },
  { name: "inTECHrated: Forum on Technopreneurship", date: "Mar 2017", role: "Coach", description: "Mentored startup teams on tech product development" },
  { name: "YouthHack: Startup Challenge", date: "Sep 2016", role: "Judge", description: "Evaluated student startup pitches and prototypes" },
  { name: "YouthHack CALABARZON: Code Weekend", date: "Mar 2016", role: "Resource Speaker & Judge", description: "Conducted technical workshops and judged hackathon submissions" },
  { name: "SMACS 2014", date: "2014", role: "Participant & Presenter", description: "Presented research at the Student MAC Symposium" },
  { name: "GDG Developer Fest", date: "Sep 2013", role: "Attendee", description: "Participated in Google Developer Group events" },
]

export function EducationSection() {
  const [showAllAchievements, setShowAllAchievements] = useState(false)
  const [showConferences, setShowConferences] = useState(true)

  const displayedAchievements = showAllAchievements ? achievements : achievements.slice(0, 4)

  return (
    <section id="education" className="py-16 md:py-20 bg-card/30">
      <div className="container px-4">
        <FadeIn className="text-center mb-10">
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

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Education Timeline */}
          <div>
            <FadeIn delay={0.2}>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Academic Journey
              </h3>
            </FadeIn>
            
            <StaggerContainer staggerDelay={0.1} className="space-y-4">
              {education.map((edu, index) => (
                <StaggerItem key={edu.school}>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Card className="bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden">
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">{edu.degree}</CardTitle>
                            <p className="text-primary font-medium">{edu.school}</p>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {edu.details}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-2">{edu.specialization}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
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
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Achievements */}
          <div>
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
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAllAchievements(!showAllAchievements)}
                  className="w-full text-muted-foreground hover:text-primary"
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
              )}
            </div>

            {/* Conferences */}
            <FadeIn delay={0.4} className="mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowConferences(!showConferences)}
                className="w-full border-primary/50"
              >
                <Award className="w-4 h-4 mr-2" />
                {showConferences ? "Hide" : "View"} Conferences & Seminars
                {showConferences ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
              </Button>

              <AnimatePresence>
                {showConferences && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 space-y-2 overflow-hidden"
                  >
                    {conferences.map((conf, index) => (
                      <motion.div
                        key={conf.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="p-3 rounded-lg bg-secondary/30 border border-border/30"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                          <h4 className="font-medium text-sm text-foreground">{conf.name}</h4>
                          <Badge variant="outline" className="text-xs">{conf.date}</Badge>
                        </div>
                        <p className="text-xs text-primary font-medium mb-1">{conf.role}</p>
                        <p className="text-xs text-muted-foreground">{conf.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
