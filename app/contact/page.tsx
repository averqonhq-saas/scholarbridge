import React, { Suspense } from "react";
import type { Metadata } from "next";
import {
  Mail,
  Clock,
  ShieldCheck,
  Building2,
  Phone,
  HelpCircle,
  FileText,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/MotionWrapper";

export const metadata: Metadata = {
  title: "Contact & Institutional Enquiry | Partner With ScholarBridge",
  description:
    "Submit an institutional enquiry for K-12 school programs, college capstones, teacher capacity building, or applied technology workshops across India.",
};

interface ContactPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function ContactFormWrapper({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const initialInterest =
    typeof resolvedParams.interest === "string" ? resolvedParams.interest : undefined;
  const initialType =
    typeof resolvedParams.type === "string"
      ? resolvedParams.type === "school"
        ? "School"
        : resolvedParams.type === "college"
        ? "College"
        : undefined
      : undefined;

  return (
    <EnquiryForm
      initialInterest={initialInterest}
      initialType={initialType}
    />
  );
}

export default function ContactPage({ searchParams }: ContactPageProps) {
  return (
    <div className="bg-surface-subtle min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="max-w-3xl mb-12">
          <FadeIn direction="up">
            <Badge variant="teal">Institutional Engagement Desk</Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-950 font-display tracking-tight mt-4 leading-tight">
              Let&apos;s Discuss Your Educational Objectives
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Whether you represent a K-12 school board, an autonomous
              engineering college, or a university department, we collaborate
              closely to co-design impactful developmental initiatives.
            </p>
          </FadeIn>
        </div>

        {/* 2-Column: Form (left) + Institutional Information (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Enquiry Form */}
          <div className="lg:col-span-8">
            <Suspense
              fallback={
                <div className="bg-white rounded-3xl p-10 border border-slate-200 animate-pulse text-slate-400">
                  Loading institutional enquiry portal...
                </div>
              }
            >
              <ContactFormWrapper searchParams={searchParams} />
            </Suspense>
          </div>

          {/* Right Column: Institutional Trust & Protocols */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-5">
              <h3 className="text-base font-bold text-navy-950 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-teal-700" />
                <span>Institutional Consultation Protocol</span>
              </h3>

              <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-navy-950 block font-semibold mb-0.5">
                    1. Consultation Scheduling
                  </strong>
                  Within 24 business hours, our program director will coordinate an introductory call with your academic coordinator.
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-navy-950 block font-semibold mb-0.5">
                    2. Proposal & Syllabus Customization
                  </strong>
                  We prepare a formal institutional proposal with timetable options, syllabus outlines, and transparent rubrics.
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-navy-950 block font-semibold mb-0.5">
                    3. Formal MoU & Safety Charter
                  </strong>
                  All school and college engagements are formalized through institutional MoUs guaranteeing child safety and data confidentiality.
                </div>
              </div>
            </div>

            {/* Direct Institutional Contacts */}
            <div className="bg-navy-950 text-white rounded-3xl p-6 sm:p-7 shadow-md space-y-4">
              <h4 className="text-sm font-bold text-teal-300 uppercase tracking-wider">
                Direct Contact Channels
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                For urgent academic council meetings or board approvals, you can
                reach our institutional desk directly:
              </p>

              <div className="space-y-3 pt-1 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{siteConfig.links.contactEmail}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{siteConfig.links.workingHours}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Confidential Institutional Support</span>
                </div>
              </div>
            </div>

            {/* FAQ helper */}
            <div className="bg-surface-warm rounded-3xl p-6 border border-slate-200 text-xs text-slate-600 space-y-2">
              <div className="flex items-center gap-2 text-navy-950 font-bold">
                <HelpCircle className="w-4 h-4 text-teal-700" />
                <span>Frequently Asked:</span>
              </div>
              <p className="leading-relaxed">
                <strong>Can programs be integrated with existing timetables?</strong> Yes. We offer modular delivery (1-day, weekend, or weekly zero-period integrations) to avoid disrupting exams or syllabus completion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
