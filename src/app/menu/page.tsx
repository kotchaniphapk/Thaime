'use client';

import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { LanguageToggle } from '@/components/LanguageToggle';

export default function MenuPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleBack = () => {
    router.push('/');
  };

  // Get menu categories from i18next translations
  const categories = t('menu.categories', { returnObjects: true }) as Array<{
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
    <div className="min-h-screen bg-[#ff8000] relative overflow-hidden">
      {/* Grid pattern background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Header */}
      <div className="relative z-10 px-4 md:px-12 py-4 md:py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="flex items-center gap-1 md:gap-2 px-3 md:px-5 py-2 md:py-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 text-sm md:text-base"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-orange-600" />
            <span className="text-orange-600 hidden sm:inline font-semibold">{t('menu.backToBio')}</span>
          </button>

          {/* Title */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden sm:block">
            <h1 
              className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider whitespace-nowrap"
              style={{ fontWeight: 600 }}
            >
               {t('menu.title')}
            </h1>
          </div>

          {/* Language Toggle Button */}
          <LanguageToggle />
        </div>
      </div>

      {/* Mobile Title */}
      <div className="sm:hidden relative z-10 text-center pb-4">
        <h1 
          className="text-white text-3xl tracking-wider"
          style={{ fontWeight: 900 }}
        >
          {t('menu.title')}
        </h1>
      </div>

      {/* Category Filter Buttons */}
      <div className="relative z-10 px-4 md:px-12 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {/* All Button */}
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                selectedCategory === null
                  ? 'bg-white text-[#ff8000] shadow-lg scale-105'
                  : 'bg-white/90 text-gray-700 hover:bg-white hover:scale-105'
              }`}
            >
              {t('menu.all')}
            </button>
            
            {/* Category Buttons */}
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-white text-[#ff8000] shadow-lg scale-105'
                    : 'bg-white/90 text-gray-700 hover:bg-white hover:scale-105'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="relative z-10 px-4 md:px-12 py-4 md:py-8 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-6">
              {/* Category Title */}
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl tracking-wider" style={{ fontWeight: 600 }}>
                {category.name}
              </h2>
              
              {/* Category Items Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6"
                  >
                    {/* Item Image - Top on mobile, Right on desktop */}
                    <div className="w-full sm:w-32 md:w-40 lg:w-48 h-48 sm:h-32 md:h-40 lg:h-48 sm:order-2 shrink-0">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-xl md:rounded-2xl shadow-lg"
                      />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 space-y-2 md:space-y-3 sm:order-1">
                      <h3 className="text-xl md:text-2xl text-gray-900" style={{ fontWeight: 600 }}>
                        {item.name}
                      </h3>
                      <p className="text-gray-700 text-base md:text-base leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                      <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 px-4 md:px-6 py-1.5 md:py-2 rounded-full shadow-md">
                        <span className="text-xs md:text-sm text-gray-800">{t('menu.price')}</span>
                        <span className="ml-1 md:ml-2 text-lg md:text-xl text-gray-900" style={{ fontWeight: 600 }}>
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

      {/* Mobile Social Links at bottom
      <div className="lg:hidden relative z-10 px-6 py-6 text-center text-white space-y-2 text-sm">
        <a href="#" className="block hover:scale-110 transition-transform">@reallygreatsite</a>
        <a href="#" className="block hover:scale-110 transition-transform">hello@reallygreatsite.com</a>
        <a href="#" className="block hover:scale-110 transition-transform">www.reallygreatsite.com</a>
      </div> */}
    </div>
  );
}
