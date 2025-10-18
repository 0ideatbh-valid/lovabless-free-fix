import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

export const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    { key: 'step1', number: '01', smallNumber: '1', color: 'hsl(220, 15%, 65%)', animation: 'animate-float' },
    { key: 'step2', number: '02', smallNumber: '2', color: 'hsl(180, 20%, 60%)', animation: 'animate-float-delayed' },
    { key: 'step3', number: '03', smallNumber: '3', color: 'hsl(280, 20%, 65%)', animation: 'animate-float' },
    { key: 'step4', number: '04', smallNumber: '4', color: 'hsl(30, 35%, 65%)', animation: 'animate-float-delayed' },
  ];

  return (
    <section className="py-24 px-6 bg-background scroll-fade-in">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">
          {t('howItWorksTitle')}
        </h2>
        
        {/* Desktop horizontal flow */}
        <div className="hidden md:flex items-start justify-center gap-4 mb-12">
          {steps.map((step, index) => (
            <div key={step.key} className="flex items-center gap-4">
              <div 
                className={`flex-shrink-0 w-20 h-20 rounded-full text-white flex items-center justify-center font-bold text-2xl shadow-lg ${step.animation}`}
                style={{ 
                  background: step.color,
                }}
              >
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="text-muted-foreground flex-shrink-0 animate-fade-in" size={24} />
              )}
            </div>
          ))}
        </div>
        
        {/* Step descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.key}
              className="text-center"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Mobile: show number circles */}
              <div 
                className={`md:hidden mx-auto mb-4 w-16 h-16 rounded-full text-white flex items-center justify-center font-bold text-xl ${step.animation}`}
                style={{ background: step.color }}
              >
                {step.number}
              </div>
              <div className="flex items-start gap-2 justify-center">
                <span 
                  className="flex-shrink-0 w-6 h-6 rounded-full text-white flex items-center justify-center font-semibold text-sm"
                  style={{ background: step.color }}
                >
                  {step.smallNumber}
                </span>
                <p className="text-base text-foreground leading-relaxed text-left flex-1">
                  {t(step.key)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
