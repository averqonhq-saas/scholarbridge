import React from "react";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { schoolProgramCategories } from "@/lib/data/school-programs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/MotionWrapper";
import { SchoolCatalogueCarousel } from "@/components/schools/SchoolCatalogueCarousel";

export const metadata: Metadata = {
  title: "School Programs | Child Development, Career Guidance & Teacher Training",
  description:
    "Comprehensive institutional programs for Indian K-12 schools: student wellbeing, psychometric career mapping (Grades 8-12), teacher capacity building, menstrual health, and STEM tinkering labs.",
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
                  href="#catalogue"
                  variant="outline"
                  size="lg"
                >
                  Explore Modules
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Programs Carousel Section */}
      <section id="catalogue" className="py-16 sm:py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SchoolCatalogueCarousel categories={schoolProgramCategories} />
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
