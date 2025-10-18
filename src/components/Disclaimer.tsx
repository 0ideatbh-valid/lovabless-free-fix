import { useLanguage } from "@/contexts/LanguageContext";

export const Disclaimer = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 scroll-fade-in" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground">
          {t('disclaimerTitle')}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {t('disclaimerText')}
        </p>
      </div>
    </section>
  );
};
