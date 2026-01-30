'use client';


import { useTranslation } from 'react-i18next';
import { Phone, TrendingUp } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import { Footer } from '@/components/Footer';
import { TopBar } from '@/components/TopBar';

export default function OrderPage() {
  const { t } = useTranslation();

  const orderOptions = [
    {
      id: 'whatsapp',
      icon: FaWhatsapp,
      title: t('orderPage.whatsapp'),
      description: t('orderPage.whatsappDesc'),
      link: 'https://wa.me/40762286338',
      bgGradient: 'from-green-500 to-green-600',
    },
    {
      id: 'bolt',
      icon: TrendingUp,
      title: t('orderPage.bolt'),
      description: t('orderPage.boltDesc'),
      link: 'https://food.bolt.eu/en/325-bucharest/p/44220-thaime',
      bgGradient: 'from-slate-50 to-white',
      image: '/bolt.svg',
    },
    {
      id: 'glovo',
      icon: TrendingUp,
      title: t('orderPage.glovo'),
      description: t('orderPage.glovoDesc'),
      link: 'https://glovoapp.com/ro/ro/bucharest/stores/thai-me-buc',
      bgGradient: 'from-slate-50 to-white',
      image: '/glovo.svg',
    },
    {
      id: 'call',
      icon: Phone,
      title: t('orderPage.call'),
      description: t('orderPage.callDesc'),
      link: 'tel:0762286338',
      bgGradient: 'from-blue-500 to-blue-600',
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background matching HeroSection */}
      <div
        className="fixed inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(20,20,20,1) 0%, rgba(0,0,0,1) 28%, rgba(255,106,0,1) 100%)',
        }}
      />
      <div className="fixed inset-0 bg-[radial-gradient(closest-side,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_45%,rgba(0,0,0,0.75)_100%)]" />
      <div className="fixed inset-0 opacity-40 [background:radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.10)_0%,transparent_35%),radial-gradient(circle_at_90%_35%,rgba(255,106,0,0.12)_0%,transparent_40%)]" />

      {/* Header */}
      <TopBar />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-10 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Logo & Title */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="rounded-xl sm:rounded-2xl">
              <Image
                src="/logo.png"
                alt="ThaiMe"
                width={200}
                height={200}
                className="h-auto w-[140px] sm:w-[180px] md:w-[200px] object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 px-2">
            {t('orderPage.title')}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto px-2">
            {t('orderPage.subtitle')}
          </p>
        </div>

        {/* Order Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16">
          {orderOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <a
                key={option.id}
                href={option.link}
                target={option.id !== 'call' ? '_blank' : undefined}
                rel={option.id !== 'call' ? 'noopener noreferrer' : undefined}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-black/30 backdrop-blur-xl p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,106,0,0.3)]"
              >
                {/* Glow effect */}
                <div className={`absolute -inset-1 rounded-2xl sm:rounded-3xl bg-gradient-to-r ${option.bgGradient} opacity-0 blur-xl group-hover:opacity-20 transition-opacity duration-300`} />
                
                <div className="relative flex flex-col items-center text-center space-y-3 sm:space-y-4">
                  <div className={`flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-r ${option.bgGradient} shadow-lg overflow-hidden p-2`}>
                    {'image' in option && option.image ? (
                      <Image
                        src={option.image}
                        alt={option.title}
                        width={300}
                        height={300}
                        className="w-full h-full object-contain"
                        priority
                      />
                    ) : (
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{option.title}</h3>
                  <p className="text-sm sm:text-base text-white/70">{option.description}</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Social Media Section */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-black/30 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-2xl">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 px-2">
              {t('orderPage.socialTitle')}
            </h2>
            <p className="text-base sm:text-lg text-white/85 px-2">
              {t('orderPage.socialDesc')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=100091929537003"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm sm:text-base font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            >
              <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span>{t('orderPage.facebook')}</span>
            </a>

            <a
              href="https://www.instagram.com/thaime_ro/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 text-white text-sm sm:text-base font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]"
            >
              <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span>{t('orderPage.instagram')}</span>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
