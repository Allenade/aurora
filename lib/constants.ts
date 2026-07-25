export const IMAGES = Object.freeze({
  LOGO: "/images/aurora-logo.svg",
  ARROW_CIRCLE: "/images/arrow-circle.svg",
  ARROW_CIRCLE_DARK: "/images/arrow-circle-dark.svg",
  HERO_VISUAL: "/images/hero-visual.png",
  PRODUCTS_HERO: "/images/products-hero-aurora-v2.jpg",
  JOIN_US_HERO: "/images/join-us/hero.png",
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
  FAQ: "/faq",
  JOIN_US: "/join-us",
  CONTACT: "/contact",
  PRIVACY_POLICY: "/privacy-policy",
  TERMS_AND_CONDITIONS: "/terms-and-conditions",
  COOKIE_POLICY: "/cookie-policy",
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
    route: ROUTES.BASE,
    options: [
      { name: "Overview", route: ROUTES.BASE },
      { name: "Consulting", route: ROUTES.BASE },
      { name: "Integration", route: ROUTES.BASE },
      { name: "Support", route: ROUTES.BASE },
    ],
  },
  {
    name: "Research",
    route: ROUTES.BASE,
    options: [
      { name: "Overview", route: ROUTES.BASE },
      { name: "Publications", route: ROUTES.BASE },
      { name: "Labs", route: ROUTES.BASE },
    ],
  },
  {
    name: "Education",
    route: ROUTES.BASE,
    options: [
      { name: "Overview", route: ROUTES.BASE },
      { name: "Workshops", route: ROUTES.BASE },
      { name: "Courses", route: ROUTES.BASE },
    ],
  },
  {
    name: "News",
    route: ROUTES.BASE,
    options: [
      { name: "Overview", route: ROUTES.BASE },
      { name: "Press Releases", route: ROUTES.BASE },
      { name: "Events", route: ROUTES.BASE },
    ],
  },
];

export type FooterLink = {
  name: string;
  route: string;
  isInternal?: boolean;
};

export type FooterColumn = {
  name: string;
  routes: FooterLink[];
};

export const FOOTER_URLS: FooterColumn[] = [
  {
    name: "Services",
    routes: [
      {
        name: "Talent-as-a-Service",
        route: ROUTES.BASE,
        isInternal: true,
      },
      {
        name: "Robotic Engineering",
        route: ROUTES.BASE,
        isInternal: true,
      },
      { name: "Education", route: ROUTES.BASE, isInternal: true },
    ],
  },
  {
    name: "Product",
    routes: [
      { name: "Brainiac", route: ROUTES.BASE, isInternal: true },
      {
        name: "StreamForge",
        route: ROUTES.BASE,
        isInternal: true,
      },
      { name: "Xavier", route: ROUTES.BASE, isInternal: true },
    ],
  },
  {
    name: "Company",
    routes: [
      { name: "About Us", route: ROUTES.BASE, isInternal: true },
      { name: "Research", route: ROUTES.BASE, isInternal: true },
      { name: "FAQ", route: ROUTES.BASE, isInternal: true },
      { name: "News", route: ROUTES.BASE, isInternal: true },
    ],
  },
];

export const FOOTER_CONTACT = Object.freeze({
  email: "support@aurorarobotics.com",
  emailHref: "mailto:support@aurorarobotics.com",
});

export const FOOTER_SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    name: "X",
    href: "https://x.com",
    label: "X (Twitter)",
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    label: "YouTube",
  },
] as const;

export const FOOTER_COPYRIGHT =
  "Copyright © 2025 Aurora Robotics | All Rights Reserved.";

export const HOME_WEBINAR = Object.freeze({
  title: "Robotics Core Workshop 2.0",
  ctaLabel: "Register",
  ctaHref: ROUTES.BASE,
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

export const JOIN_US_HERO_COPY = Object.freeze({
  eyebrow: "There is a place for you here",
  titleLine1: "Join the People Building",
  titleLine2: "Africa's AI & Robotics Future",
  descriptionLines: [
    "Aurora is a living network of builders, researchers, students, engineers,",
    "creators, and partners who learn and build together — whether",
    "entering robotics for the first time or bringing an idea that should exist.",
  ],
  slideCount: 3,
  activeSlide: 0,
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
      href: ROUTES.JOIN_US,
      icon: "chat" as const,
      featured: true,
    },
    {
      id: "associate",
      index: "02",
      title: "Become An Associate",
      body: "Carry the Aurora presence into your circles, community and professional networks to represent something larger than yourself.",
      ctaLabel: "Apply As Associate",
      href: ROUTES.JOIN_US,
      icon: "associate" as const,
    },
    {
      id: "workshop",
      index: "03",
      title: "Take A Workshop",
      body: "Master one specialized track on campus or at our facility. Join a cohort, complete an objective and move with a higher skill.",
      ctaLabel: "Explore Tracks",
      href: ROUTES.JOIN_US,
      icon: "tools" as const,
    },
    {
      id: "build",
      index: "04",
      title: "Get An Internship",
      body: "Our internships are earned through visible performance, research and projects produced within the labs, foundry, community or as associate.",
      ctaLabel: "View Internship Path",
      href: ROUTES.JOIN_US,
      icon: "launch" as const,
    },
    {
      id: "idea",
      index: "05",
      title: "Co-Found A Product",
      body: "Bring the ideas that you think the world needs. We help map it with a path and resources for you to build it.",
      ctaLabel: "Submit An Idea",
      href: ROUTES.JOIN_US,
      icon: "idea" as const,
    },
    {
      id: "bring-aurora",
      index: "06",
      title: "Bring Aurora To You",
      body: "Host a private event, workshop, meet or partnership opportunity with the Aurora team to build something valuable together.",
      ctaLabel: "Start A Conversation",
      href: ROUTES.JOIN_US,
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
      applyHref: ROUTES.JOIN_US,
      networkLabel: "Meet the Associate Network",
      networkHref: ROUTES.JOIN_US,
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
    ctaHref: ROUTES.JOIN_US,
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
    demoLabel: "Watch Demo",
    demoHref: ROUTES.BASE,
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
    tourLabel: "View Product Tour",
    tourHref: ROUTES.BASE,
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
    partnershipLabel: "Research Partnership",
    partnershipHref: ROUTES.RESEARCH,
    validationLabel: "Join Validation",
    validationHref: ROUTES.JOIN_US,
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
    partnerLabel: "Partner With Xavier",
    partnerHref: ROUTES.CONTACT,
    pilotLabel: "Join the Pilot Network",
    pilotHref: ROUTES.JOIN_US,
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
