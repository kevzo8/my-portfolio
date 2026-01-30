"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { Code, Palette, Smartphone, MessageSquare, CheckCircle, ArrowRight, Sparkles, X, Briefcase } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies like React, Next.js, Node.js, and TypeScript. From landing pages to full-stack applications.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile apps using Flutter and React Native for iOS and Android. Native-like performance with a single codebase.",
    technologies: ["Flutter", "React Native", "Dart", "Firebase"],
  },
  {
    icon: Sparkles,
    title: "AI-Powered Solutions",
    description: "Intelligent applications leveraging machine learning and LLMs. From predictive models to AI-enhanced features that make your product smarter.",
    technologies: ["Machine Learning", "LLMs", "Computer Vision", "AI Integration"],
  },
  {
    icon: Palette,
    title: "UI/UX and Graphics Design",
    description: "Clean, user-friendly interfaces and stunning graphics designed in Figma with attention to visual consistency and user experience. Responsive designs that work on all devices.",
    technologies: ["Figma", "Adobe XD", "Canva", "Responsive Design"],
  },
  {
    icon: MessageSquare,
    title: "Consultation & Mentorship",
    description: "Technical guidance leveraging AI technologies and machine learning insights. Code reviews, architecture advice, and mentorship for teams building intelligent solutions.",
    technologies: ["Code Review", "Architecture", "AI Strategy", "Teaching"],
  },
]

const benefits = [
  "Affordable pricing tailored for small businesses and startups",
  "Flexible, negotiable rates with reasonable discounts",
  "Custom website design to bring your ideas to life",
  "Clear communication and honest timelines",
  "Post-launch support and maintenance options",
  "Educational approach - I help you understand your tech",
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isImageOpen, setIsImageOpen] = useState(false)

  return (
    <section id="services" className="py-16 md:py-20 bg-card/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-blue-400 text-xs font-medium tracking-wider uppercase">Kevin Devs</span>
          <div className="flex items-center justify-center gap-2 mt-2 mb-3">
            <Briefcase className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Freelance <span className="text-blue-400">Services</span></h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
            I build affordable websites and apps to help businesses grow. 
            Sharing my dev journey and helping anyone who wants to learn.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-6 gap-2 mb-8"
        >
          {/* Poster Section - Left side, spanning 2 rows and 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative md:col-span-2 md:row-span-2"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl" />
            <div className="relative p-4 rounded-2xl bg-background border border-border h-full flex flex-col">
              <motion.button
                onClick={() => setIsImageOpen(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="relative group cursor-pointer flex-1 mb-3"
              >
                <Image
                  src="/images/dev-poster.png"
                  alt="Kevin Devs Services"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover rounded-xl group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 rounded-xl bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-semibold bg-black/50 px-4 py-2 rounded-lg">Click to view</span>
                </div>
              </motion.button>
              <div className="space-y-2">
                <motion.a
                  href="mailto:cmsckvz@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-primary/25 text-xs"
                >
                  Contact Me via Email
                  <ArrowRight size={14} />
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/cmsckvz"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-600/25 text-xs"
                >
                  Message Me via Facebook
                  <ArrowRight size={14} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Services and Why Work With Me - 4 columns on the right */}
          <div className="md:col-span-4">
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-2"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-all shadow-lg hover:shadow-primary/10 h-full flex flex-col"
                >
                  <div className="flex items-start gap-3 h-full flex-col">
                    <motion.div 
                      className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                      whileHover={{ rotate: 5 }}
                    >
                      <service.icon size={20} className="text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-bold text-base text-foreground mb-1 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-xs mb-2">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-1.5 py-0.5 rounded-full bg-secondary text-secondary-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Why Work With Me Card - Same size as service cards */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-all shadow-lg hover:shadow-primary/10 h-full flex flex-col"
              >
                <h3 className="font-bold text-base text-foreground mb-2 group-hover:text-primary transition-colors">
                  Why Work With Me
                </h3>
                <div className="grid grid-cols-1 gap-2 flex-1">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-xs">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Image Viewer Modal */}
      {isImageOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsImageOpen(false)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full max-h-[90vh] flex items-center justify-center"
          >
            <Image
              src="/images/dev-poster.png"
              alt="Kevin Devs Services"
              width={800}
              height={1000}
              className="w-full h-auto rounded-xl object-contain"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsImageOpen(false)}
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-lg transition-colors"
            >
              <X size={24} className="text-white" />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
