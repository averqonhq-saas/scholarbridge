import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Privacy Policy | Institutional Data & Child Protection",
  description:
    "ScholarBridge institutional privacy policy regarding student data, psychometric confidentiality, and school record protection.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Badge variant="teal">Governance & Protection</Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950 font-display mt-3 mb-8">
          Institutional Privacy Policy & Student Data Protection
        </h1>

        <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-700">
          <p>
            <strong>Last Updated:</strong> October 2026
          </p>
          <p>
            {siteConfig.legalName} (&quot;ScholarBridge&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
            is committed to upholding the highest standards of data privacy,
            particularly when interacting with minors, educators, and partner
            educational institutions.
          </p>

          <h2 className="text-xl font-bold text-navy-950 mt-8 mb-3">
            1. Child Protection & Minor Data Privacy
          </h2>
          <p>
            We strictly enforce child protection protocols aligned with the
            Protection of Children from Sexual Offences (POCSO) Act and the
            Digital Personal Data Protection (DPDP) Act of India. Student
            assessments, psychological evaluations, and counselling discussions
            are never made publicly accessible or indexed by commercial search
            engines.
          </p>

          <h2 className="text-xl font-bold text-navy-950 mt-8 mb-3">
            2. Psychometric & Clinical Data Confidentiality
          </h2>
          <p>
            Psychometric career assessments conducted for students in Grades 8–12
            are utilized solely for personalized career roadmap generation and
            consensual parent-student advisory sessions. Results are confidential
            and stored using encrypted, access-restricted institutional repositories.
          </p>

          <h2 className="text-xl font-bold text-navy-950 mt-8 mb-3">
            3. Institutional Enquiries & Contact Information
          </h2>
          <p>
            Contact details provided by school principals, college deans, and
            academic coordinators through our enquiry portal are used strictly for
            responding to program requests and preparing institutional proposals.
            We do not sell, rent, or trade institutional contact lists.
          </p>

          <h2 className="text-xl font-bold text-navy-950 mt-8 mb-3">
            4. Data Retention & Erasure
          </h2>
          <p>
            Upon the formal conclusion of an institutional training cycle or
            academic year, educational institutions may request complete archival
            or cryptographic erasure of student cohort rosters from our systems.
          </p>

          <h2 className="text-xl font-bold text-navy-950 mt-8 mb-3">
            5. Contact our Data Protection Officer
          </h2>
          <p>
            For privacy inquiries, audit verifications, or institutional compliance
            requests, contact our desk at:{" "}
            <a
              href={`mailto:${siteConfig.links.contactEmail}`}
              className="text-teal-700 underline font-semibold"
            >
              {siteConfig.links.contactEmail}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
