'use client';

import { Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ro' : 'en';
    i18n.changeLanguage(newLang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLang;
    }
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`absolute top-4 right-4 z-20 flex items-center gap-2 px-4 py-2 rounded-full shadow-lg transition-all duration-300 backdrop-blur-md text-base font-semibold ${
        i18n.language === 'en'
          ? 'bg-white/90 text-[#2c1100] hover:bg-white'
          : 'bg-[#ff6a00] text-white hover:bg-[#ff6a00]'
      }`}
    >
      <Languages className="w-5 h-5" />
      <span className="uppercase tracking-wide font-semibold">
        {i18n.language === 'en' ? 'EN' : 'RO'}
      </span>
    </button>
  );
}
