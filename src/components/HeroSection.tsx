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
      <div className="absolute right-3 top-3 z-20 md:right-8 md:top-6">
        <LanguageToggle />
      </div>
      <div className="mt-12 px-4 py-6 md:mt-0 md:px-10 md:py-16 lg:px-12 lg:py-20 relative z-10 mx-auto flex min-h-0 md:min-h-[92vh] max-w-7xl flex-col col-span-1 ld:col-span-2 items-center gap-3 md:flex-row md:gap-10 lg:gap-14">
        {/* Left - z-20 ให้ปุ่มอยู่ชั้นบน ไม่ถูกรูปบัง */}
        <div className="relative z-20 flex w-full max-w-xl shrink-0 flex-col items-center gap-4 md:gap-6 md:items-start md:justify-center">
          {/* Logo pill */}
          <div className="items-center justify-center">
            <Image
              src="/logo.png"
              alt={t("heroSection.imageAlt", "Thai food on wheels")}
              width={280}
              height={280}
              className="h-auto w-[240px] md:w-[280px] object-contain"
              priority
            />
          </div>

          <div className="space-y-3 md:space-y-4">
            <h1 className="text-3xl font-medium text-white md:text-5xl lg:text-6xl md:text-start text-center">
              {t("heroSection.title")}
            </h1>
            <p className="max-w-lg text-base font-medium text-white/85 lg:text-lg md:text-start text-center">
              {t("heroSection.subtitle")}
            </p>
          </div>

          {/* Buttons */}
          <div className="grid w-full grid-cols-2 gap-2 sm:gap-3 md:gap-3 mt-1 md:mt-0">
          <Button
              asChild
              className="group h-11 rounded-xl border-0 px-5 text-base font-semibold text-white shadow-xl hover:opacity-95 bg-[linear-gradient(135deg,#ff8533_0%,#ff6900_55%,#e55d00_100%)]"
            >
              <Link
                href="/menu"
                className="flex items-center justify-center gap-2"
              >
                <UtensilsCrossed className="h-4 w-4" />
                {t("heroSection.menu")}
              </Link>
            </Button>
            <Button
              asChild
              className="group h-11 rounded-xl border-0 px-5 text-base font-semibold text-white shadow-xl hover:opacity-95 bg-[linear-gradient(135deg,#ff8533_0%,#ff6900_55%,#e55d00_100%)]"
            >
              <Link href="#Aboutus"  className="flex items-center justify-center gap-2">
                <Info className="h-4 w-4" />
                {t("aboutus.title")}
              </Link>
            </Button>

            <Button
              asChild
              className="h-11 rounded-xl border-0 px-5 text-base font-semibold text-white shadow-xl hover:opacity-95 bg-[linear-gradient(135deg,#ff8533_0%,#ff6900_55%,#e55d00_100%)]"
            >
              <Link
                href="#Footer"
                className="flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4" />
                {t("heroSection.contact")}
              </Link>
            </Button>

            <Button
              asChild
              className="h-11 rounded-xl border-0 px-5 text-base font-semibold text-white shadow-xl hover:opacity-95 bg-[linear-gradient(135deg,#ff8533_0%,#ff6900_55%,#e55d00_100%)]"
            >
              <Link
                href="/order"
                className="flex items-center justify-center gap-2"
              >
                <ShoppingCart className="h-4 w-4" />
                {t("heroSection.order")}
              </Link>
            </Button>
          </div>
        </div>

        {/* Right - รูปล้นไปทางขวาได้ ไม่ล้ำไปบังปุ่ม */}
        <div className="relative flex flex-1 min-h-0 items-center justify-start overflow-visible mt-16 mb-16 md:mt-0 md:mb-0 md:justify-start md:pl-40 md:-pt-0 md:-pb-0">
          <div className="relative flex origin-left items-center justify-start overflow-visible">
            <Image
              src="/hero.svg"
              alt={t(
                "hero.imageAlt",
                "Thai food on wheels",
              )}
              width={1459}
              height={760}
              className="
                h-auto w-full
                 md:max-h-[85vh]
                object-contain
                scale-100 md:scale-140 lg:scale-170
              "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
