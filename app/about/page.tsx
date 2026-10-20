import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";

export const metadata: Metadata = {
  title: "About Us | Our Purpose, Philosophy & Educational Approach",
  description:
    "Learn about ScholarBridge's mission to bridge classroom learning with emotional resilience, modern vocational clarity, and practical technology across Indian educational institutions.",
};

export default function AboutPage() {
  const whoWeServe = [
    {
      title: "K-12 Schools & Boards",
      description:
        "Principals and coordinators seeking integrated student counselling, age-appropriate wellbeing, and hands-on STEM curricula aligned with NEP 2020.",
      tag: "School Sector",
    },
    {
      title: "Colleges & Universities",
      description:
        "Deans, department heads, and placement teams bridging the academic-industry gap through practical capstones, applied AI, and project portfolios.",
      tag: "Higher Education",
    },
    {
      title: "Educators & Faculty",
      description:
        "Teachers and lecturers mastering experiential inquiry, modern classroom management, and sustainable educator wellness.",
      tag: "Faculty & Staff",
    },
    {
      title: "Students & Parents",
      description:
        "Adolescents seeking anxiety-free career roadmaps, neurodivergent learners needing support, and parents navigating developmental milestones.",
      tag: "Families & Learners",
    },
  ];

  const deliveryModels = [
    {
      title: "1. Institutional Immersion & Audit",
      description:
        "We begin with stakeholder dialogues, timetable assessments, and campus facility audits to understand unique institutional needs.",
    },
    {
      title: "2. Curriculum Customization",
      description:
        "Our educational team tailors workbooks, laboratory exercises, and lesson plans to your student cohort size and syllabus framework.",
    },
    {
      title: "3. Experiential Delivery",
      description:
        "Led by certified psychologists, industry technologists, and experienced teacher trainers, sessions prioritize tactile building and safe reflection.",
    },
    {
      title: "4. Longitudinal Follow-Through",
      description:
        "Every engagement includes structured post-program evaluation, faculty reflection rubrics, and recommended institutional next steps.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Editorial Page Hero */}
      <section className="bg-gradient-to-b from-brand-50/50 via-surface-warm to-white py-16 lg:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeIn direction="up">
              <Badge variant="teal">Our Institutional Identity</Badge>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-950 font-display tracking-tight mt-4 leading-tight">
                Dedicated to Meaningful, Human-Centred Education.
              </h1>
              <p className="mt-5 text-lg sm:text-xl text-slate-700 font-normal leading-relaxed">
                ScholarBridge partners with schools, colleges, and universities across
                India to bridge classroom theory with emotional resilience, practical
                capability, and lifelong career clarity.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Purpose & Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <FadeIn direction="right">
                <div className="relative rounded-3xl overflow-hidden shadow-card border border-slate-200 aspect-[4/5] bg-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop"
                    alt="Educator and students engaged in collaborative classroom interaction"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs uppercase tracking-wider text-amber-300 font-bold">
                      Our Guiding Principle
                    </p>
                    <p className="text-base font-semibold mt-1">
                      &quot;Education succeeds when it addresses the whole person —
                      intellect, emotional wellbeing, and civic responsibility.&quot;
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <FadeIn direction="left">
                <SectionHeader
                  badge="Our Purpose"
                  badgeVariant="teal"
                  title="Why We Do What We Do"
                  align="left"
                />

                <div className="space-y-4 text-slate-700 text-base leading-relaxed mt-4">
                  <p>
                    Examination scores alone cannot guarantee long-term wellbeing
                    or career readiness. Today&apos;s educational institutions balance
                    demanding curriculum guidelines with technological disruptions like
                    Artificial Intelligence, alongside growing student stress and career anxiety.
                  </p>
                  <p className="font-medium text-navy-950">
                    ScholarBridge acts as an extended capability partner. We bring
                    qualified child psychologists, software engineers, pedagogy mentors,
                    and community strategists directly to campuses to cultivate resilient,
                    capable learners.
                  </p>
                </div>

                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-800">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-teal-50 border border-teal-100">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                    <span>Evidence-based psychological safety</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-teal-50 border border-teal-100">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                    <span>Applied, project-driven engineering</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 bg-surface-subtle border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <SectionHeader
              badge="Constituencies"
              badgeVariant="teal"
              title="Who We Serve"
              description="Our initiatives are calibrated specifically for each member of the institutional ecosystem."
              align="center"
            />
          </FadeIn>

          <StaggerContainer className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoWeServe.map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[10px] font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                      {item.tag}
                    </span>
                    <h3 className="text-lg font-bold text-navy-950 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Program Delivery Model */}
      <section id="delivery-model" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <SectionHeader
              badge="Execution Standard"
              badgeVariant="teal"
              title="Our Program Delivery Model"
              description="A structured, four-phase engagement model designed to integrate smoothly with the academic timetable of Indian schools and universities."
              align="center"
            />
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {deliveryModels.map((item, idx) => (
              <div
                key={idx}
                className="bg-surface-warm/70 rounded-2xl p-7 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-navy-950 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Commitments & Safety Charter */}
      <section id="safety-charter" className="py-20 bg-navy-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold mb-4 border border-teal-500/30">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Ethical Governance & Safety Charter</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-display">
            Our Commitments to Institutional Partners
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <div className="bg-navy-900/80 rounded-2xl p-6 border border-navy-800">
              <h3 className="text-base font-bold text-teal-300 mb-2">
                Child Safety & POCSO Adherence
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                All facilitators interacting with school students undergo strict
                background verifications and adhere strictly to institutional
                child protection policies and statutory guidelines.
              </p>
            </div>

            <div className="bg-navy-900/80 rounded-2xl p-6 border border-navy-800">
              <h3 className="text-base font-bold text-teal-300 mb-2">
                Confidentiality of Student Records
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Psychometric assessments and personal counselling notes are
                treated with clinical confidentiality. Data is never monetized
                or shared with outside commercial vendors.
              </p>
            </div>

            <div className="bg-navy-900/80 rounded-2xl p-6 border border-navy-800">
              <h3 className="text-base font-bold text-teal-300 mb-2">
                Authentic Capability Building
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We believe in genuine skill development. We do not manufacture
                placements, fabricate research papers, or issue superficial certificates
                without verified student engagement.
              </p>
            </div>

            <div className="bg-navy-900/80 rounded-2xl p-6 border border-navy-800">
              <h3 className="text-base font-bold text-teal-300 mb-2">
                Linguistic & Regional Inclusion
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We adapt training modules to local vernacular contexts, ensuring
                language is never an insurmountable obstacle to technological or
                emotional growth.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Button
              href="/contact"
              variant="amber"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Consult With Our Educational Strategists
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
