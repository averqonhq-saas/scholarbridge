export interface ServiceCategory {
  id: string;
  title: string;
  shortDescription: string;
  href: string;
  iconName: string;
  tag: string;
  highlights: string[];
}

export const mainServiceCategories: ServiceCategory[] = [
  {
    id: "wellbeing-counselling",
    title: "Student Wellbeing & Counselling",
    shortDescription:
      "Stigma-free mental health support, emotional regulation, peer circles, and adolescent guidance led by certified child psychologists.",
    href: "/services/schools#counselling",
    iconName: "HeartPulse",
    tag: "Schools & Colleges",
    highlights: ["Individual counselling", "Peer support circles", "Digital detox coaching"],
  },
  {
    id: "career-development",
    title: "Career Development & Guidance",
    shortDescription:
      "Scientific psychometric assessments, stream-selection clarity for Grades 8-12, and comprehensive higher education mapping.",
    href: "/services/schools#career-guidance",
    iconName: "Compass",
    tag: "Grades 8-12 & Higher Ed",
    highlights: ["Standardized psychometrics", "Stream advisory", "College entrance mapping"],
  },
  {
    id: "teacher-training",
    title: "Teacher Training & Capacity Building",
    shortDescription:
      "Modern experiential pedagogy, Train-the-Trainer modules, classroom psychology, and educator wellness retreats.",
    href: "/services/schools#teacher-training",
    iconName: "GraduationCap",
    tag: "Educators & Faculty",
    highlights: ["Active pedagogy", "Student mental health first-aid", "Preventing burnout"],
  },
  {
    id: "ai-stem",
    title: "AI, STEM & Experiential Learning",
    shortDescription:
      "Hands-on robotics, tinkering labs, generative AI projects, and community problem-solving transforming abstract theory into prototypes.",
    href: "/services/colleges#ai-automation",
    iconName: "Cpu",
    tag: "K-12 & Higher Ed",
    highlights: ["Makerspaces & Robotics", "Generative AI applications", "SDG-aligned innovation"],
  },
  {
    id: "industry-employability",
    title: "Industry Exposure & Employability",
    shortDescription:
      "Industry capstones, structured corporate internships, technical boot camps, and real-world placement preparation.",
    href: "/services/colleges#industry-projects",
    iconName: "Briefcase",
    tag: "Higher Education",
    highlights: ["Industry-led capstones", "Mock technical interviews", "Industrial visits"],
  },
  {
    id: "events-programs",
    title: "Events, Workshops & Institutional Programs",
    shortDescription:
      "Turnkey planning and execution for science exhibitions, youth parliaments, residential outbound camps, and campus summits.",
    href: "/programs",
    iconName: "CalendarDays",
    tag: "Campus-Wide",
    highlights: ["Science & innovation expos", "Outbound leadership camps", "Technical bootcamps"],
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const programProcessSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Understand Institutional Needs",
    description:
      "We consult with school principals, deans, and academic coordinators to identify curriculum gaps, student demographics, and institutional objectives.",
    deliverables: ["Institutional needs audit", "Cohort readiness review", "Schedule alignment"],
  },
  {
    step: "02",
    title: "Design a Suitable Program",
    description:
      "Our educational strategists create a tailored modular curriculum with clear rubrics, interactive materials, and matched practitioner schedules.",
    deliverables: ["Customized syllabus & timetable", "Participant workbooks", "Mentor matching"],
  },
  {
    step: "03",
    title: "Deliver Interactive Experiences",
    description:
      "Certified trainers and industry practitioners lead experiential workshops, hands-on labs, and student advisory circles.",
    deliverables: ["Interactive workshop delivery", "Continuous feedback", "Inclusive engagement"],
  },
  {
    step: "04",
    title: "Review Outcomes & Next Steps",
    description:
      "We conclude every intervention with evidence-based reporting, student feedback analytics, and actionable institutional recommendations.",
    deliverables: ["Outcome summary report", "Feedback analytics", "Follow-up roadmap"],
  },
];

export interface PartnerBenefit {
  title: string;
  description: string;
  iconName: string;
}

export const whyPartnerWithUs: PartnerBenefit[] = [
  {
    title: "Student-Centred Approach",
    description:
      "Every program is tailored to the emotional, cognitive, and social development stages of learners.",
    iconName: "UserCheck",
  },
  {
    title: "Practical & Experiential",
    description:
      "We replace passive listening with hands-on building, case studies, role-play scenarios, and real problem-solving.",
    iconName: "Layers",
  },
  {
    title: "Age-Appropriate Design",
    description:
      "Curriculum is calibrated for each age group—from foundational K-12 activities to industry-grade university capstones.",
    iconName: "Smile",
  },
  {
    title: "Career-Focused Development",
    description:
      "From stream discovery in Grade 8 to technical capstones in college, students build tangible, lifelong competencies.",
    iconName: "Target",
  },
  {
    title: "Flexible Delivery Models",
    description:
      "Programs deploy as single-day intensives, weekly timetable integrations, vacation bootcamps, or outbound immersions.",
    iconName: "Sliders",
  },
  {
    title: "Outcome-Oriented Reporting",
    description:
      "Leadership receives qualitative feedback, attendance analytics, and actionable insights to support institutional reviews.",
    iconName: "FileCheck",
  },
];
