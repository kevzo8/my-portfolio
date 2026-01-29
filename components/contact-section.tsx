"use client"

import React, { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Mail, ExternalLink, Heart, Briefcase, Code, Gamepad2, Download, User, CheckCircle, Loader2, FileText, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const contactCategories = [
  {
    category: "Professional: Kevin Vega",
    icon: Briefcase,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    contacts: [
      { label: "Email", value: "kevinguadalupevega@gmail.com", href: "mailto:kevinguadalupevega@gmail.com" },
      { label: "LinkedIn", value: "kgvega", href: "https://linkedin.com/in/kgvega" },
      { label: "GitHub", value: "kevzo8", href: "https://github.com/kevzo8" },
    ]
  },
  {
    category: "Freelance Developer: Kevin Devs",
    icon: Code,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    contacts: [
      { label: "Email", value: "cmsckvz@gmail.com", href: "mailto:cmsckvz@gmail.com" },
      { label: "Facebook", value: "Kevin Devs", href: "https://facebook.com/csmckvz" },
    ]
  },
  {
    category: "Streaming & Gaming: Kevzo8",
    icon: Gamepad2,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    contacts: [
      { label: "Email", value: "kevzo8gaming@gmail.com", href: "mailto:kevzo8gaming@gmail.com" },
      { label: "Twitch", value: "kevzo8", href: "https://twitch.tv/kevzo8" },
      { label: "YouTube", value: "kevzo8", href: "https://youtube.com/kevzo8" },
      { label: "X (Twitter)", value: "@kevzo8", href: "https://x.com/kevzo8" },
      { label: "TikTok", value: "@kevzo8", href: "https://tiktok.com/@kevzo8" },
      { label: "Facebook", value: "Kevzo8", href: "https://facebook.com/kevzo8gaming" },
      { label: "Discord", value: "@kevzo8", href: "https://discord.com/users/kevzo8" },
      { label: "Ko-fi", value: "kevzo8", href: "https://ko-fi.com/kevzo8" },
    ]
  },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  // CV Download state
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/cv-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      })

      const data = await response.json()

      if (data.success) {
        setIsUnlocked(true)
      } else {
        setError(data.error || "Something went wrong. Please try again.")
      }
    } catch {
      setError("Failed to connect. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/Kevin_Vega_CV.pdf"
    link.download = "Kevin_Vega_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="contact" className="py-16 md:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-primary text-xs font-medium tracking-wider uppercase">Let&apos;s Connect</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-3">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
            Whether you want to discuss a project, collaborate, or just say hi - 
            feel free to reach out. You can also download my CV below!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Contact Categories */}
          <div className="lg:col-span-2 space-y-4">
            {contactCategories.map((cat, catIndex) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + catIndex * 0.1 }}
                className="p-4 rounded-xl bg-card border border-border"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${cat.bgColor}`}>
                    <cat.icon className={`w-4 h-4 ${cat.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{cat.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.contacts.map((contact, index) => (
                    <motion.a
                      key={contact.label}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + catIndex * 0.1 + index * 0.03 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all group"
                    >
                      <span className="font-medium">{contact.label}:</span>
                      <span className="opacity-80">{contact.value}</span>
                      <ExternalLink size={10} className="opacity-50 group-hover:opacity-100" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Brand Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-4 rounded-xl bg-card border border-border"
            >
              <div className="flex items-center gap-4">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="relative">
                  <div className="absolute inset-0 bg-primary/30 rounded-full blur-md animate-pulse" />
                  <Image
                    src="/images/avatar.png"
                    alt="Kevzo8 pixel avatar"
                    width={48}
                    height={48}
                    className="rounded-full relative z-10"
                  />
                </motion.div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground">Kevin Devs</h3>
                  <p className="text-xs text-primary">@kevzo8</p>
                </div>
                <motion.div 
                  className="flex items-center gap-1 text-accent"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart size={14} fill="currentColor" />
                  <span className="text-xs">Cozy vibes</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* CV Download Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 h-full">
              <CardHeader className="text-center pb-3">
                <motion.div
                  className="mx-auto mb-3 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                  animate={{ 
                    boxShadow: isUnlocked 
                      ? "0 0 20px rgba(112, 180, 255, 0.5)" 
                      : "0 0 0px rgba(112, 180, 255, 0)"
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <AnimatePresence mode="wait">
                    {isUnlocked ? (
                      <motion.div
                        key="unlocked"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <CheckCircle className="w-6 h-6 text-green-400" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="locked"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <Lock className="w-6 h-6 text-primary" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                <CardTitle className="text-lg">
                  {isUnlocked ? "Access Granted!" : "Download CV"}
                </CardTitle>
                <CardDescription className="text-xs">
                  {isUnlocked 
                    ? "Click below to download" 
                    : "Enter your email to access"
                  }
                </CardDescription>
              </CardHeader>

              <CardContent>
                <AnimatePresence mode="wait">
                  {!isUnlocked ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      onSubmit={handleSubmit}
                      className="space-y-3"
                    >
                      <div className="space-y-1.5">
                        <Label htmlFor="name" className="text-xs text-muted-foreground">
                          Name (Optional)
                        </Label>
                        <div className="relative">
                          <User className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                          <Input
                            id="name"
                            type="text"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="pl-8 h-9 text-sm bg-background/50"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="email" className="text-xs text-muted-foreground">
                          Email <span className="text-accent">*</span>
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="pl-8 h-9 text-sm bg-background/50"
                          />
                        </div>
                      </div>

                      {error && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-xs text-red-400 text-center"
                        >
                          {error}
                        </motion.p>
                      )}

                      <Button
                        type="submit"
                        className="w-full h-9 text-sm bg-primary hover:bg-primary/90"
                        disabled={isLoading || !email}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" />
                            Verifying...
                          </>
                        ) : (
                          <>
                            <FileText className="w-3.5 h-3.5 mr-1.5" />
                            Unlock Download
                          </>
                        )}
                      </Button>

                      <p className="text-[10px] text-muted-foreground text-center leading-relaxed">
                        Your email notifies me of downloads. No spam.
                      </p>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="download"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-3"
                    >
                      <motion.div
                        className="p-3 rounded-lg bg-green-500/10 border border-green-500/30"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                      >
                        <p className="text-xs text-green-400 text-center">
                          Thanks{name ? `, ${name}` : ""}! I&apos;ve been notified.
                        </p>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          onClick={handleDownload}
                          className="w-full bg-gradient-to-r from-primary to-sky-400 hover:opacity-90 text-primary-foreground"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download CV
                        </Button>
                      </motion.div>

                      <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                        <FileText className="w-3 h-3" />
                        <span>Kevin_Vega_CV.pdf</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
