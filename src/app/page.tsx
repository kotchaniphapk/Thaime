'use client';

import { FeaturesSection } from "@/components/FeaturesSection";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FAQSection } from "@/components/FAQSection";
import { PricingSection } from "@/components/PricingSection";
import { ExamplesSection } from "@/components/ExamplesSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { TemplateQRShowcase } from "@/components/TemplateQRShowcase";

export default function Home() {
  const handlePricingClick = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleExamplesClick = () => {
    const element = document.getElementById('examples');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="">
      <Navbar />
      <HeroSection onPricingClick={handlePricingClick} onExamplesClick={handleExamplesClick} />
      <TemplateQRShowcase />
      <HowItWorksSection />
      <ExamplesSection />
      <PricingSection />
      <FeaturesSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
