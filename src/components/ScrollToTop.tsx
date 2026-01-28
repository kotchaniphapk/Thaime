'use client';

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollUp(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-[linear-gradient(135deg,#ff8533_0%,#ff6900_55%,#e55d00_100%)] text-white shadow-lg border border-white/20 transition-all duration-300 hover:scale-110 hover:shadow-xl ${
        showScrollUp ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-4"
      }`}
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
}
