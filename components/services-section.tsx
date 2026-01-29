"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Code, Palette, Smartphone, MessageSquare, CheckCircle, ArrowRight } from "lucide-react"

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
    icon: Palette,
    title: "UI/UX Design",
    description: "Clean, user-friendly interfaces designed in Figma with attention to accessibility and user experience. Responsive designs that work on all devices.",
    technologies: ["Figma", "Adobe XD", "Responsive Design", "A11y"],
  },
  {
    icon: MessageSquare,
    title: "Consultation & Mentorship",
    description: "Technical guidance for your projects and teams. Code reviews, architecture advice, and one-on-one mentorship for aspiring developers.",
    technologies: ["Code Review", "Architecture", "Career Guidance", "Teaching"],
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
          <span className="text-primary text-xs font-medium tracking-wider uppercase">Kevin Devs</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-3">Freelance Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
            I build affordable websites and apps to help businesses grow. 
            Sharing my dev journey and helping anyone who wants to learn.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-4 mb-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: 5 }}
                >
                  <service.icon size={28} className="text-primary" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Why Work With Me</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl" />
            <div className="relative p-8 rounded-2xl bg-background border border-border">
              <Image
                src="/images/dev-poster.png"
                alt="Kevin Devs Services"
                width={400}
                height={500}
                className="w-full h-auto rounded-xl mb-6"
              />
              <div className="space-y-3">
                <motion.a
                  href="mailto:cmsckvz@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-primary text-primary-foreground rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-primary/25"
                >
                  Get a Free Quote via Email
                  <ArrowRight size={18} />
                </motion.a>
                <motion.a
                  href="https://facebook.com/csmckvz"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-blue-600 text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-blue-600/25"
                >
                  Message on Facebook
                  <ArrowRight size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
