import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsBanner } from "@/components/stats-banner"
import { AboutSection } from "@/components/about-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FaqSection } from "@/components/faq-section"
import { AvailabilityCalendar } from "@/components/availability-calendar"
import { CollaborationsSection } from "@/components/collaborations-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <HeroSection />
        <StatsBanner />
        <AboutSection />
        <HowItWorksSection />
        <FaqSection />
        <AvailabilityCalendar />
        <CollaborationsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
