import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Heart,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/MotionWrapper";

export function DedicatedSchoolsSection() {
  const schoolOfferings = [
    { title: "Child development and counselling", anchor: "#counselling" },
    { title: "Educational and personal guidance", anchor: "#counselling" },
    { title: "Teenage issues & digital addiction awareness", anchor: "#health-safety" },
    { title: "Psychometric assessments by certified evaluators", anchor: "#career-guidance" },
    { title: "Career development programs for Grades 8–12", anchor: "#career-guidance" },
    { title: "Parent–child engagement & dialogue sessions", anchor: "#parent-child" },
    { title: "Train-the-Trainer programs for teachers", anchor: "#teacher-training" },
    { title: "In-house workshops and outbound training", anchor: "#school-events" },
    { title: "Girls' menstrual health education & wellbeing", anchor: "#health-safety" },
    { title: "Student safety, hygiene & first-aid drills", anchor: "#health-safety" },
    { title: "Mindfulness, peer circles & stigma-free spaces", anchor: "#sel" },
    { title: "Social-emotional learning (SEL) frameworks", anchor: "#sel" },
    { title: "Robotics, STEM/STEAM & tinkering labs", anchor: "#stem-innovation" },
    { title: "Community problem-solving & civic impact", anchor: "#local-problem-solving" },
    { title: "Inclusion, accessibility & vernacular support", anchor: "#inclusion" },
    { title: "School annual event planning & exhibitions", anchor: "#school-events" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, description, and list */}
          <div className="lg:col-span-7 space-y-6">
            <FadeIn direction="up">
              <Badge variant="teal">K-12 Educational Solutions</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 font-display mt-3 leading-tight">
                Helping Schools Nurture Confident, Capable Students
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
                School education shapes the moral, intellectual, and emotional
                foundations of childhood. We partner with K-12 institutional
                leadership to embed mental health first-responders, scientific
                career guidance, age-appropriate hygiene awareness, and STEM tinkering
                seamlessly into campus routines.
              </p>
            </FadeIn>

            {/* 16 school services checklist grid */}
            <FadeIn direction="up" delay={0.2}>
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
                {schoolOfferings.map((item, index) => (
                  <Link
                    key={index}
                    href={`/services/schools${item.anchor}`}
                    className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-teal-50/70 transition-colors group"
                  >
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-700 font-medium group-hover:text-teal-900">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  href="/services/schools"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore School Programs
                </Button>
                <Button
                  href="/contact?type=school"
                  variant="outline"
                  size="lg"
                >
                  Request School Consultation
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Visual montage of school students */}
          <div className="lg:col-span-5">
            <FadeIn direction="left" delay={0.2}>
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-card border border-slate-200 aspect-[4/5] bg-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
                    alt="Indian school students participating attentively during a classroom interactive program"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/30 backdrop-blur-md border border-teal-400/40 text-xs font-semibold mb-2 text-teal-200">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Certified Child Safety Standards</span>
                    </div>
                    <h3 className="text-lg font-bold">
                      Safe, Stigma-Free Learning Spaces
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Designed in full alignment with NEP 2020 and institutional safety guidelines.
                    </p>
                  </div>
                </div>

                {/* Floating stat card */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-200 max-w-xs hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-navy-950">Age-Appropriate Design</p>
                      <p className="text-[11px] text-slate-500">From Grade 1 play-based to Grade 12 board readiness</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
