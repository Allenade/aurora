export const IMAGES = Object.freeze({
  LOGO: "/images/aurora-logo.svg",
  ARROW_CIRCLE: "/images/arrow-circle.svg",
  ARROW_CIRCLE_DARK: "/images/arrow-circle-dark.svg",
  HERO_VISUAL: "/images/hero-visual.png",
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
    route: ROUTES.BASE,
    options: [
      { name: "Overview", route: ROUTES.BASE },
      { name: "Robotics", route: ROUTES.BASE },
      { name: "AI Platforms", route: ROUTES.BASE },
      { name: "Automation", route: ROUTES.BASE },
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

/** FCMB-style outer content band — full width on mobile, capped on desktop */
export const SITE_SHELL =
  "mx-auto w-full max-lg:max-w-none max-w-[var(--site-max-width)] px-[var(--site-edge)] lg:px-8 min-[2560px]:px-12";

/** @deprecated Use SiteShell component */
export const SITE_CONTAINER = SITE_SHELL;

/** Nav pill inner padding — logo / Join Us edges */
export const SITE_INNER_NAV =
  "px-5 sm:px-8 lg:px-10 min-[2560px]:px-12";

/** Content inset — matches nav pill at every breakpoint for alignment */
export const SITE_INNER_CONTENT =
  "px-5 sm:px-8 lg:px-10 min-[2560px]:px-12";

/** @deprecated Use SITE_INNER_NAV or SITE_INNER_CONTENT */
export const SITE_INNER = SITE_INNER_NAV;

/** @deprecated Use SiteContent component */
export const SITE_CONTENT_INSET = SITE_INNER_CONTENT;
