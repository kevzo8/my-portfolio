"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FadeIn, StaggerContainer, StaggerItem } from "./motion-wrapper"
import { Heart, Ear, Brain, Pill, ChevronDown, ChevronUp, Sparkles, Shield, Users } from "lucide-react"

const healthJourneys = [
  {
    icon: Ear,
    title: "Hearing Impairment",
    subtitle: "Living with partial deafness",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/30",
    summary: "I've been deaf in my right ear for as long as I can remember, and my left ear developed tinnitus around 2017.",
    fullStory: `I've been deaf in my right ear for as long as I can remember. I struggle relating to people due to difficulty in communication, especially since it's not a visible disability. Some would often say I should be grateful that I still have another functional ear. But as the saying goes, "knowing half of the matter is worse than ignorance" - having partial deafness doesn't come with any perks either.

My left ear developed tinnitus around 2017 and has been ringing constantly ever since. Imagine the constant agony of hearing the high-pitched sound of microphone feedback 24/7 - that's what tinnitus is, a vicious cycle of stress and anxiety that seems never-ending, a symptom of gradual hearing loss, like living on borrowed time.

Despite these challenges, I continue to stream and create content, hoping to show others that disability doesn't define our capabilities.`
  },
  {
    icon: Pill,
    title: "Graves' Disease Survivor",
    subtitle: "Autoimmune warrior",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "border-purple-400/30",
    summary: "In November 2023, I completed radiation therapy for Graves' disease after a long battle with this autoimmune disorder.",
    fullStory: `Around 2022, I began struggling with even the simplest movements - I could barely stand, walk, or lift my arms. Over time, I watched my body transform. I felt disproportionate and unfamiliar, becoming skin and bones, hair falling out, eyes changing, and a neck shifting. I barely recognized myself, forever altered.

At first, I dismissed it all, thinking it was just exhaustion from work. But as my mobility slipped away, fear took hold. I lived in constant anxiety of my legs giving out unexpectedly in public - whether I was eating out, grocery shopping, or even crossing the road, especially when I was living alone.

I spent countless hours in the hospital, almost every month, sometimes every week, enduring long waits that consumed my days and stretched late into the night. November 2, 2023 marks my first anniversary of completing radiation therapy.

Graves' disease is an autoimmune disorder that affects the thyroid (the organ that regulates metabolism), causing muscle weakness, unintentional weight loss, and heart arrhythmia. Exposure to severe stressors and high levels of subsequent distress such as post-traumatic stress disorder increases the risk of immune disease.

The physical reminders are now forever with me. A destroyed organ remains inside me, and I now rely on permanent maintenance medication even when I was just in my 20s.`
  },
  {
    icon: Brain,
    title: "Mental Health & Neurodivergence",
    subtitle: "Depression, ADHD & Being Different",
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
    borderColor: "border-pink-400/30",
    summary: "I've been clinically diagnosed with major depressive disorder for about a decade and navigate life with ADHD and neurodivergence.",
    fullStory: `I've been clinically diagnosed with major depressive disorder for about a decade now, even though I know it's been there long before that. I've been through several therapies, medicines, even social functions, and other ways that felt futile.

Living with ADHD and being neurodivergent adds another layer to daily life. The constant struggle with focus, the racing thoughts, the difficulty in social situations - it's all part of who I am. But I've learned that my brain working differently isn't a flaw; it's just different.

Along with various pasts that I have been trying to bury, it's a battle to keep going when the weight of it all feels so immense. The constant profound losses feel heavy on my heart, and I find myself losing interest in everything.

The only way I've been able to cope is through watching series and reading webtoons that resonated with me, along with gaming and streaming, where I met a few who supported me. But, as it often goes, people come and go. I'm grateful to the few who stayed, and to those who have unfriended me, I'm truly sorry for my shortcomings.

To those I may have drifted from, I hope our paths cross again. I just have to get by, for as long as I can, as I have always been trying, until now.`
  },
]

const advocacyPoints = [
  {
    icon: Users,
    title: "Community Building",
    description: "Creating safe, inclusive spaces in my streams where everyone can relax, laugh, and be themselves regardless of their abilities or background."
  },
  {
    icon: Shield,
    title: "Accessibility Awareness",
    description: "Sharing my experiences to help others understand invisible disabilities and the importance of inclusive design in technology."
  },
  {
    icon: Heart,
    title: "Mental Health Support",
    description: "Breaking the stigma around mental health by openly discussing my journey with depression and encouraging others to seek help."
  },
  {
    icon: Sparkles,
    title: "Inspiring Resilience",
    description: "Showing that chronic illness and disability don't define our worth or limit our potential to achieve our dreams."
  },
]

function JourneyCard({ journey, index }: { journey: typeof healthJourneys[0], index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const Icon = journey.icon

  return (
    <StaggerItem>
      <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
        <Card className={`bg-card/80 backdrop-blur-sm border ${journey.borderColor} overflow-hidden`}>
          <CardHeader className="pb-2">
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-xl ${journey.bgColor}`}>
                <Icon className={`w-6 h-6 ${journey.color}`} />
              </div>
              <div className="flex-1">
                <CardTitle className="text-lg text-foreground">{journey.title}</CardTitle>
                <p className={`text-sm ${journey.color}`}>{journey.subtitle}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{journey.summary}</p>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-border/50">
                    {journey.fullStory.split('\n\n').map((paragraph, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-muted-foreground text-sm mb-4 last:mb-0 leading-relaxed"
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className={`mt-2 w-full ${journey.color} hover:${journey.bgColor}`}
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-2" />
                  Read Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-2" />
                  Read My Full Story
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </StaggerItem>
  )
}

export function AdvocacySection() {
  return (
    <section id="advocacy" className="py-16 md:py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="container px-4">
        <FadeIn className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Heart className="w-6 h-6 text-accent" />
            <h2 className="text-2xl md:text-3xl font-bold">
              My <span className="text-accent">Journey</span> & Advocacy
            </h2>
          </div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm">
            I believe in being open about my struggles because it helps others feel less alone. 
            Here&apos;s my story - the challenges I&apos;ve faced and continue to face, 
            and why I advocate for awareness and inclusivity.
          </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {healthJourneys.map((journey, index) => (
            <JourneyCard key={journey.title} journey={journey} index={index} />
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">
              What I <span className="text-primary">Stand For</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {advocacyPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <point.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{point.title}</h4>
                      <p className="text-sm text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-12 text-center">
          <motion.div
            className="inline-block p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-lg text-foreground italic max-w-2xl">
              &ldquo;It&apos;s a battle to keep going when the weight of it all feels so immense. 
              But I just have to get by, for as long as I can, as I have always been trying, until now.&rdquo;
            </p>
            <p className="text-primary mt-2 font-medium">- Kevin</p>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
