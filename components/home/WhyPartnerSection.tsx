import React from "react";
import {
  UserCheck,
  Layers,
  Smile,
  Target,
  Sliders,
  FileCheck,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { whyPartnerWithUs } from "@/lib/data/home-data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";

const iconMap: Record<string, React.ElementType> = {
  UserCheck,
  Layers,
  Smile,
  Target,
  Sliders,
  FileCheck,
};

export function WhyPartnerSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <SectionHeader
            badge="Institutional Commitment"
            badgeVariant="teal"
            title="Why Partner With Us"
            description="Our institutional collaborations are founded on pedagogical integrity, transparent deliverables, and genuine student-first capability building."
            align="center"
          />
        </FadeIn>

        <StaggerContainer className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyPartnerWithUs.map((benefit) => {
            const Icon = iconMap[benefit.iconName] || UserCheck;

            return (
              <StaggerItem key={benefit.title}>
                <div className="bg-surface-warm/60 rounded-2xl p-7 border border-slate-200/80 hover:border-teal-400 hover:bg-white hover:shadow-card transition-all duration-300 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 mb-5 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-950 mb-2.5">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
