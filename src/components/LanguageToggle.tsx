import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6 bg-background/80 backdrop-blur-sm">
      <div className="flex items-center gap-2 sm:gap-3">
        <img src={logo} alt="Bad Good Better" className="h-6 w-6 sm:h-8 sm:w-8 hover:scale-110 transition-transform duration-300" />
        <span className="text-base sm:text-lg font-semibold text-foreground">Bad Good Better</span>
      </div>
      <div className="flex gap-1 sm:gap-2">
        <Button
          variant={language === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('en')}
          className="font-medium hover:scale-105 transition-all duration-300 text-xs sm:text-sm px-2 sm:px-3"
        >
          EN
        </Button>
        <Button
          variant={language === 'es' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('es')}
          className="font-medium hover:scale-105 transition-all duration-300 text-xs sm:text-sm px-2 sm:px-3"
        >
          ES
        </Button>
      </div>
    </div>
  );
};
