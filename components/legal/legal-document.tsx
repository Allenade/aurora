import Link from "next/link";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { ROUTES } from "@/lib/constants";
import type { LegalDocument } from "@/lib/legal/policies";

const LINKS = [
  { href: ROUTES.PRIVACY_POLICY, label: "Privacy Policy" },
  { href: ROUTES.TERMS_AND_CONDITIONS, label: "Terms and Conditions" },
  { href: ROUTES.COOKIE_POLICY, label: "Cookie Policy" },
  { href: ROUTES.REFUND_POLICY, label: "Refund Policy" },
] as const;

export function LegalDocumentView({ document }: { document: LegalDocument }) {
  return (
    <article className="bg-white text-[#151514]">
      <SiteShell className="pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36">
        <SiteContent>
          <header className="mx-auto max-w-3xl">
            <p className="font-display text-xs uppercase tracking-[0.16em] text-[#151514]">
              Aurora Robotics Ltd · RC-8896924
            </p>
            <h1 className="mt-3 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
              {document.title}
            </h1>
            <p className="mt-4 font-sans text-sm text-[#757575] sm:text-base">
              {document.description}
            </p>
            <p className="mt-2 font-sans text-xs uppercase tracking-[0.08em] text-[#757575]">
              {document.updatedLabel}
            </p>
          </header>

          <div className="mx-auto mt-10 max-w-3xl space-y-10">
            {document.sections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2 className="font-display text-xl font-semibold sm:text-2xl">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3">
                  {section.blocks.map((block, index) =>
                    block.type === "p" ? (
                      <p
                        key={`${section.id}-p-${index}`}
                        className="font-sans text-sm leading-relaxed text-[#3a3a3a] sm:text-base"
                      >
                        {block.text}
                      </p>
                    ) : (
                      <ul
                        key={`${section.id}-ul-${index}`}
                        className="list-disc space-y-2 pl-5 font-sans text-sm leading-relaxed text-[#3a3a3a] sm:text-base"
                      >
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ),
                  )}
                </div>
              </section>
            ))}
          </div>

          <nav className="mx-auto mt-14 flex max-w-3xl flex-wrap gap-x-5 gap-y-2 border-t border-[#e5e5e5] pt-6">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-sm font-semibold text-[#151514] underline decoration-[#151514]/30 underline-offset-4 hover:decoration-[#151514]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </SiteContent>
      </SiteShell>
    </article>
  );
}
