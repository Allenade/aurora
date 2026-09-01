import Link from "next/link";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { EDUCATION_SYSTEM } from "@/lib/constants";

const EducationSystem = () => {
  const { eyebrow, title, descriptionLines, cards, primaryCta } =
    EDUCATION_SYSTEM;

  return (
    <section className="bg-[#151514]">
      <SiteShell className="py-14 sm:py-16 lg:py-20 xl:py-24">
        <SiteContent>
          <Reveal as="header" className="max-w-5xl xl:max-w-6xl">
            <div className="flex items-center gap-3 sm:gap-4">
              <svg
                width="40"
                height="6"
                viewBox="0 0 40 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 sm:h-2 sm:w-12"
                aria-hidden
              >
                <rect width="40" height="6" rx="1" fill="#C6FF00" />
              </svg>
              <p className="font-display text-xs uppercase tracking-[0.16em] text-aurora-lime sm:text-sm lg:text-base">
                {eyebrow}
              </p>
            </div>

            <h2 className="mt-5 max-w-[18ch] font-display text-[1.65rem] font-semibold leading-[1.15] text-[#fcfcfe] sm:mt-6 sm:max-w-none sm:text-3xl lg:text-[40px] xl:text-[48px]">
              {title}
            </h2>

            <p className="mt-4 max-w-3xl font-sans text-sm leading-relaxed text-[#8a8a8a] sm:mt-5 sm:text-base lg:mt-6 lg:max-w-4xl lg:text-lg xl:max-w-none">
              <span className="lg:hidden">{descriptionLines.join(" ")}</span>
              <span className="hidden lg:block">
                {descriptionLines.map((line) => (
                  <span key={line} className="block xl:whitespace-nowrap">
                    {line}
                  </span>
                ))}
              </span>
            </p>
          </Reveal>

          <Stagger
            className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-6"
            stagger={0.1}
          >
            {cards.map((card) => (
              <StaggerItem
                key={card.id}
                as="article"
                className="border-l-[4px] border-aurora-lime bg-black px-5 py-6 sm:px-6 sm:py-7 lg:px-7 lg:py-8"
              >
                <h3 className="font-display text-lg font-semibold leading-snug text-[#fcfcfe] sm:text-xl lg:text-xl xl:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-[#8a8a8a] sm:mt-3.5 sm:text-[15px] lg:text-base">
                  <span className="xl:hidden">{card.bodyLines.join(" ")}</span>
                  <span className="hidden xl:block">
                    {card.bodyLines.map((line) => (
                      <span key={line} className="block whitespace-nowrap">
                        {line}
                      </span>
                    ))}
                  </span>
                </p>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-10 flex flex-col items-stretch gap-3 sm:mt-12 sm:flex-row sm:items-center sm:justify-start sm:gap-4 lg:mt-14">
            <Link
              href={primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl bg-aurora-lime px-7 py-3.5 font-sans text-base font-semibold text-[#151514] transition-opacity hover:opacity-90 sm:w-auto sm:min-w-[11.5rem] sm:px-8 sm:text-lg"
            >
              {primaryCta.label}
            </Link>
          </Reveal>
        </SiteContent>
      </SiteShell>
    </section>
  );
};

export default EducationSystem;
