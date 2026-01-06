"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

export function MenuSection() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get menu categories from i18next translations
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

  // Filter categories based on selection
  const filteredCategories = selectedCategory
    ? categories.filter((cat) => cat.id === selectedCategory)
    : categories;

  return (
    <div id="menu" className="min-h-screen bg-slate-50 relative overflow-hidden rounded-t-3xl scroll-mt-0">
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Header */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 py-6 sm:py-7 md:py-8">
        {/* Title */}
        <div className="flex justify-center items-center">
          <h1 className="text-[#ce3033] text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider font-bold">
            {t("menu.title")}
          </h1>
        </div>
      </div>
      {/* Category Filter Buttons */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 py-4 sm:py-5 md:py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 md:gap-4">
            {/* All Button */}
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                selectedCategory === null
                  ? "bg-[#ce3033] text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
              }`}
            >
              {t("menu.all")}
            </button>

            {/* Category Buttons */}
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-[#ce3033] text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-10 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="space-y-5 sm:space-y-6 md:space-y-8"
            >
              {/* Category Title */}
              <h2 className="text-[#ce3033] text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider font-bold text-center">
                {category.name}
              </h2>

              {/* Category Items Grid */}
              <div className="grid grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col p-5 sm:p-6 md:p-7 h-full"
                  >
                    {/* Item Image - Circular */}
                    <div className="w-full flex justify-center mb-4 sm:mb-5 md:mb-6">
                      <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-full overflow-hidden shadow-xl ring-4 ring-gray-100">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col flex-1 space-y-3 sm:space-y-4">
                      {/* Menu Name */}
                      <h3 className="text-lg sm:text-xl md:text-2xl text-black font-bold text-center">
                        {item.name}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-900 text-sm sm:text-base leading-relaxed flex-1 text-center min-h-12 font-semibold line-clamp-2">
                        {item.description}
                      </p>

                      {/* Price Button */}
                      <div className="bg-[#ce3033] px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-full shadow-lg w-full text-center mt-auto">
                        <span className="text-base sm:text-lg md:text-xl text-white font-bold">
                          {item.price}
                        </span>
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
