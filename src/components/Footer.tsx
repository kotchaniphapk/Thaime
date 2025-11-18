'use client';

import { Facebook, MessageCircle, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-[#11181c] text-white py-16 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }}></div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ed6526] blur-[200px] opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-1">
              <Image src="/logo2.png" alt="Logo" width={24} height={24} className="object-contain" />
              <span className="text-2xl">{t('footer.brandName')}</span>
            </div>
            <p className="text-white/60 leading-relaxed">
              {t('footer.tagline')}
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl">{t('footer.followUs')}</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-white/10 hover:bg-[#ed6526] rounded-xl flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-[#ed6526] hover:shadow-lg hover:shadow-[#ed6526]/50"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://line.me"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-white/10 hover:bg-[#ed6526] rounded-xl flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-[#ed6526] hover:shadow-lg hover:shadow-[#ed6526]/50"
              >
                <MessageCircle className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://shopee.co.th"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-white/10 hover:bg-[#ed6526] rounded-xl flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-[#ed6526] hover:shadow-lg hover:shadow-[#ed6526]/50"
              >
                <ShoppingBag className="h-5 w-5 text-white" />
              </a>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl">{t('footer.contact')}</h3>
            <div className="space-y-2 text-white/60">
              <p className="hover:text-[#ed6526] transition-colors cursor-pointer">twodaysweb.com</p>
              <p className="hover:text-[#ed6526] transition-colors cursor-pointer">Line: @twodaysweb</p>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
