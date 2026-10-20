export const siteConfig = {
  name: "ScholarBridge",
  legalName: "ScholarBridge Educational Development Initiative",
  tagline: "Empowering Students. Supporting Educators. Transforming Education.",
  description:
    "We partner with schools, colleges, and universities across India to create meaningful, human-centred learning experiences in student wellbeing, career guidance, educator capacity building, and applied technology.",
  url: "https://scholarbridge.edu.in",
  links: {
    contactEmail: "enquiries@scholarbridge.org",
    contactPhone: "+91 80 4567 8900",
    workingHours: "Monday to Friday: 9:00 AM - 6:00 PM IST",
    linkedin: "https://linkedin.com/company/scholarbridge",
    twitter: "https://twitter.com/scholarbridge",
    youtube: "https://youtube.com/@scholarbridge",
  },
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Schools",
      href: "/services/schools",
      description: "Holistic development, career guidance, wellbeing, and STEM for K-12 institutions.",
      children: [
        {
          title: "All School Programs",
          href: "/services/schools",
          description: "Comprehensive institutional development catalogue for schools.",
        },
        {
          title: "Child Development & Counselling",
          href: "/services/schools#counselling",
          description: "Stigma-free mental wellbeing, emotional resilience, and guidance.",
        },
        {
          title: "Career Guidance (Grades 8-12)",
          href: "/services/schools#career-guidance",
          description: "Psychometric profiling, stream selection, and higher education mapping.",
        },
        {
          title: "Teacher Capacity Building",
          href: "/services/schools#teacher-training",
          description: "Modern pedagogy, Train-the-Trainer, and classroom wellness.",
        },
        {
          title: "STEM, Robotics & Tinkering",
          href: "/services/schools#stem-innovation",
          description: "Experiential labs, community problem-solving, and hands-on learning.",
        },
        {
          title: "Student Health & Safety",
          href: "/services/schools#health-safety",
          description: "First aid, menstrual health education, and digital addiction awareness.",
        },
      ],
    },
    {
      title: "Colleges & Universities",
      href: "/services/colleges",
      description: "Industry readiness, AI projects, startup incubation, and campus bootcamps.",
      children: [
        {
          title: "All Higher Ed Programs",
          href: "/services/colleges",
          description: "Academic-industry bridge initiatives for colleges and universities.",
        },
        {
          title: "Industry Projects & Internships",
          href: "/services/colleges#industry-projects",
          description: "Real-world capstones and mentor-guided experiential problem-solving.",
        },
        {
          title: "AI, Generative AI & Automation",
          href: "/services/colleges#ai-automation",
          description: "Applied machine learning, AI agents, and practical data pipelines.",
        },
        {
          title: "Placement Readiness & Bootcamps",
          href: "/services/colleges#placement-readiness",
          description: "Technical interviews, communication, and workplace skills.",
        },
        {
          title: "Entrepreneurship & Innovation",
          href: "/services/colleges#entrepreneurship",
          description: "Venture incubation, SDG-based innovation, and prototype design.",
        },
      ],
    },
    {
      title: "Programs & Workshops",
      href: "/programs",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  footerNav: {
    schools: [
      { title: "Child Development & Counselling", href: "/services/schools#counselling" },
      { title: "Career Guidance (Grades 8-12)", href: "/services/schools#career-guidance" },
      { title: "Teacher Train-the-Trainer", href: "/services/schools#teacher-training" },
      { title: "Digital Addiction & Wellbeing", href: "/services/schools#health-safety" },
      { title: "Girls' Menstrual Health & Hygiene", href: "/services/schools#health-safety" },
      { title: "STEM Labs & Tinkering", href: "/services/schools#stem-innovation" },
    ],
    colleges: [
      { title: "Industry-Led Capstone Projects", href: "/services/colleges#industry-projects" },
      { title: "Applied AI & GenAI Bootcamps", href: "/services/colleges#ai-automation" },
      { title: "Cybersecurity & Responsible Tech", href: "/services/colleges#cybersecurity" },
      { title: "SDG & Sustainability Projects", href: "/services/colleges#sustainability" },
      { title: "Startup & Venture Incubation", href: "/services/colleges#entrepreneurship" },
      { title: "Industrial Visits & Expos", href: "/programs#industrial-visits-tours" },
    ],
    organization: [
      { title: "About Our Mission", href: "/about" },
      { title: "Program Delivery Model", href: "/about#delivery-model" },
      { title: "Institutional Partnerships", href: "/contact" },
      { title: "Request Program Proposal", href: "/contact?type=proposal" },
    ],
    legal: [
      { title: "Institutional Privacy Policy", href: "/privacy" },
      { title: "Terms of Program Service", href: "/terms" },
      { title: "Student Safety Charter", href: "/about#safety-charter" },
    ],
  },
};
