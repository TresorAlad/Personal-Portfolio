export const siteConfig = {
  brand: "Trésor ALADE",
  name: "Kodjo B. Trésor ALADE",
  nameLines: ["Kodjo B.", "Trésor ALADE"] as const,
  /** Short label above animated hero title (decorative, not a button) */
  heroTagline: "Data-driven",
  titleLines: ["AI & Data", "Engineer"] as const,
  aboutTitleAccent: "Data & AI",
  aboutTitleMain: "Is My Focus",
  email: "bernardalade92@gmail.com",
  location: "Sukkur, Sindh, Pakistan",
  resumePath: "assets/pdf/CV_Tresor_ALADE.pdf",
};

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/tresor-alade/",
    icon: "ri-linkedin-fill",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/TresorAlad",
    icon: "ri-github-line",
    label: "GitHub",
  },
  {
    href: "https://www.instagram.com/it_s_tresor0?exln=MTJrMDU1Mm1qdno5cg==",
    icon: "ri-instagram-line",
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/share/1JWDe6PdZR/",
    icon: "ri-facebook-line",
    label: "Facebook",
  },
];

export type Project = {
  number: string;
  title: string;
  stack: string;
  image: string;
  url: string;
  github?: string;
  category?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "TechMentor AI",
    stack: "React, FastAPI, RAG, Qdrant, Vector DB",
    image: "assets/img/projects/techmentor-ai.png",
    url: "https://techmentors.dev",
    github: "https://github.com/TresorAlad",
    category: "AI",
  },
  {
    number: "02",
    title: "DeDeFIA",
    stack: "Agentic AI, FastAPI, Python, Web Scraping",
    image: "assets/img/projects/dedefia.png",
    url: "https://github.com/TresorAlad/DeDeFIA",
    github: "https://github.com/TresorAlad/DeDeFIA",
    category: "AI",
  },
  {
    number: "03",
    title: "ChainCacao",
    stack: "Next.js, Go, AWS EC2, Hyperledger Fabric, Web3",
    image: "assets/img/projects/chaincacao.png",
    url: "https://cacaombh.vercel.app/",
    github: "https://github.com/TresorAlad",
    category: "Web",
  },
  {
    number: "04",
    title: "EventHub",
    stack: "React Native, Expo, Node.js, PostgreSQL",
    image: "assets/img/projects/eventhub.jpeg",
    url: "https://github.com/TresorAlad",
    github: "https://github.com/TresorAlad",
    category: "Mobile",
  },
  {
    number: "05",
    title: "Pitch AI",
    stack: "Python, ML, NLP, FastAPI",
    image: "assets/img/projects/pitch-ai.png",
    url: "https://pitch-ia.vercel.app",
    github: "https://github.com/TresorAlad/Pitch-IA.git",
    category: "AI",
  },
  {
    number: "06",
    title: "Territorial Profiles\n& Access Inequalities",
    stack: "Streamlit, Python, Open Data, Pipeline Gold, CEET/TdE",
    image: "assets/img/projects/pilotage-territorial.png",
    url: "https://defi-appistration-territoriale-togogit-nbfw5ryvlj5whkmripkahx.streamlit.app/",
    github: "https://github.com/TresorAlad/Defi-administration-territoriale-togo",
    category: "Data",
  },
  {
    number: "07",
    title: "MoMoShield",
    stack:
      "Kafka, Airflow, dbt, PostgreSQL, Streamlit, Great Expectations, Docker",
    image: "assets/img/projects/momoshield.png",
    url: "https://github.com/TresorAlad/MoMoShield",
    github: "https://github.com/TresorAlad/MoMoShield",
    category: "Data",
  },
  {
    number: "08",
    title: "Togo Data\nEngineering Pipeline",
    stack: "Python, Parquet, Azure, ADF, Power BI",
    image: "assets/img/projects/datapipeline.png",
    url: "https://app.powerbi.com/groups/f2813019-9234-4b85-b360-bc6239bd496b/reports/0d9d8110-12b8-4a43-a4e6-9677f92b8cc1?ctid=84c31ca0-ac3b-4eae-ad11-519d80233e6f&pbi_source=linkShare",
    github: "https://github.com/TresorAlad",
    category: "Data",
  },
];

/** Experience type: job, internship, or volunteering */
export type ExperienceKind = "employment" | "internship" | "volunteering";

/** Work mode: remote, on-site, or hybrid */
export type WorkMode = "remote" | "on-site" | "hybrid";

/** Weekly time commitment shown in timeline badges */
export type TimeCommitment = "part-time" | "full-time";

export type WorkItem = {
  title: string;
  subtitle: string;
  year: string;
  description: string;
  /** Defaults to employment if omitted */
  kind?: ExperienceKind;
  workMode?: WorkMode;
  timeCommitment?: TimeCommitment;
};

/** Professional experience: jobs, internships, and volunteering (newest first). */
export const experienceItems: WorkItem[] = [
  {
    title: "Data Engineer",
    subtitle: "Numerum Dev Center",
    year: "Jul 2026\nPresent",
    kind: "internship",
    workMode: "on-site",
    description:
      "On site internship in Lomé: collecting, cleaning, and preparing data for the center's projects. I process and structure datasets so analytics teams can work from reliable sources, using Python and PySpark with clear documentation and handoffs.",
  },
  {
    title: "Founder",
    subtitle: "TechMentor AI",
    year: "Jun 2026\nPresent",
    kind: "employment",
    workMode: "remote",
    timeCommitment: "part-time",
    description:
      "Part time founder of TechMentor AI. I own product direction, roadmap, and delivery across the mentor learning platform, including retrieval augmented generation, mentor workflows, and user facing experiences from API to interface.",
  },
  {
    title: "Data Science",
    subtitle: "CodeAlpha",
    year: "May 2026\n1 mo",
    kind: "internship",
    workMode: "remote",
    description:
      "Remote one month internship focused on predictive analytics and data science workflows. I moved from problem framing and feature exploration to baseline models and concise reporting for project stakeholders.",
  },
];

export const educationItems: WorkItem[] = [
  {
    title: "Bachelor's\n(AI & Big Data)",
    subtitle: "ESGIS",
    year: "Oct 2024\nAug 2027",
    description:
      "Pursuing a bachelor's in AI and Big Data with a balance of theory and practice: programming, statistics, databases, and machine learning. I apply concepts through labs, project work, and self learning, with a focus on data pipelines, analytics, and AI tools built for real use cases.",
  },
  {
    title: "Bachelor's\n(Marketing)",
    subtitle: "University of Lomé",
    year: "Sept 2024\nAug 2025",
    description:
      "First year (Licence 1) in Marketing: market research, consumer behavior, digital communication, and business fundamentals. This background sharpens how I present data products, tell stories with metrics, and keep user and business context in technical work.",
  },
];

/** Volunteering roles (newest first). */
export const volunteeringItems: WorkItem[] = [
  {
    title: "Lead Dev Ticketing\n& API Architect",
    subtitle: "TDEV",
    year: "Sept 2026\nPresent",
    kind: "volunteering",
    workMode: "hybrid",
    timeCommitment: "part-time",
    description:
      "Designing the technical architecture of the TDev Festival 2026 ticketing platform. I develop backend APIs for ticket flows and participant data, with clear contracts, reliability, and readiness for event scale.",
  },
  {
    title: "Team Lead",
    subtitle: "AWS Student Builder Group · ESGIS Togo",
    year: "Nov 2026\nPresent",
    kind: "volunteering",
    workMode: "on-site",
    timeCommitment: "part-time",
    description:
      "Leading the AWS Student Builder Group on campus: shaping the community roadmap, guiding peers on cloud and builder skills, and connecting student projects with AWS learning paths and best practices.",
  },
  {
    title: "Lead",
    subtitle: "Tech Campus Club ESGIS",
    year: "Nov 2026\nPresent",
    kind: "volunteering",
    workMode: "on-site",
    timeCommitment: "part-time",
    description:
      "Leading Tech Campus Club activities and community initiatives at ESGIS. I coordinate training sessions, workshops, and events that help students grow in technology, collaboration, and project delivery.",
  },
  {
    title: "Microsoft Student\nAmbassador",
    subtitle: "Microsoft Student\nAmbassador",
    year: "Oct 2026\nPresent",
    kind: "volunteering",
    workMode: "remote",
    timeCommitment: "part-time",
    description:
      "Sharing Microsoft Learn resources and practical learning paths so students can build technical skills with confidence. I promote hands on discovery, peer support, and steady progress through the ambassador program.",
  },
  {
    title: "Ambassador",
    subtitle: "TOGO CODE RUN",
    year: "Apr 2026\nJul 2026",
    kind: "volunteering",
    workMode: "on-site",
    timeCommitment: "part-time",
    description:
      "Representing TOGO CODE RUN in the developer community: encouraging participation in coding initiatives, sharing event updates, and helping peers connect with learning and competition opportunities.",
  },
  {
    title: "Ambassador",
    subtitle: "Fata School Togo",
    year: "Dec 2025\nAug 2026",
    kind: "volunteering",
    workMode: "hybrid",
    timeCommitment: "part-time",
    description:
      "Ambassador for Fata School Togo, promoting digital literacy and technical education programs. I support outreach, student engagement, and visibility for initiatives that open paths into tech.",
  },
  {
    title: "Content Manager",
    subtitle: "Tech Campus Club ESGIS",
    year: "Nov 2025\nJul 2026",
    kind: "volunteering",
    workMode: "hybrid",
    timeCommitment: "part-time",
    description:
      "Built content strategy to grow the club's visibility and voice. I planned and coordinated social posts, campaign timelines, and storytelling around workshops and events so the community stays informed and engaged.",
  },
];

export type ServiceCard = {
  title: string;
  description: string;
  subtitle: string;
  skills: string[];
  blobClass?: string;
};

export const services: ServiceCard[] = [
  {
    title: "Data Engineering\n& Pipelines",
    description:
      "End to end pipelines from raw events to trusted datasets: streaming with Kafka, orchestration with Airflow, modeling with dbt, and warehouses on PostgreSQL or cloud storage. Medallion layers, quarantine, and quality metrics so analytics and ML teams ship with confidence.",
    subtitle: "Stack",
    skills: [
      "Python",
      "SQL",
      "Kafka",
      "Airflow",
      "dbt",
      "PostgreSQL",
      "Parquet",
      "Azure Data Factory",
      "ADLS Gen2",
      "Great Expectations",
      "NDJSON / Bronze layers",
    ],
  },
  {
    title: "AI Apps\n& RAG Systems",
    description:
      "Production minded AI products: retrieval augmented generation, mentor and search experiences, and agentic workflows over your docs or APIs. I pair FastAPI backends with clear evaluation hooks and React or Streamlit interfaces people actually use.",
    subtitle: "Stack",
    blobClass: "blob-2",
    skills: [
      "FastAPI",
      "RAG",
      "LangChain",
      "Vector DB",
      "Qdrant",
      "Agentic AI",
      "Prompt design",
      "React",
      "NLP basics",
      "Model serving",
    ],
  },
  {
    title: "Analytics\n& Dashboards",
    description:
      "Turn data into decisions: executive KPIs in Power BI, exploratory apps in Streamlit, and maps or charts for policy and operations. I work from open data or warehouse marts and keep metrics consistent, documented, and easy to refresh.",
    subtitle: "Stack",
    skills: [
      "Power BI",
      "Streamlit",
      "Plotly",
      "Pandas",
      "Open Data",
      "KPI design",
      "Storytelling with data",
      "SQL metrics layers",
    ],
  },
  {
    title: "APIs &\nPlatform Delivery",
    description:
      "Design and build APIs for products and events: auth ready patterns, ticket and participant flows, and integrations with payment or CRM style data. Containerized services, CI friendly repos, and deployments on cloud or VPS when you need to go live.",
    subtitle: "Stack",
    blobClass: "blob-2",
    skills: [
      "REST APIs",
      "FastAPI",
      "Go",
      "Node.js",
      "Docker",
      "Docker Compose",
      "GitHub",
      "Postman",
      "Supabase",
      "Next.js",
    ],
  },
];

export type Testimonial = {
  name: string;
  image: string;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Internship Mentor",
    image: "assets/img/testimonial-1.png",
    text: "Trésor is a dedicated AI and Data Engineer. His ability to quickly learn and implement new technologies made a strong impact on our projects.",
  },
  {
    name: "Team Lead",
    image: "assets/img/testimonial-2.png",
    text: "Working with Trésor on data and ML projects was seamless. He contributed creative solutions and built reliable pipelines and interfaces.",
  },
  {
    name: "Peer / Colleague",
    image: "assets/img/testimonial-3.png",
    text: "Trésor combines technical skills with creativity. His projects reflect attention to detail, clean code, and thoughtful data design.",
  },
  {
    name: "Project Supervisor",
    image: "assets/img/testimonial-4.png",
    text: "Trésor is highly professional and reliable. He adapts quickly, collaborates well, and consistently delivers high-quality engineering work.",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  credentialId?: string;
};

export const certifications: Certification[] = [
  {
    title: "IBM RAG and Agentic AI",
    issuer: "Coursera - IBM",
    date: "July 2026",
    credentialUrl: "https://www.coursera.org/verify/professional-cert/VFAPDCQNSK1V",
  },
  {
    title: "Linear Regression for Business Statistics",
    issuer: "Coursera - Rice University",
    date: "June 2026",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/QWZI8DJO3BPP",
  },
  {
    title: "Probability and Statistics: To p or not to p?",
    issuer: "Coursera - University of London",
    date: "May 2026",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/E68047B9ZJMU",
  },
  {
    title: "Introduction to Statistical Analysis: Hypothesis Testing",
    issuer: "Coursera - SAS",
    date: "May 2026",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/4WXLJ26EY0CY",
  },
  {
    title: "Algebra and Differential Calculus for Data Science",
    issuer: "Coursera - University of Colorado Boulder",
    date: "May 2026",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/NUKQWGHGU4K9",
  },
  {
    title: "Mathematics for Machine Learning: PCA",
    issuer: "Coursera - Imperial College London",
    date: "May 2026",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/9BRPIBE4N87C",
  },
  {
    title: "Mathematics for Machine Learning: Multivariate Calculus",
    issuer: "Coursera - Imperial College London",
    date: "May 2026",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/VV9CLWXAWOQA",
  },
  {
    title: "Relational Database Administration (DBA)",
    issuer: "Coursera - IBM",
    date: "April 2026",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/211QSTSXE0CB",
  },
  {
    title: "Vibe Coding",
    issuer: "Sololearn",
    date: "2026",
    credentialUrl: "https://www.sololearn.com/certificates/CC-1DTZ4THF",
  },
  {
    title: "MLH Hackathon 2026",
    issuer: "MLH",
    date: "2026",
    credentialUrl: "https://drive.google.com/file/d/1YUuhGAh6h9PB_A-VhDmLOaETQTUh87WZ/view?usp=sharing",
  },
  {
    title: "Prompt Engineering",
    issuer: "Sololearn",
    date: "2026",
    credentialUrl: "https://www.sololearn.com/certificates/CC-QTLJFCV4",
  },
  {
    title: "Journey into the World of Databases",
    issuer: "Udemy",
    date: "2026",
    credentialUrl: "https://www.udemy.com/certificate/UC-d7d58ee9-6b8b-48d3-a70b-e786310a07f8/",
  },
  {
    title: "UML Modeling",
    issuer: "LinkedIn Learning",
    date: "2026",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/103b4440d4afd48f2d8577fa21e053e2ee81cedb9a5278375178ffca3e2ac61f",
  },
  {
    title: "Oracle Administration",
    issuer: "LinkedIn Learning",
    date: "2026",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/4421288fa80895c565b15634e2687dbd198e56c2993291e354a0c660a8910c6b",
  },
  {
    title: "Database Modeling",
    issuer: "LinkedIn Learning",
    date: "2026",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/69f2cb265336c142e1cc3d3a76852472f486890f721145342bcecf79aba72723",
  },
  {
    title: "Golang Essentials",
    issuer: "LinkedIn Learning",
    date: "2025",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/18e63ec4bc7a75219ff3a219b5237277e9c2f66c73cfc5ce38932c3d31e20e84",
  },
];
