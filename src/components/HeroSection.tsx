'use client';

import { Instagram, Facebook, BookOpen, Languages, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';


export function HeroSection() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'th' ? 'en' : 'th';
    i18n.changeLanguage(newLang);
    // Update HTML lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLang;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#fff0dc' }}>
      {/* Grid pattern background for red section */}
      {/* <div 
        className="absolute top-0 left-0 w-[50%] h-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      /> */}
      
      {/* Yellow curved section - circle from bottom-right corner */}
      <div 
        className="absolute bottom-0 right-0 md:w-[160vh] md:h-[140vh] w-[100vh] h-[100vh]"
        style={{
          borderRadius: '50%',
          transform: 'translate(50%, 50%)',
          background: 'linear-gradient(to bottom right, #ff8000, #ff8000)'
        }}
      />
      
      {/* Grid pattern background for yellow section */}
      {/* <div 
        className="absolute bottom-0 right-0"
        style={{
          width: '140vh',
          height: '140vh',
          borderRadius: '50%',
          transform: 'translate(50%, 50%)',
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      /> */}
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Language Toggle Button */}
        <button
          onClick={toggleLanguage}
          className={`absolute top-6 right-6 z-20 flex items-center gap-2 px-4 py-2 rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm ${
            i18n.language === 'th' 
              ? 'bg-[#ff8000] text-white hover:bg-[#ff8000]' 
              : 'bg-white/90 text-[#2c1100] hover:bg-white'
          }`}
        >
          <Languages className="w-5 h-5" />
          <span className="uppercase tracking-wide">
            {i18n.language === 'th' ? 'ไทย' : 'EN'}
          </span>
        </button>

        {/* Header with Logo */}
        <div className="flex justify-center pt-6 pb-8 items-center">
          <div className="text-center">
            <Image width={80} height={80} src="/logoburger4.svg" alt="Crazy Burger" className=" max-w-xl" />
            <h2 className="text-[#2c1100]  text-xl font-semibold text-center  ">{t('burgerHero.bioLink')}</h2>
          </div>
        </div>

        {/* Content Grid */}
        <div className="flex-1 px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto w-full pb-8">
          {/* Left Section - Text and Buttons */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-[#2c1100] text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight" style={{ fontWeight: 600, lineHeight: 1.1 }}>
                {t('burgerHero.title1')}<br />{t('burgerHero.title2')}
              </h1>
              <p className="text-[#2c1100] text-lg md:text-xl tracking-wide">
                {t('burgerHero.subtitle1')}<br />
                {t('burgerHero.subtitle2')}
              </p>
            </div>

            {/* Social Buttons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 max-w-2xl">
              {/* Instagram Button */}
              <a
                href="#"
                className="flex items-center gap-3 px-6 py-6 rounded-full bg-white text-[#2c1100] hover:bg-[#ff8000] hover:text-white active:bg-[#ff8000] active:text-white transition-all duration-300 group touch-manipulation"
              >
                <Instagram className="w-6 h-6 text-[#ff8000] group-hover:text-white group-active:text-white transition-colors" />
                <span className="uppercase tracking-wide text-lg">{t('burgerHero.instagram')}</span>
              </a>

              {/* Book Table Button */}
              <a
                href="#"
                className="flex items-center gap-3 px-6 py-6 rounded-full bg-white text-[#2c1100] hover:bg-[#ff8000] hover:text-white active:bg-[#ff8000] active:text-white transition-all duration-300 group touch-manipulation"
              >
                <BookOpen className="w-6 h-6 text-[#ff8000] group-hover:text-white group-active:text-white transition-colors" />
                <span className="uppercase tracking-wide text-lg">{t('burgerHero.bookTable')}</span>
              </a>

              {/* Facebook Button */}
              <a
                href="#"
                className="flex items-center gap-3 px-6 py-6 rounded-full bg-white text-[#2c1100] hover:bg-[#ff8000] hover:text-white active:bg-[#ff8000] active:text-white transition-all duration-300 group touch-manipulation"
              >
                <Facebook className="w-6 h-6 text-[#ff8000] group-hover:text-white group-active:text-white transition-colors" />
                <span className="uppercase tracking-wide text-lg">{t('burgerHero.facebook')}</span>
              </a>

              {/* Line Official Button */}
              <a
                href="#"
                className="flex items-center gap-3 px-6 py-6 rounded-full bg-white text-[#2c1100] hover:bg-[#ff8000] hover:text-white active:bg-[#ff8000] active:text-white transition-all duration-300 group touch-manipulation"
              >
                <MapPin className="w-6 h-6 text-[#ff8000] group-hover:text-white group-active:text-white transition-colors" />
                <span className="uppercase tracking-wide text-lg">{t('burgerHero.lineOfficial')}</span>
              </a>
            </div>
          </div>

          {/* Right Section - Burger Image */}
          <div className="relative lg:pl-12 flex items-center justify-center lg:justify-center">
            <div className="relative max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
              <Image  width={800}
                height={800} src="/burgerhero2.svg" alt="Crazy Burger" className="w-full max-w-full" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}