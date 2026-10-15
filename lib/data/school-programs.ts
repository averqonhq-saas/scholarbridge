export interface SchoolProgramCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  targetAudience: string;
  activities: string[];
  learningOutcomes: string[];
  deliveryFormat: string;
  iconName: string;
}

export const schoolProgramCategories: SchoolProgramCategory[] = [
  {
    id: "counselling",
    title: "Child Development & Counselling",
    tagline: "Nurturing emotional resilience, self-worth, and mental wellness in young learners.",
    description:
      "A compassionate, stigma-free support framework delivered by qualified child psychologists and certified school counsellors. We help students navigate academic transitions, emotional regulation, and personal challenges in a safe environment.",
    targetAudience: "Primary, Middle, and Senior School Students (Grades 1-12)",
    activities: [
      "Confidential individual counselling sessions with qualified professionals",
      "Age-appropriate emotional regulation and coping skill workshops",
      "Classroom transition support (primary to middle school, middle to board years)",
      "Bullying prevention, peer support circles, and restorative conversations",
    ],
    learningOutcomes: [
      "Increased self-awareness and emotional regulation strategies",
      "Healthy coping mechanisms for school-related stress and peer conflicts",
      "Reduction in behavioral distress through early, supportive intervention",
    ],
    deliveryFormat: "On-campus counsellor deployment, dedicated clinic hours, and periodic student circles",
    iconName: "HeartHandshake",
  },
  {
    id: "career-guidance",
    title: "Career Development & Guidance (Grades 8-12)",
    tagline: "Empowering adolescents to make structured, evidence-based academic and career choices.",
    description:
      "Scientific guidance helping students discover their natural aptitudes, interests, and personality traits. We eliminate decision anxiety around stream selection (Science, Commerce, Humanities) and chart multi-pathway career roadmaps.",
    targetAudience: "Adolescent Students, Board Exam Batches & Parents (Grades 8-12)",
    activities: [
      "Standardized psychometric assessments administered by certified evaluators",
      "One-on-one student and parent career debrief sessions with personalized reports",
      "Stream selection workshops aligned with the National Education Policy (NEP) framework",
      "Emerging careers discovery bootcamps (Data, Design, Public Policy, Sustainability, New Sciences)",
    ],
    learningOutcomes: [
      "Clarity on individual strengths, learning styles, and suitable career clusters",
      "Objective, friction-free stream choices supported by empirical psychometric data",
      "Comprehensive knowledge of Indian university entrance examinations and alternative pathways",
    ],
    deliveryFormat: "Multi-stage module: psychometric testing + individual advisory + parent engagement",
    iconName: "Compass",
  },
  {
    id: "teacher-training",
    title: "Teacher Capacity Building & Train-the-Trainer",
    tagline: "Equipping educators with modern pedagogical tools, classroom empathy, and wellness practices.",
    description:
      "Teachers are the cornerstone of educational transformation. Our Continuous Professional Development (CPD) modules help educators adopt active learning, handle diverse classroom temperaments, and prevent educator burnout.",
    targetAudience: "School Teachers, Academic Coordinators & Headmistresses/Headmasters",
    activities: [
      "Experiential pedagogy and inquiry-based lesson planning sessions",
      "Train-the-Trainer workshops for school-level student mental health first-responders",
      "Managing digital classroom distractions and neurodiverse learning requirements",
      "Teacher wellness retreats focused on voice care, mindfulness, and workload management",
    ],
    learningOutcomes: [
      "Enhanced classroom engagement through student-centric pedagogical techniques",
      "Early identification skills for learning difficulties and psychological distress in children",
      "Sustained teacher motivation, collaborative culture, and reduced educator attrition",
    ],
    deliveryFormat: "Interactive 2-day on-campus faculty workshops + periodic peer-observation circles",
    iconName: "GraduationCap",
  },
  {
    id: "parent-child",
    title: "Parent-Child Engagement Sessions",
    tagline: "Building empathetic communication bridges between families and the school community.",
    description:
      "Modern parenting in an era of hyper-connectivity and academic competition requires thoughtful strategies. We create collaborative spaces where parents and adolescents learn active listening, mutual boundaries, and shared respect.",
    targetAudience: "Parents and Guardians of K-12 Students",
    activities: [
      "Adolescent psychology and non-violent communication masterclasses for parents",
      "Joint parent-teen interactive problem-solving forums",
      "Balancing screen time and fostering positive digital habits at home",
      "Understanding board exam stress: Moving from comparison to collaborative support",
    ],
    learningOutcomes: [
      "Improved parent-child dialogue and reduced conflict during critical academic milestones",
      "Shared household agreements on device usage and healthy sleep hygiene",
      "Stronger parent-school partnership aligned with the child's holistic growth",
    ],
    deliveryFormat: "Weekend campus seminars, structured evening parent webinars, and family workshops",
    iconName: "Users",
  },
  {
    id: "health-safety",
    title: "Student Health, Hygiene & Girls' Menstrual Education",
    tagline: "Promoting dignity, bodily autonomy, safety, and evidence-based health awareness.",
    description:
      "A sensitive, scientifically accurate curriculum addressing adolescent physical development, menstrual hygiene management without cultural stigma, emergency first-aid literacy, and personal bodily safety.",
    targetAudience: "Middle and High School Students (Grades 6-12)",
    activities: [
      "Stigma-free menstrual health and hygiene workshops led by medical professionals",
      "Age-appropriate bodily boundaries and child protection awareness (POCSO compliant)",
      "Hands-on student first-aid, CPR awareness, and campus emergency readiness drills",
      "Nutritional wellness and physical health screening advisories for growing teens",
    ],
    learningOutcomes: [
      "Demystification of puberty, menstruation, and hormonal changes among adolescent girls",
      "Critical understanding of personal boundaries, consent, and safety reporting channels",
      "Practical life skills in handling minor injuries, heat stress, and emergency first aid",
    ],
    deliveryFormat: "Gender-segregated and joint doctor-led sessions, interactive demos, and resource kits",
    iconName: "ShieldCheck",
  },
  {
    id: "digital-wellbeing",
    title: "Teenage Issues & Digital Addiction Awareness",
    tagline: "Guiding young minds toward intentional technology habits and cyber vigilance.",
    description:
      "Addressing the psychological impact of social media, online gaming addiction, peer validation, and cyberbullying. We equip teenagers with cognitive tools to reclaim their attention span and establish mindful digital boundaries.",
    targetAudience: "Grades 6 through 12 Students",
    activities: [
      "Dopamine, attention economics, and algorithm awareness interactive workshops",
      "Cybersecurity, private data safety, and cyber-law literacy for school students",
      "7-Day digital detox challenge and offline hobby cultivation circles",
      "Anonymous student doubt box addressing peer pressure, body image, and online dilemmas",
    ],
    learningOutcomes: [
      "Conscious awareness of time spent on social media and gaming applications",
      "Knowledge of safe online behaviors and how to report cyberbullying or harassment",
      "Restoration of focus, offline social interactions, and sleep quality",
    ],
    deliveryFormat: "Interactive student assemblies, small-group cohort coaching, and school advisory charters",
    iconName: "Smartphone",
  },
  {
    id: "stem-innovation",
    title: "Robotics, STEM/STEAM & Tinkering Labs",
    tagline: "Igniting curiosity through hands-on making, coding, and scientific experimentation.",
    description:
      "Transforming abstract science and math textbook principles into tangible models. From foundational electronics and block coding to competitive robotics and sensor projects, students learn through trial, failure, and creative iteration.",
    targetAudience: "Primary to Senior Secondary Students (Grades 3-12)",
    activities: [
      "Design thinking and rapid prototyping workshops using everyday materials",
      "Modular robotics, sensor integration, and micro-controller programming (Arduino/Raspberry Pi)",
      "Atal Tinkering Lab (ATL) mentorship and science exhibition project incubation",
      "Inter-school STEM hackathons and collaborative design sprints",
    ],
    learningOutcomes: [
      "Practical mastery of basic circuits, algorithmic thinking, and debugging logic",
      "Resilience in overcoming technical failures through rapid physical prototyping",
      "Excitement for science, engineering, and mathematics rooted in tangible creation",
    ],
    deliveryFormat: "Lab setup assistance, curriculum integration, weekly hands-on instructor sessions",
    iconName: "Cpu",
  },
  {
    id: "sel",
    title: "Social-Emotional Learning (SEL) & Mindfulness",
    tagline: "Cultivating empathy, collaboration, and ethical decision-making in daily school life.",
    description:
      "Structured SEL modules integrated into the academic calendar. Children learn to identify emotions, practice active empathy, appreciate diverse perspectives, and cultivate grounded focus through age-appropriate mindfulness practices.",
    targetAudience: "All K-12 Grades and Student Councils",
    activities: [
      "Daily 5-minute guided breathwork and mindful transition practices before classes",
      "Role-playing exercises in active listening, empathy, and ethical dilemma resolution",
      "Gratitude journaling and peer appreciation bulletin systems",
      "Student Council leadership training focused on compassionate student governance",
    ],
    learningOutcomes: [
      "Noticeable reduction in classroom behavioral disruptions and aggressive conflicts",
      "Demonstrated ability to express complex emotions constructively without withdrawal",
      "Strengthened school community culture rooted in kindness and mutual respect",
    ],
    deliveryFormat: "Curriculum integration kits, homeroom teacher manuals, and weekly student circles",
    iconName: "Sparkles",
  },
  {
    id: "local-problem-solving",
    title: "Community-Based Problem-Solving & Social Impact",
    tagline: "Connecting school learners with real neighborhood challenges and civic initiatives.",
    description:
      "Education achieves its highest purpose when students step beyond school walls to serve their surrounding communities. We guide students through field visits, grassroots interviews, and localized sustainability initiatives.",
    targetAudience: "Middle and High School Student Clubs (Grades 7-12)",
    activities: [
      "Campus waste auditing and decentralized composting project implementation",
      "Neighborhood energy conservation surveys and community awareness street plays",
      "Rainwater harvesting mapping and water conservation audits in school neighborhoods",
      "Partnering with local civic bodies or village panchayats for student service days",
    ],
    learningOutcomes: [
      "Civic responsibility and active citizenship demonstrated through completed field projects",
      "Data collection, interview, and public presentation skills in real community settings",
      "Appreciation of systemic environmental and social challenges facing Indian communities",
    ],
    deliveryFormat: "Term-length club projects, guided field immersions, and community showcase expos",
    iconName: "MapPin",
  },
  {
    id: "inclusion",
    title: "Inclusion, Accessibility & Vernacular Initiatives",
    tagline: "Ensuring every child thrives regardless of linguistic background or neurodivergence.",
    description:
      "Every learner deserves an equal seat at the academic table. We help schools build inclusive learning environments for neurodivergent children (dyslexia, ADHD, ASD) and support vernacular-medium students bridging into bilingual education.",
    targetAudience: "Whole School Ecosystem, Special Educators & Bilingual Learners",
    activities: [
      "Screening protocols for early identification of specific learning differences (SLDs)",
      "Bilingual STEM vocabulary glossaries and mother-tongue conceptual reinforcement modules",
      "Sensory-friendly quiet corner guidelines for school campuses",
      "Sensitization workshops for peer groups fostering unconditional classroom acceptance",
    ],
    learningOutcomes: [
      "Institutional compliance with rights of persons with disabilities guidelines",
      "Equitable learning progression for students from vernacular language backgrounds",
      "Elimination of classroom bullying targeting learning differences or accent variations",
    ],
    deliveryFormat: "School audit, educator coaching, and specialized teaching-learning materials",
    iconName: "Languages",
  },
  {
    id: "school-events",
    title: "School Event Planning & Experiential Days",
    tagline: "Orchestrating memorable, pedagogy-rich institutional celebrations and learning festivals.",
    description:
      "End-to-end planning, content curation, and operational management for educational celebrations. We ensure school events are not merely spectacles, but deep, student-driven celebrations of inquiry, art, and innovation.",
    targetAudience: "School Management, Event Committees, Parents & Students",
    activities: [
      "Theme-based Annual Science & Innovation Expositions with student demonstrators",
      "Model United Nations (MUN) and Youth Parliamentary debate leagues",
      "Literary, cultural, and multilingual arts festivals celebrating Indian heritage",
      "Sports days integrated with wellness clinics and inclusive para-games",
    ],
    learningOutcomes: [
      "Flawless logistical execution without burdening core teaching staff during exam seasons",
      "High student agency: students lead stage management, curation, and documentation",
      "Enhanced institutional reputation among parent communities and prospective families",
    ],
    deliveryFormat: "Turnkey event coordination, student committee mentorship, and production oversight",
    iconName: "CalendarDays",
  },
];
