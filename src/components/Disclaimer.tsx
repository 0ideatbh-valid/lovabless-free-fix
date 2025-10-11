import { useLanguage } from "@/contexts/LanguageContext";

export const Disclaimer = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-6" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-xl font-semibold mb-4 text-foreground">
          {t('disclaimerTitle')}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {t('disclaimerText')}
        </p>
      </div>
    </section>
  );
};
