import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { ServiceCategoriesSection } from "@/components/home/ServiceCategoriesSection";
import { DedicatedSchoolsSection } from "@/components/home/DedicatedSchoolsSection";
import { DedicatedCollegesSection } from "@/components/home/DedicatedCollegesSection";
import { TrainingCardsSection } from "@/components/home/TrainingCardsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhyPartnerSection } from "@/components/home/WhyPartnerSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Education Beyond Classrooms Introduction */}
      <IntroSection />

      {/* 3. Six Main Service Categories */}
      <ServiceCategoriesSection />

      {/* 4. Dedicated Schools Section */}
      <DedicatedSchoolsSection />

      {/* 5. Dedicated Colleges & Universities Section */}
      <DedicatedCollegesSection />

      {/* 6. Programs and Training Section */}
      <TrainingCardsSection />

      {/* 7. How Our Programs Work (Timeline) */}
      <ProcessSection />

      {/* 8. Why Partner With Us */}
      <WhyPartnerSection />

      {/* 9. Final CTA */}
      <FinalCTASection />
    </>
  );
}
