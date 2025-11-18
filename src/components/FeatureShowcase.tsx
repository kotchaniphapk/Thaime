import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';

export function FeatureShowcase() {
  const { t } = useTranslation();

  const features = [
    {
      titleKey: 'features.fast.title',
      subtitleKey: 'features.fast.subtitle',
      descriptionKey: 'features.fast.description',
      badge: '100% Customizable',
      ctaKey: 'features.cta',
    },
    {
      titleKey: 'features.qr.title',
      subtitleKey: 'features.qr.subtitle',
      descriptionKey: 'features.qr.description',
      badge: 'Loads in < 2 seconds',
      ctaKey: 'features.cta',
    },
    {
      titleKey: 'features.hosting.title',
      subtitleKey: 'features.hosting.subtitle',
      descriptionKey: 'features.hosting.description',
      badge: 'Simple & Fast',
      ctaKey: 'features.cta',
    },
  ];

  return (
    <section className="py-24 px-4 bg-[#f8f6f3]">
      <div className="max-w-7xl mx-auto space-y-32">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="relative p-8 bg-white rounded-3xl shadow-xl border border-[#11181c]/10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <div className="mb-3">
              <span className="inline-block px-3 py-1 bg-[#ed6526]/10 text-[#ed6526] rounded-full text-xs font-semibold">
                {feature.badge}
              </span>
            </div>
            {/* Title */}
            <h2 className="text-3xl md:text-4xl tracking-tight text-[#11181c] mb-2">
              {t(feature.titleKey)}
            </h2>
            {/* Subtitle */}
            {feature.subtitleKey && (
              <p className="text-lg text-[#11181c]/80 mb-4">
                {t(feature.subtitleKey)}
              </p>
            )}
            {/* Description */}
            <p className="text-base text-[#11181c]/60 leading-relaxed mb-6">
              {t(feature.descriptionKey)}
            </p>
            {/* CTA */}
            <Button
              variant="outline"
              className="group border-2 border-[#11181c] hover:bg-[#11181c] hover:text-white transition-all duration-300"
            >
              {feature.ctaKey ? t(feature.ctaKey) : ''}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            {/* Floating Stats */}
            {index === 1 && (
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-[#11181c]/10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-2xl text-[#ed6526]">+125%</div>
                <div className="text-sm text-[#11181c]/60">Faster Load</div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
