'use client';

import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Smartphone, QrCode, Download, Share2 } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export function TemplateQRShowcase() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-4 bg-[#f8f6f3] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(#11181c 1px, transparent 1px), linear-gradient(90deg, #11181c 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      {/* Gradient Orbs */}
      <motion.div 
        className="absolute top-1/2 left-0 w-[500px] h-[600px] bg-[#ed6526] rounded-full blur-[200px] opacity-[0.08]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#ed6526]/20 mb-4">
            <QrCode className="h-4 w-4 text-[#ed6526]" />
            <span className="text-md text-[#11181c]">{t('qrShowcase.badge')}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#11181c]">
            {t('qrShowcase.title')}
          </h2>
          <p className="text-xl text-[#11181c]/70 max-w-3xl mx-auto leading-relaxed">
            {t('qrShowcase.subtitle')}
          </p>
          <p className="text-lg text-[#11181c]/60 max-w-3xl mx-auto leading-relaxed">
            {t('qrShowcase.description')}
          </p>
        </motion.div>

        {/* Main Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-3xl mx-auto">
          {/* Website Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#ed6526] rounded-[3rem] blur-3xl opacity-20"></div>
              
              {/* Phone Frame */}
              <div className="relative bg-[#11181c] rounded-[3rem] p-3 shadow-2xl">
                {/* Screen */}
                <div className="relative bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#11181c] rounded-b-3xl z-10"></div>
                  
                  {/* Website Content */}
                  <div className="relative pt-8">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1707836916010-3c4ad261936c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwc2NyZWVuJTIwd2Vic2l0ZSUyMG1vY2t1cHxlbnwxfHx8fDE3NjMzNzY1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Website Mockup"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Feature Tags */}
              <motion.div 
                className="absolute left-0 top-1/4 bg-white rounded-2xl px-3 py-2.5 shadow-xl border border-[#11181c]/10 hidden md:block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-[#ed6526]" />
                  <span className="text-xs text-[#11181c] whitespace-nowrap">{t('qrShowcase.websiteMockup.features.0')}</span>
                </div>
              </motion.div>

              <motion.div 
                className="absolute right-0 bottom-1/4 bg-[#ed6526] rounded-2xl px-3 py-2.5 shadow-xl hidden md:block"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">⚡</span>
                  <span className="text-xs text-white whitespace-nowrap">{t('qrShowcase.websiteMockup.features.1')}</span>
                </div>
              </motion.div>
            </div>

            {/* Website Title */}
            <div className="text-center mt-8">
              <h3 className="text-2xl text-[#11181c] mb-3">
                {t('qrShowcase.websiteMockup.title')}
              </h3>
              <div className="flex gap-3 justify-center flex-wrap">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="text-sm text-[#11181c]/60 px-3 py-1 bg-white rounded-full border border-[#11181c]/10">
                    {t(`qrShowcase.websiteMockup.features.${i}`)}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* QR Code Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              {/* QR Code Card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-[#11181c]/10">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-1 mb-3">
                    <Image src="/logo2.png" alt="Logo" width={24} height={24} className="object-contain" />
                    <span className="text-2xl text-[#11181c]">DaysWeb</span>
                  </div>
                  <p className="text-sm text-[#11181c]/60">{t('qrShowcase.scanToVisit')}</p>
                </div>

                {/* QR Code */}
                <div className="relative mx-auto w-64 h-64 bg-white p-4 rounded-2xl border-4 border-[#11181c] mb-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1605098293544-25f4c32344c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxciUyMGNvZGUlMjBidXNpbmVzcyUyMGNhcmR8ZW58MXx8fHwxNzYzMzc2NTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="QR Code"
                    className="w-full h-full object-cover rounded-lg"
                  />
                              
                </div>

                {/* URL */}
                <div className="text-center mb-6">
                  <p className="text-lg text-[#11181c]">twodaysweb.com/yourshop</p>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="border-2 border-[#11181c] hover:bg-[#11181c] hover:text-white"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    {t('qrShowcase.ctaDownload')}
                  </Button>
                  <Button
                    className="bg-[#ed6526] hover:bg-[#ed6526]/90 text-white"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    {t('qrShowcase.ctaShare')}
                  </Button>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div 
                className="absolute top-0 right-2 bg-[#11181c] text-white rounded-2xl px-4 py-2.5 shadow-xl hidden md:block"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-center">
                  <div className="text-xl mb-0.5">📱</div>
                  <div className="text-xs whitespace-nowrap">{t('qrShowcase.highQuality')}</div>
                </div>
              </motion.div>
            </div>

            {/* QR Title */}
            <div className="text-center mt-8">
              <h3 className="text-2xl text-[#11181c] mb-3">
                {t('qrShowcase.qrMockup.title')}
              </h3>
              <div className="flex gap-3 justify-center flex-wrap">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="text-sm text-[#11181c]/60 px-3 py-1 bg-white rounded-full border border-[#11181c]/10">
                    {t(`qrShowcase.qrMockup.features.${i}`)}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Info */}
        <motion.div
          className="text-center mt-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-8 flex-wrap text-sm text-[#11181c]/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#ed6526] rounded-full"></div>
              <span>{t('qrShowcase.bottomInfo.highRes')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#ed6526] rounded-full"></div>
              <span>{t('qrShowcase.bottomInfo.printReady')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#ed6526] rounded-full"></div>
              <span>{t('qrShowcase.bottomInfo.editable')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
