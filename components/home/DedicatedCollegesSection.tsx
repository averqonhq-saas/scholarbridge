import React from "react";
import Link from "next/link";
import {
  Code2,
  Cpu,
  Database,
  Shield,
  Leaf,
  Rocket,
  Compass,
  Laptop,
  Factory,
  FileCheck2,
  ArrowRight,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { collegePrograms } from "@/lib/data/college-programs";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";

const categoryIconMap: Record<string, React.ElementType> = {
  A: Code2,
  B: Cpu,
  C: Database,
  D: Shield,
  E: Leaf,
  F: Rocket,
  G: Compass,
  H: Laptop,
  I: Factory,
  J: FileCheck2,
};

export function DedicatedCollegesSection() {
  return (
    <section className="py-20 bg-surface-subtle border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <SectionHeader
            badge="Higher Education & Universities"
            badgeVariant="teal"
            title="Bridging Academia and Industry"
            description="We support colleges and universities across India in career readiness, practical engineering, enterprise innovation, entrepreneurship, and tangible community impact."
            align="center"
          />
        </FadeIn>

        {/* Project Framework callout */}
        <FadeIn direction="up" delay={0.1}>
          <div className="mt-8 max-w-4xl mx-auto bg-gradient-to-r from-navy-950 via-teal-950 to-navy-950 text-white rounded-2xl p-6 sm:p-7 shadow-lg border border-teal-900/60">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 border border-teal-500/30">
                  <Lightbulb className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-wide uppercase text-teal-300">
                    Our Applied Capstone Framework
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Real-world Problem + Applied Technology/Data + Measurable Impact + Industry Collaboration
                  </p>
                </div>
              </div>
              <Link
                href="/services/colleges#framework"
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 shrink-0 underline"
              >
                <span>View Full Framework</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* Program Cards Grid (A through J) */}
        <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collegePrograms.map((program) => {
            const Icon = categoryIconMap[program.categoryCode] || Code2;

            return (
              <StaggerItem key={program.id}>
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-card hover:border-teal-400 transition-all flex flex-col justify-between h-full group">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center group-hover:bg-teal-700 group-hover:text-white transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-extrabold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                          Track {program.categoryCode}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {program.duration}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-navy-950 mb-2 group-hover:text-teal-800 transition-colors">
                      {program.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {program.shortDescription}
                    </p>

                    {/* Department Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {program.targetDepartments.slice(0, 3).map((dept) => (
                        <span
                          key={dept}
                          className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded"
                        >
                          {dept}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/services/colleges#${program.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-navy-950 group-hover:translate-x-1 transition-all"
                    >
                      <span>Explore Track Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button
            href="/services/colleges"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explore All College Programs
          </Button>
        </div>
      </div>
    </section>
  );
}
