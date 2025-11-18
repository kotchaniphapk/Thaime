'use client';

import { Package, MessageSquare, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const icons = [Package, MessageSquare, Globe];

export function HowItWorksSection() {
  const { t } = useTranslation();
  const steps = t('howItWorks.steps', { returnObjects: true }) as Array<{ title: string; description: string }>;

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#ed6526] rounded-full blur-[200px] opacity-[0.05]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ed6526] rounded-full blur-[200px] opacity-[0.05]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-20 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#11181c]">
            {t('howItWorks.title')}
          </h2>
          <p className="text-xl text-[#11181c]/70 max-w-2xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#ed6526]/30 to-transparent"></div>

          {steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-lg shadow-[#11181c]/5 hover:shadow-xl hover:shadow-[#ed6526]/10 transition-all duration-500 border border-[#11181c]/10 hover:border-[#ed6526]/30 group">
                  {/* Step Number Background */}
                  <div className="absolute -top-6 -right-6 text-[120px] text-[#f8f6f3] opacity-50 pointer-events-none">
                    {index + 1}
                  </div>

                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-[#ed6526] flex items-center justify-center shadow-lg shadow-[#ed6526]/30 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-[#11181c] flex items-center justify-center text-white shadow-lg border-4 border-white">
                      <span>{index + 1}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-3">
                    <h3 className="text-xl text-[#11181c]">
                      {step.title}
                    </h3>
                    <p className="text-[#11181c]/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 bg-[#ed6526]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
