import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-6 bg-background border-t">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <p className="text-sm text-foreground">
          {t('footerText')} — {t('footerLocation')} — © 2025 — {t('footerTagline')}
        </p>
        <p className="text-sm text-muted-foreground">
          {t('contactLabel')} <a href="mailto:agjsuarez@gmail.com" className="hover:underline">agjsuarez@gmail.com</a>
        </p>
      </div>
    </footer>
  );
};
