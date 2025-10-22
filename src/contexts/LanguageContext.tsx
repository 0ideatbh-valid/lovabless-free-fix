import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero
    heroTitle: "Make your brand unmissable.",
    heroSubtitle: "Strategy. Positioning. Cleanup. Free.",
    ctaButton: "Request help",
    ctaBadge: "No contracts • No fees",
    
    // Reviews Section
    reviewsTitle: "people we helped",
    
    // Who Are We
    whoAreWeTitle: "Who are we",
    whoAreWeText: "Bad Good Better Agency is a marketing collective of young professionals from branding, digital marketing, and creative strategy who believe small businesses deserve accessible marketing services without the agency fees. We offer free brand consulting, marketing strategy, and digital positioning to help businesses grow. Our team combines analytical thinking with creative solutions for brand development, content marketing, and business positioning. No jargon. No fees. Just honest marketing strategy made accessible.",
    
    // Why Free
    whyFreeTitle: "Why Free Marketing Services?",
    whyFreeText: "Bad Good Better Agency believes that poor marketing destroys good businesses. Too many small businesses can't afford marketing agencies or brand consultants, yet need strategic marketing guidance to compete. We provide free marketing consulting, brand strategy, and digital marketing support because we believe great businesses deserve great marketing. No contracts, no hidden fees, no catch. Marketing services should be accessible to all businesses ready to grow.",
    
    // What We Do
    whatWeDoTitle: "What we do",
    service1Title: "Brand Audit & Marketing Analysis",
    service1Text: "Thorough brand diagnosis identifying marketing weaknesses, market positioning opportunities, and strategic growth areas for your business.",
    service2Title: "Marketing Strategy & Brand Positioning",
    service2Text: "Comprehensive marketing plans and brand positioning strategies that differentiate your business in competitive markets through data-driven insights.",
    service3Title: "Digital Marketing Optimization",
    service3Text: "Website optimization, social media marketing strategy, and digital brand consistency across all marketing channels for maximum impact.",
    service4Title: "Ongoing Marketing Consulting",
    service4Text: "Continuous marketing support, strategic consulting, and brand development guidance as your business scales and market conditions evolve.",
    
    // How It Works
    howItWorksTitle: "How it works",
    step1: "You ask for help",
    step2: "We review your brand",
    step3: "We tell you what to fix",
    step4: "You take it from there",
    
    // Form
    formTitle: "Request Our Help!",
    businessName: "Business name",
    contactPerson: "Contact person",
    contactEmail: "Contact email",
    website: "Website or preferred social media channel",
    helpNeeded: "What do you need help with?",
    gdprNote: "We use your data only to process your request. No newsletters, no spam.",
    formNote: "No fees. No spam. Limited slots per month.",
    submitButton: "Send",
    successMessage: "Thanks — we got your message.",
    errorMessage: "Something went wrong, try again.",
    
    // Disclaimer
    disclaimerTitle: "Important",
    disclaimerText: "Submitting a request does not guarantee assistance. Each case is reviewed individually, and priority is given to projects where our work can have the greatest impact. If our schedule is full, we'll contact you when a slot opens.",
    
    // LinkedIn Panel
    linkedInTitle: "Check what we are up to on LinkedIn",
    linkedInButton: "Follow on LinkedIn",
    linkedInSubtext: "Follow updates and insights on LinkedIn.",
    
    // Footer
    footerText: "Made with blunt honesty by Bad Good Better Agency",
    footerLocation: "España → Países Bajos",
    footerTagline: "No clients. Just causes.",
    contactLabel: "Contact:",
  },
  es: {
    // Hero
    heroTitle: "Que tu marca no pase desapercibida.",
    heroSubtitle: "Estrategia, posicionamiento y limpieza. Gratis.",
    ctaButton: "Pedir ayuda",
    ctaBadge: "Sin contratos • Sin costes",
    
    // Reviews Section
    reviewsTitle: "gente a la que ayudamos",
    
    // Who Are We
    whoAreWeTitle: "Quiénes somos",
    whoAreWeText: "Somos un grupo de jóvenes profesionales del marketing, el diseño y otras disciplinas creativas que creemos que los pequeños negocios merecen una estrategia real y honesta, sin tecnicismos. Combinamos pensamiento analítico y creatividad para ayudar a las marcas a encontrar claridad, propósito y crecimiento. Sin palabras vacías. Sin costes. Solo trabajo mejor, hecho sencillo.",
    
    // Why Free
    whyFreeTitle: "¿Por qué gratis?",
    whyFreeText: "No vendemos bondad. Creemos que el mal marketing arruina buenos negocios — y no pensamos quedarnos mirando. Por eso ayudamos. Sin contratos, sin letra pequeña. Si te ha servido, hay quien después decide agradecérnoslo — totalmente opcional.",
    
    // What We Do
    whatWeDoTitle: "Qué hacemos",
    service1Title: "Diagnóstico de Marca",
    service1Text: "Vemos lo que otros no ven — detectamos puntos débiles, oportunidades y dónde se atasca tu marca.",
    service2Title: "Estrategia y Posicionamiento",
    service2Text: "Construimos un plan que te diferencia de verdad — sin promesas vacías ni relleno.",
    service3Title: "Optimización Digital",
    service3Text: "Alineamos tu web y redes sociales para que todo hable el mismo lenguaje claro.",
    service4Title: "Seguimiento y Consultoría",
    service4Text: "Nos quedamos contigo, ajustando estrategia y dirección mientras tu marca crece.",
    
    // How It Works
    howItWorksTitle: "Cómo funciona",
    step1: "Pides ayuda",
    step2: "Revisamos tu marca",
    step3: "Te decimos qué mejorar",
    step4: "A partir de ahí, decides tú",
    
    // Form
    formTitle: "¡Solicita nuestra ayuda!",
    businessName: "Nombre del negocio",
    contactPerson: "Persona de contacto",
    contactEmail: "Correo electrónico",
    website: "Web o canal social preferido",
    helpNeeded: "¿En qué necesitas ayuda?",
    gdprNote: "Usamos tus datos únicamente para gestionar tu solicitud. Sin boletines ni spam.",
    formNote: "Sin costes. Sin spam. Plazas limitadas al mes.",
    submitButton: "Enviar",
    successMessage: "Gracias — recibimos tu mensaje.",
    errorMessage: "Algo salió mal, inténtalo de nuevo.",
    
    // Disclaimer
    disclaimerTitle: "Importante",
    disclaimerText: "Enviar una solicitud no garantiza que podamos ofrecer ayuda. Revisamos cada caso de forma individual y priorizamos aquellos en los que nuestro trabajo pueda generar mayor impacto. Si nuestra agenda está completa, te contactaremos cuando se libere una plaza.",
    
    // LinkedIn Panel
    linkedInTitle: "Descubre qué estamos haciendo en LinkedIn",
    linkedInButton: "Seguir en LinkedIn",
    linkedInSubtext: "Sigue las novedades y proyectos en LinkedIn.",
    
    // Footer
    footerText: "Hecho con honestidad directa por Bad Good Better Agency",
    footerLocation: "España → Países Bajos",
    footerTagline: "Sin clientes. Solo causas.",
    contactLabel: "Contacto:",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
