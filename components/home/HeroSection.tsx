"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles, Building2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/MotionWrapper";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-surface-warm to-white pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-100">
      {/* Subtle decorative background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#0D9488_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Messaging */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Institutional Partner for Schools, Colleges & Universities</span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-950 font-display tracking-tight leading-[1.12]">
                Empowering Students.{" "}
                <span className="text-teal-700 block sm:inline">
                  Supporting Educators.
                </span>{" "}
                <span className="text-navy-900 block">
                  Transforming Education.
                </span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p className="text-lg sm:text-xl text-slate-700 font-normal leading-relaxed max-w-2xl">
                We partner with schools, colleges, and universities to create
                meaningful learning experiences that prepare students for life,
                careers, and a rapidly changing world.
              </p>
            </FadeIn>

            {/* CTAs */}
            <FadeIn direction="up" delay={0.3}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  href="/programs"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore Our Programs
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  icon={<Building2 className="w-4 h-4" />}
                >
                  Partner With Us
                </Button>
              </div>
            </FadeIn>

            {/* Institutional verification highlights */}
            <FadeIn direction="up" delay={0.4}>
              <div className="pt-6 border-t border-slate-200/70 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>K-12 Child Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Applied AI & Capstones</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Faculty Capacity Building</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Authentic Photography of Indian Students & Educator */}
          <div className="lg:col-span-5">
            <FadeIn direction="left" delay={0.2}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border card backing */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-teal-600/20 via-amber-400/20 to-navy-900/10 blur-xl opacity-75 transform -rotate-1" />

                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3] sm:aspect-[5/4]">
                  <Image
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop"
                    alt="Indian students collaborating on a practical learning activity with an educator in a modern classroom"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  {/* Subtle overlay badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-navy-950">
                        Interactive Learning In Action
                      </p>
                      <p className="text-[11px] text-slate-600">
                        Pedagogy grounded in empathy & real-world inquiry
                      </p>
                    </div>
                    <span className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700 shrink-0">
                      <BookOpen className="w-4 h-4" />
                    </span>
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
