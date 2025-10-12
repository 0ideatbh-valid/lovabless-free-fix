import { useLanguage } from "@/contexts/LanguageContext";
import { Search, Target, Smartphone, TrendingUp } from "lucide-react";

export const WhatWeDo = () => {
  const { t } = useLanguage();

  const services = [
    { 
      titleKey: 'service1Title',
      textKey: 'service1Text',
      Icon: Search,
    },
    { 
      titleKey: 'service2Title',
      textKey: 'service2Text',
      Icon: Target,
    },
    { 
      titleKey: 'service3Title',
      textKey: 'service3Text',
      Icon: Smartphone,
    },
    { 
      titleKey: 'service4Title',
      textKey: 'service4Text',
      Icon: TrendingUp,
    },
  ];

  return (
    <section className="py-24 px-6 bg-background scroll-fade-in">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">
          {t('whatWeDoTitle')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.Icon;
            return (
              <div 
                key={service.titleKey}
                className="border border-border bg-[#F9F9F9] p-8 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="w-8 h-8 mb-4 text-accent group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {t(service.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(service.textKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Red circle divider */}
      <div className="flex justify-center mt-16">
        <div 
          className="w-16 h-16 rounded-full"
          style={{ background: 'hsl(var(--bgb-red))' }}
        />
      </div>
    </section>
  );
};
