"use client";

import { Facebook, BookOpen, MapPin, Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { LanguageToggle } from "./LanguageToggle";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#ce3033]">
      {/* Radiating stripes background pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            repeating-conic-gradient(
              from 0deg at 50% 100%,
              #000000 0deg 2deg,
              #1a0000 6deg 12deg
            )
          `,
          backgroundSize: "100% 100%",
        }}
      />
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Language Toggle Button */}
        <LanguageToggle />
        {/* Header with Logo */}
        <div className="flex justify-center pt-6 items-center flex-col">
          <div className="text-center flex flex-col items-center">
            <Image
              width={200}
              height={200}
              src="/somtumlogo2.svg"
              alt="Somtum Hero"
              className="w-[120px] sm:w-[150px] md:w-[200px] h-auto"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="flex-1 px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto w-full">
          {/* Left Section - Text and Buttons */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex flex-col   md:items-start justify-center items-center">
                <Image
                  width={400}
                  height={400}
                  src="/title1.png"
                  alt="Somtum Hero"
                  className="max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl"
                />
                <Image
                  width={300}
                  height={300}
                  src="/title.png"
                  alt="Somtum Hero"
                  className="mt-2 max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl"
                />
              </div>

              <p className="text-white/90 mt-4 text-lg md:text-xl tracking-wide text-center md:text-left font-bold">
                {t("burgerHero.subtitle1")}
                <br />
                {t("burgerHero.subtitle2")}
              </p>
            </div>

            {/* Social Buttons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 max-w-2xl">
              {/* Menu Button */}
              <a
                href="/menu"
                className="flex items-center gap-3 px-6 py-4 rounded-full bg-white text-[#2c1100] hover:bg-[#ce3033] hover:text-white active:bg-[#ce3033] active:text-white transition-all duration-300 group touch-manipulation"
              >
                <Menu className="w-6 h-6 text-[#ce3033] group-hover:text-white group-active:text-white transition-colors" />
                <span className="uppercase tracking-wide text-lg font-bold">
                  {t("burgerHero.instagram")}
                </span>
              </a>

              {/* Book Table Button */}
              <a
                href="#"
                className="flex items-center gap-3 px-6 py-4 rounded-full bg-white text-[#2c1100] hover:bg-[#ce3033] hover:text-white active:bg-[#ce3033] active:text-white transition-all duration-300 group touch-manipulation"
              >
                <BookOpen className="w-6 h-6 text-[#ce3033] group-hover:text-white group-active:text-white transition-colors" />
                <span className="uppercase tracking-wide text-lg font-bold">
                  {t("burgerHero.bookTable")}
                </span>
              </a>

              {/* Facebook Button */}
              <a
                href="#"
                className="flex items-center gap-3 px-6 py-4 rounded-full bg-white text-[#2c1100] hover:bg-[#ce3033] hover:text-white active:bg-[#ce3033] active:text-white transition-all duration-300 group touch-manipulation"
              >
                <Facebook className="w-6 h-6 text-[#ce3033] group-hover:text-white group-active:text-white transition-colors" />
                <span className="uppercase tracking-wide text-lg font-bold">
                  {t("burgerHero.facebook")}
                </span>
              </a>

              {/* Line Official Button */}
              <a
                href="#"
                className="flex items-center gap-3 px-6 py-4 rounded-full bg-white text-[#2c1100] hover:bg-[#ce3033] hover:text-white active:bg-[#ce3033] active:text-white transition-all duration-300 group touch-manipulation"
              >
                <MapPin className="w-6 h-6 text-[#ce3033] group-hover:text-white group-active:text-white transition-colors" />
                <span className="uppercase tracking-wide text-lg font-bold">
                  {t("burgerHero.lineOfficial")}
                </span>
              </a>
            </div>
          </div>

          {/* Right Section - Hero Image */}
          <div className="relative lg:pl-12 flex items-center justify-center lg:justify-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-md md:max-w-lg lg:w-full lg:max-w-none lg:scale-130">
              <Image
                width={2202}
                height={1134}
                src="/somtumhero.png"
                alt="Somtum Hero"
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
