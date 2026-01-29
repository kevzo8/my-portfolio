"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react"

const galleryItems = [
  {
    src: "/images/media-kit.png",
    alt: "Kevzo8 Media Kit - Winter Tsar VTuber showing character, games played, and social media stats",
    title: "Media Kit",
    description: "Official media kit featuring the Winter Tsar VTuber persona, channel statistics, and games I regularly stream.",
  },
  {
    src: "/images/vtuber-portrait.jpg",
    alt: "Kevzo8 VTuber portrait fan art by Phaera",
    title: "VTuber Portrait",
    description: "Beautiful fan art portrait of my Winter Tsar VTuber character, featuring the signature horns and icy aesthetic.",
  },
  {
    src: "/images/cosplay.jpg",
    alt: "Kevin Vega cosplaying as a character with silver hair and blue costume",
    title: "Cosplay",
    description: "Me in one of my cosplay costumes! I enjoy bringing characters from my favorite games to life.",
  },
  {
    src: "/images/professional.jpg",
    alt: "Kevin Vega professional photo with hackathon awards and achievements visible",
    title: "The Developer",
    description: "At my workspace with some of my hackathon wins and achievements displayed behind me.",
  },
  {
    src: "/images/academic.jpg",
    alt: "Kevin Vega at UP Los Banos graduation in Barong Tagalog",
    title: "The Educator",
    description: "Graduation day at UP Los Banos - wearing the traditional Filipino Barong Tagalog.",
  },
  {
    src: "/images/vtuber-character.jpg",
    alt: "Kevzo8 VTuber character - Winter Tsar full design",
    title: "VTuber Character",
    description: "My VTuber character design inspired by the Winter Tsar aesthetic with ice and crystal motifs.",
  },
]

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const selectedImage = selectedIndex !== null ? galleryItems[selectedIndex] : null

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedIndex === null) return
    if (direction === "prev") {
      setSelectedIndex(selectedIndex === 0 ? galleryItems.length - 1 : selectedIndex - 1)
    } else {
      setSelectedIndex(selectedIndex === galleryItems.length - 1 ? 0 : selectedIndex + 1)
    }
  }

  return (
    <section id="gallery" className="py-16 md:py-20 bg-card/50">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-primary text-xs font-medium tracking-wider uppercase">Visual Content</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-3">Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            A collection of media kit materials, promotional content, and artwork showcasing my brand and VTuber persona.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3"
        >
          {galleryItems.map((item, index) => (
            <motion.button
              key={item.src}
              type="button"
              onClick={() => setSelectedIndex(index)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-secondary border border-border hover:border-primary/50 transition-all cursor-pointer shadow-lg"
            >
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
                <ZoomIn size={24} className="text-foreground mb-2" />
                <p className="text-foreground font-medium text-sm text-center">{item.title}</p>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedIndex(null)}
              role="dialog"
              aria-modal="true"
              aria-label="Image lightbox"
            >
              {/* Close button */}
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 p-3 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors z-10"
                aria-label="Close lightbox"
              >
                <X size={24} />
              </motion.button>

              {/* Navigation buttons */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                type="button"
                onClick={(e) => { e.stopPropagation(); navigateImage("prev") }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                type="button"
                onClick={(e) => { e.stopPropagation(); navigateImage("next") }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors z-10"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </motion.button>

              {/* Image container */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative max-w-4xl max-h-[85vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  width={1200}
                  height={1600}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-xl shadow-2xl"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center mt-6"
                >
                  <h3 className="text-xl font-bold text-foreground mb-2">{selectedImage.title}</h3>
                  <p className="text-muted-foreground max-w-xl mx-auto">{selectedImage.description}</p>
                </motion.div>
              </motion.div>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {galleryItems.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setSelectedIndex(index) }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === selectedIndex ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
