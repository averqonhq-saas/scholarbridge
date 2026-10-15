import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
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
  BookOpen,
  Calendar,
} from "lucide-react";
import { schoolProgramCategories } from "@/lib/data/school-programs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";

export const metadata: Metadata = {
  title: "School Programs | Child Development, Career Guidance & Teacher Training",
  description:
    "Comprehensive institutional programs for Indian K-12 schools: student wellbeing, psychometric career mapping (Grades 8-12), teacher capacity building, menstrual health, and STEM tinkering labs.",
};

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

export default function SchoolProgramsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-teal-50/70 via-surface-warm to-white py-16 lg:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeIn direction="up">
              <Badge variant="teal">K-12 Institutional Catalogue</Badge>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-950 font-display tracking-tight mt-4 leading-tight">
                Holistic Development Programs for Progressive Schools
              </h1>
              <p className="mt-5 text-lg text-slate-700 font-normal leading-relaxed">
                We partner with school leadership, headmistresses, and academic
                councils to deliver age-appropriate, stigma-free student
                wellbeing initiatives, scientific career guidance, teacher
                training, and experiential innovation labs.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  href="/contact?type=school"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Request School Program Proposal
                </Button>
                <Button
                  href="#counselling"
                  variant="outline"
                  size="lg"
                >
                  Browse Categories Below
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Quick Category Anchors Bar */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 hidden md:block">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex items-center gap-3 text-xs font-semibold whitespace-nowrap">
            <span className="text-slate-400 uppercase tracking-wider">Jump to:</span>
            {schoolProgramCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-teal-50 hover:text-teal-800 text-slate-700 transition-colors"
              >
                {cat.title.split("&")[0]}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Programs List */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {schoolProgramCategories.map((category, index) => {
            const Icon = iconMap[category.iconName] || BookOpen;

            return (
              <div
                key={category.id}
                id={category.id}
                className="scroll-mt-36 pt-4 border-t border-slate-200/80 first:border-t-0 first:pt-0"
              >
                <div className="bg-surface-warm/40 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm hover:shadow-card transition-shadow">
                  {/* Category Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200/80">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-200/70 text-teal-700 flex items-center justify-center shrink-0 shadow-sm">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded">
                            Module {index + 1}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">
                            • {category.targetAudience}
                          </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 font-display">
                          {category.title}
                        </h2>
                        <p className="text-sm font-medium text-teal-800 mt-1">
                          {category.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0">
                      <Button
                        href={`/contact?interest=${encodeURIComponent(category.title)}&type=School`}
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
                    {category.description}
                  </p>

                  {/* 2-Column Grid: Activities & Learning Outcomes */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Relevant Activities */}
                    <div className="bg-white rounded-2xl p-6 border border-slate-200">
                      <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wider flex items-center gap-2 mb-4">
                        <Calendar className="w-4 h-4 text-teal-700" />
                        <span>Curriculum & Activities</span>
                      </h3>
                      <ul className="space-y-3 text-sm text-slate-700">
                        {category.activities.map((activity, actIdx) => (
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
                        {category.learningOutcomes.map((outcome, outIdx) => (
                          <li key={outIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Delivery Format bar */}
                  <div className="mt-6 pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-600 gap-2">
                    <div className="flex items-center gap-2">
                      <strong className="text-navy-950 font-semibold">Delivery Format:</strong>
                      <span>{category.deliveryFormat}</span>
                    </div>
                    <Link
                      href={`/contact?interest=${encodeURIComponent(category.title)}`}
                      className="text-teal-700 font-bold hover:underline"
                    >
                      Schedule institutional briefing →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Institutional Callout Bar */}
      <section className="py-16 bg-surface-warm border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 font-display">
            Need a Customized School Development Calendar?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            We adapt modules to fit your school's term schedule, exam dates,
            and specific student batch sizes without causing disruption to core
            academic hours.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              href="/contact?type=school"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Contact School Advisory Desk
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
