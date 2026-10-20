"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  HeartHandshake,
  Compass,
  GraduationCap,
  Users,
  ShieldCheck,
  Smartphone,
  Cpu,
  Sparkles,
  MapPin,
  Languages,
  CalendarDays,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Calendar,
} from "lucide-react";
import { SchoolProgramCategory } from "@/lib/data/school-programs";
import { Button } from "@/components/ui/Button";

const iconMap: Record<string, React.ElementType> = {
  HeartHandshake,
  Compass,
  GraduationCap,
  Users,
  ShieldCheck,
  Smartphone,
  Cpu,
  Sparkles,
  MapPin,
  Languages,
  CalendarDays,
};

interface SchoolCatalogueCarouselProps {
  categories: SchoolProgramCategory[];
}

export function SchoolCatalogueCarousel({ categories }: SchoolCatalogueCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sync with URL hash if provided (e.g. /services/schools#career-guidance)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const foundIndex = categories.findIndex((c) => c.id === hash);
        if (foundIndex !== -1) {
          setCurrentIndex(foundIndex);
        }
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, [categories]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  }, [categories.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
  }, [categories.length]);

  const selectModule = (idx: number) => {
    setCurrentIndex(idx);
    const cat = categories[idx];
    if (cat) {
      window.history.replaceState(null, "", `#${cat.id}`);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  const activeCategory = categories[currentIndex];
  const Icon = iconMap[activeCategory.iconName] || Compass;

  return (
    <div className="w-full">
      {/* Module Selector Pills / Tabs */}
      <div className="bg-white border-b border-slate-200 py-3 mb-8">
        <div
          className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth pb-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((cat, idx) => {
            const TabIcon = iconMap[cat.iconName] || Compass;
            const isActive = idx === currentIndex;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => selectModule(idx)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isActive
                    ? "bg-teal-700 text-white shadow-sm ring-2 ring-teal-700/20"
                    : "bg-slate-100 text-slate-700 hover:bg-teal-50 hover:text-teal-800"
                }`}
              >
                <TabIcon className="w-3.5 h-3.5 shrink-0" />
                <span>{cat.title.split("&")[0].trim()}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-teal-800/80 text-teal-100" : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {idx + 1}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Carousel Navigation Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
          <span className="text-teal-700 font-extrabold text-sm">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          <span>/</span>
          <span>{String(categories.length).padStart(2, "0")} Modules</span>
        </div>

        {/* Prev / Next Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goToPrev}
            className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-teal-50 text-slate-700 hover:text-teal-800 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-700"
            aria-label="Previous module"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-teal-50 text-slate-700 hover:text-teal-800 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-700"
            aria-label="Next module"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Active Module Card */}
      <div
        id={activeCategory.id}
        className="bg-surface-warm/40 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm transition-all duration-300"
      >
        {/* Category Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200/80">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-200/70 text-teal-700 flex items-center justify-center shrink-0 shadow-sm">
              <Icon className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded">
                  Module {currentIndex + 1} of {categories.length}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  • {activeCategory.targetAudience}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 font-display">
                {activeCategory.title}
              </h2>
              <p className="text-sm font-medium text-teal-800 mt-1">
                {activeCategory.tagline}
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <Button
              href={`/contact?interest=${encodeURIComponent(activeCategory.title)}&type=School`}
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Enquire For School
            </Button>
          </div>
        </div>

        {/* Description */}
        <p className="text-base text-slate-700 leading-relaxed max-w-4xl mb-8">
          {activeCategory.description}
        </p>

        {/* 2-Column Grid: Curriculum & Activities + Intended Learning Outcomes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Curriculum & Activities */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wider flex items-center gap-2 mb-4">
              <Calendar className="w-4 h-4 text-teal-700" />
              <span>Curriculum & Activities</span>
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              {activeCategory.activities.map((activity, actIdx) => (
                <li key={actIdx} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal-600 mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{activity}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Intended Learning Outcomes */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wider flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>Intended Learning Outcomes</span>
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              {activeCategory.learningOutcomes.map((outcome, outIdx) => (
                <li key={outIdx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Delivery Format bar */}
        <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center text-xs text-slate-600 gap-2">
          <strong className="text-navy-950 font-semibold">Delivery Format:</strong>
          <span>{activeCategory.deliveryFormat}</span>
        </div>
      </div>

      {/* Pagination Dot Indicators */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {categories.map((cat, idx) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => selectModule(idx)}
            className={`transition-all duration-200 rounded-full ${
              idx === currentIndex
                ? "w-8 h-2.5 bg-teal-700"
                : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Go to module ${idx + 1}: ${cat.title}`}
          />
        ))}
      </div>
    </div>
  );
}
