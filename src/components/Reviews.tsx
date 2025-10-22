import { useLanguage } from "@/contexts/LanguageContext";

export const Reviews = () => {
  const { t, language } = useLanguage();
  
  // Get reviews array from translations
  const reviews = language === 'en' 
    ? [
        "Bad Good Better helped us clarify our message and find our audience. We went from scattered to strategic in weeks.",
        "They saw what we couldn't — the gaps in our positioning, the inconsistencies in our brand. Now everything feels intentional.",
        "No fluff, no jargon. Just honest feedback and clear direction. They helped us cut through the noise and focus on what mattered."
      ]
    : [
        "Bad Good Better nos ayudó a aclarar nuestro mensaje y encontrar nuestra audiencia. Pasamos de dispersos a estratégicos en semanas.",
        "Vieron lo que nosotros no podíamos — los huecos en nuestro posicionamiento, las inconsistencias en nuestra marca. Ahora todo se siente intencional.",
        "Sin relleno, sin jerga. Solo feedback honesto y dirección clara. Nos ayudaron a cortar el ruido y enfocarnos en lo que importaba."
      ];

  const titleWords = t('reviewsTitle').split(' ');
  const lastWord = titleWords[titleWords.length - 1];
  const otherWords = titleWords.slice(0, -1).join(' ');

  return (
    <section className="py-16 px-6 bg-background">
      {/* Separator line */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="h-px bg-border" />
      </div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-foreground">
          {otherWords}{' '}
          <span className="font-pirata text-[hsl(210,73%,60%)]">{lastWord}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Review 1 - Red outline */}
          <div className="bg-background border-[3px] border-[hsl(8,77%,58%)] rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
            <p className="text-base text-foreground leading-relaxed text-center md:text-left">
              "{reviews[0]}"
            </p>
          </div>

          {/* Review 2 - Blue outline */}
          <div className="bg-background border-[3px] border-[hsl(210,73%,60%)] rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
            <p className="text-base text-foreground leading-relaxed text-center md:text-left">
              "{reviews[1]}"
            </p>
          </div>

          {/* Review 3 - Green outline */}
          <div className="bg-background border-[3px] border-[hsl(156,73%,57%)] rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
            <p className="text-base text-foreground leading-relaxed text-center md:text-left">
              "{reviews[2]}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
