"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn, FloatingElement } from "./motion-wrapper"
import { Twitch, Youtube, Twitter, ExternalLink, Gamepad2, Users, Heart } from "lucide-react"

const channels = [
  { 
    name: "Twitch", 
    handle: "@kevzo8", 
    followers: "4.4K", 
    url: "https://twitch.tv/kevzo8", 
    icon: Twitch,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "hover:border-purple-400/50"
  },
  { 
    name: "X (Twitter)", 
    handle: "@kevzo8", 
    followers: "2.9K", 
    url: "https://x.com/kevzo8", 
    icon: Twitter,
    color: "text-sky-400",
    bgColor: "bg-sky-400/10",
    borderColor: "hover:border-sky-400/50"
  },
  { 
    name: "YouTube", 
    handle: "kevzo8", 
    followers: "160+", 
    url: "https://youtube.com/kevzo8", 
    icon: Youtube,
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    borderColor: "hover:border-red-400/50"
  },
  { 
    name: "TikTok", 
    handle: "@kevzo8", 
    followers: "100+", 
    url: "https://tiktok.com/@kevzo8", 
    icon: Gamepad2,
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
    borderColor: "hover:border-pink-400/50"
  },
]

const games = [
  "Genshin Impact",
  "Wuthering Waves",
  "Honkai: Star Rail",
  "Zenless Zone Zero",
  "Arknights: Endfield",
  "Pokemon TCG Pocket",
  "Infinity Nikki",
  "Where Winds Meet",
  "Pokemon GO",
]

const streamHighlights = [
  "Account piloting & character reviews",
  "End-game content guides (Spiral Abyss, Imaginarium Theater)",
  "Builds, tips & strategies",
  "Cozy vibes & genuine connection",
  "Casual cosplay content",
]

export function StreamingSection() {
  return (
    <section id="streaming" className="py-16 md:py-20">
      <div className="container px-4">
        <FadeIn className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Twitch className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl md:text-3xl font-bold">
              Content <span className="text-purple-400">Creation</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            As Kevzo8, the Winter Tsar VTuber - a Filipino variety streamer creating 
            cozy content focused on comfort, fun, and genuine connection
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <div className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-400" />
                  My Streams Are All About
                </h3>
                <p className="text-muted-foreground mb-4">
                  Comfort, fun, and genuine connection - a chill place to relax, laugh, and just be yourself.
                  Come hang out and make cozy memories with me!
                </p>
                <ul className="space-y-2">
                  {streamHighlights.map((highlight, index) => (
                    <motion.li
                      key={highlight}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                My Channels
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {channels.map((channel, index) => (
                  <motion.div
                    key={channel.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03, y: -3 }}
                  >
                    <Link href={channel.url} target="_blank">
                      <Card className={`bg-card/80 border-border/50 ${channel.borderColor} transition-all cursor-pointer`}>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`p-2 rounded-lg ${channel.bgColor}`}>
                              <channel.icon className={`w-4 h-4 ${channel.color}`} />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-foreground text-sm">{channel.name}</p>
                              <p className="text-xs text-muted-foreground">{channel.handle}</p>
                            </div>
                            <ExternalLink className="w-3 h-3 text-muted-foreground" />
                          </div>
                          <p className={`text-lg font-bold ${channel.color}`}>{channel.followers}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Gamepad2 className="w-5 h-5 text-primary" />
                Games I Play
              </h3>
              <div className="flex flex-wrap gap-2">
                {games.map((game, index) => (
                  <motion.div
                    key={game}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge variant="secondary" className="cursor-default">
                      {game}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Button asChild size="lg" className="bg-purple-500 hover:bg-purple-600 w-full sm:w-auto">
                  <Link href="https://twitch.tv/kevzo8" target="_blank">
                    <Twitch className="w-5 h-5 mr-2" />
                    Watch Me Live on Twitch
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </FadeIn>
          </div>

          {/* VTuber Image */}
          <FadeIn delay={0.3} direction="right" className="flex justify-center">
            <FloatingElement>
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
                <Image
                  src="/images/vtuber-character.jpg"
                  alt="Kevzo8 VTuber character - Winter Tsar"
                  width={400}
                  height={600}
                  className="relative z-10 rounded-2xl shadow-2xl border border-purple-500/20"
                />
              </motion.div>
            </FloatingElement>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
