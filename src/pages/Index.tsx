import { LanguageToggle } from "@/components/LanguageToggle";
import { Hero } from "@/components/Hero";
import { WhyFree } from "@/components/WhyFree";
import { WhatWeDo } from "@/components/WhatWeDo";
import { HowItWorks } from "@/components/HowItWorks";
import { LinkedInPanel } from "@/components/LinkedInPanel";
import { ContactForm } from "@/components/ContactForm";
import { Disclaimer } from "@/components/Disclaimer";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LanguageToggle />
      <Hero />
      <WhyFree />
      <WhatWeDo />
      <HowItWorks />
      <LinkedInPanel />
      <ContactForm />
      <Disclaimer />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
