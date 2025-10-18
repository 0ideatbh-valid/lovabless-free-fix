import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Bad Good Better" className="h-8 w-8" />
        <span className="text-lg font-semibold text-foreground">Bad Good Better</span>
      </div>
      <div className="flex gap-2">
        <Button
          variant={language === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('en')}
          className="font-medium"
        >
          EN
        </Button>
        <Button
          variant={language === 'es' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('es')}
          className="font-medium"
        >
          ES
        </Button>
      </div>
    </div>
  );
};
