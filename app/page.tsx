import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { TeachingSection } from "@/components/teaching-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { EducationSection } from "@/components/education-section"
import { ServicesSection } from "@/components/services-section"
import { StreamingSection } from "@/components/streaming-section"
import { AdvocacySection } from "@/components/advocacy-section"
import { InterestsSection } from "@/components/interests-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <TeachingSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ServicesSection />
      <StreamingSection />
      <AdvocacySection />
      <InterestsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
