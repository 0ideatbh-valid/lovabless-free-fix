import { useLanguage } from "@/contexts/LanguageContext";

export const DriftingWordsWave = () => {
  const { tArray } = useLanguage();
  
  const words = tArray('waveWords');

  return (
    <>
      {/* Drifting words - hidden on reduced motion and mobile < 420px */}
      <div
        className="drifting-words-container absolute inset-x-0 bottom-0 h-[38%] overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* Row A - drifts left to right */}
        <div className="absolute bottom-[60%] left-0 whitespace-nowrap opacity-[0.10] text-foreground will-change-transform animate-drift-a">
          {words.map((word, i) => (
            <span key={`a1-${i}`} className="inline-block mx-6 md:mx-8 text-xs md:text-sm tracking-wide font-medium align-middle">
              {word}
            </span>
          ))}
          {words.map((word, i) => (
            <span key={`a2-${i}`} className="inline-block mx-6 md:mx-8 text-xs md:text-sm tracking-wide font-medium align-middle">
              {word}
            </span>
          ))}
        </div>

        {/* Row B - drifts right to left (opposite direction) */}
        <div className="row-b absolute bottom-[20%] left-0 whitespace-nowrap opacity-[0.08] text-foreground will-change-transform animate-drift-b">
          {words.map((word, i) => (
            <span key={`b1-${i}`} className="inline-block mx-6 md:mx-8 text-xs md:text-sm tracking-wide font-medium align-middle">
              {word}
            </span>
          ))}
          {words.map((word, i) => (
            <span key={`b2-${i}`} className="inline-block mx-6 md:mx-8 text-xs md:text-sm tracking-wide font-medium align-middle">
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* Fallback ticker - shown on reduced motion or mobile < 420px */}
      <div 
        className="marketing-ticker hidden absolute inset-x-0 bottom-[20%] w-full overflow-hidden opacity-[0.12] pointer-events-none select-none" 
        aria-hidden="true"
      >
        <div className="whitespace-nowrap will-change-transform animate-ticker text-foreground">
          {words.concat(words).map((word, i) => (
            <span key={`ticker-${i}`} className="mx-4 md:mx-6 text-xs md:text-sm tracking-wide font-medium">
              {word}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
