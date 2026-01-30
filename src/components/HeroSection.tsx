"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { LanguageToggle } from "./LanguageToggle";
import { Button } from "./ui/button";
import Link from "next/link";
import { Phone, UtensilsCrossed, ShoppingCart, Info } from "lucide-react";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full overflow-x-visible overflow-y-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(20,20,20,1) 0%, rgba(0,0,0,1) 28%, rgba(255,106,0,1) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_45%,rgba(0,0,0,0.75)_100%)]" />
      <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.10)_0%,transparent_35%),radial-gradient(circle_at_90%_35%,rgba(255,106,0,0.12)_0%,transparent_40%)]" />

      {/* Top-right language */}
      <div className="absolute right-3 top-3 z-20 sm:right-6 sm:top-4 md:right-8 md:top-6">
        <LanguageToggle />
      </div>
      <div className="mt-12 px-4 py-6 sm:px-6 sm:py-8 md:mt-0 md:px-10 md:py-16 lg:px-12 lg:py-20 relative z-10 mx-auto flex min-h-0 md:min-h-[92vh] max-w-7xl flex-col items-center gap-4 sm:gap-6 lg:flex-row md:gap-10 lg:gap-14">
        {/* Left - z-20 ให้ปุ่มอยู่ชั้นบน ไม่ถูกรูปบัง */}
        <div className="relative z-20 flex w-full max-w-xl shrink-0 flex-col items-center gap-4 sm:gap-5 md:gap-6 md:items-start md:justify-center">
          {/* Logo pill */}
          <div className="items-center justify-center">
            <Image
              src="/logo.png"
              alt={t("heroSection.imageAlt", "Thai food on wheels")}
              width={280}
              height={280}
              className="h-auto w-[200px] sm:w-[240px] md:w-[280px] object-contain"
              priority
            />
          </div>

          <div className="space-y-2 sm:space-y-3 md:space-y-4 w-full">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white md:text-start text-center">
              {t("heroSection.title")}
            </h1>
            <p className="max-w-lg text-sm sm:text-base md:text-base lg:text-lg font-medium text-white/85 md:text-start text-center px-2 sm:px-0">
              {t("heroSection.subtitle")}
            </p>
          </div>

          {/* Buttons */}
          <div className="grid w-full grid-cols-2 gap-2 sm:gap-3 md:gap-3 mt-1 md:mt-0">
          <Button
              asChild
              className="group h-10 sm:h-11 rounded-xl border-0 px-3 sm:px-5 text-sm sm:text-base font-semibold text-white shadow-xl hover:opacity-95 bg-[linear-gradient(135deg,#ff8533_0%,#ff6900_55%,#e55d00_100%)]"
            >
              <Link
                href="/menu"
                className="flex items-center justify-center gap-1.5 sm:gap-2"
              >
                <UtensilsCrossed className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                <span className="truncate">{t("heroSection.menu")}</span>
              </Link>
            </Button>
            <Button
              asChild
              className="group h-10 sm:h-11 rounded-xl border-0 px-3 sm:px-5 text-sm sm:text-base font-semibold text-white shadow-xl hover:opacity-95 bg-[linear-gradient(135deg,#ff8533_0%,#ff6900_55%,#e55d00_100%)]"
            >
              <Link href="#Aboutus"  className="flex items-center justify-center gap-1.5 sm:gap-2">
                <Info className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                <span className="truncate">{t("aboutus.title")}</span>
              </Link>
            </Button>

            <Button
              asChild
              className="h-10 sm:h-11 rounded-xl border-0 px-3 sm:px-5 text-sm sm:text-base font-semibold text-white shadow-xl hover:opacity-95 bg-[linear-gradient(135deg,#ff8533_0%,#ff6900_55%,#e55d00_100%)]"
            >
              <Link
                href="#Footer"
                className="flex items-center justify-center gap-1.5 sm:gap-2"
              >
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                <span className="truncate">{t("heroSection.contact")}</span>
              </Link>
            </Button>

            <Button
              asChild
              className="h-10 sm:h-11 rounded-xl border-0 px-3 sm:px-5 text-sm sm:text-base font-semibold text-white shadow-xl hover:opacity-95 bg-[linear-gradient(135deg,#ff8533_0%,#ff6900_55%,#e55d00_100%)]"
            >
              <Link
                href="/order"
                className="flex items-center justify-center gap-1.5 sm:gap-2"
              >
                <ShoppingCart className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                <span className="truncate">{t("heroSection.order")}</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Right - รูปล้นไปทางขวาได้ ไม่ล้ำไปบังปุ่ม */}
        <div className="relative flex flex-1 min-h-0 items-center justify-center sm:justify-start overflow-visible mt-8 mb-8 sm:mt-12 sm:mb-12 md:mt-0 md:mb-0 md:justify-start md:pl-8 lg:pl-20 xl:pl-40">
          <div className="relative flex origin-center sm:origin-left items-center justify-center sm:justify-start overflow-visible w-full">
            <Image
              src="/hero.webp"
              alt={t(
                "hero.imageAlt",
                "Thai food on wheels",
              )}
              width={1459}
              height={760}
              className="h-auto w-full max-w-[90vw] sm:max-w-none md:max-h-[85vh] object-contain scale-100 sm:scale-110 md:scale-120 lg:scale-150 xl:scale-170"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
