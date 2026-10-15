export interface TrainingProgramItem {
  id: string;
  title: string;
  category: "in-house" | "outbound" | "bootcamp" | "industrial-visit";
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  imageAlt: string;
  highlights: string[];
  audience: string[];
  duration: string;
  deliveryMode: "On-Campus" | "Off-Site Experiential" | "Hybrid" | "Industry Facility";
  keyTakeaways: string[];
}

export const trainingPrograms: TrainingProgramItem[] = [
  {
    id: "in-house-training",
    title: "In-House Institutional Training",
    category: "in-house",
    shortDescription:
      "Customized capacity-building programs delivered directly inside your school or college campus with zero logistical disruption.",
    fullDescription:
      "Our specialist trainers arrive at your campus with complete workshop modules, interactive exercises, and customized pedagogical workbooks. Designed to seamlessly integrate with your academic timetable, these modules equip students and faculty with modern competencies right within familiar institutional infrastructure.",
    imageUrl:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Indian educators and students engaged in an in-house interactive institutional workshop",
    highlights: [
      "Customized to your institution's specific term schedule and room sizes",
      "Comprehensive participant workbooks, rubrics, and diagnostic kits included",
      "Post-training faculty observation and implementation reviews",
      "Cost-effective scaling across multi-section cohorts",
    ],
    audience: ["K-12 School Faculties", "Undergraduate Colleges", "Student Council Leaders", "Classroom Cohorts"],
    duration: "1 to 3 Days (6 Hours per day)",
    deliveryMode: "On-Campus",
    keyTakeaways: [
      "Immediate classroom applicability with institutional context intact",
      "Shared vocabulary and collaborative practices across staff departments",
      "Institutional capability audit and customized follow-up roadmap",
    ],
  },
  {
    id: "outbound-learning",
    title: "Outbound Experiential Learning",
    category: "outbound",
    shortDescription:
      "Transformative leadership, teamwork, and resilience camps in nature-immersed learning environments.",
    fullDescription:
      "Stepping beyond institutional walls unlocks deeper self-discovery and peer trust. Our safe, supervised outbound programs blend wilderness navigation, adventure-based learning, problem-solving simulations, and campfire reflective debriefs to cultivate psychological grit and empathetic leadership.",
    imageUrl:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Students engaging in collaborative team-building activities during an outdoor experiential camp",
    highlights: [
      "Strict safety protocols, certified adventure instructors, and paramedic presence",
      "Structured debrief cycles: Experience -> Reflect -> Conceptualize -> Apply",
      "Overcoming comfort zones, peer barriers, and communication silos",
      "Screen-free environments fostering authentic human connection",
    ],
    audience: ["Senior School Student Councils (Grades 9-12)", "College Student Clubs", "Faculty Leadership Teams"],
    duration: "2 to 4 Days (Residential Camp)",
    deliveryMode: "Off-Site Experiential",
    keyTakeaways: [
      "Enhanced self-reliance, risk assessment, and crisis communication skills",
      "Profound peer bonding and breakdown of social cliques",
      "Renewed mental clarity and appreciation for natural ecosystems",
    ],
  },
  {
    id: "bootcamps-workshops",
    title: "Workshops & Technical Boot Camps",
    category: "bootcamp",
    shortDescription:
      "Fast-paced, high-intensity immersive sprints focusing on high-demand practical tools, AI, and design thinking.",
    fullDescription:
      "Accelerated learning sprints that bypass lengthy academic delays to deliver tangible skill breakthroughs. Whether mastering Generative AI workflows, modern web frameworks, design thinking, or data storytelling, participants spend 80% of their time building and testing real prototypes.",
    imageUrl:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "College students intensely collaborating on a technology sprint with hardware and laptops",
    highlights: [
      "Hands-on project deliverables created and presented during the bootcamp",
      "Industry mentors providing immediate live code and architecture reviews",
      "Sprint demo day where teams pitch and showcase working solutions",
      "Access to curated repositories, starter templates, and cheat sheets",
    ],
    audience: ["Engineering & IT Students", "Management Graduates", "High School STEM Enthusiasts"],
    duration: "2-Day Weekend Sprint or 5-Day Intensive",
    deliveryMode: "Hybrid",
    keyTakeaways: [
      "Working portfolio artifact hosted publicly on GitHub or web",
      "Confidence in adopting new developer tools and tackling technical ambiguity",
      "Peer networking and collaborative hackathon readiness",
    ],
  },
  {
    id: "industrial-visits-tours",
    title: "Industrial Visits & Facility Immersions",
    category: "industrial-visit",
    shortDescription:
      "Curated guided immersions into advanced manufacturing facilities, research centers, and tech campuses.",
    fullDescription:
      "Connecting classroom formulas to commercial reality. We coordinate structured field visits with senior industrial hosts, ensuring learners observe automated production lines, quality-assurance protocols, logistics hubs, and modern research infrastructure firsthand.",
    imageUrl:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Students examining industrial equipment and machinery with industry mentors",
    highlights: [
      "Curated briefings before each visit outlining facility processes and key questions",
      "Accompanied by technical educators who translate operations into academic concepts",
      "Direct interactions with plant directors, operations engineers, and safety leads",
      "Verified transport, insurance, and institutional safety arrangements",
    ],
    audience: ["Mechanical, Civil, EE, and CSE College Students", "Vocational & Polytechnic Batches"],
    duration: "1 to 2 Days per batch",
    deliveryMode: "Industry Facility",
    keyTakeaways: [
      "Appreciation of industrial safety standards, Six Sigma, and automated workflows",
      "Clarity on daily operational realities and departmental specializations",
      "Comprehensive observation report documenting real industrial challenges",
    ],
  },
];
