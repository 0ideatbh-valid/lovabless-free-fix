import { useLanguage } from "@/contexts/LanguageContext";

export const WhoAreWe = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 bg-background scroll-fade-in">
      {/* Separator line */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="h-px bg-border" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
          {t('whoAreWeTitle')}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          {t('whoAreWeText')}
        </p>
      </div>
    </section>
  );
};
