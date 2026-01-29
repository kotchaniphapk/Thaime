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
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16 lg:px-12 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <div className="flex items-center mb-5">
                <div className="">
                  <Image src="/logo.png" width={180} height={180} alt="company logo" />
                </div>
              </div>
              <p className="mb-4 text-white/90">{t("footer-title")}</p>
              <h4 className="font-semibold mb-2 text-white">{t("open-time")}</h4>
              <p className="mb-4 text-white/85">
                {t("day")}<br />{t("day-time")}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-white">{t("contact")}</h4>
              <p className="mb-4 text-white/85">
                {t("call")}: {t("call-number")}<br />
                {t("emailLabel")}: {t("email")}
              </p>
              <h4 className="font-semibold mb-2 text-white">{t("location")}</h4>
              <p className="mb-4 text-white/85">{t("address")}</p>
              <ul className="flex items-center gap-3 mt-6">
                <li>
                  <a href="https://www.instagram.com/thaime_ro/" target="_blank" rel="noopener noreferrer" title="Instagram" className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/10 text-white transition-all duration-200 hover:bg-white/15 backdrop-blur" aria-label="Instagram">
                    <TbBrandInstagram size={20} />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100091929537003" target="_blank" rel="noopener noreferrer" title="Facebook" className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/10 text-white transition-all duration-200 hover:bg-white/15 backdrop-blur" aria-label="Facebook">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/40762286338" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/10 text-white transition-all duration-200 hover:bg-white/15 backdrop-blur" aria-label="WhatsApp">
                    <FaWhatsapp size={20} />
                  </a>
                </li>
                <li>
                  <a href="tel:0762286338" title="Phone" className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/10 text-white transition-all duration-200 hover:bg-white/15 backdrop-blur" aria-label="Phone">
                    <FaPhone />
                  </a>
                </li>
              </ul>
            </div>
            <div className="h-64 sm:h-72 md:h-80 lg:h-full">
              <div className="rounded-2xl border border-white/10 bg-black/25 p-2 h-full overflow-hidden">
                <iframe
                  src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.674105440915!2d26.114362176867694!3d44.480852471074904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff146893c349%3A0x1953a8dc0a1068ab!2zVGhhaU1l8J-Mtu-4jyBGb29kIFRydWNr!5e0!3m2!1sen!2sus!4v1769684722316!5m2!1sen!2sus" 
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-xl"
                  title="Map"
                />
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-12 border-t border-white/10" />
          <p className="mt-6 text-base text-center text-white/70">
            © Copyright {new Date().getFullYear()}, All Rights Reserved by ThaiMe
          </p>
        </div>
      </div>
    </section>
  );
}
