import type { Metadata } from "next";
import Link from "next/link";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { FOOTER_CONTACT, ROUTES } from "@/lib/constants";
import { NestError, nestFetch } from "@/lib/bff/nest";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Unsubscribe",
  description: "Confirm you no longer want Aurora Robotics marketing email.",
  robots: { index: false, follow: false },
};

type Search = Promise<Record<string, string | string[] | undefined>>;

function first(value: string | string[] | undefined) {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value[0] ?? "";
  return "";
}

export default async function UnsubscribePage({
  searchParams,
}: {
  searchParams: Search;
}) {
  const token = first((await searchParams).token).trim();

  let email = "";
  let error = "";

  if (!token) {
    error =
      "This unsubscribe link is missing its token. Open the link from the email, or write to us and we will turn marketing off.";
  } else {
    try {
      const result = await nestFetch<{ ok?: boolean; email?: string }>(
        `/enter-first/unsubscribe?token=${encodeURIComponent(token)}`,
      );
      email = result.email ?? "";
    } catch (err) {
      error =
        err instanceof NestError
          ? err.messages[0] ?? err.message
          : "We could not complete that unsubscribe. Write to us and we will turn marketing off.";
    }
  }

  return (
    <section className="bg-white text-[#151514]">
      <SiteShell className="pt-28 pb-16 sm:pt-32 lg:pt-36">
        <SiteContent>
          <div className="mx-auto max-w-xl text-center">
            <p className="font-display text-xs uppercase tracking-[0.16em]">
              Core 3.0
            </p>
            <h1 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              {error ? "Unsubscribe not completed" : "You are unsubscribed"}
            </h1>
            <p className="mt-4 font-sans text-base leading-relaxed text-[#757575]">
              {error
                ? error
                : email
                  ? `Marketing email to ${email} is turned off. Course and payment messages can still be sent when they are about an enrollment you made.`
                  : "Marketing email for this address is turned off. Course and payment messages can still be sent when they are about an enrollment you made."}
            </p>
            <p className="mt-4 font-sans text-sm text-[#757575]">
              Need help?{" "}
              <a className="font-semibold text-[#151514] underline" href={FOOTER_CONTACT.emailHref}>
                {FOOTER_CONTACT.email}
              </a>
            </p>
            <Link
              href={ROUTES.CORE_3}
              className="mt-8 inline-flex rounded-lg bg-aurora-lime px-6 py-3 font-sans text-sm font-semibold text-[#151514]"
            >
              Back to Core 3.0
            </Link>
          </div>
        </SiteContent>
      </SiteShell>
    </section>
  );
}
