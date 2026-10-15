import React from "react";
import Link from "next/link";
import {
  HeartPulse,
  Compass,
  GraduationCap,
  Cpu,
  Briefcase,
  CalendarDays,
  ArrowRight,
} from "lucide-react";
import { mainServiceCategories } from "@/lib/data/home-data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";

const iconMap: Record<string, React.ElementType> = {
  HeartPulse,
  Compass,
  GraduationCap,
  Cpu,
  Briefcase,
  CalendarDays,
};

export function ServiceCategoriesSection() {
  return (
    <section className="py-20 bg-surface-subtle border-t border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <SectionHeader
            badge="Institutional Spectrum"
            badgeVariant="teal"
            title="Comprehensive Development for Schools & Colleges"
            description="Six specialized pillars structured to support every phase of institutional growth, educator empowerment, and student transformation."
            align="center"
          />
        </FadeIn>

        <StaggerContainer className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServiceCategories.map((service) => {
            const Icon = iconMap[service.iconName] || Compass;

            return (
              <StaggerItem key={service.id}>
                <div className="group bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-hover hover:border-teal-400 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    {/* Top Row: Icon & Tag */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-colors duration-200 shadow-sm">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-[11px] font-semibold tracking-wide text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full uppercase">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-navy-950 mb-3 group-hover:text-teal-800 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {service.shortDescription}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-1.5 mb-6 text-xs text-slate-700">
                      {service.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-900 group-hover:translate-x-1 transition-all"
                    >
                      <span>Explore Program</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
