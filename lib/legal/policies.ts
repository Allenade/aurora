/**
 * Draft, pending legal review.
 * Public pages render this copy. Do not describe it as approved legal advice.
 */
import { FOOTER_CONTACT } from "@/lib/constants";
import { POLICY_VERSIONS } from "./versions";

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type LegalSection = {
  id: string;
  heading: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  slug: "privacy" | "terms" | "cookies" | "refund";
  title: string;
  description: string;
  updatedLabel: string;
  sections: LegalSection[];
};

const COMPANY = "AURORA ROBOTICS LTD";
const RC = "RC-8896924";
const EMAIL = FOOTER_CONTACT.email;
const ADDRESS = "Abuja, Nigeria";

const INTRO = `${COMPANY} (${RC}), a company incorporated in Nigeria and based in ${ADDRESS}.`;

export const PRIVACY_POLICY: LegalDocument = {
  slug: "privacy",
  title: "Privacy Policy",
  description:
    "How Aurora Robotics Ltd collects, uses, and stores personal data for Core 3.0 and this website under the Nigeria Data Protection Act 2023.",
  updatedLabel: `Version ${POLICY_VERSIONS.privacyVersion}`,
  sections: [
    {
      id: "controller",
      heading: "Who we are",
      blocks: [
        {
          type: "p",
          text: `${INTRO} We are the data controller for personal data collected on this website and through Core 3.0 enrollment.`,
        },
        {
          type: "p",
          text: `Contact: ${EMAIL}. You can also use the phone numbers published on this website.`,
        },
      ],
    },
    {
      id: "law",
      heading: "The law that applies",
      blocks: [
        {
          type: "p",
          text: "We handle personal data under the Nigeria Data Protection Act 2023 (NDPA) and the Nigeria Data Protection Regulation where it still applies. This policy explains what we collect, why, who we share it with, how long we keep it, and the rights you can exercise.",
        },
      ],
    },
    {
      id: "collect",
      heading: "Data the Core 3.0 form collects",
      blocks: [
        {
          type: "p",
          text: "When you enroll in Core 3.0 we collect the details you submit, plus a short technical record of that submission:",
        },
        {
          type: "ul",
          items: [
            "Identity and contact: first name, last name, optional middle name, email, phone, and optional WhatsApp number.",
            "Background you choose to give: gender, nationality, state of residence, current status, institution or organisation, experience level, how you heard about us, and whether you have joined the community.",
            "Course selection and the price snapshot for those courses at the time you enroll.",
            "Consent: acceptance of the Terms and Conditions and this Privacy Policy, the policy versions you accepted, the time of acceptance, your IP address, and your browser user agent.",
            "Marketing choice: whether you opted in to programme updates. This box is optional and off unless you tick it.",
            "Age: confirmation that your date of birth is accurate, and the date of birth itself.",
            "If you are under 18: parent or guardian name, guardian email, and a record that the guardian consented, with the time of that consent.",
            "Payment: Paystack reference, amount, currency, channel, and transaction identifiers needed to confirm or refund a payment. We do not store full card numbers.",
          ],
        },
      ],
    },
    {
      id: "why",
      heading: "Why we use it",
      blocks: [
        {
          type: "ul",
          items: [
            "To take your enrollment, reserve a seat, and perform the contract for the course you paid for or joined.",
            "To confirm your age and, where you are under 18, to record guardian consent before we accept the enrollment.",
            "To send service messages about payment, your place on the course, and schedule changes.",
            "To send marketing email only if you opt in. You can unsubscribe in every marketing message, or write to us.",
            "To detect abuse, apply rate limits, and keep an audit trail of consent.",
            "To meet accounting, tax, and regulatory duties, including refund records.",
          ],
        },
      ],
    },
    {
      id: "processors",
      heading: "Processors",
      blocks: [
        {
          type: "p",
          text: "We use service providers who process personal data on our instructions:",
        },
        {
          type: "ul",
          items: [
            "Paystack processes Core 3.0 payments, including card, bank, USSD, and Pay with Transfer. Paystack receives the amount, your email, name, phone, and the payment reference.",
            "Resend sends transactional email (payment and enrollment confirmation) and, if you opt in, marketing email. Resend receives the recipient address, name, and the message content.",
          ],
        },
        {
          type: "p",
          text: "Paystack operates from Nigeria. Resend may process email content outside Nigeria. Where data leaves Nigeria we rely on a lawful transfer basis under the NDPA, including contractual safeguards with the processor.",
        },
      ],
    },
    {
      id: "retention",
      heading: "How long we keep it",
      blocks: [
        {
          type: "p",
          text: "We keep enrollment records only as long as we need them for the course, for proof of consent, and for legal duties.",
        },
        {
          type: "ul",
          items: [
            "Unpaid or abandoned enrollments are removed or anonymised after 90 days.",
            "Paid enrollment records, including the price snapshot, payment reference, and consent record, are kept for about seven years (2,555 days) so we can meet accounting and dispute duties, then anonymised.",
            "Marketing suppression (the fact that you unsubscribed) is kept so we do not email you again.",
            "If you ask us to erase data sooner, we will do so unless we must keep a limited record for a legal claim, refund, or tax duty.",
          ],
        },
      ],
    },
    {
      id: "rights",
      heading: "Your rights",
      blocks: [
        {
          type: "p",
          text: "Under the NDPA you can ask us to:",
        },
        {
          type: "ul",
          items: [
            "Confirm whether we hold your data and give you a copy.",
            "Correct data that is inaccurate.",
            "Delete data we no longer have a reason to keep.",
            "Restrict or object to a use, including marketing.",
            "Withdraw consent. Withdrawal does not undo a payment already taken under a contract, but it stops optional marketing.",
            "Receive your enrollment data in a portable form where the NDPA requires it.",
          ],
        },
        {
          type: "p",
          text: `Write to ${EMAIL}. We may need to confirm it is you before we act. You can also complain to the Nigeria Data Protection Commission (NDPC).`,
        },
      ],
    },
    {
      id: "children",
      heading: "Students under 18",
      blocks: [
        {
          type: "p",
          text: "Core 3.0 asks for a date of birth. If that date means you are under 18, we do not complete enrollment unless a parent or guardian gives their name, email, and consent. We do not use a minor's data for marketing.",
        },
      ],
    },
    {
      id: "security",
      heading: "Security",
      blocks: [
        {
          type: "p",
          text: "Enrollment is sent over HTTPS to our servers. Payment details are collected by Paystack, not typed into this website. Access to enrollment records is limited to staff who need them to run the programme, payments, or a data request.",
        },
      ],
    },
  ],
};

export const TERMS: LegalDocument = {
  slug: "terms",
  title: "Terms and Conditions",
  description:
    "The terms that apply when you use the Aurora Robotics website and enroll in Core 3.0.",
  updatedLabel: `Version ${POLICY_VERSIONS.termsVersion}`,
  sections: [
    {
      id: "agreement",
      heading: "Agreement",
      blocks: [
        {
          type: "p",
          text: `These terms are between you and ${INTRO} By enrolling in Core 3.0 you confirm that you accept these terms and the Privacy Policy, including the version numbers shown on the form.`,
        },
      ],
    },
    {
      id: "programme",
      heading: "Core 3.0",
      blocks: [
        {
          type: "p",
          text: "Core 3.0 is a multi-track robotics programme. The courses open for enrollment, their descriptions, prices, seat limits, dates, and cutoff times are the ones published on this website from our course list. A course can be closed, full, or past its cutoff. We will not take payment for a course in one of those states.",
        },
        {
          type: "p",
          text: "You may select one course or several, up to eight. The amount you pay is the sum of the course prices at the moment you enroll. That sum is what Paystack charges. We do not publish a substitute price on this website.",
        },
      ],
    },
    {
      id: "payment",
      heading: "Payment",
      blocks: [
        {
          type: "p",
          text: "Paid enrollments are taken by Paystack. Channels can include card, bank, USSD, and Pay with Transfer. Your seat is confirmed when Paystack verifies the amount and currency. If the amount or currency does not match, we do not treat the enrollment as paid.",
        },
        {
          type: "p",
          text: "A course marked Free has no charge. You still need to submit the form, including consent and age details.",
        },
        {
          type: "p",
          text: "Refunds follow the Refund Policy published on this website. Paying does not waive that policy.",
        },
      ],
    },
    {
      id: "age",
      heading: "Age and guardians",
      blocks: [
        {
          type: "p",
          text: "You must give a true date of birth and confirm it. If you are under 18, a parent or guardian must give their name, email, and consent. We reject the enrollment if that consent is missing. You are responsible for the accuracy of the date of birth you enter.",
        },
      ],
    },
    {
      id: "conduct",
      heading: "Conduct and materials",
      blocks: [
        {
          type: "p",
          text: "Course materials, recordings, and the Aurora name stay ours or our licensors'. You receive a personal, non-transferable licence to use them for your own learning during and after the course, unless we say otherwise. You may not resell, republish, or share login-restricted materials.",
        },
        {
          type: "p",
          text: "Do not misuse the enrollment form, attempt to bypass a closed or full course, or interfere with the site. We may cancel an enrollment that was made with false details or by abusing the service.",
        },
      ],
    },
    {
      id: "changes",
      heading: "Changes",
      blocks: [
        {
          type: "p",
          text: "We may update a course date, teacher, or delivery detail. If we cancel a course you have paid for and we do not offer a suitable alternative you accept, you may ask for a refund under the Refund Policy. Price changes apply to new enrollments. A price already charged is the snapshot stored with your enrollment.",
        },
      ],
    },
    {
      id: "liability",
      heading: "Liability",
      blocks: [
        {
          type: "p",
          text: "The programme is educational. We do not guarantee a job, internship, certificate, or particular outcome. Nothing in these terms limits liability that Nigerian law does not allow us to limit. Otherwise our total liability arising out of an enrollment is limited to the amount you paid us for that enrollment.",
        },
      ],
    },
    {
      id: "law",
      heading: "Law and contact",
      blocks: [
        {
          type: "p",
          text: `These terms are governed by the laws of the Federal Republic of Nigeria. Courts in Abuja have jurisdiction, without limiting any right you have as a consumer. Questions: ${EMAIL}.`,
        },
      ],
    },
  ],
};

export const COOKIE_POLICY: LegalDocument = {
  slug: "cookies",
  title: "Cookie Policy",
  description:
    "How Aurora Robotics Ltd uses cookies on this marketing website.",
  updatedLabel: `Version ${POLICY_VERSIONS.privacyVersion}`,
  sections: [
    {
      id: "what",
      heading: "What this site stores",
      blocks: [
        {
          type: "p",
          text: `${INTRO} This marketing site does not use advertising cookies and does not run a third-party analytics cookie.`,
        },
        {
          type: "p",
          text: "Pages you read are public. Core 3.0 enrollment is submitted as a form request. We do not need a tracking cookie to show you the course list or to take that form.",
        },
      ],
    },
    {
      id: "paystack",
      heading: "Paystack",
      blocks: [
        {
          type: "p",
          text: "If you continue to Paystack to pay, you leave this site (or open Paystack's checkout). Paystack may set cookies that are necessary to take the payment and to reduce fraud. Those cookies are controlled by Paystack under its own policy. We do not read your card number from them.",
        },
      ],
    },
    {
      id: "control",
      heading: "Your choices",
      blocks: [
        {
          type: "p",
          text: "You can block or delete cookies in your browser. Blocking cookies on Paystack's checkout may stop a payment from completing. Blocking cookies on this marketing site should not stop you reading the pages.",
        },
        {
          type: "p",
          text: `Questions: ${EMAIL}. See also the Privacy Policy for how we handle the personal data in the enrollment form.`,
        },
      ],
    },
  ],
};

export const REFUND_POLICY: LegalDocument = {
  slug: "refund",
  title: "Refund Policy",
  description:
    "How refunds work for Aurora Robotics Core 3.0 payments taken through Paystack.",
  updatedLabel: `Version ${POLICY_VERSIONS.termsVersion}`,
  sections: [
    {
      id: "scope",
      heading: "Scope",
      blocks: [
        {
          type: "p",
          text: `This policy covers fees you pay to ${COMPANY} (${RC}) for Core 3.0 courses. The amount that can be refunded is the amount we actually charged for that enrollment, which is the course total stored when you enrolled. Free courses have nothing to refund.`,
        },
      ],
    },
    {
      id: "how",
      heading: "How to ask",
      blocks: [
        {
          type: "p",
          text: `Email ${EMAIL} from the address on the enrollment. Include your name, the Paystack reference, the tracks, and the reason. A refund is not automatic. We review the request, and an approved refund is sent back through Paystack to the original payment method.`,
        },
      ],
    },
    {
      id: "when",
      heading: "When we refund",
      blocks: [
        {
          type: "ul",
          items: [
            "You ask before the enrollment cutoff shown for that course, or within 7 days of payment if that course has no cutoff, and teaching for your track has not yet started.",
            "We cancel the course and do not place you on a date you accept.",
            "We took a payment in error, including a charge that did not match the course price or currency.",
            "Paystack confirms a duplicate charge for the same enrollment.",
          ],
        },
        {
          type: "p",
          text: "After teaching has started, a refund is exceptional and decided case by case. We may refuse a refund where the seat was used, materials were already provided, or the request is outside the window above.",
        },
      ],
    },
    {
      id: "timing",
      heading: "Timing",
      blocks: [
        {
          type: "p",
          text: "We aim to decide a complete request within 10 business days. After we approve it, Paystack returns the funds. Your bank or card issuer then posts the credit on its own timeline. We will email you when the refund is sent.",
        },
      ],
    },
  ],
};

export const LEGAL_DOCUMENTS = [
  PRIVACY_POLICY,
  TERMS,
  COOKIE_POLICY,
  REFUND_POLICY,
] as const;
