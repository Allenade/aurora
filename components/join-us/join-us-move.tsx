import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { JOIN_US_MOVE } from "@/lib/constants";

const JoinUsMove = () => {
  const { eyebrow, title, subtitle } = JOIN_US_MOVE;

  return (
    <section className="bg-black">
      <SiteShell className="py-16 sm:py-20 lg:py-24 xl:py-28">
        <SiteContent>
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <svg
                width="48"
                height="8"
                viewBox="0 0 48 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 sm:h-2.5 sm:w-14"
                aria-hidden
              >
                <rect width="48" height="8" rx="1" fill="#C6FF00" />
              </svg>
              <p className="font-display text-xs uppercase tracking-[0.16em] text-[#c6ff00] sm:text-sm lg:text-base">
                {eyebrow}
              </p>
            </div>

            <h2 className="mt-5 font-display text-[clamp(1.5rem,5vw,3.5rem)] font-semibold uppercase leading-[1.1] tracking-wide text-[#fcfcfe] sm:mt-6">
              {title}
            </h2>

            <p className="mt-3 font-display text-[clamp(1rem,3.2vw,2rem)] font-medium uppercase leading-[1.15] tracking-wide text-[#5c5c5c] sm:mt-4">
              {subtitle}
            </p>
          </div>
        </SiteContent>
      </SiteShell>
    </section>
  );
};

export default JoinUsMove;
