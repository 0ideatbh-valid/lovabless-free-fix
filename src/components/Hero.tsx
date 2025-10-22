import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";

export const Hero = () => {
  const { t, language } = useLanguage();

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="border-2 border-foreground rounded-3xl p-8 md:p-16 lg:p-20 relative overflow-hidden bg-background">
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

            {/* Right decorative text */}
            <div className="hidden md:flex items-center justify-center relative">
              <div className="text-[12rem] font-black text-foreground/5 leading-none select-none rotate-12">
                {language === 'en' ? 'motion' : 'movimiento'}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-[#F5F5F5] border-2 border-foreground rounded-3xl p-8">
            <p className="text-sm text-muted-foreground mb-2">
              {language === 'en' ? 'This example is inspired by creative agencies making bold statements.' : 'Este ejemplo está inspirado en agencias creativas que hacen declaraciones audaces.'}
            </p>
          </div>
          
          <div className="bg-background border-2 border-foreground rounded-3xl p-8 flex items-center justify-center">
            <div className="text-6xl font-black">"</div>
          </div>
          
          <div className="bg-[#FFE8E8] border-2 border-foreground rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-3 text-foreground">
              {t('heroSubtitle')}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
