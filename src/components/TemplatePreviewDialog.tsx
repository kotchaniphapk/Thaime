import { useState } from "react";
import { X, Smartphone, QrCode, Monitor } from "lucide-react";
import { motion } from "motion/react";
import { SpaTemplatePreview } from "./SpaTemplatePreview";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { type CategoryType } from "@/lib/examples";

// Placeholder QR poster image - replace with actual image URL or local asset
const qrPosterImage = "https://via.placeholder.com/800x1000/ed6526/ffffff?text=QR+Code+Poster";

interface TemplatePreviewDialogProps {
  lang: "th" | "en";
  webUrl: string;
  qrImage?: string;
  category: CategoryType;
  onClose: () => void;
}

const content = {
  th: {
    landingTab: "หน้าเว็บไซต์",
    qrTab: "QR Code Poster",
    mobileView: "มือถือ",
    desktopView: "คอมพิวเตอร์",
    restaurant: "เทมเพลตร้านอาหาร",
    cafe: "เทมเพลตคาเฟ่",
    taxi: "เทมเพลตแท็กซี่",
    comingSoon: "กำลังพัฒนา...",
    qrTitle: "QR Code Poster พร้อมใช้",
    qrDescription: "ติดหน้าร้าน หรือพิมพ์ใส่นามบัตร แผ่นพับ",
    landingDescription: "ดูตัวอย่างหน้าเว็บไซต์",
  },
  en: {
    landingTab: "Landing Page",
    qrTab: "QR Code Poster",
    mobileView: "Mobile",
    desktopView: "Desktop",
    restaurant: "Restaurant Template",
    cafe: "Cafe Template",
    taxi: "Taxi Template",
    comingSoon: "Coming soon...",
    qrTitle: "Ready-to-Use QR Code Poster",
    qrDescription:
      "Display at your shop or print on business cards, flyers",
    landingDescription: "View website example",
  },
};

export function TemplatePreviewDialog({
  lang,
  webUrl,
  qrImage,
  category,
  onClose,
}: TemplatePreviewDialogProps) {
  const t = content[lang];
  const [activeTab, setActiveTab] = useState<"landing" | "qr">(
    "landing",
  );
  const [deviceView, setDeviceView] = useState<
    "mobile" | "desktop"
  >("mobile");
  const templateUrl = webUrl || "";

  return (
    <div className="relative h-full flex flex-col bg-white w-full max-w-7xl mx-auto">
      {/* Header with Tabs */}
      <div className="sticky top-0 z-50 bg-white border-b border-[#11181c]/10">
        <div className="flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 gap-2">
          <div className="flex gap-1 sm:gap-2">
            <button
              onClick={() => setActiveTab("landing")}
              className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg transition-all text-sm sm:text-base ${
                activeTab === "landing"
                  ? "bg-[#ed6526] text-white"
                  : "bg-[#f8f6f3] text-[#11181c] hover:bg-[#ed6526]/10"
              }`}
            >
              <Smartphone className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden xs:inline">
                {t.landingTab}
              </span>
            </button>
            <button
              onClick={() => setActiveTab("qr")}
              className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg transition-all text-sm sm:text-base ${
                activeTab === "qr"
                  ? "bg-[#ed6526] text-white"
                  : "bg-[#f8f6f3] text-[#11181c] hover:bg-[#ed6526]/10"
              }`}
            >
              <QrCode className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden xs:inline">
                {t.qrTab}
              </span>
            </button>
          </div>

          {/* Device View Toggle - Only show on Desktop Landing tab with URL */}
          <div className="flex items-center gap-2">
            {activeTab === "landing" && templateUrl && (
              <div className="hidden lg:flex gap-1 bg-[#f8f6f3] rounded-lg p-1">
                <button
                  onClick={() => setDeviceView("mobile")}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-md transition-all text-sm ${
                    deviceView === "mobile"
                      ? "bg-white text-[#ed6526] shadow-sm"
                      : "text-[#11181c]/60 hover:text-[#11181c]"
                  }`}
                  title={t.mobileView}
                >
                  <Smartphone className="h-4 w-4" />
                  <span>{t.mobileView}</span>
                </button>
                <button
                  onClick={() => setDeviceView("desktop")}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-md transition-all text-sm ${
                    deviceView === "desktop"
                      ? "bg-white text-[#ed6526] shadow-sm"
                      : "text-[#11181c]/60 hover:text-[#11181c]"
                  }`}
                  title={t.desktopView}
                >
                  <Monitor className="h-4 w-4" />
                  <span>{t.desktopView}</span>
                </button>
              </div>
            )}

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-[#11181c] hover:bg-[#ed6526] text-white rounded-full flex items-center justify-center shadow-lg transition-colors flex-shrink-0"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto min-h-0">
        {/* Landing Page Tab */}
        {activeTab === "landing" && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col h-full min-h-0"
          >
            {/* Header */}
            <div className="text-center mb-3 sm:mb-4 pt-3 sm:pt-4 px-4 flex-shrink-0">
              <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#ed6526]/10 border border-[#ed6526]/20 mb-2 sm:mb-2.5">
                <Smartphone className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#ed6526]" />
                <span className="text-xs text-[#ed6526]">
                  website
                </span>
              </div>
              <h3 className="text-lg sm:text-xl text-[#11181c] mb-1 sm:mb-1.5 px-4">
                {t.landingTab}
              </h3>
              <p className="text-xs sm:text-sm text-[#11181c]/60 px-4">
                {t.landingDescription}
              </p>
            </div>

            {/* แสดง iframe ถ้ามี URL */}
            {templateUrl ? (
              <div className="bg-[#f8f6f3] flex-1 min-h-0 flex items-center justify-center p-3 sm:p-4">
                {/* Mobile View - Always show on mobile screens */}
                <motion.div
                  key="mobile-always"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-[375px] mx-auto flex flex-col lg:hidden"
                >
                  {/* Mobile Frame - iPhone standard size */}
                  <div className="bg-[#11181c] rounded-[2.5rem] p-2 shadow-2xl w-full aspect-[9/19.5] max-h-[calc(100vh-200px)]">
                    <div className="bg-white rounded-[2rem] overflow-hidden h-full flex flex-col">
                      {/* Status Bar */}
                      <div className="bg-white h-11 flex items-center justify-center border-b border-gray-200 flex-shrink-0">
                        <div className="w-20 h-4 bg-[#11181c] rounded-full"></div>
                      </div>

                      {/* Website Content */}
                      <div className="flex-1 relative min-h-0">
                        <iframe
                          src={templateUrl}
                          className="w-full h-full border-0"
                          title={`${category} template preview - mobile`}
                          sandbox="allow-scripts allow-same-origin"
                        />
                      </div>
                    </div>
                  </div>

                  {/* URL Display */}
                  <div className="mt-3 text-center flex-shrink-0">
                    <a
                      href={templateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#ed6526] text-white rounded-lg hover:bg-[#ed6526]/90 transition-colors text-xs sm:text-sm"
                    >
                      <span>
                        {lang === "th"
                          ? "เปิดในแท็บใหม่"
                          : "Open in New Tab"}
                      </span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </motion.div>

                {/* Desktop - Show toggle views only on large screens */}
                <div className="hidden lg:flex w-full h-full min-h-0">
                  {/* Mobile View on Desktop */}
                  {deviceView === "mobile" && (
                    <motion.div
                      key="mobile-desktop"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="w-full max-w-[375px] mx-auto flex flex-col"
                    >
                      {/* Mobile Frame - iPhone standard size */}
                      <div className="bg-[#11181c] rounded-[2.5rem] p-2 shadow-2xl w-full aspect-[9/19.5] max-h-[calc(100vh-250px)]">
                        <div className="bg-white rounded-[2rem] overflow-hidden h-full flex flex-col">
                          {/* Status Bar */}
                          <div className="bg-white h-11 flex items-center justify-center border-b border-gray-200 flex-shrink-0">
                            <div className="w-20 h-4 bg-[#11181c] rounded-full"></div>
                          </div>

                          {/* Website Content */}
                          <div className="flex-1 relative min-h-0">
                            <iframe
                              src={templateUrl}
                              className="w-full h-full border-0"
                              title={`${category} template preview - mobile on desktop`}
                              sandbox="allow-scripts allow-same-origin"
                            />
                          </div>
                        </div>
                      </div>

                      {/* URL Display */}
                      <div className="mt-3 text-center flex-shrink-0">
                        <a
                          href={templateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#ed6526] text-white rounded-lg hover:bg-[#ed6526]/90 transition-colors text-xs sm:text-sm"
                        >
                          <span>
                            {lang === "th"
                              ? "เปิดในแท็บใหม่"
                              : "Open in New Tab"}
                          </span>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    </motion.div>
                  )}

                  {/* Desktop View */}
                  {deviceView === "desktop" && (
                    <motion.div
                      key="desktop"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full flex flex-col min-h-0"
                    >
                      {/* Desktop Frame */}
                      <div className="bg-[#11181c] rounded-xl p-1.5 shadow-2xl flex-1 min-h-0">
                        <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col">
                          {/* Browser Controls */}
                          <div className="bg-white h-9 flex items-center justify-start border-b border-gray-200 px-3 flex-shrink-0">
                            <div className="flex gap-1.5">
                              <div className="w-3 h-3 rounded-full bg-red-500"></div>
                              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                              <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="flex flex-1 ml-3 mr-3">
                              <div className="bg-gray-100 rounded-md px-3 py-1.5 text-xs text-gray-500 w-full truncate flex items-center">
                                <svg
                                  className="w-3 h-3 mr-1.5 text-gray-400 flex-shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                  />
                                </svg>
                                {templateUrl}
                              </div>
                            </div>
                          </div>

                          {/* Website Content */}
                          <div className="flex-1 relative min-h-0">
                            <iframe
                              src={templateUrl}
                              className="w-full h-full border-0"
                              title={`${category} template preview - desktop`}
                              sandbox="allow-scripts allow-same-origin"
                            />
                          </div>
                        </div>
                      </div>

                      {/* URL Display */}
                      <div className="mt-2.5 text-center flex-shrink-0">
                        <a
                          href={templateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#ed6526] text-white rounded-lg hover:bg-[#ed6526]/90 transition-colors text-xs sm:text-sm"
                        >
                          <span>
                            {lang === "th"
                              ? "เปิดในแท็บใหม่"
                              : "Open in New Tab"}
                          </span>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            ) : (
              // Fallback: แสดง Coming Soon ถ้าไม่มี URL
              <div className="flex-1 min-h-0 overflow-y-auto">
                {category === "spa" && (
                  <div className="bg-[#f8f6f3] flex items-center justify-center p-4 sm:p-6 min-h-full">
                    <div className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
                      <SpaTemplatePreview lang={lang} />
                    </div>
                  </div>
                )}
                {category === "restaurant" && (
                  <div className="p-8 sm:p-16 text-center flex flex-col items-center justify-center min-h-full">
                    <div className="text-8xl sm:text-9xl mb-6 sm:mb-8">
                      🍽️
                    </div>
                    <h3 className="text-3xl sm:text-4xl text-[#11181c] mb-3 sm:mb-4">
                      {t.restaurant}
                    </h3>
                    <p className="text-lg sm:text-xl text-[#11181c]/60">
                      {t.comingSoon}
                    </p>
                  </div>
                )}
                {category === "cafe" && (
                  <div className="p-8 sm:p-16 text-center flex flex-col items-center justify-center min-h-full">
                    <div className="text-8xl sm:text-9xl mb-6 sm:mb-8">
                      ☕
                    </div>
                    <h3 className="text-3xl sm:text-4xl text-[#11181c] mb-3 sm:mb-4">
                      {t.cafe}
                    </h3>
                    <p className="text-lg sm:text-xl text-[#11181c]/60">
                      {t.comingSoon}
                    </p>
                  </div>
                )}
                {category === "taxi" && (
                  <div className="p-8 sm:p-16 text-center flex flex-col items-center justify-center min-h-full">
                    <div className="text-8xl sm:text-9xl mb-6 sm:mb-8">
                      🚗
                    </div>
                    <h3 className="text-3xl sm:text-4xl text-[#11181c] mb-3 sm:mb-4">
                      {t.taxi}
                    </h3>
                    <p className="text-lg sm:text-xl text-[#11181c]/60">
                      {t.comingSoon}
                    </p>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}

        {/* QR Code Poster Tab */}
        {activeTab === "qr" && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="p-4 sm:p-6 lg:p-8"
          >
            <div className="max-w-3xl mx-auto">
              {/* Info Header */}
              <div className="text-center mb-4 sm:mb-5">
                <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#ed6526]/10 border border-[#ed6526]/20 mb-2 sm:mb-2.5">
                  <QrCode className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#ed6526]" />
                  <span className="text-xs text-[#ed6526]">
                    QR Code Poster
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl text-[#11181c] mb-1 sm:mb-1.5 px-4">
                  {t.qrTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#11181c]/60 px-4">
                  {t.qrDescription}
                </p>
              </div>

              {/* QR Poster Display */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border border-[#11181c]/10 mb-6 sm:mb-8 flex justify-center bg-[#f8f6f3]">
                {/* Poster Image */}
                <ImageWithFallback
                  src={qrImage || qrPosterImage}
                  alt="QR Code Poster Example"
                  className="w-auto h-auto max-w-[280px] sm:max-w-[350px] lg:max-w-[400px] object-contain"
                />

                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#11181c]/90 to-transparent p-3 sm:p-4 lg:p-6 text-white">
                  <div className="flex items-center justify-around sm:justify-between gap-2">
                    <div className="text-center sm:text-left">
                      <p className="text-xs sm:text-sm opacity-90 mb-0.5 sm:mb-1">
                        {lang === "th"
                          ? "ขนาดไฟล์"
                          : "File Size"}
                      </p>
                      <p className="text-sm sm:text-base lg:text-lg">
                        A4, A5, Card
                      </p>
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="text-xs sm:text-sm opacity-90 mb-0.5 sm:mb-1">
                        {lang === "th" ? "ไฟล์" : "Format"}
                      </p>
                      <p className="text-sm sm:text-base lg:text-lg">
                        PNG, PDF
                      </p>
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="text-xs sm:text-sm opacity-90 mb-0.5 sm:mb-1">
                        {lang === "th" ? "คุณภาพ" : "Quality"}
                      </p>
                      <p className="text-sm sm:text-base lg:text-lg">
                        300 DPI
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-[#f8f6f3] rounded-xl p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">
                    🖨️
                  </div>
                  <h4 className="text-base sm:text-lg text-[#11181c] mb-1 sm:mb-2">
                    {lang === "th"
                      ? "พร้อมพิมพ์"
                      : "Print Ready"}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#11181c]/60">
                    {lang === "th"
                      ? "ความละเอียดสูง 300 DPI"
                      : "High resolution 300 DPI"}
                  </p>
                </div>

                <div className="bg-[#f8f6f3] rounded-xl p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">
                    📐
                  </div>
                  <h4 className="text-base sm:text-lg text-[#11181c] mb-1 sm:mb-2">
                    {lang === "th"
                      ? "หลายขนาด"
                      : "Multiple Sizes"}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#11181c]/60">
                    {lang === "th"
                      ? "A4, A5, นามบัตร"
                      : "A4, A5, Business Card"}
                  </p>
                </div>

                <div className="bg-[#f8f6f3] rounded-xl p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">
                    🎨
                  </div>
                  <h4 className="text-base sm:text-lg text-[#11181c] mb-1 sm:mb-2">
                    {lang === "th"
                      ? "ปรับแต่งได้"
                      : "Customizable"}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#11181c]/60">
                    {lang === "th"
                      ? "สี โลโก้ ข้อความ"
                      : "Colors, Logo, Text"}
                  </p>
                </div>
              </div>

              {/* Size Examples */}
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-[#f8f6f3] rounded-xl">
                <h4 className="text-base sm:text-lg text-[#11181c] mb-3 sm:mb-4 text-center">
                  {lang === "th"
                    ? "ตัวอย่างการใช้งาน"
                    : "Usage Examples"}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center text-xs sm:text-sm">
                  <div>
                    <div className="w-full aspect-[1/1.4] bg-white rounded-lg mb-2 flex items-center justify-center border-2 border-dashed border-[#11181c]/20">
                      <span className="text-xs text-[#11181c]/40">
                        A4
                      </span>
                    </div>
                    <p className="text-[#11181c]/70">
                      {lang === "th" ? "โปสเตอร์" : "Poster"}
                    </p>
                  </div>
                  <div>
                    <div className="w-full aspect-[1/1.4] bg-white rounded-lg mb-2 flex items-center justify-center border-2 border-dashed border-[#11181c]/20">
                      <span className="text-xs text-[#11181c]/40">
                        A5
                      </span>
                    </div>
                    <p className="text-[#11181c]/70">
                      {lang === "th" ? "แผ่นพับ" : "Flyer"}
                    </p>
                  </div>
                  <div>
                    <div className="w-full aspect-[1.6/1] bg-white rounded-lg mb-2 flex items-center justify-center border-2 border-dashed border-[#11181c]/20">
                      <span className="text-xs text-[#11181c]/40">
                        Card
                      </span>
                    </div>
                    <p className="text-[#11181c]/70">
                      {lang === "th" ? "นามบัตร" : "Card"}
                    </p>
                  </div>
                  <div>
                    <div className="w-full aspect-square bg-white rounded-lg mb-2 flex items-center justify-center border-2 border-dashed border-[#11181c]/20">
                      <span className="text-xs text-[#11181c]/40">
                        Sticker
                      </span>
                    </div>
                    <p className="text-[#11181c]/70">
                      {lang === "th" ? "สติกเกอร์" : "Sticker"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}