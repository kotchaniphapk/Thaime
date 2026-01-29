import { ArrowLeft } from "lucide-react";
import { LanguageToggle } from "./LanguageToggle";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export function TopBar() {
  const { t } = useTranslation();
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 md:px-10 bg-black/30 backdrop-blur-xl border-b border-white/10">
      <Link
        href="/"
        className="flex items-center gap-2 bg-white/90 text-[#2c1100] hover:bg-white px-4 py-2 rounded-full shadow-lg transition-all duration-300 backdrop-blur-md text-base font-semibold"
      >
        <ArrowLeft className="w-5 h-5 text-[#ff6900] shrink-0" />
        {t('menu.back')}
      </Link>
      <LanguageToggle />
    </header>
  );
}