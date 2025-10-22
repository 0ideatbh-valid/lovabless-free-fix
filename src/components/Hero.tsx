import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import { LogoAnimation } from "./ui/logo-animation";
import { Sparkles, Users, Zap } from "lucide-react";

export const Hero = () => {
  const { t, language } = useLanguage();

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="border-2 border-foreground rounded-3xl p-8 md:p-16 lg:p-20 relative overflow-hidden bg-background">
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
                  <>Make something great</>
                ) : (
                  <>Haz algo grandioso</>
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

            {/* Right decorative - Logo shapes */}
            <div className="hidden md:flex items-center justify-center relative">
              <div className="relative w-64 h-64">
                <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-foreground animate-float" style={{ animationDelay: '0s' }} />
                <div className="absolute top-4 right-8 w-20 h-24 rounded-[50%] bg-gradient-to-b from-[hsl(8,77%,58%)] to-[hsl(8,77%,48%)] animate-float" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-8 left-4 right-4 h-20 rounded-[50%] bg-gradient-to-r from-[hsl(156,73%,52%)] via-[hsl(180,73%,52%)] to-[hsl(210,73%,55%)] animate-float" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-gradient-to-br from-[hsl(8,77%,58%)] to-[hsl(8,77%,48%)] border-2 border-foreground rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-8 h-8 mb-4 text-white" />
            <h3 className="text-xl font-bold mb-2 text-white">
              {language === 'en' ? 'Creative Excellence' : 'Excelencia Creativa'}
            </h3>
            <p className="text-sm text-white/90">
              {language === 'en' ? 'Innovative strategies that make your brand stand out' : 'Estrategias innovadoras que hacen destacar tu marca'}
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-[hsl(210,73%,65%)] to-[hsl(210,73%,55%)] border-2 border-foreground rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
            <Users className="w-8 h-8 mb-4 text-white" />
            <h3 className="text-xl font-bold mb-2 text-white">
              {language === 'en' ? 'Team Collaboration' : 'Colaboración en Equipo'}
            </h3>
            <p className="text-sm text-white/90">
              {language === 'en' ? 'Work together seamlessly with our expert team' : 'Trabaja sin problemas con nuestro equipo experto'}
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-[hsl(156,73%,62%)] to-[hsl(156,73%,52%)] border-2 border-foreground rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
            <Zap className="w-8 h-8 mb-4 text-white" />
            <h3 className="text-xl font-bold mb-2 text-white">
              {language === 'en' ? 'Fast Results' : 'Resultados Rápidos'}
            </h3>
            <p className="text-sm text-white/90">
              {language === 'en' ? 'Quick turnaround without compromising quality' : 'Entrega rápida sin comprometer la calidad'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
