"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-12 border-t border-border relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/images/avatar.png"
              alt="Kevzo8 avatar"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-foreground font-medium">Kevzo8</span>
          </motion.div>
          
          <p className="text-sm text-muted-foreground text-center flex items-center gap-1">
            Designed & built with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={14} className="text-accent" fill="currentColor" />
            </motion.span>
            by Kevin Vega. Powered by Next.js & Vercel.
          </p>
          
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Kevin Vega {new Date().getFullYear()}
            </p>
            <motion.button
              type="button"
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
