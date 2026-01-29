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
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kevzo8 | Kevin Vega - Software Engineer, Educator, Content Creator',
  description: 'Explore the portfolio of Kevin Vega (Kevzo8) - Filipino software engineer, university educator, and content creator. View projects, skills, experience, and get in touch.',
}

export default function Home() {
  return (
    <>
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
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://kevzo8.com',
              },
            ],
          }),
        }}
      />
    </>
  )
}
