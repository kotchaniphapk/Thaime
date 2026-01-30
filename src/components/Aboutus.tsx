"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
export function Aboutus() {
  const { t } = useTranslation();

  return (
    <section id="Aboutus" className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20">
      {/* Background – smooth fade from left; larger spread on mobile via .aboutus-gradient */}
      <div
        className="aboutus-gradient aboutus-gradient-base absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,106,0,1) 0%, rgba(255,90,20,0.85) 12%, rgba(120,45,10,0.9) 28%, rgba(40,25,15,0.95) 42%, rgba(25,25,25,1) 58%, rgba(15,15,15,1) 100%)",
        }}
      />
      {/* Soft orange glow – larger on mobile via .aboutus-glow */}
      <div
        className="aboutus-glow absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 120% 150% at 0% 50%, rgba(255,106,0,0.35) 0%, transparent 55%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_50%,rgba(0,0,0,0.6)_100%)]" />
      <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.10)_0%,transparent_40%),radial-gradient(circle_at_90%_30%,rgba(255,106,0,0.10)_0%,transparent_35%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-12">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-[#ff6900] text-center mb-6 sm:mb-8">
          {t("aboutus.title")}
        </h2>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-16">
          {/* Image card */}
          <div className="relative flex justify-center md:justify-end order-1">
            <div className="relative w-full lg:max-w-lg">
              {/* softer glow */}
              <div className="absolute -inset-2 sm:-inset-3 rounded-2xl sm:rounded-3xl bg-white/5 blur-2xl" />

              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-black/30 shadow-xl justify-center items-center">
                <div className="relative aspect-[3/4] w-full justify-center items-center">
                  <Image
                    src="/Aboutus.png"
                    alt={t("aboutus.imageAlt")}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* subtle overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-white/5" />
              </div>
            </div>
          </div>

          {/* Text card */}
          <div className="relative order-2">
            <div className="absolute -inset-1 sm:-inset-2 rounded-2xl sm:rounded-3xl bg-white/10 blur-2xl" />
            <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-black/30 p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl">
              <p className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] text-white/70">
                {t("aboutus.ourStory")}
              </p>

              <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
                {t("aboutus.headline").split("\n").map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </h2>

              <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
                <p className="font-medium text-white">
                  {t("aboutus.paragraph1")}
                </p>

                <p>{t("aboutus.paragraph2")}</p>

                <p>{t("aboutus.paragraph3")}</p>

                <p>{t("aboutus.paragraph4")}</p>

                <div className="pt-2">
                  <div className="inline-flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 px-3 sm:px-4 py-2 sm:py-3">
                    <span className="text-sm sm:text-base text-white/95">
                      {t("aboutus.thankYou")}
                    </span>
                  </div>
                </div>
              </div>

              {/* little accent line */}
              <div className="mt-6 sm:mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <div className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70">
                {t("aboutus.tagline")}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 md:mt-12 relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-black/30 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-2xl">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
              {t("aboutus.socialTitle")}
            </h2>
            <p className="text-base sm:text-lg text-white/85 px-2">
              {t("aboutus.socialDesc")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=100091929537003"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm sm:text-base font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            >
              <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span>{t('orderPage.facebook')}</span>
            </a>

            <a
              href="https://www.instagram.com/thaime_ro/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 text-white text-sm sm:text-base font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]"
            >
              <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span>{t('orderPage.instagram')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
