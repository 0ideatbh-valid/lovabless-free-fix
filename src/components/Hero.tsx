import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import { LogoAnimation } from "./ui/logo-animation";
import { Sparkles, Users, Gift } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export const Hero = () => {
  const { t, language } = useLanguage();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left - rect.width / 2) / 20,
          y: (e.clientY - rect.top - rect.height / 2) / 20,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div ref={heroRef} className="border-2 border-foreground rounded-3xl p-8 md:p-16 lg:p-20 relative overflow-hidden bg-background">
          {/* Logo Animation Background */}
          <LogoAnimation />
          
          {/* Decorative elements */}
          <div className="absolute top-6 right-6 w-8 h-8 rounded-full border-2 border-foreground" />
          <div className="absolute bottom-6 right-12 w-6 h-6 rounded-full bg-foreground" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left content */}
            <div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 text-foreground leading-[0.9] tracking-tight">
                {language === 'en' ? (
                  <>Make your brand unmissable</>
                ) : (
                  <>Haz que tu marca no pase desapercibida</>
                )}
              </h1>
              <Button 
                size="lg" 
                onClick={scrollToForm}
                className="text-lg px-10 py-7 rounded-full font-medium bg-[#FFB8A8] hover:bg-[#FF9B87] text-foreground border-none shadow-lg hover:scale-105 transition-all"
              >
                {language === 'en' ? "Let's go" : "Vamos"}
              </Button>
            </div>

            {/* Right decorative - Logo shapes with cursor interaction */}
            <div className="hidden md:flex items-center justify-center relative">
              <div className="relative w-64 h-64">
                <div 
                  className="absolute top-8 left-8 w-16 h-16 rounded-full bg-foreground animate-float transition-transform duration-300 ease-out" 
                  style={{ 
                    animationDelay: '0s',
                    transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`
                  }} 
                />
                <div 
                  className="absolute top-4 right-8 w-20 h-24 rounded-[50%] bg-gradient-to-b from-[hsl(8,77%,58%)] to-[hsl(8,77%,48%)] animate-float transition-transform duration-300 ease-out" 
                  style={{ 
                    animationDelay: '0.5s',
                    transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)`
                  }} 
                />
                <div 
                  className="absolute bottom-8 left-4 right-4 h-20 rounded-[50%] bg-gradient-to-r from-[hsl(156,73%,52%)] via-[hsl(180,73%,52%)] to-[hsl(210,73%,55%)] animate-float transition-transform duration-300 ease-out" 
                  style={{ 
                    animationDelay: '1s',
                    transform: `translate(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px)`
                  }} 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-gradient-to-br from-[hsl(8,77%,58%)] to-[hsl(8,77%,48%)] border-2 border-foreground rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-8 h-8 mb-4 text-white" />
            <h3 className="text-xl font-bold mb-2 text-white">
              {language === 'en' ? 'Strategic Marketing Consulting' : 'Consultoría Estratégica de Marketing'}
            </h3>
            <p className="text-sm text-white/90">
              {language === 'en' ? 'Expert brand strategy and digital marketing services to position your business effectively' : 'Estrategia de marca experta y servicios de marketing digital para posicionar tu negocio efectivamente'}
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-[hsl(210,73%,65%)] to-[hsl(210,73%,55%)] border-2 border-foreground rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
            <Users className="w-8 h-8 mb-4 text-white" />
            <h3 className="text-xl font-bold mb-2 text-white">
              {language === 'en' ? 'Marketing-Savvy Collaboration' : 'Colaboración Experta'}
            </h3>
            <p className="text-sm text-white/90">
              {language === 'en' ? 'Work with savvy marketing professionals who understand small business growth' : 'Trabaja con profesionales del marketing que entienden el crecimiento de pequeños negocios'}
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-[hsl(156,73%,62%)] to-[hsl(156,73%,52%)] border-2 border-foreground rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
            <Gift className="w-8 h-8 mb-4 text-white" />
            <h3 className="text-xl font-bold mb-2 text-white">
              {language === 'en' ? 'Free Marketing Support' : 'Soporte de Marketing Gratuito'}
            </h3>
            <p className="text-sm text-white/90">
              {language === 'en' ? 'Professional marketing agency services at no cost - helping good businesses succeed' : 'Servicios profesionales de agencia de marketing sin coste - ayudando a buenos negocios a tener éxito'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
