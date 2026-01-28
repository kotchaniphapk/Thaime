'use client';

import { HeroSection } from "@/components/HeroSection";
import { Aboutus } from "@/components/Aboutus";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Aboutus />
      <Footer />
    </div>
  );
}
