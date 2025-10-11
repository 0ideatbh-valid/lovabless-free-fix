import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

export const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    { key: 'step1', number: '01' },
    { key: 'step2', number: '02' },
    { key: 'step3', number: '03' },
    { key: 'step4', number: '04' },
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">
          {t('howItWorksTitle')}
        </h2>
        
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div 
              key={step.key}
              className="flex items-center gap-6 p-6 rounded-2xl hover:bg-secondary transition-colors"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-xl">
                {step.number}
              </div>
              <p className="text-lg md:text-xl text-foreground flex-grow">
                {t(step.key)}
              </p>
              {index < steps.length - 1 && (
                <ArrowRight className="text-muted-foreground flex-shrink-0" />
              )}
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
