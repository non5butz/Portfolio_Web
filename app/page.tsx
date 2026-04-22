import { HeroSection } from "@/components/portfolio/hero-section"
import { PhilosophySection } from "@/components/portfolio/philosophy-section"
import { WorksSection } from "@/components/portfolio/works-section"
import { CredentialsSection } from "@/components/portfolio/credentials-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"

export default function PortfolioPage() {
  return (
    <main>
      <HeroSection />
      <PhilosophySection />
      <WorksSection />
      <CredentialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
