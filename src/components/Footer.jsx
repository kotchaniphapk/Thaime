'use client';

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { TbBrandInstagram } from "react-icons/tb";
import { FaFacebookF, FaPhone, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  const { t } = useTranslation();

  return (
    <section id="Footer" className="relative w-full overflow-hidden">
      {/* Background matching Hero */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(20,20,20,1) 0%, rgba(0,0,0,1) 28%, rgba(255,106,0,1) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_45%,rgba(0,0,0,0.75)_100%)]" />
      
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4 sm:mb-5">
                <div className="">
                  <Image 
                    src="/logo.png" 
                    width={180} 
                    height={180} 
                    alt="company logo"
                    className="w-[140px] sm:w-[180px] h-auto"
                  />
                </div>
              </div>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base text-white/90">{t("footer-title")}</p>
              <h4 className="font-semibold mb-1.5 sm:mb-2 text-base sm:text-lg text-white">{t("open-time")}</h4>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base text-white/85">
                {t("day")}<br />{t("day-time")}
              </p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-1.5 sm:mb-2 text-base sm:text-lg text-white">{t("contact")}</h4>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base text-white/85">
                {t("call")}: {t("call-number")}<br />
                {t("emailLabel")}: {t("email")}
              </p>
              <h4 className="font-semibold mb-1.5 sm:mb-2 text-base sm:text-lg text-white">{t("location")}</h4>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base text-white/85">{t("address")}</p>
              <ul className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 mt-4 sm:mt-6">
                <li>
                  <a href="https://www.instagram.com/thaime_ro/" target="_blank" rel="noopener noreferrer" title="Instagram" className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl border border-white/10 bg-white/10 text-white transition-all duration-200 hover:bg-white/15 backdrop-blur" aria-label="Instagram">
                    <TbBrandInstagram size={18} className="sm:w-5 sm:h-5" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100091929537003" target="_blank" rel="noopener noreferrer" title="Facebook" className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl border border-white/10 bg-white/10 text-white transition-all duration-200 hover:bg-white/15 backdrop-blur" aria-label="Facebook">
                    <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/40762286338" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl border border-white/10 bg-white/10 text-white transition-all duration-200 hover:bg-white/15 backdrop-blur" aria-label="WhatsApp">
                    <FaWhatsapp size={18} className="sm:w-5 sm:h-5" />
                  </a>
                </li>
                <li>
                  <a href="tel:0762286338" title="Phone" className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl border border-white/10 bg-white/10 text-white transition-all duration-200 hover:bg-white/15 backdrop-blur" aria-label="Phone">
                    <FaPhone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="h-56 sm:h-72 md:h-80 lg:h-full order-first md:order-last">
              <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-black/25 p-1.5 sm:p-2 h-full overflow-hidden">
                <iframe
                  src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.674105440915!2d26.114362176867694!3d44.480852471074904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff146893c349%3A0x1953a8dc0a1068ab!2zVGhhaU1l8J-Mtu-4jyBGb29kIFRydWNr!5e0!3m2!1sen!2sus!4v1769684722316!5m2!1sen!2sus" 
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg sm:rounded-xl"
                  title="Map"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 sm:mt-10 md:mt-12 border-t border-white/10" />
          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-center text-white/70 px-2">
            © Copyright {new Date().getFullYear()}, All Rights Reserved by ThaiMe
          </p>
        </div>
      </div>
    </section>
  );
}
