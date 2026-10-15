import React from "react";
import { FileText, CalendarCheck, Sparkles, Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/MotionWrapper";

export function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy-950 via-slate-900 to-teal-950 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <FadeIn direction="up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Institutional Collaboration Framework</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Let&apos;s Build the Future of Education Together.
          </h2>

          <p className="mt-5 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tell us about your institution and the outcomes you want to create.
            We will help you explore a suitable program.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/contact?type=proposal"
              variant="amber"
              size="lg"
              icon={<FileText className="w-4 h-4" />}
            >
              Request a Program Proposal
            </Button>
            <Button
              href="/contact?type=consultation"
              variant="outline"
              size="lg"
              className="text-white border-slate-600 hover:border-white hover:text-white hover:bg-white/10"
              icon={<CalendarCheck className="w-4 h-4" />}
            >
              Schedule a Consultation
            </Button>
          </div>

          {/* Institutional note */}
          <p className="mt-8 text-xs text-slate-400">
            Dedicated advisory coordinators for CBSE, ICSE, State Boards, Autonomous Colleges & UGC/AICTE Universities.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
