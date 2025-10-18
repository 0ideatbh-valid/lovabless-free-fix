import { useLanguage } from "@/contexts/LanguageContext";

export const WhoAreWe = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-background scroll-fade-in">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-foreground">
          {t('whoAreWeTitle')}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          {t('whoAreWeText')}
        </p>
      </div>
    </section>
  );
};
