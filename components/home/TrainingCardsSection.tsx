import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { trainingPrograms } from "@/lib/data/training-programs";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";

export function TrainingCardsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <SectionHeader
            badge="Experiential Delivery Formats"
            badgeVariant="teal"
            title="Programs & Interactive Training"
            description="From on-campus masterclasses to nature-immersed leadership retreats and advanced industrial visits, our delivery formats match your institutional timeline."
            align="center"
          />
        </FadeIn>

        <StaggerContainer className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainingPrograms.map((program) => (
            <StaggerItem key={program.id}>
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-hover hover:border-teal-400 transition-all duration-300 flex flex-col justify-between h-full group">
                <div>
                  {/* Image Header */}
                  <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={program.imageUrl}
                      alt={program.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-navy-950/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide uppercase">
                      {program.deliveryMode}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-navy-950 mb-2 group-hover:text-teal-800 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {program.shortDescription}
                    </p>

                    <div className="space-y-1.5 text-[11px] text-slate-500 border-t border-slate-100 pt-3">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span className="line-clamp-1">{program.audience[0]}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    href={`/contact?interest=${encodeURIComponent(program.title)}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-teal-50 hover:bg-teal-700 text-teal-800 hover:text-white text-xs font-bold transition-all duration-200"
                  >
                    <span>Enquire About Program</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-10 text-center">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-sm font-bold text-teal-800 hover:text-teal-950 underline underline-offset-4"
          >
            <span>View All Curricula & Syllabus Outlines</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
