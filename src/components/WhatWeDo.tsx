import { useLanguage } from "@/contexts/LanguageContext";

export const WhatWeDo = () => {
  const { t } = useLanguage();

  const services = [
    { key: 'service1' },
    { key: 'service2' },
    { key: 'service3' },
    { key: 'service4' },
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">
          {t('whatWeDoTitle')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.key}
              className="text-center p-6 rounded-2xl hover:bg-secondary hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              <p className="text-lg font-medium text-foreground">
                {t(service.key)}
              </p>
            </div>
          ))}
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
