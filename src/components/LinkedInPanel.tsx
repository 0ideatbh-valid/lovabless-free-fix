import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

export const LinkedInPanel = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-6 bg-secondary">
      <div className="max-w-2xl mx-auto">
        <div className="bg-background rounded-2xl p-8 shadow-lg border border-border text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-bgb-green animate-pulse" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {t('linkedInTitle')}
            </h2>
          </div>
          <p className="text-muted-foreground mb-6">
            {t('linkedInSubtext')}
          </p>
          <div className="flex justify-center">
            <Button 
              asChild
              variant="outline"
              className="hover:scale-105 transition-transform"
            >
              <a 
                href="https://www.linkedin.com/company/bad-good-better/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                {t('linkedInButton')}
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
