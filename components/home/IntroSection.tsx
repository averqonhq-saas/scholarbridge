import React from "react";
import {
  Heart,
  Compass,
  Wrench,
  Lightbulb,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";

export function IntroSection() {
  const pillars = [
    {
      title: "Emotional Resilience",
      description: "Equipping young minds with self-regulation, mindfulness, and stigma-free psychological safety.",
      icon: Heart,
    },
    {
      title: "Practical Skills",
      description: "Translating textbook theory into functional prototypes, working code, and analytical dashboards.",
      icon: Wrench,
    },
    {
      title: "Career Clarity",
      description: "Evidence-backed psychometrics, stream guidance, and multi-pathway career roadmaps.",
      icon: Compass,
    },
    {
      title: "Real-World Problem Solving",
      description: "Fostering the confidence to address neighborhood sustainability and real community challenges.",
      icon: Lightbulb,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <SectionHeader
            badge="Holistic Development"
            badgeVariant="teal"
            title="Education Beyond Classrooms"
            description="Academic excellence is only the baseline. Modern learners need emotional resilience, practical capability, career clarity, and confidence to navigate an evolving world."
            align="center"
          />
        </FadeIn>

        {/* Narrative editorial statement */}
        <FadeIn direction="up" delay={0.15}>
          <div className="mt-10 bg-surface-warm border border-slate-200/70 rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-sm">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              We partner with school and college leadership to build integrated learning
              ecosystems—connecting age-appropriate psychology, hands-on skill building,
              and verified real-world outcomes.
            </p>
          </div>
        </FadeIn>

        {/* 4 Pillars Grid */}
        <StaggerContainer className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <div className="h-full bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-card hover:border-teal-300 transition-all duration-200 flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-navy-950 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
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
