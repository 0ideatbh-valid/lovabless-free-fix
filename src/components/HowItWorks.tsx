import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

export const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    { key: 'step1', number: '01', color: 'hsl(var(--bgb-red))' },
    { key: 'step2', number: '02', color: 'hsl(var(--bgb-blue))' },
    { key: 'step3', number: '03', color: 'hsl(156 73% 52%)' }, // blue-green blend
    { key: 'step4', number: '04', color: 'hsl(var(--bgb-green))' },
  ];

  return (
    <section className="py-24 px-6 bg-background scroll-fade-in">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">
          {t('howItWorksTitle')}
        </h2>
        
        {/* Desktop horizontal flow */}
        <div className="hidden md:flex items-center justify-between gap-4 mb-8">
          {steps.map((step, index) => (
            <div key={step.key} className="flex items-center gap-4">
              <div 
                className="flex-shrink-0 w-20 h-20 rounded-full text-white flex items-center justify-center font-bold text-2xl animate-scale-in shadow-lg"
                style={{ 
                  background: step.color,
                  animationDelay: `${index * 150}ms`
                }}
              >
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="text-muted-foreground flex-shrink-0" size={24} />
              )}
            </div>
          ))}
        </div>
        
        {/* Step descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={step.key}
              className="text-center md:text-left"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Mobile: show number circles */}
              <div 
                className="md:hidden mx-auto mb-4 w-16 h-16 rounded-full text-white flex items-center justify-center font-bold text-xl animate-scale-in"
                style={{ background: step.color }}
              >
                {step.number}
              </div>
              <p className="text-base text-foreground leading-relaxed">
                {t(step.key)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Green circle divider */}
      <div className="flex justify-center mt-16">
        <div 
          className="w-16 h-16 rounded-full"
          style={{ background: 'hsl(var(--bgb-green))' }}
        />
      </div>
    </section>
  );
};
