'use client';

import { Zap, QrCode, Shield, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function FeaturesSection() {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Zap,
      titleKey: 'features.fast.title',
      descriptionKey: 'features.fast.description',
    },
    {
      icon: QrCode,
      titleKey: 'features.qr.title',
      descriptionKey: 'features.qr.description',
    },
    {
      icon: Shield,
      titleKey: 'features.hosting.title',
      descriptionKey: 'features.hosting.description',
    },
    {
      icon: Smartphone,
      titleKey: 'features.mobile.title',
      descriptionKey: 'features.mobile.description',
    },
  ];

  return (
    <section className="py-24 px-4 bg-[#f8f6f3] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(17 24 28 / 0.03) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#11181c]">
            {t('features.title')}
          </h2>
          <p className="text-xl text-[#11181c]/70 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Card */}
                <div className="relative h-full bg-white rounded-3xl p-8 border border-[#11181c]/10 hover:border-[#ed6526]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#11181c]/5 overflow-hidden">
                  {/* Background Gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#ed6526] opacity-0 group-hover:opacity-10 blur-3xl transition-all duration-700 rounded-full"></div>

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="inline-flex w-16 h-16 rounded-2xl bg-[#ed6526] items-center justify-center shadow-lg shadow-[#ed6526]/30 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative space-y-3">
                    <h3 className="text-2xl text-[#11181c]">
                      {t(feature.titleKey)}
                    </h3>
                    <p className="text-[#11181c]/60 leading-relaxed">
                      {t(feature.descriptionKey)}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-5">
                    <Icon className="w-full h-full text-[#11181c]" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
