import { SiteNav } from "@/components/sections/site-nav";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { FacilitiesSection } from "@/components/sections/facilities-section";
import { DailyLifeSection } from "@/components/sections/daily-life-section";
import { TeamSection } from "@/components/sections/team-section";
import { VoicesSection } from "@/components/sections/voices-section";
import { FaqSection } from "@/components/sections/faq-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SiteFooter } from "@/components/sections/site-footer";

/**
 * St Monica (聖モニカ) — resthome landing page.
 * Ported from the "St Monica.dc.html" Claude Design source.
 */
export default function ResthomePage() {
  return (
    <div className="bg-cream font-gothic text-ink">
      <SiteNav />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <FacilitiesSection />
        <DailyLifeSection />
        <TeamSection />
        <VoicesSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
