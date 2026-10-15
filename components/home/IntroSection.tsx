import React from "react";
import {
  Heart,
  Compass,
  Wrench,
  Lightbulb,
  ShieldAlert,
  Users,
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
      description: "Translating textbook formulas into hardware prototypes, code repositories, and analytical data dashboards.",
      icon: Wrench,
    },
    {
      title: "Career Clarity",
      description: "Evidence-backed psychometrics, stream guidance, and multi-pathway career roadmaps for students.",
      icon: Compass,
    },
    {
      title: "Real-World Problem Solving",
      description: "Fostering the confidence to address neighborhood sustainability, water quality, and community challenges.",
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
            description="Academic excellence is only the baseline. Today's learners need emotional resilience, practical capability, career clarity, creativity, and the inner confidence to navigate a complex, rapidly evolving world."
            align="center"
          />
        </FadeIn>

        {/* Narrative editorial statement */}
        <FadeIn direction="up" delay={0.15}>
          <div className="mt-12 bg-surface-warm border border-slate-200/70 rounded-3xl p-8 sm:p-10 text-center max-w-4xl mx-auto shadow-sm">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              <strong className="text-navy-950 font-bold">
                ScholarBridge serves as an institutional partner
              </strong>{" "}
              for school principals, college deans, parents, and educators. Rather
              than delivering isolated one-off lectures, we build integrated
              development ecosystems that respect age-appropriate psychology,
              foster continuous curiosity, and connect campus talent with
              impactful real-world outcomes.
            </p>
          </div>
        </FadeIn>

        {/* 4 Pillars Grid */}
        <StaggerContainer className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <div className="h-full bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-card hover:border-teal-300 transition-all duration-200 flex flex-col justify-between">
                  <div>
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
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-teal-800">
                    <span>Core Competency</span>
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
