export const IMAGES = Object.freeze({
  LOGO: "/images/aurora-logo.svg",
  ARROW_CIRCLE: "/images/arrow-circle.svg",
  ARROW_CIRCLE_DARK: "/images/arrow-circle-dark.svg",
  HERO_VISUAL: "/images/hero-visual.png",
  PRODUCTS_HERO: "/images/products-hero-aurora.png",
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
  HERO_VIDEO: "/videos/drone-build.mp4",
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
    route: ROUTES.SERVICES,
    options: [
      { name: "Overview", route: ROUTES.SERVICES },
      { name: "Consulting", route: ROUTES.SERVICES_CONSULTING },
      { name: "Integration", route: ROUTES.SERVICES_INTEGRATION },
      { name: "Support", route: ROUTES.SERVICES_SUPPORT },
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
    name: "News",
    route: ROUTES.NEWS,
    options: [
      { name: "Overview", route: ROUTES.NEWS },
      { name: "Press Releases", route: ROUTES.NEWS_PRESS_RELEASES },
      { name: "Events", route: ROUTES.NEWS_EVENTS },
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
