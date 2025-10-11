import { useLanguage } from "@/contexts/LanguageContext";

export const WhyFree = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
          {t('whyFreeTitle')}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {t('whyFreeText')}
        </p>
      </div>
      
      {/* Blue circle divider */}
      <div className="flex justify-center mt-16">
        <div 
          className="w-16 h-16 rounded-full"
          style={{ background: 'hsl(var(--bgb-blue))' }}
        />
      </div>
    </section>
  );
};
