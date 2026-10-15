import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Terms of Service | Institutional Engagement Terms",
  description:
    "Institutional terms of engagement and program delivery charter for ScholarBridge partner institutions.",
};

export default function TermsPage() {
  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Badge variant="navy">Terms of Engagement</Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950 font-display mt-3 mb-8">
          Institutional Terms of Service
        </h1>

        <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-700">
          <p>
            <strong>Last Updated:</strong> October 2026
          </p>
          <p>
            These Institutional Terms of Service govern the engagement between{" "}
            {siteConfig.legalName} (&quot;ScholarBridge&quot;) and partnering
            schools, junior colleges, undergraduate colleges, and universities.
          </p>

          <h2 className="text-xl font-bold text-navy-950 mt-8 mb-3">
            1. Scope of Programs & MoUs
          </h2>
          <p>
            All multi-week workshops, outbound leadership camps, teacher
            training series, and campus incubation initiatives are formalized
            through a bilateral Memorandum of Understanding (MoU) or institutional
            work order defining deliverables, schedule milestones, and mutual
            responsibilities.
          </p>

          <h2 className="text-xl font-bold text-navy-950 mt-8 mb-3">
            2. Responsible Academic Governance & Non-Guarantees
          </h2>
          <p>
            ScholarBridge programs emphasize genuine capability building,
            practical project mastery, and emotional wellbeing. Consistent with
            educational ethics, our programs do not make unconditional promises
            or guarantees of automatic campus placement, patent grants, commercial
            venture capital funding, or permanent employment.
          </p>

          <h2 className="text-xl font-bold text-navy-950 mt-8 mb-3">
            3. Institutional Safety & On-Campus Codes of Conduct
          </h2>
          <p>
            Our facilitators abide by campus administrative rules, visitor
            protocols, and safety standards established by host institutions. Host
            institutions are responsible for providing appropriate physical room
            infrastructure, projector facilities, and staff liaisons during on-campus
            activities.
          </p>

          <h2 className="text-xl font-bold text-navy-950 mt-8 mb-3">
            4. Intellectual Property of Student Work
          </h2>
          <p>
            All prototypes, code repositories, design inventions, and capstone
            deliverables created by students during our programs remain the sole
            intellectual property of the respective students and their parent
            institutions.
          </p>

          <h2 className="text-xl font-bold text-navy-950 mt-8 mb-3">
            5. Queries Regarding Terms
          </h2>
          <p>
            For legal or institutional compliance inquiries, please write to{" "}
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
