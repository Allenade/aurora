import { ROUTES } from "@/lib/constants";
import {
  buildCohortDateLine,
  chargedAmount,
  formatCoursePrice,
} from "./pricing";
import type { PublicCourse } from "./types";

export type ProgramStepView = {
  id: string;
  title: string;
  body: string;
  meta: string;
  ctaLabel: string;
  ctaHref: string;
  badge: string;
  badgeTone: "free" | "paid";
  trackIds?: string[];
};

function clip(value: string, max = 220) {
  const text = value.replace(/\s+/g, " ").trim();
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).trim()}…`;
}

export function buildProgram(courses: PublicCourse[]): {
  title: string;
  steps: ProgramStepView[];
  dateLine: string | null;
} {
  const dateLine = buildCohortDateLine(courses);
  const free = courses.filter((course) => chargedAmount(course) === 0);
  const paid = courses.filter((course) => chargedAmount(course) > 0);

  if (!courses.length) {
    return {
      title: "Choose your tracks, then build",
      dateLine: null,
      steps: [
        {
          id: "tracks",
          title: "Tracks are published on this page",
          body: "When enrollment is open, each course shows its name, description, price, seats, and dates.",
          meta: "Prices appear with the course list",
          ctaLabel: "Browse tracks",
          ctaHref: "#tracks",
          badge: "SOON",
          badgeTone: "paid",
        },
        {
          id: "enroll",
          title: "Enroll when checkout opens",
          body: "You pay the total shown for the tracks you select. This page does not stand in a price of its own.",
          meta: "Paystack",
          ctaLabel: "Enrollment",
          ctaHref: ROUTES.ENTER_FIRST_ENROLL,
          badge: "ENROLL",
          badgeTone: "paid",
        },
      ],
    };
  }

  const steps: ProgramStepView[] = [];
  if (free.length) {
    const names = free.map((course) => course.name).join(", ");
    steps.push({
      id: "free",
      title: free.length === 1 ? free[0].name : "Free tracks",
      body:
        free.length === 1
          ? `${free[0].name} is free, so it does not add to your total.${free[0].description ? ` ${clip(free[0].description)}` : ""}`
          : `${names} are free. Checkout adds nothing for these tracks.`,
      meta: "Free",
      ctaLabel: "Select free tracks",
      ctaHref: ROUTES.ENTER_FIRST_ENROLL,
      badge: "FREE",
      badgeTone: "free",
      trackIds: free.map((course) => course.slug),
    });
  }
  if (paid.length) {
    const amounts = [...new Set(paid.map((course) => formatCoursePrice(course)))];
    const priceSentence =
      amounts.length === 1
        ? `Each paid track is ${amounts[0]}.`
        : "Paid tracks are priced individually on the cards above.";
    steps.push({
      id: "paid",
      title: paid.length === 1 ? paid[0].name : `${paid.length} paid tracks`,
      body: `${priceSentence} The Paystack total is the sum of those prices for the tracks you select.`,
      meta: "Charged at the listed price",
      ctaLabel: "Browse tracks",
      ctaHref: "#tracks",
      badge: "PAID",
      badgeTone: "paid",
    });
  }

  let title = "Every track is charged at the price shown";
  if (free.length && paid.length) {
    title = "Free tracks stay free. Every other track is charged at the price shown";
  } else if (free.length && !paid.length) {
    title = "These tracks are free to join";
  }

  return { title, steps, dateLine };
}

/**
 * Catalogue summary card for the cohort program flow.
 * Counts, names, and prices come only from the course list.
 */
export function buildCatalogStep(courses: PublicCourse[]): ProgramStepView {
  if (!courses.length) {
    return {
      id: "catalog",
      title: "Core 3.0 tracks",
      body: "Tracks are published on this page when enrollment opens. Each one shows its name, price, seats, and dates.",
      meta: "Opening soon",
      ctaLabel: "Browse Tracks",
      ctaHref: "#tracks",
      badge: "SOON",
      badgeTone: "paid",
    };
  }

  const paid = courses.filter((course) => chargedAmount(course) > 0);
  const free = courses.length - paid.length;
  const names = courses.map((course) => course.name).join(", ");
  const amounts = [...new Set(paid.map((course) => formatCoursePrice(course)))];
  const priceSentence = !paid.length
    ? "Free to join."
    : amounts.length === 1
      ? `${paid.length === 1 ? "Price" : "Each paid track"}: ${amounts[0]}.`
      : "Each track is charged at the price shown on its card.";

  return {
    id: "catalog",
    title: `Core 3.0 — ${courses.length} ${courses.length === 1 ? "track" : "tracks"}`,
    body: clip(`${names}. ${priceSentence}`),
    meta: buildCohortDateLine(courses) ?? "Dates shown on each track",
    ctaLabel: "Browse Tracks",
    ctaHref: "#tracks",
    badge: paid.length ? `${paid.length} PAID` : `${free} FREE`,
    badgeTone: "paid",
  };
}

/** CTA line for the cohort FAQ block, built from the course list. */
export function cohortCtaBody(courses: PublicCourse[]) {
  const base =
    "One free step. A capstone that proves what you can do — and a community that has your back.";
  if (!courses.length) return base;
  const count = `${courses.length} ${courses.length === 1 ? "track" : "tracks"} listed`;
  return `One free step. ${count}, each at the price shown. A capstone that proves what you can do — and a community that has your back.`;
}

export type FaqItemView = {
  id: string;
  question: string;
  answer: string;
};

export function buildFaqItems(courses: PublicCourse[]): FaqItemView[] {
  const programming = courses.find((course) => course.slug === "programming");
  const programmingFree = programming
    ? chargedAmount(programming) === 0
    : false;

  const gateway = programming
    ? {
        id: "gateway-pay",
        question: `Do I have to pay for ${programming.name}?`,
        answer: programmingFree
          ? `No. ${programming.name} is free, and checkout charges nothing for it.`
          : `Yes. ${programming.name} is ${formatCoursePrice(programming)}. That amount is added to your total.`,
      }
    : {
        id: "gateway-pay",
        question: "Which tracks are free?",
        answer:
          "Only a course marked Free on this page is free. If a track shows a price, checkout charges that price.",
      };

  return [
    gateway,
    {
      id: "prices",
      question: "How is my total calculated?",
      answer: courses.length
        ? "Your total is the sum of the prices on the tracks you select. Paystack charges that total. Closed, full, and past-cutoff tracks cannot be added."
        : "Totals appear when the course list is available. This page does not show a stand-in price.",
    },
    {
      id: "prerequisite",
      question: "Do I have to finish one track before I can enroll in another?",
      answer:
        "No. You can enroll in any open track, or combine several. A track that is closed, full, or past its cutoff is not available.",
    },
    {
      id: "multi-track",
      question: "Can I take more than one track?",
      answer:
        "Yes. Take one track or combine several where the timetable allows. The total is the sum of the selected course prices.",
    },
    {
      id: "robot-kit",
      question: "Do I need to buy a robot kit?",
      answer:
        "No. Kits are optional. Simulation and remote-lab access are included either way; a kit is never required to complete the programme.",
    },
    {
      id: "fall-behind",
      question: "What happens if I fall behind during a track?",
      answer:
        "Live sessions are recorded so you can catch up. Stay in touch with mentors and keep weekly tasks moving when you can.",
    },
  ];
}

export function faqCta(courses: PublicCourse[]) {
  const free = courses.filter((course) => chargedAmount(course) === 0).length;
  const paid = courses.length - free;
  let body =
    "Enrollment opens on this page. A capstone proves what you can do — and a community that has your back.";
  if (courses.length && free && paid) {
    body = `${free} free ${free === 1 ? "track" : "tracks"} and ${paid} paid. The price on each card is what checkout charges.`;
  } else if (courses.length && free) {
    body = `${courses.length} free ${courses.length === 1 ? "track" : "tracks"}. A capstone proves what you can do.`;
  } else if (courses.length) {
    body = `${courses.length} ${courses.length === 1 ? "track" : "tracks"}, each charged at the price shown. A capstone proves what you can do.`;
  }

  return {
    title: "Ready To Run Into the Unknown?",
    body,
    primaryLabel: "Start enrollment",
    secondaryLabel: paid ? "Explore paid tracks" : "Explore tracks",
  };
}

export function readinessBody(courses: PublicCourse[]) {
  const programming = courses.find((course) => course.slug === "programming");
  if (programming && chargedAmount(programming) === 0) {
    return `Earned on ${programming.name}, which is free — proof you can code, collaborate, and continue into other tracks.`;
  }
  if (programming) {
    return `Earned on ${programming.name}. The fee is ${formatCoursePrice(programming)}, the price shown for that course.`;
  }
  return "Earned by completing a foundation track when one is listed — proof you can code, collaborate, and continue.";
}

export function buildEnrollSection(courses: PublicCourse[]) {
  const programming = courses.find((course) => course.slug === "programming");
  const dateLine = buildCohortDateLine(courses);
  const first = !programming
    ? {
        id: "01",
        title: "Choose the tracks listed on this page",
        body: "Each open course shows its price, seats, and dates. Your total is the sum of the tracks you select.",
      }
    : chargedAmount(programming) === 0
      ? {
          id: "01",
          title: `Enroll in ${programming.name}`,
          body: `${programming.name} is free.${programming.description ? ` ${clip(programming.description, 180)}` : ""}`,
        }
      : {
          id: "01",
          title: `Enroll in ${programming.name} at ${formatCoursePrice(programming)}`,
          body: `${programming.name} is charged at ${formatCoursePrice(programming)}. The price on the course card is the price Paystack uses.`,
        };

  return {
    note: dateLine
      ? `Course dates: ${dateLine}.`
      : "Dates are shown on each course when they are set.",
    steps: [
      first,
      {
        id: "02",
        title: "Confirm your details and consent",
        body: "Accept the terms, confirm your date of birth, and add a parent or guardian if you are under 18. Marketing email is optional and off unless you tick it.",
      },
      {
        id: "03",
        title: "Choose one track — or combine several",
        body: "Add any open track. Closed, full, and past-cutoff courses stay visible so you can see why they are unavailable.",
      },
      {
        id: "04",
        title: "Build, ship, and earn your place",
        body: "Complete weekly tasks and a capstone. Top performers enter Aurora's internship and competition pipeline.",
      },
    ],
  };
}
