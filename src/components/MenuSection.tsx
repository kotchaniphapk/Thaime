"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TopBar } from "./TopBar";
import Image from "next/image";
import { Utensils } from "lucide-react";

export function MenuSection() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [openDesc, setOpenDesc] = useState(false);
  const categories = t("menu.categories", { returnObjects: true }) as Array<{
    id: string;
    name: string;
    items: Array<{
      name: string;
      description: string;
      price: string;
      image: string;
    }>;
  }>;

  const filteredCategories = selectedCategory
    ? categories.filter((cat) => cat.id === selectedCategory)
    : categories;

  return (
    <div id="menu" className="min-h-screen relative overflow-hidden">
      {/* Background – same as Hero */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(20,20,20,1) 0%, rgba(0,0,0,1) 28%, rgba(255,106,0,1) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_45%,rgba(0,0,0,0.75)_100%)]" />
      <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.10)_0%,transparent_35%),radial-gradient(circle_at_90%_35%,rgba(255,106,0,0.12)_0%,transparent_40%)]" />
      
      <div className="fixed top-0 z-50 w-full">
        <TopBar />
      </div>
      {/* Title & Category Filter */}
      <div className="relative px-4 sm:px-6 md:px-10 pt-20">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="flex justify-center items-center mb-6 sm:mb-8 mt-6 sm:mt-8">
            <h1 className="text-white text-3xl sm:text-5xl md:text-6xl tracking-wide font-bold text-balance px-2">
              {t("menu.title")}
            </h1>
          </div>
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 md:mb-16 px-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg ${
                selectedCategory === null
                  ? "bg-[linear-gradient(135deg,#ff8533_0%,#ff6900_55%,#e55d00_100%)] text-white scale-105"
                  : "bg-white/10 border border-white/30 text-white backdrop-blur hover:bg-white/20 hover:scale-105"
              }`}
            >
              {t("menu.all")}
            </button>

            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg ${
                  selectedCategory === category.id
                    ? "bg-[linear-gradient(135deg,#ff8533_0%,#ff6900_55%,#e55d00_100%)] text-white scale-105"
                    : "bg-white/10 border border-white/30 text-white backdrop-blur hover:bg-white/20 hover:scale-105"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-12 pb-6 sm:pb-8 pt-6 sm:pt-8">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12 md:space-y-16">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-5 sm:space-y-6 md:space-y-8">
              <h2 className="text-white text-2xl sm:text-4xl md:text-5xl tracking-wide font-bold text-center text-balance px-2">
                {category.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                {category.items.map((item, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-1 rounded-2xl sm:rounded-3xl bg-orange-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative bg-white/10 backdrop-blur rounded-2xl md:rounded-3xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col p-3 sm:p-4 h-full">
                      <div className="w-full flex justify-center mb-3 sm:mb-4 md:mb-5">
                        <div className="w-full h-32 sm:h-44 md:h-56 lg:h-64 overflow-hidden rounded-lg sm:rounded-xl">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={200}
                          height={200}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="flex items-center justify-center w-full h-full min-h-32 sm:min-h-44 md:min-h-56 lg:min-h-64 rounded-lg sm:rounded-xl bg-white/10 border border-white/20">
                          <Utensils className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white/70 shrink-0" strokeWidth={1.5} />
                        </div>
                      )}
                        </div>
                      </div>
                      <div className="flex flex-col flex-1 space-y-2">
                        <h3 className="text-base sm:text-xl md:text-2xl text-white font-bold text-center text-balance">
                          {item.name}
                        </h3>
                        <div className="text-white/85 text-sm sm:text-base text-center min-h-10 font-medium text-balance">
                          <p
                            className={
                              openDesc ? "line-clamp-none" : "line-clamp-2"
                            }
                          >
                            {item.description}
                          </p>

                          {item.description?.length > 80 && (
                            <button
                              type="button"
                              onClick={() => setOpenDesc((v) => !v)}
                              className="mt-1 text-orange-300 hover:text-orange-200 text-xs font-semibold transition"
                            >
                              {openDesc
                                ? t("menu.showLess") || "Show less"
                                : t("menu.readMore") || "Read more"}
                            </button> 
                          )}
                        </div>

                        <div className="mt-auto w-full rounded-xl sm:rounded-2xl bg-[linear-gradient(135deg,#ff8533_0%,#ff6900_55%,#e55d00_100%)] px-3 sm:px-4 py-2.5 sm:py-3 shadow-lg hover:opacity-95 transition min-h-16 sm:h-20 flex flex-col justify-center">
                          <div className="flex flex-col items-center justify-center gap-0.5 h-full">
                            <span className="text-sm sm:text-base text-white font-bold tracking-wide text-center line-clamp-2 leading-tight">
                              {item.price} RON
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
