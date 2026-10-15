import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Clock,
  Users,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Calendar,
  Layers,
} from "lucide-react";
import { trainingPrograms } from "@/lib/data/training-programs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";

export const metadata: Metadata = {
  title: "Workshops & Training | Experiential Formats for Schools & Colleges",
  description:
    "Explore our modular institutional delivery formats: in-house faculty and student workshops, residential outbound leadership camps, technical weekend boot camps, and curated industrial visits.",
};

export default function ProgramsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-teal-50/60 via-surface-warm to-white py-16 lg:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeIn direction="up">
              <Badge variant="teal">Institutional Training Directory</Badge>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-950 font-display tracking-tight mt-4 leading-tight">
                Workshops, Immersions & Capacity Building
              </h1>
              <p className="mt-5 text-lg text-slate-700 font-normal leading-relaxed">
                Whether deploying intensive weekend technical bootcamps,
                rejuvenating teacher wellness retreats, or orchestrating outbound
                resilience camps, our programs match institutional academic
                schedules.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Request Customized Workshop Proposal
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Program Cards Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {trainingPrograms.map((program, idx) => (
            <div
              key={program.id}
              id={program.id}
              className="scroll-mt-32 rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-card transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Visual Column */}
                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-slate-100">
                  <Image
                    src={program.imageUrl}
                    alt={program.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-navy-950/85 backdrop-blur-sm text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
                    {program.deliveryMode}
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-2">
                      <span className="flex items-center gap-1 font-semibold text-teal-800 bg-teal-50 px-2.5 py-1 rounded">
                        <Clock className="w-3.5 h-3.5 text-teal-700" />
                        {program.duration}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        {program.audience.join(", ")}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 font-display">
                      {program.title}
                    </h2>

                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-3">
                      {program.fullDescription}
                    </p>

                    {/* Highlights */}
                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <h4 className="text-xs font-bold text-navy-950 uppercase tracking-wider mb-3">
                        Format Highlights & Inclusions:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                        {program.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Takeaways */}
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Institutional Takeaways:
                      </h4>
                      <div className="flex flex-wrap gap-2 text-xs">
                        {program.keyTakeaways.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="bg-surface-warm border border-slate-200 text-slate-700 px-3 py-1 rounded-lg"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <Button
                      href={`/contact?interest=${encodeURIComponent(program.title)}`}
                      variant="primary"
                      size="md"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Enquire for Your Institution
                    </Button>
                    <span className="text-xs text-slate-400">
                      Custom timetable alignment available
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety & Compliance Assurance */}
      <section className="py-16 bg-surface-subtle border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="navy">Safety & Compliance</Badge>
          <h3 className="text-xl sm:text-2xl font-bold text-navy-950">
            Institutional Risk Management Guarantee
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            All outbound experiential journeys and industrial facility tours
            comply with comprehensive insurance coverage, certified instructor
            supervision, emergency medical kits, and pre-verified transport
            protocols.
          </p>
        </div>
      </section>
    </div>
  );
}
