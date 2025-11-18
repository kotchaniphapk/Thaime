'use client';
import { ArrowRight, Play, Star } from 'lucide-react';
import { Button } from './ui/button';

import { motion } from 'motion/react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

interface HeroSectionProps {
  onPricingClick: () => void;
  onExamplesClick: () => void;
}

export function HeroSection({ onPricingClick, onExamplesClick }: HeroSectionProps) {
  const { t } = useTranslation();
  const heroImage = '/heroimage.svg';
  return (
    <section className="relative overflow-hidden bg-white min-h-screen flex items-center py-20 px-4">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(#11181c 1px, transparent 1px), linear-gradient(90deg, #11181c 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      {/* Gradient Orbs */}
      <motion.div 
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#ed6526] rounded-full blur-[200px] opacity-[0.08]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#ed6526] rounded-full blur-[200px] opacity-[0.06]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.06, 0.1, 0.06],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f8f6f3] border border-[#ed6526]/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Star className="h-4 w-4 text-[#ed6526] fill-[#ed6526]" />
              <span className="text-md text-[#11181c]">
                {t('hero.badge')}
              </span>
            </motion.div>
            
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#11181c]">
                {t('hero.headline')}
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#ed6526]">
                {t('hero.subheadline')}
              </h2>
            </div>
            
            {/* Subtext */}
            <p className="text-lg md:text-xl text-[#11181c]/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t('hero.subtext')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={onPricingClick}
                className="bg-[#ed6526] hover:bg-[#ed6526]/90 text-white shadow-xl shadow-[#ed6526]/30 hover:shadow-2xl hover:shadow-[#ed6526]/40 transition-all duration-300 group px-8 py-6 text-lg"
              >
                {t('hero.ctaPrimary')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={onExamplesClick}
                className="border-2 border-[#11181c] text-[#11181c] hover:bg-[#11181c] hover:text-white transition-all duration-300 px-8 py-6 text-lg group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                {t('hero.ctaSecondary')}
              </Button>
            </div>

            {/* Trust Badge */}
            {/* <div className="pt-8">
              <p className="text-sm text-[#11181c]/60 mb-4">{t('hero.trustedBy')}</p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start items-center">
                {['🛒', '🎬', '🎵', '🍔', '🏪'].map((emoji, i) => (
                  <div key={i} className="w-12 h-12 rounded-xl bg-[#f8f6f3] border border-[#11181c]/10 flex items-center justify-center text-2xl hover:bg-[#ed6526]/5 hover:border-[#ed6526]/30 transition-colors">
                    {emoji}
                  </div>
                ))}
              </div>
            </div> */}
          </motion.div>

          {/* Right - Large Mockup */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Main Mockup */}
              <div className="relative z-10">
                <div className="relative group">
                  <div className="absolute inset-0 bg-[#ed6526]/50 rounded-3xl blur-3xl group-hover:blur-[100px] transition-all duration-700 opacity-20"></div>
                  <div className="relative">
                    <Image
                      src={heroImage}
                      alt="Website Dashboard"
                      className="w-full h-auto rounded-2xl"
                      width={1000}  
                      height={1000}
                      quality={100}
                      priority
                      unoptimized
                    />

                    {/* Floating Stats - Overlay on Image */}
                    <motion.div
                      className="absolute left-2 top-1/4 bg-white rounded-2xl px-3 py-2.5 shadow-xl border border-[#11181c]/10 z-20"
                      animate={{ 
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="text-2xl mb-0.5">📈</div>
                      <div className="text-sm font-medium text-[#11181c]">+45%</div>
                      <div className="text-xs text-[#11181c]/60 whitespace-nowrap">ลูกค้าเพิ่มขึ้น</div>
                    </motion.div>

                    <motion.div
                      className="absolute -right-1.5 md:-right-4 bottom-1/8 bg-[#ed6526] rounded-2xl px-3 py-2.5 shadow-xl border border-[#ed6526]/20  z-20"
                      animate={{ 
                        y: [0, 10, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="text-2xl mb-0.5">⚡</div>
                      <div className="text-sm font-medium text-white">1-2 วัน</div>
                      <div className="text-xs text-white/80 whitespace-nowrap">พร้อมใช้งาน</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
