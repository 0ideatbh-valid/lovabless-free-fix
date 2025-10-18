import { useLanguage } from "@/contexts/LanguageContext";

export const WhyFree = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 bg-background scroll-fade-in">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
          {t('whyFreeTitle')}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          {t('whyFreeText')}
        </p>
      </div>
    </section>
  );
};
