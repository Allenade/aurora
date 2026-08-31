export const IMAGES = Object.freeze({
  LOGO: "/images/aurora-logo.svg",
  ARROW_CIRCLE: "/images/arrow-circle.svg",
  ARROW_CIRCLE_DARK: "/images/arrow-circle-dark.svg",
  HERO_VISUAL: "/images/hero-visual.png",
  PRODUCTS_HERO: "/images/products-hero-aurora-v2.jpg",
  PRODUCTS_HERO_VIDEO: "/videos/pov-1.mp4",
  COHORT_HERO: "/images/cohort/hero.png",
  PRODUCT_BRAINIAC: "/images/products/brainiac-product.png",
  PRODUCT_STREAMFORGE: "/images/products/streamforge-product.png",
  PRODUCT_XAVIER: "/images/products/xavier-product.png",
  AEGIS_RAW: "/images/products/aegis/raw.jpg",
  AEGIS_ENHANCED: "/images/products/aegis/enhanced.jpg",
  AEGIS_SEGMENTATION: "/images/products/aegis/segmentation.png",
  AEGIS_HEATMAP: "/images/products/aegis/heatmap.jpg",
  BRAINIAC_WEARABLE: "/images/products/brainiac/wearable.png",
  BRAINIAC_PROCESSOR: "/images/products/brainiac/processor.png",
  BRAINIAC_SIGNAL: "/images/products/brainiac/signal-card.png",
  BRAINIAC_DASHBOARD: "/images/products/brainiac/dashboard-card.png",
  MOBILITY_FRONT: "/images/products/mobility/front.png",
  MOBILITY_REAR: "/images/products/mobility/rear.png",
  MOBILITY_SIDE: "/images/products/mobility/side.png",
  MOBILITY_ENVIRONMENT: "/images/products/mobility/environment.png",
  HERO_VIDEO: "/videos/comp-2.mp4",
  EDUCATION_HERO: "/images/education/hero-bg.png",
  RESEARCH_HERO: "/images/research/hero-robot-book.jpg",
  ABOUT_HERO: "/images/about/hero.png",
  ABOUT_ENGINE_ENGINEERING: "/images/about/engines/engineering.png",
  ABOUT_ENGINE_TALENT: "/images/about/engines/talent.png",
  ABOUT_ENGINE_PRODUCTS: "/images/about/engines/products.png",
  ABOUT_ENGINE_RESEARCH: "/images/about/engines/research.png",
  RESEARCH_TEAM_BG: "/images/research/team-bg.jpg",
  RESEARCH_TEAM_ROBOT: "/images/research/team-robot-cutout.png",
  RESEARCH_PAPER_KALMAN: "/images/research/papers/kalman-lab.jpg",
  RESEARCH_PAPER_TRUST_BOOK: "/images/research/papers/trust-robot-book.jpg",
  RESEARCH_PAPER_LOCOMOTION:
    "/images/research/papers/locomotion-underground.jpg",
  RESEARCH_PAPER_SCENE: "/images/research/papers/scene-rover.jpg",
  RESEARCH_PAPER_ELDER_CARE: "/images/research/papers/trust-sar-companion.jpg",
  RESEARCH_PAPER_METACOGNITION:
    "/images/research/papers/metacognition-brain.jpg",
  RESEARCH_PAPER_TRAFFIC: "/images/research/papers/traffic-signals.jpg",
  RESEARCH_PAPER_WEBSOCKET: "/images/research/papers/websocket-lab.jpg",
  HOME_EDUCATION_GAP: "/images/home/education-gap-visual.svg",
  HOME_DEPLOYMENT_GAP: "/images/home/deployment-gap-bg.svg",
  HOME_PRODUCT_GAP: "/images/home/product-gap-visual.svg",
  HOME_EXPERIENCE_GAP: "/images/home/experience-gap-visual.jpg",
  HOME_RESEARCH_GAP: "/images/home/research-gap-bg.jpg",
});

export const ROUTES = Object.freeze({
  BASE: "/",
  PRODUCTS: "/products",
  PRODUCTS_ROBOTICS: "/products/robotics",
  PRODUCTS_AI_PLATFORMS: "/products/ai-platforms",
  PRODUCTS_AUTOMATION: "/products/automation",
  PRODUCTS_BRAINIAC: "/products/brainiac",
  PRODUCTS_STREAMFORGE: "/products/streamforge",
  PRODUCTS_XAVIER: "/products/xavier",
  SERVICES: "/services",
  SERVICES_CONSULTING: "/services/consulting",
  SERVICES_INTEGRATION: "/services/integration",
  SERVICES_SUPPORT: "/services/support",
  SERVICES_TALENT: "/services/talent-as-a-service",
  SERVICES_ROBOTIC_ENGINEERING: "/services/robotic-engineering",
  SERVICES_EDUCATION: "/services/education",
  RESEARCH: "/research",
  RESEARCH_PUBLICATIONS: "/research/publications",
  RESEARCH_LABS: "/research/labs",
  EDUCATION: "/education",
  EDUCATION_WORKSHOPS: "/education/workshops",
  EDUCATION_COURSES: "/education/courses",
  NEWS: "/news",
  NEWS_PRESS_RELEASES: "/news/press-releases",
  NEWS_EVENTS: "/news/events",
  ABOUT_US: "/about-us",
  ABOUT_TRACTION: "/about-us#traction",
  ABOUT_SERVICES: "/about-us#services",
  FAQ: "/faq",
  JOIN_US: "/cohort",
  COHORT: "/cohort",
  CONTACT: "#contact",
  PRIVACY_POLICY: "/privacy-policy",
  TERMS_AND_CONDITIONS: "/terms-and-conditions",
  COOKIE_POLICY: "/cookie-policy",
});

/** External forms / third-party destinations */
export const EXTERNAL_LINKS = Object.freeze({
  WORKSHOP_WAITLIST:
    "https://docs.google.com/forms/d/e/1FAIpQLScIlTJG4jBTUtb4ksU-nM_3-Ynqd8wbqAvVg-e9mXj9ae_9iQ/viewform?usp=header",
});

export type HeaderOptionItem = {
  name: string;
  route?: string;
  icon?: string;
  hasChildren?: boolean;
  children?: HeaderOptionItem[];
};

export type HeaderOption = {
  name: string;
  route?: string;
  options: HeaderOptionItem[];
};

export const HEADER_OPTIONS: HeaderOption[] = [
  {
    name: "Products",
    route: ROUTES.PRODUCTS,
    options: [
      { name: "Overview", route: ROUTES.PRODUCTS },
      { name: "Robotics", route: ROUTES.PRODUCTS_ROBOTICS },
      { name: "AI Platforms", route: ROUTES.PRODUCTS_AI_PLATFORMS },
      { name: "Automation", route: ROUTES.PRODUCTS_AUTOMATION },
    ],
  },
  {
    name: "Services",
    route: ROUTES.ABOUT_SERVICES,
    options: [
      { name: "Overview", route: ROUTES.ABOUT_SERVICES },
      { name: "Consulting", route: ROUTES.BASE },
      { name: "Integration", route: ROUTES.BASE },
      { name: "Support", route: ROUTES.BASE },
    ],
  },
  {
    name: "Research",
    route: ROUTES.RESEARCH,
    options: [
      { name: "Overview", route: ROUTES.RESEARCH },
      { name: "Publications", route: ROUTES.RESEARCH_PUBLICATIONS },
      { name: "Labs", route: ROUTES.RESEARCH_LABS },
    ],
  },
  {
    name: "Education",
    route: ROUTES.EDUCATION,
    options: [
      { name: "Overview", route: ROUTES.EDUCATION },
      { name: "Workshops", route: ROUTES.EDUCATION_WORKSHOPS },
      { name: "Courses", route: ROUTES.EDUCATION_COURSES },
    ],
  },
  {
    name: "About",
    route: ROUTES.ABOUT_US,
    options: [
      { name: "Overview", route: ROUTES.ABOUT_US },
      { name: "Contact", route: ROUTES.CONTACT },
    ],
  },
];

export const FOOTER_CONTACT = Object.freeze({
  email: "admin@aurora-robotics.com",
  emailHref: "mailto:admin@aurora-robotics.com",
  phones: [
    {
      label: "Call",
      value: "+234 808 078 5472",
      href: "tel:+2348080785472",
    },
    {
      label: "International Call",
      value: "+34 600 070 617",
      href: "tel:+34600070617",
    },
    {
      label: "WhatsApp",
      value: "+234 705 750 0771",
      href: "https://wa.me/2347057500771",
    },
  ],
  websites: [
    {
      label: "www.aurora-robotics.com",
      href: "https://www.aurora-robotics.com",
    },
    {
      label: "bakel-bakel.github.io",
      href: "https://bakel-bakel.github.io/bakel-bakel.com",
    },
  ],
  community: {
    label: "Join the Community",
    href: "https://chat.whatsapp.com/G9ztUjUU8UzK64CURqsxRK",
  },
  tagline: "Forza Aurora",
});

export const FOOTER_SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/aurora-robotics-in",
    label: "LinkedIn",
  },
  {
    name: "X",
    href: "https://x.com/aurora_robots",
    label: "X (Twitter)",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@AuroraRoboticsNG",
    label: "YouTube",
  },
  {
    name: "GitHub",
    href: "https://github.com/Aurora-Robotics",
    label: "GitHub — Aurora Robotics",
  },
  {
    name: "GitHub",
    href: "https://github.com/Bakel-Bakel",
    label: "GitHub — Bakel Bakel",
  },
] as const;

export const FOOTER_COPYRIGHT =
  "Copyright © 2025 Aurora Robotics | All Rights Reserved.";

export const HOME_WEBINAR = Object.freeze({
  title: "Robotics Core Workshop 3.0",
  ctaLabel: "Register",
  ctaHref: EXTERNAL_LINKS.WORKSHOP_WAITLIST,
});

export const HOME_WHO = Object.freeze({
  title: "WHO WE ARE",
  description:
    "Aurora Robotics is a Nigerian AI and robotics company building world-class talent and autonomous systems for global impact. We train engineers through accessible, hands-on programmes and deploy their expertise across industrial projects, talent-as-a-service, proprietary products and cutting-edge research—closing the education, experience, deployment, product and research gaps within one company.",
  stats: [
    { value: "8+", label: "Projects Completed & Delivered" },
    { value: "100%", label: "Successful Delivery rate" },
    { value: "15+", label: "Brands, Partners and Clients" },
  ],
});

export const HOME_WE = Object.freeze({
  title: "We Close the Education Gap",
  stats: [
    {
      value: "2.1M",
      label: "GLOBAL TALENT SHORTFALL BY 2030",
    },
    {
      value: "60%",
      label: "UNTAPPED TALENT IS AFRICAN",
    },
  ],
  problem: {
    title: "The Problem",
    body: "Robotics is expensive to learn, and that steeply hinders skill acquisition — the real bottleneck in robotics is talent, not just technology.",
  },
  solution: {
    title: "The Solution",
    body: "Free and heavily subsidized robotics cohorts (the Core Workshop Series) that develop world-class engineers, plus the Aurora Robotics Tour (ART) — Africa's equivalent of NVIDIA GTC — bringing professional-grade hardware directly to students.",
  },
  cta: {
    label: "Join Waitlist",
    href: EXTERNAL_LINKS.WORKSHOP_WAITLIST,
  },
  image: {
    src: IMAGES.HOME_EDUCATION_GAP,
    alt: "Aurora Robotics Core Workshop 2 promotional graphic featuring the Yahboom Transbot",
  },
});

export const HOME_WE_CLOSE = Object.freeze({
  titleLines: ["We Close the", "Deployment Gap"],
  stats: [
    {
      value: "80%",
      label:
        "OF AI AND ROBOTICS PILOTS FAIL TO SCALE INTO FULL INDUSTRIAL PRODUCTION",
    },
    {
      value: "76%",
      label:
        "OF GLOBAL EXECUTIVES CITE SYSTEM INTEGRATION AS THEIR PRIMARY AUTOMATION HURDLE",
    },
  ],
  problem: {
    title: "The Problem",
    bodyLines: [
      "Industries need autonomous systems, but lack robotics",
      "partners capable of delivering them at scale.",
    ],
  },
  solution: {
    title: "Our Solution",
    bodyLines: [
      "We provide B2B robotics solutions and on-demand Talent-as-a-",
      "Service embedding trained engineers directly into client teams.",
    ],
  },
  cta: {
    label: "View Research",
    href: ROUTES.RESEARCH,
  },
  background: {
    src: IMAGES.HOME_DEPLOYMENT_GAP,
    alt: "Humanoid robots working along an industrial assembly line",
  },
});

export const HOME_PRODUCT = Object.freeze({
  title: "We Close the Product Gap",
  stats: [
    {
      value: "<20%",
      labelLines: ["OF COMPANIES HAVE APPLIED AI", "WHERE NEEDED"],
    },
    {
      value: "<1%",
      labelLines: ["OF HOMES OWN A CONSUMER ROBOT", "BEYOND CLEANING"],
    },
  ],
  problem: {
    title: "The Problem",
    bodyLines: [
      "Advanced AI and Robotics remain inaccessible to most",
      "businesses and households, limiting their products.",
    ],
  },
  solution: {
    title: "Our Solution",
    bodyLines: [
      "We develop and scale AI & Robotics products that solve",
      "practical problems and create sustainable commercial value.",
    ],
  },
  primaryCta: {
    label: "Build A Product With Us",
    href: ROUTES.CONTACT,
  },
  secondaryCta: {
    label: "View Our Products",
    href: ROUTES.PRODUCTS,
  },
  image: {
    src: IMAGES.HOME_PRODUCT_GAP,
    alt: "Brainiac EEG headset, wireless hub, and Active Mode control dashboard",
  },
});

export const HOME_EXPERIENCE = Object.freeze({
  titleLines: ["We Close The", "Experience Gap"],
  stats: [
    {
      value: "77%",
      labelLines: ["OF EMPLOYERS REPORT SEVERE", "HANDS-ON TALENT SHORTAGE"],
    },
    {
      value: "<10%",
      labelLines: ["OF ENGINEERING GRADS ARE", "IMMEDIATELY INDUSTRY-READY"],
    },
  ],
  problem: {
    title: "The Problem",
    bodyLines: [
      "Graduates need experience to get hired, but companies",
      "demand graduates who already have it.",
    ],
  },
  solution: {
    title: "Our Solution",
    bodyLines: [
      "Top cohort performers are converted into paid internships and",
      "full-time roles on real client contracts, turning raw talent into",
      "industry-ready professionals immediately.",
    ],
  },
  cta: {
    label: "View Our Track Record",
    href: ROUTES.ABOUT_TRACTION,
  },
  image: {
    src: IMAGES.HOME_EXPERIENCE_GAP,
    alt: "Engineer assembling robotics hardware in a workshop",
  },
});

export const HOME_RESEARCH = Object.freeze({
  title: "We Close The Research Gap",
  stats: [
    {
      value: "90%",
      labelLines: [
        "OF ADVANCED AI RESEARCH",
        "CONCENTRATED IN FEW GLOBAL HUBS",
      ],
    },
    {
      value: "<30%",
      labelLines: ["OF THEORETICAL RESEARCH", "TRANSLATES TO COMMERCIAL USE"],
    },
  ],
  problem: {
    title: "The Problem",
    bodyLines: [
      "The AI and robotics field use more researchers, dedicated",
      "institutions and platforms for high-impact innovation.",
    ],
  },
  solution: {
    title: "Our Solution",
    bodyLines: [
      "We operate specialized research units that produce industrial-grade",
      "discoveries and publications, turning research into real",
      "engineering capability.",
    ],
  },
  cta: {
    label: "View Research",
    href: ROUTES.RESEARCH,
  },
  background: {
    src: IMAGES.HOME_RESEARCH_GAP,
    alt: "Researcher in a lab coat collaborating with a humanoid robot",
  },
});

export const PRODUCTS_HERO_COPY = Object.freeze({
  eyebrow: "Proprietary AI & Robotics Products",
  title: "Technology built for the real world",
  descriptionLines: [
    "Aurora builds intelligent products for the hardest environments and",
    "most human problems — subsea infrastructure, industrial data,",
    "human-machine interaction, independent mobility.",
  ],
});

export const RESEARCH_HERO = Object.freeze({
  titleLine1: "WE RESEARCH",
  titleLine2: "ANYTHING ROBOTICS",
  description:
    "We cover the full breadth of robotics: theory, review, simulation, hands-on systems that work in cities, factories, classrooms and homes.",
  image: {
    src: IMAGES.RESEARCH_HERO,
    alt: "Humanoid robot holding a red book in front of a blackboard of mathematical formulas",
  },
});

export const ABOUT_HERO = Object.freeze({
  eyebrow: "Africa's One-Stop AI and Robotics Solution",
  titleLines: [
    "We train the talent. We build the",
    "systems. We move AI & robotics from",
    "possibility to deployment.",
  ],
  description:
    "Aurora Robotics Ltd (RC-8896924), a Nigerian AI/robotics company founded 2025, incorporated 6 October 2025, HQ Abuja — builds autonomous systems, develops engineering talent, creates proprietary products, and connects research to industrial deployment, from Nigeria to the world.",
  image: {
    src: IMAGES.ABOUT_HERO,
    alt: "Aurora team collaborating at workstations in a robotics lab",
  },
});

export const ABOUT_MISSION = Object.freeze({
  cards: [
    {
      id: "mission",
      title: "Our Mission",
      body: "Become the source the industry trusts to train, deploy, and distribute autonomous-systems talent and technology globally.",
    },
    {
      id: "vision",
      title: "Our Vision",
      body: "To be the institution the global robotics industry hires from, partners with, and benchmarks against.",
    },
    {
      id: "approach",
      title: "Our Approach",
      body: "Aurora trains engineers through practical and subsidised programmes, builds proprietary AI and robotics products for real environments, and partners with industry to deploy systems that work — connecting talent, technology, and deployment in one pipeline.",
      wide: true,
    },
  ],
});

export const ABOUT_TRACTION = Object.freeze({
  titleLines: ["Our Traction In Less Than A Year", "From Inception"],
  stats: [
    { value: "190+", label: "Engineers Trained" },
    { value: "22", label: "Talents Absorbed" },
    { value: "8", label: "Industrial Contracts" },
    { value: "6", label: "Industries Served" },
    { value: "6", label: "Research Units" },
    { value: "9+", label: "Published Papers" },
    { value: "4", label: "Flagship Products" },
    { value: "41", label: "Universities Reached" },
  ],
});

export const ABOUT_MILESTONES = Object.freeze({
  title: "Milestones",
  items: [
    {
      number: "01",
      year: "2025",
      title: "Foundation & Incorporation",
      body: "Aurora Robotics Ltd incorporated in Abuja — building Africa's AI and robotics pipeline from day one.",
    },
    {
      number: "02",
      year: "2025",
      title: "Core 1.0 — The First Proof",
      body: "Launched the first proof-of-concept programmes converting curiosity into deployable robotics talent.",
    },
    {
      number: "03",
      year: "2025",
      title: "Product Line Launch",
      body: "Shipped proprietary platforms spanning perception, data infrastructure, and human-machine systems.",
    },
    {
      number: "04",
      year: "2025",
      title: "University Network",
      body: "Expanded partnerships across campuses — workshops, labs, and internship pathways at scale.",
    },
    {
      number: "05",
      year: "2026",
      title: "Industry Deployment",
      body: "Moved systems from lab to field — connecting trained talent with real industrial contracts.",
    },
  ],
});

export const ABOUT_WIDER_REACH = Object.freeze({
  title: "Wider Reach",
  stats: [
    { value: "1500+", label: "In House Community" },
    { value: "4000+", label: "Company Wide Following" },
    { value: "41", label: "University Footprint" },
    { value: "2", label: "Talent-As-A-Service Engagements" },
  ],
  ctas: [
    {
      id: "track-record",
      label: "View Track Record",
      href: ROUTES.ABOUT_TRACTION,
      variant: "primary" as const,
    },
    {
      id: "capability-deck",
      label: "Request Capability Deck",
      href: ROUTES.CONTACT,
      variant: "outline" as const,
    },
    {
      id: "start-project",
      label: "Start A Project",
      href: ROUTES.CONTACT,
      variant: "outline" as const,
    },
  ],
});

export const ABOUT_TALENT_VALUE = Object.freeze({
  title: "How Aurora Turns Talent Into Industrial Value",
  description:
    "Five connected engines, each independently valuable, together a flywheel — training produces talent, talent delivers projects, research, and products, results strengthen the brand and attract the next generation.",
  engines: [
    {
      id: "education",
      number: "01",
      title: "Education & Training",
      body: "Core Workshop Series, university programmes, SWEP-as-a-Service, specialist tracks.",
      icon: "education" as const,
      featured: true,
    },
    {
      id: "engineering",
      number: "02",
      title: "Industrial B2B Engineering",
      body: "AI, robotics, automation, embedded hardware, maritime tech, inspection systems.",
      iconSrc: IMAGES.ABOUT_ENGINE_ENGINEERING,
    },
    {
      id: "talent",
      number: "03",
      title: "Talent-as-a-Service",
      body: "Vetted engineers join client teams as specialists, pods, or retained units.",
      iconSrc: IMAGES.ABOUT_ENGINE_TALENT,
    },
    {
      id: "products",
      number: "04",
      title: "Proprietary Products",
      body: "AEGIS-SUBSEA, Brainiac, StreamForge, Xavier, more in development.",
      iconSrc: IMAGES.ABOUT_ENGINE_PRODUCTS,
    },
    {
      id: "research",
      number: "05",
      title: "AI & Robotics Research",
      body: "Six specialised units producing publication-grade work, prototypes, datasets.",
      iconSrc: IMAGES.ABOUT_ENGINE_RESEARCH,
    },
  ],
});

export const RESEARCH_ABOUT = Object.freeze({
  title: "ABOUT",
  description:
    "Aurora Robotics builds the mathematical, perceptual and cognitive foundations for next generation autonomous systems. Our research spans rigorous expositions on estimation and trust modeling, systematic reviews of locomotion and scene understanding, and hands-on conference work in computer vision, edge computing, and accessible robotics education.",
  searchPlaceholder: "Search Titles, Venues, Technologies and more...",
  filters: {
    title: "Filters",
    groups: [
      {
        id: "research-areas",
        label: "Research Areas",
        defaultOpen: true,
        options: [
          "Mathematical Modeling",
          "Human-computer Interaction",
          "Semantic Mapping",
          "Mobile Manipulation",
          "Architecture",
        ],
      },
      {
        id: "tags",
        label: "Tags",
        defaultOpen: false,
        options: [
          "Survey",
          "Theory",
          "Simulation",
          "Field Robotics",
          "Education",
        ],
      },
      {
        id: "year",
        label: "Year",
        defaultOpen: false,
        options: ["2026", "2025", "2024", "2023"],
      },
    ],
  },
  papers: [
    {
      id: "kalman-filter",
      title:
        "The Kalman Filter Mathematical Exposition for Robotic State Estimation",
      authors: "Abdullahi Olalekan Abdulmumeen",
      image: {
        src: IMAGES.RESEARCH_PAPER_KALMAN,
        alt: "Humanoid robot studying mathematics on a blackboard",
      },
    },
    {
      id: "trust-sar",
      title:
        "Mathematical Modeling of Trust and Adaptive Autonomy in Socially Assistive Robotics (SAR)",
      authors: "Mashkur Olalekan Alaran",
      image: {
        src: IMAGES.RESEARCH_PAPER_TRUST_BOOK,
        alt: "Humanoid robot reading a red book",
      },
    },
    {
      id: "locomotion",
      title:
        "A Comparative Review Between Wheeled, Legged, and Hybrid Locomotion Platforms for Mobile Robotics",
      authors: "Meansworth David Mayasare, Bakel Bakel",
      image: {
        src: IMAGES.RESEARCH_PAPER_LOCOMOTION,
        alt: "Underground transit platform with curved tracks",
      },
    },
    {
      id: "scene-understanding",
      title:
        "Advancement in 3D Scene Understanding for Indoor Mobile Robots: A Systematic Review",
      authors: "Meansworth David Mayasare, Mashkur Olalekan Alaran",
      image: {
        src: IMAGES.RESEARCH_PAPER_SCENE,
        alt: "Engineer working with robotics hardware in a workshop",
      },
    },
    {
      id: "elder-care",
      title:
        "Long-Term User Engagement in Socially Assistive Robotics: A Review of Strategies for Elder Care",
      authors: "Mashkur Olalekan Alaran, Bakel Bakel",
      image: {
        src: IMAGES.RESEARCH_PAPER_ELDER_CARE,
        alt: "Humanoid robot assisting an elderly person",
      },
    },
    {
      id: "metacognition",
      title:
        "Metacognition in Cognitive Robots: A Survey of Uncertainty-Aware and Self-Monitoring Mechanisms",
      authors: "Abdullahi Olalekan Abdulmumeen, Bakel Bakel",
      image: {
        src: IMAGES.RESEARCH_PAPER_METACOGNITION,
        alt: "Digital illustration of a human brain with an embedded microchip",
      },
    },
    {
      id: "traffic",
      title:
        "Autonomous Traffic Signal Control Using YOLOv8 and Fourier-Based Congestion Estimation for Smart Cities",
      authors: "Bakel Bakel, Tikuochi Iheukwumere",
      image: {
        src: IMAGES.RESEARCH_PAPER_TRAFFIC,
        alt: "Traffic lights at an urban intersection",
      },
    },
    {
      id: "websocket-lab",
      title:
        "A Lightweight WebSocket-SSH Remote Laboratory Architecture for Robotics Education in Bandwidth-Constrained Regions",
      authors: "Bakel Bakel, Tikuochi Iheukwumere, Oluwatobi Ademosu",
      image: {
        src: IMAGES.RESEARCH_PAPER_WEBSOCKET,
        alt: "WebSocket remote laboratory graphic",
      },
    },
  ],
  pagination: {
    previousLabel: "Previous",
    nextLabel: "Next >",
    pages: [1, 2, 3, "ellipsis", 11] as const,
    activePage: 1,
  },
});

export const RESEARCH_TEAM = Object.freeze({
  titleLines: ["Looking to Join Our", "Research Team?"],
  description:
    "Work on mathematical foundations, perception systems, and field-ready robotics with Aurora. We welcome researchers, engineers, and builders who want their ideas to ship in the real world.",
  cta: {
    label: "Join Our Team",
    href: ROUTES.COHORT,
  },
  background: {
    src: IMAGES.RESEARCH_TEAM_BG,
    alt: "",
  },
  image: {
    src: IMAGES.RESEARCH_TEAM_ROBOT,
    alt: "Humanoid robot reading a book",
  },
});

export const COHORT_HERO = Object.freeze({
  eyebrow: "LEARN. BUILD. PROVE. EARN YOUR PLACE.",
  title: "SIGN UP FOR THE AURORA CORE 3.0 WORKSHOP",
  description:
    "Aurora workshops move from guided instruction into practical tasks, real tools, and a capstone that proves what you can do.",
});

export const COHORT_TRACKS = Object.freeze({
  title: "Choose Your Track",
  description:
    "Learn to code for free. Then build toward a specialty — take a single track or combine several where the timetable allows (e.g. Mobile Robotics + Computer Vision + AI in Robotics builds the foundations of an autonomous-systems engineer)",
  curriculumLabel: "View Curriculum",
  outlineLabel: "Curriculum Outline",
  enrollLabel: "Enroll for CORE 3.0",
  downloadLabel: "Download Curriculum",
  stack: {
    title: "BUILD MY LEARNING STACK",
    description: "Select 2+ tracks to preview a combined pathway below",
    clearLabel: "Clear Selection",
    pathwayLabel: "Your Combined Pathway",
    pathwayEmpty: "Select two or more tracks to preview a combined pathway.",
  },
  stats: [
    { value: "6", label: "Tracks Total" },
    { value: "8", label: "Weeks Per Specialist Track" },
    { value: "1", label: "Cohort, Aug 2026 - Jan 2027" },
  ],
  tagline:
    "A multi-track robotics programme where every learner chooses their own path - and can walk more than one",
  tracks: [
    {
      id: "iot",
      title: "IoT in Robotics",
      body: "Sensors, embedded devices, networking, MQTT, dashboards, remote control and edge intelligence",
      detail:
        "Bring your robots online. Work with ESP32 and Raspberry Pi embedded boards, wire sensor packs, and learn MQTT messaging and edge intelligence so machines can sense, report, and act from anywhere.",
      icon: "satellite" as const,
      modules: [
        "Module 1 - Embedded foundations & microcontrollers",
        "Module 2 - Sensor interfacing & data acquisition",
        "Module 3 - Networking, MQTT & edge intelligence",
        "Module 4 - Cloud dashboards & remote control",
      ],
      meta: [
        {
          label: "DURATION",
          value: "8 weeks - 2 live classes/week at 2 hrs each",
        },
        {
          label: "PREREQUISITE",
          value: "Programming Readiness Certificate",
        },
        {
          label: "DELIVERY",
          value: "Live online + remote lab + recordings",
        },
        {
          label: "CERTIFICATION",
          value: "Track Completion Certificate on weekly tasks + capstone",
        },
      ],
    },
    {
      id: "mobile",
      title: "Mobile Robotics",
      body: "ROS 2, simulation, mapping, localisation, SLAM, navigation and autonomous ground vehicles.",
      detail:
        "Build robots that move with purpose. Work in ROS 2 and simulation to map spaces, localise reliably, run SLAM, and navigate autonomous ground vehicles from waypoint to goal.",
      icon: "rover" as const,
      modules: [
        "Module 1 - ROS 2 fundamentals & robot bring-up",
        "Module 2 - Simulation, sensors & transforms",
        "Module 3 - Mapping, localisation & SLAM",
        "Module 4 - Navigation stacks & AGV missions",
      ],
      meta: [
        {
          label: "DURATION",
          value: "8 weeks - 2 live classes/week at 2 hrs each",
        },
        {
          label: "PREREQUISITE",
          value: "Programming Readiness Certificate",
        },
        {
          label: "DELIVERY",
          value: "Live online + remote lab + recordings",
        },
        {
          label: "CERTIFICATION",
          value: "Track Completion Certificate on weekly tasks + capstone",
        },
      ],
    },
    {
      id: "ai",
      title: "AI in Robotics",
      body: "Machine learning, deep learning and reinforcement learning applied to robot perception and decision-making",
      detail:
        "Give robots the ability to learn. Apply machine learning, deep learning, and reinforcement learning to perception pipelines and decision-making loops that run on real robotic systems.",
      icon: "ai" as const,
      modules: [
        "Module 1 - ML foundations for robotics",
        "Module 2 - Deep learning for perception",
        "Module 3 - Reinforcement learning for control",
        "Module 4 - Deploying models on robot systems",
      ],
      meta: [
        {
          label: "DURATION",
          value: "8 weeks - 2 live classes/week at 2 hrs each",
        },
        {
          label: "PREREQUISITE",
          value: "Programming Readiness Certificate",
        },
        {
          label: "DELIVERY",
          value: "Live online + remote lab + recordings",
        },
        {
          label: "CERTIFICATION",
          value: "Track Completion Certificate on weekly tasks + capstone",
        },
      ],
    },
    {
      id: "arm",
      title: "Robotic Arm",
      body: "Manipulator kinematics, motion planning, MoveIt 2 and practical pick-and-place systems.",
      detail:
        "Program manipulators with precision. Learn kinematics, motion planning, and MoveIt 2 to design practical pick-and-place systems that work in simulation and on hardware.",
      icon: "arm" as const,
      modules: [
        "Module 1 - Manipulator kinematics & frames",
        "Module 2 - Trajectory generation & control",
        "Module 3 - MoveIt 2 motion planning",
        "Module 4 - Pick-and-place systems & integration",
      ],
      meta: [
        {
          label: "DURATION",
          value: "8 weeks - 2 live classes/week at 2 hrs each",
        },
        {
          label: "PREREQUISITE",
          value: "Programming Readiness Certificate",
        },
        {
          label: "DELIVERY",
          value: "Live online + remote lab + recordings",
        },
        {
          label: "CERTIFICATION",
          value: "Track Completion Certificate on weekly tasks + capstone",
        },
      ],
    },
    {
      id: "vision",
      title: "Computer Vision",
      body: "Image processing, object detection, segmentation and visual systems that allow robots to understand their environment.",
      detail:
        "Teach robots to see. Build visual pipelines with image processing, object detection, and segmentation so machines can understand and act on their environment.",
      icon: "vision" as const,
      modules: [
        "Module 1 - Image processing & camera models",
        "Module 2 - Classical vision & feature pipelines",
        "Module 3 - Object detection & segmentation",
        "Module 4 - Vision systems on robots",
      ],
      meta: [
        {
          label: "DURATION",
          value: "8 weeks - 2 live classes/week at 2 hrs each",
        },
        {
          label: "PREREQUISITE",
          value: "Programming Readiness Certificate",
        },
        {
          label: "DELIVERY",
          value: "Live online + remote lab + recordings",
        },
        {
          label: "CERTIFICATION",
          value: "Track Completion Certificate on weekly tasks + capstone",
        },
      ],
    },
    {
      id: "programming",
      title: "Programming Robotics",
      body: "Python, Linux, Git and the foundations needed to enter technical robotics work with confidence.",
      detail:
        "Start where every roboticist begins. Build fluency in Python, Linux, and Git — the foundations you need to enter technical robotics work with confidence.",
      icon: "code" as const,
      modules: [
        "Module 1 - Python for robotics workflows",
        "Module 2 - Linux environments & tooling",
        "Module 3 - Git, collaboration & project structure",
        "Module 4 - Robotics readiness capstone",
      ],
      meta: [
        {
          label: "DURATION",
          value: "8 weeks - 2 live classes/week at 2 hrs each",
        },
        {
          label: "PREREQUISITE",
          value: "None — free gateway into CORE",
        },
        {
          label: "DELIVERY",
          value: "Live online + remote lab + recordings",
        },
        {
          label: "CERTIFICATION",
          value: "Programming Readiness Certificate",
        },
      ],
    },
  ],
});

export const COHORT_PROGRAM = Object.freeze({
  eyebrow: "How The Program Works",
  title: "One free step. Then the path is yours",
  steps: [
    {
      id: "free",
      title: "Free Gateway — Programming for Robotics",
      body: "Start with Python, Linux, and Git. Earn your Programming Readiness Certificate — the free entry into every specialist track.",
      badge: "FREE",
      badgeTone: "free" as const,
    },
    {
      id: "paid",
      title: "Core 3.0 Tracks — 5 paid specializations",
      body: "Choose IoT, Mobile Robotics, AI, Robotic Arm, or Computer Vision. Take one track or combine several where the timetable allows.",
      badge: "PAID",
      badgeTone: "paid" as const,
    },
  ],
  engineer: {
    title: "Tell Us What Kind of Engineer You Want to Be...",
    listLabel: "If You Want To Be...",
    combinationLabel: "Your Track Combination",
    whyLabel: "Why This Combination?",
    dateRange: "September 1, 2026 — January 31, 2027",
    registerLabel: "Register Here",
    calendarLabel: "Get Program Calendar",
    roles: [
      {
        id: "ugv",
        label: "A UGV Engineer",
        tracks: [
          { id: "mobile", title: "Mobile Robotics", icon: "rover" as const },
          { id: "arm", title: "Arm Robotics", icon: "arm" as const },
          { id: "vision", title: "Computer Vision", icon: "vision" as const },
        ],
        why: "UGV work needs machines that move, manipulate in the field, and see their surroundings — Mobile Robotics, Arm Robotics, and Computer Vision form that foundation.",
      },
      {
        id: "manipulation",
        label: "A Manipulation Engineer",
        tracks: [
          { id: "arm", title: "Arm Robotics", icon: "arm" as const },
          { id: "vision", title: "Computer Vision", icon: "vision" as const },
          { id: "ai", title: "AI in Robotics", icon: "ai" as const },
        ],
        why: "Manipulation systems combine precise arm control with visual perception and learning-based grasp decisions — Arm, Vision, and AI tracks together.",
      },
      {
        id: "systems",
        label: "A Robotics System Engineer",
        tracks: [
          { id: "mobile", title: "Mobile Robotics", icon: "rover" as const },
          { id: "iot", title: "IoT in Robotics", icon: "satellite" as const },
          { id: "programming", title: "Programming Robotics", icon: "code" as const },
        ],
        why: "System engineers stitch navigation, sensing networks, and reliable software foundations — Mobile, IoT, and Programming build that stack.",
      },
      {
        id: "perception",
        label: "A Perception Engineer",
        tracks: [
          { id: "vision", title: "Computer Vision", icon: "vision" as const },
          { id: "ai", title: "AI in Robotics", icon: "ai" as const },
          { id: "iot", title: "IoT in Robotics", icon: "satellite" as const },
        ],
        why: "Perception roles fuse cameras, learning models, and edge sensing pipelines — Vision, AI, and IoT cover the full sense-to-signal path.",
      },
      {
        id: "autonomous",
        label: "An Autonomous Systems Engineer",
        tracks: [
          { id: "mobile", title: "Mobile Robotics", icon: "rover" as const },
          { id: "vision", title: "Computer Vision", icon: "vision" as const },
          { id: "ai", title: "AI in Robotics", icon: "ai" as const },
        ],
        why: "Autonomous systems need navigation, sight, and intelligent decisions — Mobile Robotics, Computer Vision, and AI in Robotics are the classic trio.",
      },
    ],
  },
});

export const COHORT_HARDWARE = Object.freeze({
  eyebrow: "OWN THE HARDWARE",
  title: "For Robotic Arm, IoT, and Mobile Robotics",
  description:
    "Optional kits for learners who want to build on their own desk. Simulation and remote labs stay available either way — a kit is never required to complete CORE 3.0.",
  pricingLabel: "Pricing Coming Soon",
  kits: [
    {
      id: "arm",
      title: "Aurora Robotic Arm",
      body: "Multi-DOF arm, gripper, and controller pack for kinematics, motion planning, and pick-and-place practice at home.",
      icon: "arm" as const,
    },
    {
      id: "iot",
      title: "Aurora IoT Kit",
      body: "ESP32 + Raspberry Pi boards, sensor packs, and cabling for MQTT, dashboards, and edge intelligence labs.",
      icon: "satellite" as const,
    },
    {
      id: "mobile",
      title: "Aurora Mobile Kit",
      body: "Mobile base, LiDAR, and depth camera setup for mapping, localisation, SLAM, and navigation missions.",
      icon: "rover" as const,
    },
  ],
  banner: {
    body: "Simulation and remote-lab access is included regardless — a kit is always optional.",
    ctaLabel: "Browse the Marketplace",
    ctaHref: ROUTES.PRODUCTS,
  },
});

export const COHORT_PROVE = Object.freeze({
  title: "Prove What You Can Do",
  footer:
    "Top performers across all tracks form Aurora's recruitment pool for internships and competitive-robotics teams.",
  cards: [
    {
      id: "readiness",
      title: "Program Readiness Certificate",
      body: "Earned on passing the free gateway — proof you can code, collaborate, and enter specialist tracks.",
      icon: "medal" as const,
    },
    {
      id: "completion",
      title: "Track Completion Certificate",
      body: "Awarded for weekly tasks plus a portfolio-ready capstone in your chosen specialization.",
      icon: "certificate" as const,
    },
    {
      id: "multitrack",
      title: "Multi-Track Recognition",
      body: "Recognises learners who combine tracks into a coherent autonomous-systems or specialist pathway.",
      icon: "gear" as const,
    },
  ],
});

export const COHORT_ENROLL = Object.freeze({
  eyebrow: "— REGISTRATION & ENROLLMENT",
  title: "How To Enroll",
  ctaLabel: "Start the free Gateway",
  ctaHref: EXTERNAL_LINKS.WORKSHOP_WAITLIST,
  note: "Free gateway opens 24 Aug. Paid tracks begin 1 Sep.",
  steps: [
    {
      id: "01",
      title: "Enroll in the free Programming for Robotics Gateway",
      body: "Join the free gateway cohort and begin Python, Linux, and Git foundations with live classes and recordings.",
    },
    {
      id: "02",
      title: "Earn your programme-readiness certificate",
      body: "Pass the gateway assessment to unlock paid track enrollment.",
    },
    {
      id: "03",
      title: "Choose your Core 3.0 track — or combine several",
      body: "Pick IoT, Mobile, AI, Arm, or Vision. Stack compatible tracks where the timetable allows.",
    },
    {
      id: "04",
      title: "Build, ship, and earn your place",
      body: "Complete weekly tasks and a capstone. Top performers enter Aurora's internship and competition pipeline.",
    },
  ],
});

export const COHORT_FAQ = Object.freeze({
  title: "Frequently Asked Questions",
  items: [
    {
      id: "gateway-pay",
      question: "Do I have to pay for the gateway track?",
      answer:
        "No — the Programming for Robotics gateway is completely free. It is the one free step in the programme.",
    },
    {
      id: "core-free",
      question: "Is Core 3.0 itself free?",
      answer:
        "No — Core 3.0 specialist tracks are paid. The gateway is free; IoT, Mobile Robotics, AI, Robotic Arm, and Computer Vision are paid specializations.",
    },
    {
      id: "gateway-required",
      question: "Do I have to take the free gateway before a paid track?",
      answer:
        "Yes — complete the free gateway and earn your programme-readiness certificate to unlock paid track enrollment.",
    },
    {
      id: "multi-track",
      question: "Can I take more than one paid track?",
      answer:
        "Yes — take one track or combine several where the timetable allows.",
    },
    {
      id: "robot-kit",
      question: "Do I need to buy a robot kit?",
      answer:
        "No — kits are optional. Simulation and remote-lab access are included either way; a kit is never required to complete Core 3.0.",
    },
    {
      id: "fall-behind",
      question: "What happens if I fall behind during the 8 weeks?",
      answer:
        "Live sessions are recorded so you can catch up. Stay in touch with mentors and keep weekly tasks moving when you can.",
    },
  ],
  cta: {
    title: "Ready To Run Into the Unknown?",
    body: "One free step. Six specialist tracks. A capstone that proves what you can do — and a community that has your back.",
    primary: {
      label: "Start Free Gateway",
      href: EXTERNAL_LINKS.WORKSHOP_WAITLIST,
    },
    secondary: {
      label: "Explore Paid Tracks",
      href: "#tracks",
    },
  },
  legal:
    "AURORA ROBOTICS LTD | RC-8896924 | Abuja, Nigeria | admin@aurora-robotics.com",
});

export const COHORT_REGISTER = Object.freeze({
  title: "Register for the Robotics Core 3.0 Workshop",
  description:
    "Registering for this cohort gives you lifetime access to all resources released during this cohort.",
  submitLabel: "Submit Application",
  roles: [
    "Student",
    "Recent Graduate",
    "Professional",
    "Researcher",
    "Educator",
    "Other",
  ],
  fields: {
    firstName: {
      label: "First Name",
      placeholder: "First Name",
      required: true,
    },
    lastName: { label: "Last Name", placeholder: "Last Name", required: true },
    email: { label: "Email", placeholder: "Email", required: true },
    institution: {
      label: "Tertiary Institution",
      placeholder: "Tertiary Institution",
      required: true,
    },
    role: { label: "Role", placeholder: "Select role", required: true },
    course: {
      label: "Course of Study",
      placeholder: "Course of Study",
      required: true,
    },
    social: {
      label: "Social Media",
      placeholder: "LinkedIn URL",
      required: false,
    },
  },
});

export const EDUCATION_HERO = Object.freeze({
  titleLines: [
    "WE DO NOT JUST TEACH ROBOTICS.",
    "WE BUILD THE PEOPLE WHO WILL",
    "BUILD THE FUTURE.",
  ],
  descriptionLines: [
    "Subsidised cohorts, remote robotics labs, robot kits,",
    "university training, and internship pathways — designed to",
    "take African engineers from curiosity to career.",
  ],
  tagline: "LEARN IT · BUILD IT · DEPLOY IT.",
  primaryCta: {
    label: "Join the Waitlist",
    href: EXTERNAL_LINKS.WORKSHOP_WAITLIST,
  },
  stats: [
    { value: "190+", label: "Engineers Trained" },
    { value: "3", label: "Cohorts" },
    { value: "22", label: "Universities Reached" },
    { value: "15+", label: "International Workshops" },
    { value: "1500+", label: "Community Members" },
  ],
});

export const EDUCATION_SYSTEM = Object.freeze({
  eyebrow: "THE EDUCATION SYSTEM",
  title: "One Education System, Many Ways To Enter and Grow",
  descriptionLines: [
    "Whether you join through the free community, a gateway workshop, a paid specialist",
    "track, a university programme, a roadshow, or a competition — every path leads toward",
    "internships, research teams, and product development roles within Aurora and beyond.",
  ],
  cards: [
    {
      id: "theory",
      title: "Theory First, Practice Always",
      bodyLines: [
        "Concepts are taught clearly, then immediately converted into",
        "code, simulations, hardware tasks and working demonstrations.",
      ],
    },
    {
      id: "access",
      title: "Access before Exclusion",
      bodyLines: [
        "Free gateway training, subsidised fees, recordings, remote",
        "laboratories and optional kits reduce the barriers that normally",
        "keep learners out of robotics.",
      ],
    },
    {
      id: "proof",
      title: "Proof Before Promises",
      bodyLines: [
        "Assessment focuses on what learners can build. Portfolios,",
        "GitHub repositories, demos and capstones become visible",
        "evidence of skill.",
      ],
    },
    {
      id: "pathway",
      title: "Learning that leads somewhere",
      bodyLines: [
        "Top performance can lead to internships, competitive teams,",
        "research, leadership, Talent-as-a-Service placements and",
        "industrial work.",
      ],
    },
  ],
  primaryCta: {
    label: "Join the Waitlist",
    href: EXTERNAL_LINKS.WORKSHOP_WAITLIST,
  },
});

export const JOIN_US_GALAXY = Object.freeze({
  eyebrow: "— SIX WAYS TO ENTER",
  title: "The Aurora Galaxy",
  description:
    "Every door is real. Pick the one that fits where you are — and where you want to go",
  cards: [
    {
      id: "community",
      index: "01",
      title: "Join The Community",
      body: "Enter through WhatsApp and Discord for free learning, opportunities, conversations and the people behind the machines.",
      ctaLabel: "Join The Community",
      href: ROUTES.COHORT,
      icon: "chat" as const,
      featured: true,
    },
    {
      id: "associate",
      index: "02",
      title: "Become An Associate",
      body: "Carry the Aurora presence into your circles, community and professional networks to represent something larger than yourself.",
      ctaLabel: "Apply As Associate",
      href: ROUTES.COHORT,
      icon: "associate" as const,
    },
    {
      id: "workshop",
      index: "03",
      title: "Take A Workshop",
      body: "Master one specialized track on campus or at our facility. Join a cohort, complete an objective and move with a higher skill.",
      ctaLabel: "Explore Tracks",
      href: ROUTES.COHORT,
      icon: "tools" as const,
    },
    {
      id: "build",
      index: "04",
      title: "Get An Internship",
      body: "Our internships are earned through visible performance, research and projects produced within the labs, foundry, community or as associate.",
      ctaLabel: "View Internship Path",
      href: ROUTES.COHORT,
      icon: "launch" as const,
    },
    {
      id: "idea",
      index: "05",
      title: "Co-Found A Product",
      body: "Bring the ideas that you think the world needs. We help map it with a path and resources for you to build it.",
      ctaLabel: "Submit An Idea",
      href: ROUTES.COHORT,
      icon: "idea" as const,
    },
    {
      id: "bring-aurora",
      index: "06",
      title: "Bring Aurora To You",
      body: "Host a private event, workshop, meet or partnership opportunity with the Aurora team to build something valuable together.",
      ctaLabel: "Start A Conversation",
      href: ROUTES.COHORT,
      icon: "building" as const,
    },
  ],
});

export const JOIN_US_COMMUNITY = Object.freeze({
  eyebrow: "— STAY INFORMED. GROW VISIBLY.",
  title: "Community Is Where Aurora Begins",
  description:
    "Join on WhatsApp or Discord — place yourself inside the process, conversations and relationships shaping the work. It is the people, not just product.",
  whatsapp: {
    label: "Join WhatsApp",
    href: "https://chat.whatsapp.com/",
  },
  discord: {
    label: "Join Discord",
    href: "https://discord.com/",
  },
  offersTitle: "What Our Community Offers",
  offers: [
    {
      id: "training",
      title: "Free Training and Learning",
      body: "Take part in selected free classes, technical sessions, clinics, talks and community challenges.",
      icon: "graduation" as const,
      featured: true,
    },
    {
      id: "builders",
      title: "Meet Fellow Builders",
      body: "Find collaborators in robotics, AI, embedded systems, software, design, research, business and technical communication.",
      icon: "users" as const,
    },
    {
      id: "access",
      title: "Inside Access",
      body: "Receive early information about workshops, scholarships, events, competitions, projects, internships and company announcements.",
      icon: "eye" as const,
    },
    {
      id: "public",
      title: "Build In Public",
      body: "Share prototypes, code, research ideas and unfinished work, then receive feedback from people who understand the journey.",
      icon: "tools" as const,
    },
    {
      id: "board",
      title: "Opportunity Board",
      body: "See collaboration calls, volunteer roles, research teams, competitions, client needs and selected work opportunities.",
      icon: "briefcase" as const,
    },
    {
      id: "remember",
      title: "A Community That Remembers You",
      body: "Consistency is noticed. The people who contribute, help others and keep showing up become visible across Aurora.",
      icon: "heart" as const,
    },
  ],
  associate: {
    title: "Become An Aurora Associate",
    description:
      "Associates carry Aurora into universities, communities, workplaces, and professional networks — creating presence, not just reposting. You represent something larger than yourself.",
    callout: {
      title: "Represent Excellence!",
      bodyLines: [
        "Belonging to something larger — excellence, courage, service, willingness to run into the",
        "unknown.",
      ],
    },
    doTitle: "What Associates Do",
    doItems: [
      {
        id: "represent",
        title: "Represent",
        body: "Carry the Aurora identity with pride in your university, community, or workplace.",
        icon: "flag" as const,
      },
      {
        id: "grow",
        title: "Grow",
        body: "Build local communities, organize campus activities, bring people into the network.",
        icon: "growth" as const,
      },
      {
        id: "connect",
        title: "Connect",
        body: "Identify opportunities, connect useful people. Be a bridge between Aurora and your world.",
        icon: "link" as const,
      },
    ],
    receiveTitle: "What Associates Receive",
    receiveItems: [
      {
        id: "recognition",
        title: "Recognition",
        body: "Visible profile in the Aurora network, featured in community spotlights and events.",
        icon: "eye" as const,
      },
      {
        id: "leadership",
        title: "Leadership Experience",
        body: "Real experience running local initiatives — not just a title, but a job.",
        icon: "badge" as const,
      },
      {
        id: "access",
        title: "Closer Access",
        body: "Direct line to Aurora leadership, invitation-only programs, priority consideration for opportunities.",
        icon: "target" as const,
      },
    ],
    benefits: [
      {
        id: "rewards",
        title: "Reserved Benefits",
        bullet: "check" as const,
        items: [
          "Merchandise — Issued By Contribution",
          "Complimentary Hardware Kits — Issued By Contribution",
          "Priority Access To New Programmes And Events",
        ],
      },
      {
        id: "standard",
        title: "Reserved Benefits",
        bullet: "info" as const,
        items: [
          "Consistent — You Show Up, Every Time.",
          "Professional — You Communicate, You Follow Through.",
          "Responsive — You Reply, You Act, You Care.",
          "Worthy Of The Green Identity",
        ],
      },
    ],
    cta: {
      title: "Fly Excellence. Fly Green",
      description: "The green identity is earned. Apply to carry it.",
      applyLabel: "Apply to Become An Associate",
      applyHref: ROUTES.COHORT,
      networkLabel: "Meet the Associate Network",
      networkHref: ROUTES.COHORT,
    },
  },
});

export const JOIN_US_SIGN = Object.freeze({
  eyebrow: "— LEARN. BUILD. PROVE. EARN YOUR PLACE.",
  title: "Sign Up for An Aurora Workshop",
  description:
    "For people tired of learning technology only in theory — guided instruction into practical tasks, real tools, a capstone that proves capability.",
  tracks: [
    {
      id: "programming",
      title: "Programming for Robotics",
      body: "Python, C++, and ROS 2 fundamentals — the language layer every roboticist needs. This is the free gateway into the Core ecosystem.",
      icon: "code" as const,
    },
    {
      id: "iot",
      title: "IoT in Robotics",
      body: "Sensor networks, embedded systems, and real-time data pipelines connecting robots to the physical world and to each other.",
      icon: "satellite" as const,
    },
    {
      id: "mobile",
      title: "Mobile Robotics",
      body: "Autonomous navigation, path planning, SLAM and control systems — build robots that move intelligently through real environments.",
      icon: "rover" as const,
    },
    {
      id: "ai",
      title: "AI in Robotics",
      body: "Machine learning, reinforcement learning, and decision-making systems that give robots the ability to perceive, reason, and act.",
      icon: "ai" as const,
    },
    {
      id: "arm",
      title: "Robotic Arm",
      body: "Kinematics, motion planning, and manipulation — program industrial-grade arms for precision tasks and automation workflows.",
      icon: "arm" as const,
    },
    {
      id: "vision",
      title: "Computer Vision",
      body: "Image processing, object detection, depth estimation, and visual SLAM — teach robots to see and understand their environment.",
      icon: "vision" as const,
    },
  ],
  promisesTitle: "What The Workshop Should Promise",
  promises: [
    "Live Instructor-Led Classes + Recordings + Community",
    "Weekly Practical Tasks Building Toward One Capstone",
    "Simulation / Shared Hardware / Remote-Lab / Own-A-Robot Options",
    "Portfolio-Ready Outputs (Code, Demos, Docs)",
    "Option To Combine Tracks For Cross-Disciplinary Depth",
    "Continued Support After The Live Teaching Period Ends",
  ],
});

export const JOIN_US_BECOME = Object.freeze({
  intern: {
    title: "Become An Intern",
    lead: "Internships are earned, not applied to. They are awarded for top performance, consistency, willingness to learn, passion, and display of excellence.",
    body: "Aurora watches how learners solve problems, show up, and contribute — then invites the strongest into real work inside products, research, and operations.",
    ctaLabel: "How Aurora Internships Work",
    ctaHref: ROUTES.COHORT,
    lookForTitle: "What We Look For",
    lookFor: [
      {
        id: "performance",
        title: "Performance",
        body: "You finish what you start.",
        icon: "bolt" as const,
      },
      {
        id: "consistency",
        title: "Consistency",
        body: "You keep showing up, not just when it's exciting.",
        icon: "timer" as const,
      },
      {
        id: "curiosity",
        title: "Curiosity",
        body: "You ask why, you dig deeper, you experiment.",
        icon: "bulb" as const,
      },
      {
        id: "leadership",
        title: "Leadership & Responsibility",
        body: "You own your work and your word.",
        icon: "badge" as const,
      },
    ],
  },
  cofound: {
    eyebrow: "— THE IDEA MAY SOUND IMPOSSIBLE. SAY IT ANYWAY.",
    title: "Co-Found a Product With Aurora",
    description:
      "Got a product idea that keeps returning — a strange robot, an intelligent device, a system for an overlooked industry? Bring it.",
    ideas: [
      "A robot that sorts e-waste for recycling",
      "A drone that plants trees in degraded land",
      "An AI that diagnoses crop diseases from photos",
      "A system that monitors bridge structural health",
      "An exoskeleton for factory workers",
      "A wearable that tracks athlete recovery",
      "A robot that inspects solar farms at night",
      "An intelligent device for rural water systems",
    ],
    highlightedIdea: "A system that monitors bridge structural health",
    convictionTitle: "You bring the conviction",
    convictionBody:
      "We help build the company around it — testing whether the problem is real, the technology works, and a sustainable product can be built. Not decorating a concept with a pitch deck.",
    supports: [
      {
        id: "technical",
        title: "Technical Direction",
        body: "Architecture, feasibility, engineering milestones — we help test whether it can be built.",
        icon: "monitor" as const,
      },
      {
        id: "business",
        title: "Business Direction",
        body: "Validation, business model, positioning, pricing, route-to-customer.",
        icon: "chart" as const,
      },
      {
        id: "team",
        title: "A Build Team",
        body: "Engineers, researchers, designers, operators drawn from the Aurora talent network.",
        icon: "users" as const,
      },
      {
        id: "mvp",
        title: "MVP Support",
        body: "Prototype resources, possible funding — subject to validation, never guaranteed.",
        icon: "flask" as const,
      },
      {
        id: "company",
        title: "Company-building support",
        body: "Identity, pitch-prep, partnership strategy, grant and investor readiness.",
        icon: "building" as const,
      },
      {
        id: "agreement",
        title: "A Clear Agreement",
        body: "Ownership, IP, roles, decision rights, funding — settled before serious work begins.",
        icon: "document" as const,
      },
    ],
  },
  pathway: {
    title: "How The Product Pathway Works",
    steps: [
      {
        index: "01",
        title: "Pitch the idea",
        body: "Explain the problem, why it matters, and why your solution should exist.",
      },
      {
        index: "02",
        title: "Validate the Problem",
        body: "Talk to real users. Confirm the problem is real, not just interesting.",
      },
      {
        index: "03",
        title: "Prove Feasibility",
        body: "We define the smallest technical experiment that can show whether the core idea works.",
      },
      {
        index: "04",
        title: "Agree the Partnership",
        body: "Roles, equity, IP, milestones and contributions are written down before the full build.",
      },
      {
        index: "05",
        title: "Build the MVP",
        body: "A focused team turns the validated concept into a working first product.",
      },
      {
        index: "06",
        title: "Pilot and Grow",
        body: "We seek real users, measure results and decide whether to improve, commercialise, fund or stop.",
      },
    ],
  },
  notice: {
    label: "Important",
    body: "Submitting an idea does not guarantee acceptance, funding or a co-founder relationship. Aurora selects projects based on problem value, technical feasibility, founder commitment, strategic fit, and available capacity.",
  },
});

export const JOIN_US_BRING = Object.freeze({
  eyebrow: "— OPEN THE DOOR. WE WILL BRING THE MACHINES.",
  title: "Bring Aurora Into Your World",
  description:
    "For people who can give Aurora presence, a platform, a partnership, or a commercial opportunity — rather than joining as a learner or builder.",
  offerings: [
    {
      id: "campus",
      title: "Campus Workshops",
      body: "Bring Aurora instructors to your campus for hands-on robotics and AI workshops tailored to your students.",
      icon: "campus" as const,
    },
    {
      id: "swep",
      title: "SWEP-as-a-Service",
      body: "Transform industrial training into a practical on-campus experience aligned with departmental outcomes.",
      icon: "swep" as const,
    },
    {
      id: "tour",
      title: "Aurora Robotics Tour",
      body: "Host a public demonstration, masterclass or hands-on robotics experience in your city or institution.",
      icon: "tour" as const,
      featured: true,
    },
    {
      id: "lab",
      title: "Laboratory Activation",
      body: "Work with Aurora to plan practical robotics infrastructure, curriculum, equipment and instructor support.",
      icon: "lab" as const,
    },
  ],
  dealsTitle: "Have A Deal or Opportunity for Us?",
  deals: [
    {
      id: "institutions",
      title: "For Institutions",
      body: "Universities, polytechnics, schools, departments and NGOs seeking programmes, infrastructure or partnership.",
      icon: "institution" as const,
    },
    {
      id: "companies",
      title: "For Companies",
      body: "Businesses exploring robotics, AI, automation, training or product collaboration with Aurora.",
      icon: "company" as const,
    },
    {
      id: "events",
      title: "For Event Organisers",
      body: "Conferences, expos, festivals and campus events that want live demos, workshops or keynotes.",
      icon: "event" as const,
    },
    {
      id: "connectors",
      title: "For Connectors",
      body: "People who can introduce Aurora to unique opportunities, partners, clients or platforms.",
      icon: "connector" as const,
    },
  ],
  conversation: {
    title: "Start A Conversation",
    description:
      "Select the option that best describes your opportunity, and we will route you to the right team.",
    options: [
      { id: "schools", label: "Schools", icon: "campus" as const },
      { id: "workplace", label: "Workplace", icon: "company" as const },
      { id: "events", label: "Events", icon: "event" as const },
      { id: "client", label: "Client Project", icon: "client" as const },
      { id: "partnership", label: "Partnership", icon: "partnership" as const },
      { id: "lead", label: "Business Lead", icon: "lead" as const },
    ],
    ctaLabel: "Start A Conversation",
    ctaHref: ROUTES.CONTACT,
  },
});

export const JOIN_US_MOVE = Object.freeze({
  eyebrow: "MOVE WITH INTENT",
  title: "LEAVE NOTHING TO CHANCE",
  subtitle: "RUN INTO THE UNKNOWN",
});

export const PRODUCTS_AEGIS = Object.freeze({
  eyebrow: "Industrial Intelligence - Energy & Maritime",
  title: "AEGIS-SUBSEA",
  description:
    "AI-powered pipeline integrity platform converting degraded underwater footage into actionable intelligence.",
  problem: {
    title: "The Problem",
    body: "Subsea footage is dark, noisy, and glare-distorted. Human review is slow and subjective. Operators need faster, more consistent pipeline-condition intelligence from footage they already collect.",
  },
  stages: [
    {
      label: "Raw Subsea Frame",
      image: IMAGES.AEGIS_RAW,
    },
    {
      label: "After Enhancement",
      image: IMAGES.AEGIS_ENHANCED,
    },
    {
      label: "Segmentation",
      image: IMAGES.AEGIS_SEGMENTATION,
    },
    {
      label: "Heat-Map",
      image: IMAGES.AEGIS_HEATMAP,
    },
  ],
  capabilities: {
    title: "Core capabilities",
    items: [
      {
        title: "Image Enhancement for poor visibility",
        description:
          "Deblurring, contrast recovery, colour correction, and noise reduction tuned for underwater optics",
      },
      {
        title: "Pipeline/Infrastructure segmentation",
        description:
          "Semantic segmentation isolating pipe walls, flanges, welds, supports, and surrounding seabed",
      },
      {
        title: "Corrosion and anomaly detection with overlays",
        description:
          "Surface degradation scoring with heat-map overlays on original footage for inspection review",
      },
      {
        title: "Centreline / edge tracking for robotic guidance",
        description:
          "Real-time pipe-centreline following and edge-aware navigation for ROV/AUV path planning",
      },
    ],
  },
  designedFor: {
    title: "Designed For",
    items: [
      "Oil and gas pipeline operators",
      "LNG and offshore infrastructure owners",
      "ROV / AUV inspection teams",
      "Marine asset-integrity and environmental-monitoring partners",
    ],
  },
  howItWorks: {
    title: "How AEGIS Works",
    steps: [
      {
        number: "01",
        title: "Ingest",
        description: "Accept raw subsea footage — any resolution, any rig",
      },
      {
        number: "02",
        title: "Enhance",
        description: "Deblur, denoise, colour-correct in the vision pipeline",
      },
      {
        number: "03",
        title: "Detect",
        description: "Segment pipeline, flag corrosion, score anomalies",
      },
      {
        number: "04",
        title: "Guide",
        description: "Output centreline and edge paths for ROV navigation",
      },
      {
        number: "05",
        title: "Report",
        description: "Generate inspection reports with timestamped overlays",
      },
    ],
  },
  status: {
    title: "Product Status",
    body: "AEGIS has been validated in simulation, real water, and real subsea footage in Nigeria and Spain. Corrosion intelligence and commercial deployment are currently in development.",
  },
  cta: {
    title: "Inspect Smarter. Act Earlier",
    pilotLabel: "Discuss A Pilot",
    pilotHref: ROUTES.CONTACT,
  },
});

export const PRODUCTS_QOREL = Object.freeze({
  eyebrow: "Industrial Data - Edge Computing",
  title: "Qorel",
  description:
    "Edge-native industrial data gateway moving operational data from PLCs, SCADA, sensors, and legacy equipment into modern databases, cloud, dashboards, AI pipelines, and digital twins — without sacrificing reliability.",
  problem: {
    title: "The Problem",
    body: "Writes machine signals to a durable local edge stream before sending downstream. If internet, server, or cloud fails, data buffers, retries, replays, and recovers — automatically.",
  },
  architecture: {
    title: "Data Flow Architecture",
    steps: [
      {
        label: "MACHINES",
        description: "PLC · SCADA · Sensors",
        icon: "machines" as const,
        accent: false,
      },
      {
        label: "STREAMFORGE",
        description: "Edge Gateway",
        icon: "streamforge" as const,
        accent: true,
      },
      {
        label: "DURABLE STREAM",
        description: "Buffer · Retry · Replay",
        icon: "durable" as const,
        accent: false,
      },
      {
        label: "VALIDATE",
        description: "Filter · Transform",
        icon: "validate" as const,
        accent: false,
      },
      {
        label: "DB / CLOUD / AI",
        description: "Kafka · API · Dashboard",
        icon: "cloud" as const,
        accent: false,
      },
    ],
  },
  connects: {
    title: "Connects",
    items: [
      {
        title: "Data Continuity During Outages",
        description:
          "Local Buffering With Configurable Retention — Internet Drops Do Not Mean Data Loss",
      },
      {
        title: "Traceability",
        description:
          "End-To-End Verification, Audit Logging, And Dead-Letter-Queues For Every Record",
      },
      {
        title: "Operational Independence",
        description:
          "Local First Edge Processing So Critical Logic Runs Whether Cloud Is Available Or Not",
      },
    ],
  },
  protects: {
    title: "Protects",
    items: [
      "Modbus, OPC UA, MQTT, PLCs, SCADA, Sensors, Controllers",
      "Databases, Kafka-Compatible Streams, APIs, Cloud Platforms, Dashboards, And Digital Twins.",
    ],
  },
  proofPoints: {
    title: "Multi Site Proof Points",
    items: [
      {
        location: "Lagos, Nigeria",
        metric: "12-node edge deployment",
        detail: "Concurrent Modbus + OPC UA ingestion",
      },
      {
        location: "Barcelona, Spain",
        metric: "48-hour disconnect simulation",
        detail: "Zero record loss, full replay on reconnect",
      },
      {
        location: "Milan, Italy",
        metric: "High-frequency sensor loop",
        detail: "1 kHz Sensor → Kafka stream, validated end-to-end",
      },
    ],
  },
  status: {
    title: "Product Status",
    body: "Advanced prototype with broad system architecture — positioned for design partnerships and paid pilots, not mission-critical production yet.",
  },
  cta: {
    title: "Make your industrial data trustworthy.",
    pilotLabel: "Request A Pilot",
    pilotHref: ROUTES.CONTACT,
  },
});

export const PRODUCTS_BRAINIAC = Object.freeze({
  eyebrow: "Human-Machine Interaction - Neurotechnology",
  title: "Brainiac",
  description:
    "Non-invasive EEG-based neural command interface translating selected brain-signal patterns into simple digital commands for games, robots, drones, research, and future assistive technology.",
  stages: [
    {
      label: "Wearable Headset",
      image: IMAGES.BRAINIAC_WEARABLE,
    },
    {
      label: "Embedded Processor",
      image: IMAGES.BRAINIAC_PROCESSOR,
    },
    {
      label: "Signal-Processing Model",
      image: IMAGES.BRAINIAC_SIGNAL,
    },
    {
      label: "Command Dashboard",
      image: IMAGES.BRAINIAC_DASHBOARD,
    },
  ],
  pipeline: {
    title: "The Signal Pipeline",
    items: [
      {
        title: "Wearable EEG Sensing",
        description:
          "Non-invasive dry-electrode headset capturing scalp-level electrical activity",
      },
      {
        title: "Amplification & Filtering",
        description:
          "Signal conditioning — low-noise amplification, bandpass filtering, artefact rejection",
      },
      {
        title: "Feature Extraction",
        description:
          "Onboard DSP isolating relevant frequency bands and temporal patterns",
      },
      {
        title: "Command Mapping",
        description:
          "Safe, bounded command mapping with real-time visual feedback on the dashboard",
      },
    ],
  },
  applications: {
    title: "Early Application Areas",
    items: [
      "Interactive gaming and live-demo experiences",
      "University research and neurotech education kits",
      "High-level commands for robot and drone simulations",
      "Future assistive interfaces for limited-mobility users",
    ],
  },
  status: {
    title: "Product Status",
    body: "Currently at concept, simulation, and prototype-architecture stage.",
  },
  cta: {
    title: "Build the Next Interface With Us",
    validationLabel: "Join Validation",
    validationHref: ROUTES.CONTACT,
  },
});

export const PRODUCTS_MOBILITY = Object.freeze({
  eyebrow: "Assistive Robotics — Autonomous Mobility",
  title: "Mobility With Dignity",
  description:
    "Autonomous mobility robot combining powered-wheelchair ergonomics with service-robot perception, navigation, and intelligence — for people with limited mobility in homes, hospitals, care facilities, airports, campuses, offices, museums, and public spaces.",
  stages: [
    {
      label: "Front Profile",
      image: IMAGES.MOBILITY_FRONT,
    },
    {
      label: "Rear Profile",
      image: IMAGES.MOBILITY_REAR,
    },
    {
      label: "Side Profile",
      image: IMAGES.MOBILITY_SIDE,
    },
    {
      label: "Environment Render With Real User",
      image: IMAGES.MOBILITY_ENVIRONMENT,
    },
  ],
  humanFirst: {
    title: "Human-First Experience",
    items: [
      {
        title: "Comfort-Focused Ergonomics",
        description:
          "Seating, Posture Support, And Customization Designed With Extended Daily Use In Mind — Not A Medical-Device Afterthought",
      },
      {
        title: "Simple Destination Requests",
        description:
          "Voice, Touchscreen, Tactile Switch, Or Companion-Interface Inputs — The User Chooses How They Interact",
      },
      {
        title: "Context-Aware Motion",
        description:
          "Smooth Acceleration And Deceleration, Automatic Stopping At Thresholds, And Awareness Of Surroundings",
      },
      {
        title: "Co-Designed With Users",
        description:
          "Built With Input From People With Disabilities, Caregivers, Occupational Therapists, And Care-Facility Staff",
      },
    ],
  },
  autonomy: {
    title: "Autonomy & Safety",
    items: [
      "Manual, Assisted, And Autonomous Modes",
      "Mapping, Localisation, Obstacle Avoidance, And Dynamic Perception",
      "Fail-Still Safety",
      "Offline-First Operation",
    ],
  },
  designedFor: {
    title: "Designed For",
    tags: [
      "Homes",
      "Hospitals",
      "Airports",
      "Campuses",
      "Offices",
      "Museums",
      "Care Facilities",
      "Public Spaces",
    ],
  },
  codesign: {
    title: "Co-design with Xavier",
    body: "We are actively inviting disability organisations, hospitals, airports, and care providers to shape Xavier from the earliest stages. Your operational knowledge directly informs our design decisions.",
    ctaLabel: "Express Interest in Co-design",
    ctaHref: ROUTES.CONTACT,
  },
  cta: {
    title: "Give people their world back.",
    pilotLabel: "Join the Pilot Network",
    pilotHref: ROUTES.CONTACT,
  },
});

export const PRODUCTS_INDUSTRY = Object.freeze({
  title: "Who we build with",
  industry: {
    title: "Industry & Institutions",
    items: [
      "Energy, Oil & Gas, And Maritime Operators",
      "Manufacturing, Utilities, Ports, And Logistics",
      "Hospitals, Airports, Campuses, And Care Facilities",
      "Disability Organisations And Public Agencies",
    ],
  },
  partners: {
    title: "Innovation Partners",
    items: [
      "Research Labs, Universities, And Startups",
      "System Integrators And Field Engineers",
      "Investors, Grant Organisations, And Accelerators",
      "Co-Development And Pilot Partners",
    ],
  },
});

export const PRODUCTS_FORM = Object.freeze({
  eyebrow: "Start a Conversation",
  title: "Build The Next Frontier With Aurora",
  description:
    "Tell us what you are interested in and we will route you to the right team with the right product context.",
  submitLabel: "Submit Enquiry",
  privacy:
    "We will never share your information. You will hear from us within 2-3 business days.",
  fields: {
    fullName: {
      label: "Full Name",
      placeholder: "Your Full Name",
      required: true,
    },
    email: {
      label: "Email Address",
      placeholder: "you@example.com",
      required: true,
    },
    organization: {
      label: "Organization",
      placeholder: "Company or Institution",
      required: false,
    },
    country: {
      label: "Country",
      placeholder: "Your Country",
      required: false,
    },
    message: {
      label: "Message",
      placeholder: "Tell us about your interests, use case or questions...",
      required: false,
    },
  },
});

export type ProductCard = {
  name: string;
  description: string;
  image: string;
  href: string;
  imageClassName?: string;
};

export const PRODUCTS_COMPANY = Object.freeze({
  title: "One company, endless applications",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  ctaLabel: "Read More",
  items: [
    {
      name: "Brainiac",
      description:
        "EEG-Based Neural Command Interface. Brainiac is Aurora Robotics’ non-invasive brain-computer interface designed to translate human brain activity into digital control commands for games, drones, robots, and assistive systems.",
      image: IMAGES.PRODUCT_BRAINIAC,
      href: ROUTES.PRODUCTS_BRAINIAC,
    },
    {
      name: "StreamForge",
      description:
        "StreamForge is Aurora Robotics’ edge-native industrial data gateway, built to solve one of the biggest problems in modern automation: industrial machines generate valuable data, but that data is often trapped inside PLCs, SCADA systems, sensors, legacy machines, and unstable site networks.",
      image: IMAGES.PRODUCT_STREAMFORGE,
      href: ROUTES.PRODUCTS_STREAMFORGE,
    },
    {
      name: "Xavier",
      description:
        "XAVIER is Aurora Robotics’ autonomous mobility robot, designed to merge the comfort and practicality of powered-wheelchair ergonomics with the intelligence of service-robot autonomy.",
      image: IMAGES.PRODUCT_XAVIER,
      href: ROUTES.PRODUCTS_XAVIER,
    },
  ] satisfies ProductCard[],
});

/** FCMB-style outer content band — full width on mobile, capped on desktop */
export const SITE_SHELL =
  "mx-auto w-full max-lg:max-w-none max-w-[var(--site-max-width)] px-[var(--site-edge)] lg:px-8 min-[2560px]:px-12";

/** @deprecated Use SiteShell component */
export const SITE_CONTAINER = SITE_SHELL;

/** Nav pill inner padding — logo / Join Us edges */
export const SITE_INNER_NAV = "px-5 sm:px-8 lg:px-10 min-[2560px]:px-12";

/** Content inset — matches nav pill at every breakpoint for alignment */
export const SITE_INNER_CONTENT = "px-5 sm:px-8 lg:px-10 min-[2560px]:px-12";

/** @deprecated Use SITE_INNER_NAV or SITE_INNER_CONTENT */
export const SITE_INNER = SITE_INNER_NAV;

/** @deprecated Use SiteContent component */
export const SITE_CONTENT_INSET = SITE_INNER_CONTENT;
