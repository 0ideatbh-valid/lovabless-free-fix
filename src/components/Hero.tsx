import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export const Hero = () => {
  const { t, language } = useLanguage();

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-4 sm:px-6">
      {/* Shader Animation Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-black" />
      </div>
      
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--bgb-red) / 0.1), hsl(var(--bgb-blue) / 0.1), hsl(var(--bgb-green) / 0.1))',
          backgroundSize: '200% 200%',
          animation: 'gradient-float 20s ease-in-out infinite'
        }}
      />
      
      {/* Animated Circles - Bad, Good, Better */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-48 sm:w-64 h-48 sm:h-64 rounded-full opacity-20 animate-float-scale"
          style={{ 
            background: 'hsl(var(--bgb-red))',
            top: '10%',
            left: '5%',
            filter: 'blur(60px)'
          }}
        />
        <div 
          className="absolute w-56 sm:w-80 h-56 sm:h-80 rounded-full opacity-20 animate-float-scale"
          style={{ 
            background: 'hsl(var(--bgb-blue))',
            top: '40%',
            right: '5%',
            filter: 'blur(70px)',
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute w-52 sm:w-72 h-52 sm:h-72 rounded-full opacity-20 animate-float-scale"
          style={{ 
            background: 'hsl(var(--bgb-green))',
            bottom: '15%',
            left: '50%',
            transform: 'translateX(-50%)',
            filter: 'blur(65px)',
            animationDelay: '4s'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
          {language === 'en' ? (
            <>
              <span>Make your brand </span>
              <span className="font-pirata text-accent">unmissable.</span>
            </>
          ) : (
            <>
              <span>Que tu marca no pase </span>
              <span className="font-pirata text-accent">desapercibida.</span>
            </>
          )}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-12 text-muted-foreground max-w-2xl mx-auto font-light">
          {t('heroSubtitle')}
        </p>
        <div className="flex flex-col items-center gap-4">
          <Button 
            size="lg" 
            onClick={scrollToForm}
            className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            {t('ctaButton')}
          </Button>
          <Badge variant="secondary" className="text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-full">
            {t('ctaBadge')}
          </Badge>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-foreground/40 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
