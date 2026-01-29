"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FadeIn, StaggerContainer, StaggerItem } from "./motion-wrapper"
import { Gamepad2, Tv, BookOpen, Music, Coffee, Plane, Heart, Sparkles } from "lucide-react"

const interests = [
  {
    icon: Gamepad2,
    title: "Gaming",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    items: ["Genshin Impact", "Honkai: Star Rail", "Pokemon", "Wuthering Waves", "Zenless Zone Zero"],
    note: "Gacha games are my comfort zone!"
  },
  {
    icon: Tv,
    title: "TV & Anime",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    items: ["Game of Thrones", "The Boys", "Brooklyn Nine-Nine", "Frieren", "Dungeon Meshi", "Oshi No Ko"],
    note: "Always watching something new"
  },
  {
    icon: BookOpen,
    title: "Reading",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    items: ["Webtoons", "Fantasy novels", "A Song of Ice and Fire", "Manga"],
    note: "Escapism through stories"
  },
  {
    icon: Music,
    title: "Music & Karaoke",
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
    items: ["Pop", "Rock", "Anime OSTs", "K-Pop", "OPM"],
    note: "Karaoke enthusiast since forever"
  },
  {
    icon: Coffee,
    title: "Lifestyle",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    items: ["Coffee dates", "Gym", "Movie nights", "Food trips", "Photography"],
    note: "Simple pleasures matter"
  },
  {
    icon: Plane,
    title: "Travel & Cosplay",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    items: ["New places", "Cosplay events", "Conventions", "Beach trips"],
    note: "Adventures await!"
  },
]

const funFacts = [
  { fact: "Can spend hours in gacha games pulling for characters", icon: Sparkles },
  { fact: "Love karaoke sessions with friends and strangers alike", icon: Music },
  { fact: "Casual cosplayer who enjoys conventions", icon: Heart },
  { fact: "Always up for spontaneous coffee dates", icon: Coffee },
]

export function InterestsSection() {
  return (
    <section id="interests" className="py-16 md:py-20 bg-card/30">
      <div className="container px-4">
        <FadeIn className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Heart className="w-6 h-6 text-accent" />
            <h2 className="text-2xl md:text-3xl font-bold">
              Beyond <span className="text-accent">Work</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            When I&apos;m not coding, teaching, or streaming, you&apos;ll find me enjoying these activities.
            Life is about balance, after all!
          </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {interests.map((interest) => (
            <StaggerItem key={interest.title}>
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${interest.bgColor}`}>
                        <interest.icon className={`w-5 h-5 ${interest.color}`} />
                      </div>
                      <CardTitle className="text-lg">{interest.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {interest.items.map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge variant="secondary" className="text-xs">
                            {item}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground italic">{interest.note}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Fun Facts */}
        <FadeIn delay={0.4} className="mt-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-6 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            Fun Facts About Me
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {funFacts.map((item, index) => (
              <motion.div
                key={item.fact}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-lg bg-card/50 border border-border/50 flex items-center gap-3"
              >
                <div className="p-2 rounded-lg bg-yellow-400/10">
                  <item.icon className="w-4 h-4 text-yellow-400" />
                </div>
                <p className="text-sm text-muted-foreground">{item.fact}</p>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
