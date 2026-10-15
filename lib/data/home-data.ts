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
      "We begin with in-depth consultative listening with school principals, college deans, and academic heads to identify curriculum gaps, student demographics, and specific institutional objectives.",
    deliverables: ["Institutional needs audit", "Demographic & readiness review", "Resource & schedule alignment"],
  },
  {
    step: "02",
    title: "Design a Suitable Program",
    description:
      "Our educational strategists create a tailored modular curriculum with clear learning rubrics, interactive materials, and verified mentor schedules aligned with your academic calendar.",
    deliverables: ["Customized syllabus & timetable", "Participant workbook rubrics", "Mentor & speaker matching"],
  },
  {
    step: "03",
    title: "Deliver Interactive Experiences",
    description:
      "Specialist trainers and industry practitioners facilitate experiential sessions, hands-on labs, guided discussions, and safe student advisory circles on campus or off-site.",
    deliverables: ["Experiential workshop delivery", "Continuous formative feedback", "Safe, inclusive participation"],
  },
  {
    step: "04",
    title: "Review Outcomes & Recommend Next Steps",
    description:
      "We conclude every intervention with evidence-based reporting, student sentiment feedback, and institutional recommendations to ensure lasting positive impact.",
    deliverables: ["Comprehensive outcome monograph", "Student feedback analytics", "Long-term institutional roadmap"],
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
      "Every intervention is designed around the emotional, cognitive, and social developmental stages of learners rather than rigid one-size-fits-all curricula.",
    iconName: "UserCheck",
  },
  {
    title: "Practical & Experiential Learning",
    description:
      "We replace passive slide listening with tactile building, case studies, role-play scenarios, and real community problem-solving.",
    iconName: "Layers",
  },
  {
    title: "Age-Appropriate Program Design",
    description:
      "Content is scientifically tailored: gentle sensory activities for young learners, respectful identity support for teens, and industry-grade challenges for university seniors.",
    iconName: "Smile",
  },
  {
    title: "Career-Focused Development",
    description:
      "From stream discovery in Grade 8 to technical capstones in engineering final year, students build tangible competencies that bridge academic theory to lifelong vocations.",
    iconName: "Target",
  },
  {
    title: "Flexible Institutional Delivery",
    description:
      "Programs can be deployed as short weekend sprints, weekly timetable integrations, intensive vacation bootcamps, or residential outbound immersions.",
    iconName: "Sliders",
  },
  {
    title: "Outcome-Oriented Reporting",
    description:
      "Institutional leadership receives detailed qualitative feedback, attendance analytics, and actionable guidance to support ongoing accreditation and parent reviews.",
    iconName: "FileCheck",
  },
];
