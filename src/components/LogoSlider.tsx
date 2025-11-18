import { motion } from 'motion/react';

interface LogoSliderProps {
  lang: 'th' | 'en';
}

const logos = [
  { name: 'Shopify', icon: '🛒' },
  { name: 'Vimeo', icon: '🎬' },
  { name: 'SoundCloud', icon: '🎵' },
  { name: 'Harvard', icon: '🎓' },
  { name: 'CHOMP', icon: '🍔' },
  { name: 'eBay', icon: '🏪' },
  { name: 'Zapier', icon: '⚡' },
  { name: 'Line', icon: '💬' },
];

export function LogoSlider({ lang }: LogoSliderProps) {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative py-12 bg-[#f8f6f3] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-16"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl border border-[#11181c]/5 hover:border-[#ed6526]/30 hover:shadow-md transition-all">
                <span className="text-3xl">{logo.icon}</span>
                <span className="text-[#11181c]/70 whitespace-nowrap">{logo.name}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
