import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { COHORT_PROVE } from "@/lib/constants";

function MedalIcon({ className }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      className={className}
      aria-hidden
    >
      <circle cx="14" cy="11" r="6.25" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M10.5 16.5 8 24l6-3.2L20 24l-2.5-7.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="14" cy="11" r="2.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function CertificateIcon({ className }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      className={className}
      aria-hidden
    >
      <rect
        x="5"
        y="4.5"
        width="18"
        height="14"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M9 9.5h10M9 13h7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M11 18.5v5l3-1.5 3 1.5v-5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GearIcon({ className }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      className={className}
      aria-hidden
    >
      <circle cx="14" cy="14" r="3.25" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M14 5.5v2.2M14 20.3v2.2M5.5 14h2.2M20.3 14h2.2M8 8l1.55 1.55M18.45 18.45 20 20M20 8l-1.55 1.55M9.55 18.45 8 20"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="14" cy="14" r="8.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const PROVE_ICONS = {
  medal: MedalIcon,
  certificate: CertificateIcon,
  gear: GearIcon,
} as const;

const CohortProve = () => {
  const { title, footer, cards } = COHORT_PROVE;

  return (
    <section className="bg-white">
      <SiteShell className="pb-12 sm:pb-14 lg:pb-16 xl:pb-20">
        <SiteContent>
          <Reveal
            as="h2"
            className="max-w-3xl font-display text-[1.75rem] font-semibold leading-tight text-[#151514] sm:text-3xl lg:text-4xl xl:text-[2.75rem]"
          >
            {title}
          </Reveal>

          <Stagger className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-6">
            {cards.map((card) => {
              const Icon = PROVE_ICONS[card.icon];
              return (
                <StaggerItem
                  as="article"
                  key={card.id}
                  className="rounded-2xl bg-[#151514] p-5 sm:p-6 lg:p-7"
                >
                  <span className="inline-flex text-white">
                    <Icon />
                  </span>
                  <h3 className="mt-5 font-sans text-lg font-semibold text-white sm:text-xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-[#adadad] sm:text-base">
                    {card.body}
                  </p>
                </StaggerItem>
              );
            })}
          </Stagger>

          <Reveal
            as="p"
            className="mx-auto mt-8 max-w-3xl text-center font-sans text-sm leading-relaxed text-[#757575] sm:mt-10 sm:text-base lg:text-lg"
          >
            {footer}
          </Reveal>
        </SiteContent>
      </SiteShell>
    </section>
  );
};

export default CohortProve;
