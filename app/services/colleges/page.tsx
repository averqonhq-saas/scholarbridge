import React from "react";
import type { Metadata } from "next";
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
import { collegePrograms } from "@/lib/data/college-programs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/MotionWrapper";

export const metadata: Metadata = {
  title: "College & University Programs | Applied AI, Capstones & Employability",
  description:
    "Institutional programs for Indian engineering, arts, and science colleges: industry-led capstones, applied Generative AI, IoT sustainability projects, and placement interview bootcamps.",
};

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

export default function CollegeProgramsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-50/60 via-surface-warm to-white py-16 lg:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeIn direction="up">
              <Badge variant="teal">Higher Education & Universities</Badge>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-950 font-display tracking-tight mt-4 leading-tight">
                Academic-Industry Bridge for Colleges & Universities
              </h1>
              <p className="mt-5 text-lg text-slate-700 font-normal leading-relaxed">
                Empowering engineering, arts, science, and management
                institutions with production-grade capstones, applied AI labs,
                cybersecurity sandboxes, and tangible student portfolio
                development.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  href="/contact?type=college"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Enquire for Your Institution
                </Button>
                <Button
                  href="#framework"
                  variant="outline"
                  size="lg"
                >
                  Our Project Framework
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Project Framework Detailed Spotlight */}
      <section id="framework" className="py-16 bg-navy-950 text-white border-b border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Pedagogical Engine
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display mt-3">
              The ScholarBridge Applied Project Framework
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              Every college capstone and technical sprint is constructed along
              four rigorous, interconnected pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-navy-900/80 rounded-2xl p-6 border border-navy-800">
              <span className="text-xs font-extrabold text-teal-400">Pillar 1</span>
              <h3 className="text-base font-bold text-white mt-1 mb-2">
                Real-World Problem
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Grounded in genuine operational bottlenecks from MSMEs, civic utilities, or environmental datasets — avoiding repetitive generic tutorials.
              </p>
            </div>

            <div className="bg-navy-900/80 rounded-2xl p-6 border border-navy-800">
              <span className="text-xs font-extrabold text-teal-400">Pillar 2</span>
              <h3 className="text-base font-bold text-white mt-1 mb-2">
                Applied Technology / Data
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Utilizing modern production stacks: Python, vector stores, Docker, IoT telemetry, and automated cloud pipelines.
              </p>
            </div>

            <div className="bg-navy-900/80 rounded-2xl p-6 border border-navy-800">
              <span className="text-xs font-extrabold text-teal-400">Pillar 3</span>
              <h3 className="text-base font-bold text-white mt-1 mb-2">
                Measurable Impact Goal
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Benchmarked against explicit KPIs: latency reduction, water contamination alert speed, or measurable energy savings.
              </p>
            </div>

            <div className="bg-navy-900/80 rounded-2xl p-6 border border-navy-800">
              <span className="text-xs font-extrabold text-teal-400">Pillar 4</span>
              <h3 className="text-base font-bold text-white mt-1 mb-2">
                Industry Collaboration
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Continuous code reviews and demo critiques facilitated by practicing engineering leads and domain specialists.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-xs text-slate-400">
            Note: Industry participation, external mentor slots, and internship placements depend on confirmed institutional schedules and organizational MoUs.
          </div>
        </div>
      </section>

      {/* Detailed Tracks Section (A through J) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {collegePrograms.map((program) => {
            const Icon = categoryIconMap[program.categoryCode] || Code2;

            return (
              <div
                key={program.id}
                id={program.id}
                className="scroll-mt-32 pt-4 border-t border-slate-200/80 first:border-t-0 first:pt-0"
              >
                <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm hover:shadow-card transition-all">
                  {/* Track Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center shrink-0">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-extrabold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">
                            Track {program.categoryCode}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">
                            • Duration: {program.duration}
                          </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 font-display">
                          {program.title}
                        </h2>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {program.targetDepartments.map((dept) => (
                            <span
                              key={dept}
                              className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full"
                            >
                              {dept}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="shrink-0">
                      <Button
                        href={`/contact?interest=${encodeURIComponent(program.title)}&type=College`}
                        variant="primary"
                        size="md"
                        icon={<ArrowRight className="w-4 h-4" />}
                      >
                        Enquire for Department
                      </Button>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                    {program.fullDescription}
                  </p>

                  {/* Applied Project Showcase (if present) */}
                  {program.featuredExample && (
                    <div className="bg-surface-warm/90 rounded-2xl p-5 border border-amber-200/70 mb-6">
                      <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wider mb-1">
                        <Lightbulb className="w-4 h-4 text-amber-600" />
                        <span>Concrete Applied Capstone Example:</span>
                      </div>
                      <h3 className="text-base font-bold text-navy-950">
                        {program.featuredExample.title}
                      </h3>
                      <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                        {program.featuredExample.summary}
                      </p>
                      <div className="mt-2 text-[11px] text-teal-900 font-mono bg-white/80 px-2.5 py-1 rounded inline-block border border-slate-200">
                        <strong>Tech Stack:</strong> {program.featuredExample.stack}
                      </div>
                    </div>
                  )}

                  {/* 4-Pillar Breakdown for this Track */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 rounded-2xl p-5 border border-slate-200/80 mb-6 text-xs text-slate-700">
                    <div>
                      <strong className="text-navy-950 block font-bold mb-1">
                        Target Problem:
                      </strong>
                      <span>{program.framework.realWorldProblem}</span>
                    </div>
                    <div>
                      <strong className="text-navy-950 block font-bold mb-1">
                        Applied Technology:
                      </strong>
                      <span>{program.framework.techOrData}</span>
                    </div>
                    <div>
                      <strong className="text-navy-950 block font-bold mb-1">
                        Measurable Impact Goal:
                      </strong>
                      <span>{program.framework.impactGoal}</span>
                    </div>
                    <div>
                      <strong className="text-navy-950 block font-bold mb-1">
                        Industry Interaction:
                      </strong>
                      <span>{program.framework.industryCollaboration}</span>
                    </div>
                  </div>

                  {/* Practical Deliverable */}
                  <div className="border-t border-slate-200/80 pt-4 text-xs">
                    <strong className="text-navy-950 font-bold block mb-1">
                      Practical Deliverable:
                    </strong>
                    <span className="text-slate-600">
                      {program.practicalDeliverable}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Department Customization CTA */}
      <section className="py-16 bg-surface-warm border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="teal">Custom Institutional Architecture</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 font-display">
            Designing a Program for Your College Department?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Whether preparing a single final-year CSE batch for placements or
            establishing a multi-semester AI research lab across departments, we
            collaborate with your academic committee to tailor deliverables to
            your syllabus requirements.
          </p>
          <div>
            <Button
              href="/contact?type=college"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Consult College Advisory Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
