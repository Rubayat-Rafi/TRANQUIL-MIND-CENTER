import AboutSection from "@/components/LandingPageSection/AboutSection";
import ContactSection from "@/components/LandingPageSection/ContactSection";
import FAQSection from "@/components/LandingPageSection/FAQSection";
import HeroSection from "@/components/LandingPageSection/HeroSection";
import ScheduleSection from "@/components/LandingPageSection/ScheduleSection";
import ServicesSection from "@/components/LandingPageSection/ServicesSection";
import TreatmentProcessSection from "@/components/LandingPageSection/TreatmentProcessSection";
import WhatIsTMSSection from "@/components/LandingPageSection/WhatIsTMSSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhatIsTMSSection />
      <ServicesSection />
      <TreatmentProcessSection />
      <ScheduleSection />
      <FAQSection />
      {/* <ContactSection /> */}
    </>
  );
}
