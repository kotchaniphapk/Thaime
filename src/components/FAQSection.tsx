'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function FAQSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ed6526] rounded-full blur-[200px] opacity-[0.05]"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#11181c]">
            {t('faq.title')}
          </h2>
          <p className="text-xl text-[#11181c]/70 max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {(t('faq.items', { returnObjects: true }) as Array<{ question: string; answer: string }>).map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl px-6 border border-[#11181c]/10 hover:border-[#ed6526]/30 transition-colors duration-300 overflow-hidden group data-[state=open]:shadow-lg data-[state=open]:shadow-[#ed6526]/5"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 group-data-[state=open]:text-[#ed6526] transition-colors">
                  <span className="text-lg text-[#11181c] group-data-[state=open]:text-[#ed6526]">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-[#11181c]/70 pb-6 leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
