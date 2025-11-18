'use client';

import { Search } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { TemplatePreviewDialog } from "./TemplatePreviewDialog";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { useTranslation } from "react-i18next";
import { generateExamples, type CategoryType, type ExampleItem } from "@/lib/examples";

type PackageType = 'bio' | 'single' | 'menupro' | 'all';
type FilterCategoryType = CategoryType | 'all';

export function ExamplesSection() {
  const { t, i18n } = useTranslation();
  const [activePackage, setActivePackage] = useState<PackageType>("all");
  const [activeCategory, setActiveCategory] = useState<FilterCategoryType>("all");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<
    ExampleItem | null
  >(null);

  // Get examples from the separate module
  const allExamples = generateExamples(t);

  // Filter examples by package name first, then by category
  const filteredExamples = allExamples.filter((ex) => {
    const packageMatch = activePackage === "all" || ex.packageName === activePackage;
    const categoryMatch = activeCategory === "all" || ex.category === activeCategory;
    return packageMatch && categoryMatch;
  });

  const handleViewTemplate = (example: ExampleItem) => {
    setSelectedTemplate(example);
    setIsPreviewOpen(true);
  };

  return (
    <section id="examples" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#11181c]">
            {t('examples.title')}
          </h2>
          <p className="text-xl text-[#11181c]/70 max-w-3xl mx-auto">
            {t('examples.subtitle')}
          </p>
        </motion.div>

        {/* Filters & Search */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Package Filter - First Level */}
          <div className="mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
              <p className="text-sm font-medium text-[#11181c]">
                {t('examples.selectPackage')}
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                {/* Search */}
                <div className="relative w-full sm:w-auto">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#11181c]/40" />
                  <input
                    type="text"
                    placeholder={t('examples.searchPlaceholder')}
                    className="w-full sm:w-64 pl-12 pr-4 py-2.5 rounded-full border border-[#11181c]/20 focus:border-[#ed6526] focus:outline-none focus:ring-2 focus:ring-[#ed6526]/20 transition-all text-[#11181c] text-sm"
                  />
                </div>
                {/* Results Count
                <p className="text-sm text-[#11181c]/60 whitespace-nowrap">
                  {t('examples.showing')}{" "}
                  <span className="text-[#11181c] font-medium">
                    {filteredExamples.length}
                  </span>{" "}
                  {t('examples.templates')}
                </p> */}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {(['all', 'bio', 'single', 'menupro'] as const).map((pkg) => (
                <Button
                  key={pkg}
                  variant={activePackage === pkg ? "default" : "outline"}
                  onClick={() => {
                    setActivePackage(pkg);
                    // Reset category when changing package
                    if (pkg !== 'all') {
                      setActiveCategory('all');
                    }
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    activePackage === pkg
                      ? "bg-[#ed6526] text-white hover:bg-[#ed6526]/90"
                      : "border-[#11181c]/20 hover:border-[#ed6526] hover:text-[#ed6526]"
                  }`}
                >
                  {pkg === 'all' 
                    ? t('examples.filter.all') 
                    : t(`examples.packageNames.${pkg}`)}
                </Button>
              ))}
            </div>
          </div>

          {/* Category Filter - Second Level */}
          {activePackage !== 'all' && (
            <div className="mb-6">
              <p className="text-sm font-medium text-[#11181c] mb-3">
                {t('examples.selectCategory')}
              </p>
              <div className="flex flex-wrap gap-3">
                {(['all', 'restaurant', 'spa', 'taxi', 'cafe'] as const).map((key) => (
                  <Button
                    key={key}
                    variant={activeCategory === key ? "default" : "outline"}
                    onClick={() => setActiveCategory(key)}
                    className={`rounded-full transition-all duration-300 ${
                      activeCategory === key
                        ? "bg-[#11181c] text-white hover:bg-[#11181c]/90"
                        : "border-[#11181c]/20 hover:border-[#ed6526] hover:text-[#ed6526]"
                    }`}
                  >
                    {t(`examples.filter.${key}`)}
                  </Button>
                ))}
              </div>
            </div>
          )}

        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredExamples.map((example, index) => {
            const Icon = example.icon;
            return (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
              >
                {/* Card */}
                <div className="relative h-full overflow-hidden rounded-2xl bg-white border border-[#11181c]/10 hover:border-[#ed6526] transition-all duration-300 hover:shadow-2xl hover:shadow-[#ed6526]/10">
                  {/* Image */}
                  <div className="relative h-70 overflow-hidden bg-[#f8f6f3]">
                    <ImageWithFallback
                      src={example.image}
                      alt={example.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay on Hover - Only on desktop */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11181c]/80 via-[#11181c]/0 to-[#11181c]/0 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* View Button - Always visible on mobile, hover on desktop */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0">
                      <Button
                        className="w-full bg-white text-[#11181c] hover:bg-[#ed6526] hover:text-white"
                        onClick={() =>
                          handleViewTemplate(example)
                        }
                      >
                        {t('examples.viewTemplate')}
                      </Button>
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <Icon className="h-6 w-6 text-[#ed6526]" />
                    </div>

                    {/* Price and Language Tags */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <div className="px-3 py-1.5 rounded-full bg-[#ed6526] text-white text-sm font-semibold shadow-lg">
                        ฿{example.price}
                      </div>
                      <div className={`px-3 py-1.5 rounded-full text-white text-xs font-medium shadow-lg ${
                        example.language === '1' ? 'bg-[#11181c]' : 'bg-[#ed6526]'
                      }`}>
                        {example.language === '1' ? t('examples.oneLanguage') : t('examples.twoLanguages')}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl text-[#11181c] mb-2 group-hover:text-[#ed6526] transition-colors  line-clamp-1">
                      {example.title}
                    </h3>
                    <p className="text-[#11181c]/60 line-clamp-2">
                      {example.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Template Preview Dialog */}
      <Dialog
        open={isPreviewOpen}
        onOpenChange={setIsPreviewOpen}
      >
        <DialogContent className="max-w-[95vw] sm:max-w-6xl lg:max-w-7xl h-[95vh] sm:h-full max-h-[95vh] sm:max-h-[900px] overflow-hidden p-0 sm:p-6 md:p-0 overflow-y-auto">
          {/* Accessibility - Hidden Title and Description */}
          <DialogTitle className="sr-only">
            {t('examples.dialogTitle')}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {t('examples.dialogDescription')}
          </DialogDescription>

          {/* Preview Content */}
          {selectedTemplate && (
            <TemplatePreviewDialog
              lang={i18n.language as "th" | "en"}
              webUrl={selectedTemplate.url || ""}
              qrImage={selectedTemplate.qrcode}
              category={selectedTemplate.category}
              onClose={() => setIsPreviewOpen(false)}
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}