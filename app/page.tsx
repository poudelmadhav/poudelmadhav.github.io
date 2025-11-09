import ParticlesBackground from "@/components/particles-background"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      <ParticlesBackground />
      <div className="relative z-10 max-w-7xl mx-auto">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
