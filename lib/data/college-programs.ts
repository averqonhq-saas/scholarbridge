export interface CollegeProgramItem {
  id: string;
  categoryCode: string; // A through J
  title: string;
  shortDescription: string;
  fullDescription: string;
  framework: {
    realWorldProblem: string;
    techOrData: string;
    impactGoal: string;
    industryCollaboration: string;
  };
  learningOutcomes: string[];
  practicalDeliverable: string;
  duration: string;
  targetDepartments: string[];
  featuredExample?: {
    title: string;
    summary: string;
    stack: string;
  };
}

export const collegePrograms: CollegeProgramItem[] = [
  {
    id: "industry-projects",
    categoryCode: "A",
    title: "Industry-Led Projects & Structured Internships",
    shortDescription:
      "Bridging classroom theory with vetted real-world capstones mentored by experienced industry practitioners.",
    fullDescription:
      "Students collaborate on genuine engineering and management briefs provided by partner enterprises. Working in agile sprints, student teams experience professional code reviews, backlog grooming, and stakeholder presentations.",
    framework: {
      realWorldProblem: "SME businesses and public utilities struggle with un-automated workflows and fragmented data.",
      techOrData: "Modern web APIs, Python automation, cloud databases, and agile project boards.",
      impactGoal: "Deliver functional software prototypes that solve verified enterprise operational bottlenecks.",
      industryCollaboration: "Bi-weekly sprint reviews with practicing tech leads and senior solution architects.",
    },
    learningOutcomes: [
      "Agile team workflows: Git branching, CI/CD basics, code documentation, and code reviews",
      "Translating ambiguous customer requirements into clear technical specifications",
      "Professional communication and stakeholder demo presentation competencies",
    ],
    practicalDeliverable:
      "Fully documented, containerized GitHub repository, architecture schematic, and live working demo deployed on cloud staging.",
    duration: "8 to 16 Weeks (Semester-aligned)",
    targetDepartments: ["Computer Science & IT", "Electronics & Communication", "Mechanical", "Management Studies"],
    featuredExample: {
      title: "Smart Campus Analytics & Resource Optimization",
      summary: "End-to-end telemetry system monitoring classroom electricity usage, water tank levels, and cafeteria queue congestion.",
      stack: "ESP32 microcontrollers, MQTT broker, FastAPI backend, and Grafana visualization dashboard.",
    },
  },
  {
    id: "ai-generative-ai",
    categoryCode: "B",
    title: "AI, Generative AI & Autonomous AI Agents",
    shortDescription:
      "Demystifying modern LLMs, Retrieval-Augmented Generation (RAG), and agentic systems through practical engineering.",
    fullDescription:
      "Moving beyond prompt engineering to building production-grade intelligence. Students learn vector databases, semantic search pipelines, evaluation metrics, and responsible AI guardrails for enterprise applications.",
    framework: {
      realWorldProblem: "Educational resources and institutional knowledge repositories are difficult to search or access across regional languages.",
      techOrData: "Hugging Face transformers, LangChain/LlamaIndex, Pinecone/ChromaDB vector stores, and quantized local models.",
      impactGoal: "Democratize high-quality, contextual knowledge retrieval for vernacular learners and academic staff.",
      industryCollaboration: "Masterclasses by AI research engineers and benchmark evaluation rubrics.",
    },
    learningOutcomes: [
      "Building and benchmarking RAG pipelines with custom institutional document collections",
      "Deploying small language models locally and fine-tuning with domain-specific datasets",
      "Understanding hallucination mitigation, ethical AI alignment, and privacy considerations",
    ],
    practicalDeliverable:
      "A complete domain-specific RAG application with evaluation metrics, hallucination guardrails, and multilingual chat interface.",
    duration: "6 to 12 Weeks / 40 Contact Hours",
    targetDepartments: ["AI & Data Science", "Computer Science", "Information Technology", "MCA"],
    featuredExample: {
      title: "Low-Cost AI Tutor for Vernacular Learners",
      summary: "An offline-capable AI learning companion that explains complex STEM concepts in regional Indian languages with audio output.",
      stack: "Whisper speech-to-text, quantized LLaMA-3/Gemma models, Indic-BERT, and lightweight FastAPI.",
    },
  },
  {
    id: "data-analytics",
    categoryCode: "C",
    title: "Data Analytics, Business Intelligence & Automation",
    shortDescription:
      "Transforming raw institutional and industrial datasets into actionable decision pipelines and executive dashboards.",
    fullDescription:
      "From messy CSVs to automated decision intelligence. Students master data wrangling, SQL modeling, exploratory analysis, and automated report generation for real-world operations.",
    framework: {
      realWorldProblem: "Educational institutions, agricultural cooperatives, and local businesses make critical decisions on outdated spreadsheets.",
      techOrData: "PostgreSQL, Python (Pandas/Polars), dbt (data build tool), and Power BI / Apache Superset.",
      impactGoal: "Provide transparent, real-time KPI visibility to optimize resource utilization and forecast operational bottlenecks.",
      industryCollaboration: "Case studies and sanitized enterprise datasets supplied by retail and supply-chain partners.",
    },
    learningOutcomes: [
      "Advanced SQL window functions, schema design, and analytical data transformation modeling",
      "Storytelling with data: building interactive, intuitive executive dashboards",
      "Automating ETL workflows using Python scripts and cron-scheduled jobs",
    ],
    practicalDeliverable:
      "Interactive multi-page BI dashboard connected to live automated pipelines with comprehensive data dictionary and user guide.",
    duration: "6 to 10 Weeks",
    targetDepartments: ["Data Science", "IT", "Mathematics & Statistics", "Commerce & MBA"],
    featuredExample: {
      title: "Campus Energy-Efficiency & Peak Load Dashboard",
      summary: "Predictive load-balancing dashboard identifying electrical wastage patterns across laboratories, hostels, and sports complexes.",
      stack: "Python time-series models, PostgreSQL, Streamlit / Next.js data portal.",
    },
  },
  {
    id: "cybersecurity",
    categoryCode: "D",
    title: "Cybersecurity & Responsible Technology",
    shortDescription:
      "Hands-on defensive security, vulnerability assessment, secure coding, and digital forensics fundamentals.",
    fullDescription:
      "Preparing engineers to defend modern digital infrastructure. Through controlled sandbox environments, students learn vulnerability scanning, OWASP Top 10 mitigation, incident response, and institutional compliance standards.",
    framework: {
      realWorldProblem: "Small institutions and MSMEs in India are increasingly vulnerable to ransomware, credential stuffing, and data breaches.",
      techOrData: "Wireshark, Kali Linux sandboxes, Burp Suite, Python security automation, and OpenVAS.",
      impactGoal: "Harden community and small-business digital assets while cultivating ethical cyber-defense practices.",
      industryCollaboration: "Mentorship by certified CISOs and practical red-team vs. blue-team simulation drills.",
    },
    learningOutcomes: [
      "Conducting structured vulnerability assessments and generating standardized audit reports",
      "Implementing OWASP security controls across authentication, API security, and database access",
      "Understanding CERT-In reporting guidelines, Indian IT Act compliance, and data privacy principles",
    ],
    practicalDeliverable:
      "Formal Security Assessment Report for a sample institutional network, plus automated vulnerability scanning scripts.",
    duration: "8 Weeks (Hands-on Lab Intensive)",
    targetDepartments: ["Information Security", "CSE", "IT", "MCA"],
    featuredExample: {
      title: "Cybersecurity Awareness & Hardening Toolkit for Small Businesses",
      summary: "Automated scanning script and visual compliance checklist designed to help local merchants secure their point-of-sale systems.",
      stack: "Python network scanners, Dockerized sandbox environments, Markdown audit templates.",
    },
  },
  {
    id: "sustainability",
    categoryCode: "E",
    title: "Sustainability & SDG-Based Innovation Projects",
    shortDescription:
      "Aligning engineering creativity with the UN Sustainable Development Goals (Clean Water, Affordable Energy, Climate Action).",
    fullDescription:
      "Engineering with social purpose. Students leverage IoT sensors, GIS mapping, and frugal innovation to tackle pressing local environmental challenges such as groundwater contamination, municipal waste, and urban heat islands.",
    framework: {
      realWorldProblem: "Groundwater depletion and industrial effluent discharge in peri-urban industrial belts require continuous, low-cost monitoring.",
      techOrData: "Turbidity/pH IoT sensors, LoRaWAN wireless telemetry, open satellite datasets, and public GIS mapping.",
      impactGoal: "Deploy community-accessible open environmental indicators to prevent waterborne contamination outbreaks.",
      industryCollaboration: "Collaboration with environmental NGOs, local municipalities, and green-tech incubators.",
    },
    learningOutcomes: [
      "System design combining hardware sensors, wireless communication, and cloud storage",
      "Life-cycle analysis (LCA) and sustainable material selection for hardware engineering",
      "Translating community environmental grievances into measurable scientific indicators",
    ],
    practicalDeliverable:
      "Field-tested hardware telemetry rig, public-facing alert dashboard, and environmental policy brief.",
    duration: "10 to 14 Weeks",
    targetDepartments: ["Civil & Environmental", "Electrical & Electronics", "Mechanical", "Biotechnology"],
    featuredExample: {
      title: "AI-Powered Water-Quality Monitoring & Alert System",
      summary: "Solar-powered buoy that transmits real-time pH, dissolved oxygen, and turbidity metrics to a community WhatsApp alert bot.",
      stack: "Arduino/LoRaWAN, TinyML on-device anomaly detection, Twilio/WhatsApp webhook API.",
    },
  },
  {
    id: "entrepreneurship",
    categoryCode: "F",
    title: "Entrepreneurship & Student Startup Development",
    shortDescription:
      "Taking student ideas from lab prototypes to viable business models, pitch decks, and customer validation sprints.",
    fullDescription:
      "A structured pre-incubation program guiding aspiring student founders through problem-market fit, unit economics, lean prototyping, intellectual property basics, and institutional grant applications (NIDHI-EIR, MSME, Startup India).",
    framework: {
      realWorldProblem: "Student college innovations remain trapped as theoretical final-year reports without customer validation.",
      techOrData: "No-code prototyping tools, business model canvas frameworks, unit economics spreadsheets, and pitch teardowns.",
      impactGoal: "Foster sustainable, revenue-generating student enterprises that create local employment.",
      industryCollaboration: "Mock investor pitch juries featuring early-stage angels, incubators, and successful startup alumni.",
    },
    learningOutcomes: [
      "Customer discovery interviews: validating problem urgency before writing a single line of code",
      "Financial modeling: gross margins, customer acquisition cost (CAC), and cash runway planning",
      "Mastery of institutional pitching: 3-minute executive elevator pitch and investor deck creation",
    ],
    practicalDeliverable:
      "Verified Customer Validation Report (50+ customer interviews), functioning MVP, and ready-to-pitch 10-slide investor deck.",
    duration: "12 Weeks (Pre-Incubation Bootcamp)",
    targetDepartments: ["All Engineering Branches", "Commerce & Business Administration", "Design"],
    featuredExample: {
      title: "Student Entrepreneur Toolkit & Pitch Deck Framework",
      summary: "Comprehensive open-access toolkit with legal incorporation templates, grant application guides, and financial projection models.",
      stack: "Notion startup operating system, interactive financial model sheets, pitch deck templates.",
    },
  },
  {
    id: "career-placement",
    categoryCode: "G",
    title: "Career Guidance & Placement Readiness",
    shortDescription:
      "Holistic aptitude coaching, technical mock interviews, resume architecture, and corporate etiquette training.",
    fullDescription:
      "Demystifying modern recruitment processes for college seniors. We address quantitative aptitude, coding assessments, group discussions, and behavioural interviews with personalized video feedback and industry mentors.",
    framework: {
      realWorldProblem: "Talented engineering and arts graduates struggle in placement drives due to interview anxiety and unoptimized resumes.",
      techOrData: "ATS simulation scanners, algorithm assessment sandboxes, and recorded mock interview evaluation frameworks.",
      impactGoal: "Equip students with the confidence and precision required to articulate their competencies during competitive hiring.",
      industryCollaboration: "Practicing HR leaders and tech alumni conducting blind mock interviews and resume reviews.",
    },
    learningOutcomes: [
      "Mastery of core quantitative, logical, and verbal placement screening exam patterns",
      "STAR methodology (Situation, Task, Action, Result) for behavioral and situational interview rounds",
      "Targeted technical portfolio creation showcasing verified projects and GitHub histories",
    ],
    practicalDeliverable:
      "ATS-optimized professional resume, personalized video mock interview scorecard, and custom 30-day preparation checklist.",
    duration: "4 to 8 Weeks (Campus-wide cohorts)",
    targetDepartments: ["Pre-final and Final Year Students across all disciplines"],
  },
  {
    id: "technical-workshops",
    categoryCode: "H",
    title: "Technical Workshops & Intensive Boot Camps",
    shortDescription:
      "Immersive weekend and week-long deep dives into trending technical stacks, cloud tooling, and DevOps.",
    fullDescription:
      "High-energy, 100% hands-on learning experiences designed to bridge syllabus gaps. Students build complete full-stack applications, deploy cloud microservices, or configure container clusters under direct engineering guidance.",
    framework: {
      realWorldProblem: "Traditional academic syllabi lag behind rapid shifts in production developer toolchains.",
      techOrData: "Docker, Kubernetes, Next.js, Cloudflare Workers, GraphQL, and modern DevOps pipelines.",
      impactGoal: "Provide students with immediate muscle memory on tools used daily by high-growth product teams.",
      industryCollaboration: "Instructors from product startups and open-source contributor communities.",
    },
    learningOutcomes: [
      "Zero-to-production deployment experience using modern CI/CD and cloud hosting",
      "Confidence in debugging production stack traces and reading official technical documentation",
      "Network with passionate peer developers and create open-source showcase contributions",
    ],
    practicalDeliverable:
      "A completed full-stack software application hosted publicly on custom domain with live database.",
    duration: "2-Day Weekend Sprint or 5-Day Intensive Boot Camp",
    targetDepartments: ["CSE", "IT", "ECE", "Software Engineering"],
  },
  {
    id: "industrial-visits",
    categoryCode: "I",
    title: "Industrial Visits & Industry Interactions",
    shortDescription:
      "Curated institutional exposure visits to advanced manufacturing plants, tech parks, and research institutes.",
    fullDescription:
      "Moving beyond routine tourist tours to structured technical discovery. Each visit includes pre-visit research briefings, structured plant walk-throughs with operations engineers, and post-visit analytical debriefs.",
    framework: {
      realWorldProblem: "Engineering students graduate without having seen large-scale industrial assembly lines or data centers.",
      techOrData: "Industrial automation (SCADA/PLC), cleanroom protocols, server farm topology, and supply chain logistics.",
      impactGoal: "Ground textbook theoretical diagrams in physical industrial scale and safety standards.",
      industryCollaboration: "Formal liaison with manufacturing facilities, research laboratories, and automotive corridors.",
    },
    learningOutcomes: [
      "Direct understanding of industrial safety, quality control (Six Sigma/ISO), and factory automation",
      "Appreciation of the physical constraints and regulatory standards governing large operations",
      "Direct Q&A with plant managers and operations heads about career entry pathways",
    ],
    practicalDeliverable:
      "Individual Technical Observation Monograph detailing workflow analysis and operational bottlenecks observed.",
    duration: "1 to 3 Days per visit batch",
    targetDepartments: ["Mechanical", "Automobile", "Civil", "Electrical", "Industrial Engineering"],
  },
  {
    id: "final-year-projects",
    categoryCode: "J",
    title: "Final-Year Project Development & Research Incubation",
    shortDescription:
      "Structured mentorship converting routine senior projects into patentable innovations and research publications.",
    fullDescription:
      "Eliminating the culture of purchased or cloned final-year projects. We guide student teams through original literature review, rigorous methodology design, experimental validation, IEEE-format writing, and institutional ethics review.",
    framework: {
      realWorldProblem: "Many final-year capstones are duplicates of existing open-source tutorials with negligible innovation.",
      techOrData: "Formal research methodologies, statistical power analysis, IEEE/Scopus formatting, and patent search tools.",
      impactGoal: "Publish genuine student research and develop defensible institutional intellectual property.",
      industryCollaboration: "Co-guide mentorship with university professors and industrial R&D specialists.",
    },
    learningOutcomes: [
      "Independent literature review and prior-art search across global patent databases",
      "Rigorous experimental methodology design, error analysis, and repeatable benchmark data",
      "Academic paper writing adhering to publication ethics and anti-plagiarism standards",
    ],
    practicalDeliverable:
      "Functional hardware/software prototype, comprehensive bound thesis, and publication-ready manuscript.",
    duration: "Two Semesters (Full Academic Year Guidance)",
    targetDepartments: ["All Final Year Undergrad and Postgrad Engineering / Sciences"],
  },
];
