'use client';

import { Check, Star, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function PricingSection() {
  const { t } = useTranslation();

  return (
    <section id="pricing" className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#ed6526] blur-[200px] opacity-[0.05]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#11181c]">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-[#11181c]/70 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[0, 1, 2].map((index) => {
            const pkg = {
              name: t(`pricing.packages.${index}.name`),
              price1Lang: t(`pricing.packages.${index}.price1Lang`),
              price2Lang: t(`pricing.packages.${index}.price2Lang`),
              currency: t(`pricing.packages.${index}.currency`),
              recommended: index === 1,
              description: t(`pricing.packages.${index}.description`),
              features: [
                t(`pricing.packages.${index}.features.0`),
                t(`pricing.packages.${index}.features.1`),
                t(`pricing.packages.${index}.features.2`),
                t(`pricing.packages.${index}.features.3`),
                ...(index === 2 ? [t(`pricing.packages.${index}.features.4`)] : []),
              ],
            };
            return (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Popular Badge */}
              {pkg.recommended && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#ed6526] text-white shadow-lg shadow-[#ed6526]/50">
                    <Star className="h-4 w-4 fill-white" />
                    <span className="text-sm">{t('pricing.recommended')}</span>
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`relative h-full rounded-3xl p-8 transition-all duration-500 ${
                pkg.recommended
                  ? 'bg-[#11181c] text-white shadow-2xl shadow-[#11181c]/30 scale-105'
                  : 'bg-white border border-[#11181c]/10 hover:border-[#ed6526]/30 hover:shadow-xl hover:shadow-[#11181c]/5'
              }`}>
                {/* Glow Effect for Recommended */}
                {pkg.recommended && (
                  <div className="absolute inset-0 bg-[#ed6526]/10 rounded-3xl blur-2xl"></div>
                )}

                <div className="relative space-y-6">
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      {pkg.recommended && <Zap className="h-5 w-5 text-[#ed6526]" />}
                      <h3 className={`text-2xl ${pkg.recommended ? 'text-white' : 'text-[#11181c]'}`}>
                        {pkg.name}
                      </h3>
                    </div>
                    <p className={`text-sm ${pkg.recommended ? 'text-white/70' : 'text-[#11181c]/60'}`}>
                      {pkg.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="py-4 space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-sm ${pkg.recommended ? 'text-white/70' : 'text-[#11181c]/60'}`}>
                        {t('pricing.oneLanguage')}:
                      </span>
                      <span className={`text-xl ${pkg.recommended ? 'text-[#ed6526]' : 'text-[#ed6526]'}`}>
                        {pkg.currency}
                      </span>
                      <span className={`text-4xl ${pkg.recommended ? 'text-white' : 'text-[#11181c]'}`}>
                        {pkg.price1Lang}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-sm ${pkg.recommended ? 'text-white/70' : 'text-[#11181c]/60'}`}>
                        {t('pricing.twoLanguages')}:
                      </span>
                      <span className={`text-xl ${pkg.recommended ? 'text-[#ed6526]' : 'text-[#ed6526]'}`}>
                        {pkg.currency}
                      </span>
                      <span className={`text-4xl ${pkg.recommended ? 'text-white' : 'text-[#11181c]'}`}>
                        {pkg.price2Lang}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 py-4">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex gap-3 items-start">
                        <div className={`mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          pkg.recommended 
                            ? 'bg-[#ed6526]/20' 
                            : 'bg-[#f8f6f3]'
                        }`}>
                          <Check className={`h-3 w-3 ${
                            pkg.recommended ? 'text-[#ed6526]' : 'text-[#ed6526]'
                          }`} />
                        </div>
                        <span className={`text-sm leading-relaxed ${
                          pkg.recommended ? 'text-white/90' : 'text-[#11181c]/70'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={`w-full transition-all duration-300 ${
                      pkg.recommended
                        ? 'bg-white text-[#11181c] hover:bg-white/90 shadow-lg'
                        : 'bg-[#11181c] text-white hover:bg-[#11181c]/90'
                    }`}
                    size="lg"
                  >
                    {t('pricing.selectButton')}
                  </Button>
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
