"use client"

import React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn, ScaleIn } from "./motion-wrapper"
import { Download, Mail, User, CheckCircle, Loader2, FileText, Lock } from "lucide-react"

export function CVDownloadSection() {
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
    // Trigger download
    const link = document.createElement("a")
    link.href = "/Kevin_Vega_CV.pdf"
    link.download = "Kevin_Vega_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="cv-download" className="py-16 md:py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container px-4">
        <FadeIn className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Download My <span className="text-primary">CV</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            Get my complete curriculum vitae with detailed work experience, projects, 
            education, and achievements. Enter your email to access the download.
          </p>
        </FadeIn>

        <div className="max-w-lg mx-auto">
          <ScaleIn delay={0.2}>
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden">
              <CardHeader className="text-center pb-4">
                <motion.div
                  className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center"
                  animate={{ 
                    boxShadow: isUnlocked 
                      ? "0 0 30px rgba(112, 180, 255, 0.5)" 
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
                        <CheckCircle className="w-8 h-8 text-green-400" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="locked"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <Lock className="w-8 h-8 text-primary" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                <CardTitle className="text-xl">
                  {isUnlocked ? "Access Granted!" : "Unlock CV Download"}
                </CardTitle>
                <CardDescription>
                  {isUnlocked 
                    ? "Thank you! Click below to download my CV." 
                    : "Enter your details to access my full CV"
                  }
                </CardDescription>
              </CardHeader>

              <CardContent>
                <AnimatePresence mode="wait">
                  {!isUnlocked ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm text-muted-foreground">
                          Name (Optional)
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="name"
                            type="text"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="pl-10 bg-background/50"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm text-muted-foreground">
                          Email Address <span className="text-accent">*</span>
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="pl-10 bg-background/50"
                          />
                        </div>
                      </div>

                      {error && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-red-400 text-center"
                        >
                          {error}
                        </motion.p>
                      )}

                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90"
                        disabled={isLoading || !email}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Verifying...
                          </>
                        ) : (
                          <>
                            <FileText className="w-4 h-4 mr-2" />
                            Unlock Download
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        Your email will only be used to notify me of download requests.
                        I respect your privacy and will not spam you.
                      </p>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="download"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-4"
                    >
                      <motion.div
                        className="p-4 rounded-lg bg-green-500/10 border border-green-500/30"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                      >
                        <p className="text-sm text-green-400 text-center">
                          Thank you for your interest, {name || "friend"}! 
                          I&apos;ve been notified of your download request.
                        </p>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          onClick={handleDownload}
                          className="w-full bg-gradient-to-r from-primary to-sky-400 hover:opacity-90 text-primary-foreground"
                          size="lg"
                        >
                          <Download className="w-5 h-5 mr-2" />
                          Download CV (PDF)
                        </Button>
                      </motion.div>

                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <FileText className="w-4 h-4" />
                        <span>Kevin_Vega_CV.pdf</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </ScaleIn>

          <FadeIn delay={0.4} className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Includes: Professional Experience, Technical Skills, Projects, 
              Education, Certifications, and Achievements
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
