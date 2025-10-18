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
    
    // Who Are We
    whoAreWeTitle: "Who are we",
    whoAreWeText: "We're a group of young professionals from marketing, design, and creative fields who believe small businesses deserve real, honest strategy — not jargon. We combine analytical thinking with creativity to help brands find clarity, purpose, and momentum. No buzzwords. No fees. Just better work, made simple.",
    
    // Why Free
    whyFreeTitle: "Why Free?",
    whyFreeText: "We're not selling kindness. We just believe bad marketing kills good businesses — and we can't watch that happen. So we help. No contracts, no catch. If it helped, some people choose to thank us later — that's optional.",
    
    // What We Do
    whatWeDoTitle: "What we do",
    service1Title: "Brand Diagnosis",
    service1Text: "We see what others don't — spotting weak points, opportunities, and where your brand gets stuck.",
    service2Title: "Strategy & Positioning",
    service2Text: "We build a plan that truly sets you apart — without empty promises or fluff.",
    service3Title: "Digital Optimization",
    service3Text: "We align your website and social channels so everything speaks the same clear language.",
    service4Title: "Follow-Up & Consulting",
    service4Text: "We stay with you, fine-tuning strategy and direction as your brand grows.",
    
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
    successMessage: "Thanks! We'll review your request soon.",
    
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
    successMessage: "¡Gracias! Revisaremos tu solicitud en breve.",
    
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
