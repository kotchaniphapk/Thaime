'use client';

import { LanguageToggle } from './LanguageToggle';
import { motion } from 'motion/react';
import Image from 'next/image';

export function Navbar() {
  return (
    <motion.header 
    className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#11181c]/10"
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center gap-1">
        <div className="">
          <Image 
            src="/logo2.png" 
            alt="Logo" 
            width={24} 
            height={24} 
            className="object-contain"
          />
        </div>
        <span className="text-2xl text-[#11181c]">
          DaysWeb
        </span>
      </div>
      <LanguageToggle />
    </div>
    </motion.header>
  );
}