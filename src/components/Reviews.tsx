import { useLanguage } from "@/contexts/LanguageContext";

export const Reviews = () => {
  const { t } = useLanguage();

  const titleWords = t('reviewsTitle').split(' ');
  const lastWord = titleWords[titleWords.length - 1];
  const otherWords = titleWords.slice(0, -1).join(' ');

  return (
    <section className="py-12 px-6 bg-background">
      {/* Separator line */}
      <div className="max-w-6xl mx-auto mb-10">
        <div className="h-px bg-border" />
      </div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-foreground">
          {otherWords}{' '}
          <span className="font-pirata text-[hsl(210,73%,60%)]">{lastWord}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Review 1 - Red outline */}
          <div className="bg-background border-[3px] border-[hsl(8,77%,58%)] rounded-3xl p-8 hover:scale-105 transition-transform duration-300 flex flex-col">
            <p className="text-base text-foreground leading-relaxed text-center mb-4">
              "{t('review1')}"
            </p>
            <p className="text-sm text-muted-foreground text-center mt-auto">
              {t('review1Author')}
            </p>
          </div>

          {/* Review 2 - Blue outline */}
          <div className="bg-background border-[3px] border-[hsl(210,73%,60%)] rounded-3xl p-8 hover:scale-105 transition-transform duration-300 flex flex-col">
            <p className="text-base text-foreground leading-relaxed text-center mb-4">
              "{t('review2')}"
            </p>
            <p className="text-sm text-muted-foreground text-center mt-auto">
              {t('review2Author')}
            </p>
          </div>

          {/* Review 3 - Green outline */}
          <div className="bg-background border-[3px] border-[hsl(156,73%,57%)] rounded-3xl p-8 hover:scale-105 transition-transform duration-300 flex flex-col">
            <p className="text-base text-foreground leading-relaxed text-center mb-4">
              "{t('review3')}"
            </p>
            <p className="text-sm text-muted-foreground text-center mt-auto">
              {t('review3Author')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
