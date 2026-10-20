import React from "react";
import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { programProcessSteps } from "@/lib/data/home-data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";

export function ProcessSection() {
  return (
    <section className="py-20 bg-surface-warm border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <SectionHeader
            badge="Institutional Methodology"
            badgeVariant="teal"
            title="How Our Programs Work"
            description="A structured, collaborative 4-stage engagement model ensuring seamless curriculum alignment, rigorous delivery, and transparent outcome verification."
            align="center"
          />
        </FadeIn>

        {/* Process Timeline: Horizontal on Desktop (lg+), Vertical on Mobile/Tablet */}
        <div className="mt-16">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block relative mb-12">
            <div className="absolute top-6 left-12 right-12 h-0.5 bg-gradient-to-r from-teal-200 via-teal-600 to-amber-400 z-0" />
          </div>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {programProcessSteps.map((step, idx) => (
              <StaggerItem key={step.step}>
                <div className="relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-card hover:border-teal-400 transition-all flex flex-col justify-between h-full">
                  {/* Step Bubble Indicator */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-navy-950 text-amber-400 font-extrabold flex items-center justify-center text-lg shadow-md border-2 border-white ring-4 ring-teal-100">
                        {step.step}
                      </div>
                      <span className="text-[10px] font-bold text-teal-800 bg-teal-50 px-2 py-1 rounded uppercase tracking-wider">
                        Stage {idx + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-navy-950 mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-1.5">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Key Milestones:
                    </span>
                    {step.deliverables.map((d) => (
                      <div key={d} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
