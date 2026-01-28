"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { LanguageToggle } from "./LanguageToggle";
import { Button } from "./ui/button";
import Link from "next/link";
import { Phone, House, UtensilsCrossed, ShoppingCart } from "lucide-react";

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
      <div className="absolute right-4 top-4 z-20 md:right-8 md:top-6">
        <LanguageToggle />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col col-span-1 ld:col-span-2 items-center  px-6 py-16 md:flex-row md:gap-10 md:px-10 md:py-16 lg:gap-14 lg:px-12 lg:py-20">
        {/* Left - z-20 ให้ปุ่มอยู่ชั้นบน ไม่ถูกรูปบัง */}
        <div className="relative z-20 flex w-full max-w-xl  flex-shrink-0 flex-col items-center gap-6 md:items-start md:justify-center">
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

          <div className="space-y-4">
            <h1 className="text-4xl font-medium text-white md:text-5xl lg:text-6xl md:text-start text-center">
              {t("heroSection.title")}
            </h1>
            <p className="max-w-lg text-base font-medium text-white/85 lg:text-lg md:text-start text-center">
              {t("heroSection.subtitle")}
            </p>
          </div>

          {/* Buttons */}
          <div className="grid w-full grid-cols-2 gap-3 sm:gap-4 md:gap-4">
            <Button
              asChild
              className="group h-11 rounded-xl border-0 px-5 text-base font-semibold text-white shadow-xl hover:opacity-95 bg-[linear-gradient(135deg,#ff8533_0%,#ff6900_55%,#e55d00_100%)]"
            >
              <Link href="/" className="flex items-center justify-center gap-2">
                <House className="h-4 w-4" />
                {t("heroSection.home")}
              </Link>
            </Button>

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

          {/* Micro trust line */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 text-sm md:text-base text-white/80">
            <span className="inline-flex items-center rounded-full border border-white/50 bg-white/10 px-4 py-1.5">
              Thai style
            </span>
            <span className="inline-flex items-center rounded-full border border-white/50 bg-white/10 px-4 py-1.5">
              Street food
            </span>
            <span className="inline-flex items-center rounded-full border border-white/50 bg-white/10 px-4 py-1.5">
              Made fresh
            </span>
          </div>
        </div>

        {/* Right - รูปล้นไปทางขวาได้ ไม่ล้ำไปบังปุ่ม */}
        <div className="relative z-10 flex flex-1 items-center justify-start overflow-visible md:justify-start md:pl-40">
          <div className="relative flex origin-left items-center justify-start overflow-visible">
            <Image
              src="/hero.png"
              alt={t(
                "hero.imageAlt",
                "Thai food on wheels",
              )}
              width={2918}
              height={1521}
              className="
                h-auto w-full
                max-h-[520px] sm:max-h-[620px] md:max-h-[85vh]
                object-contain object-left
                scale-110 md:scale-140 lg:scale-170
              "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
