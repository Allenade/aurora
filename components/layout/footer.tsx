import {
  FOOTER_CONTACT,
  FOOTER_COPYRIGHT,
  FOOTER_SOCIAL_LINKS,
} from "@/lib/constants";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { cn } from "@/lib/utils";
import { AuroraLogo } from "./aurora-logo";
import { FooterNewsletter } from "./footer-newsletter";

function SocialIcon({ name }: { name: string }) {
  if (name === "LinkedIn") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452z" />
      </svg>
    );
  }

  if (name === "X") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    );
  }

  if (name === "GitHub") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    );
  }

  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5v-11Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="m5 7 7 5 7-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8.5 4.5h-2A2 2 0 0 0 4.5 6.5c0 8.008 6.492 14.5 14.5 14.5a2 2 0 0 0 2-2v-2l-3.2-1.6-1.6 1.6a11.2 11.2 0 0 1-5.6-5.6l1.6-1.6L10.6 4.5H8.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3.75 12h16.5M12 3.75c2.4 2.6 3.6 5.4 3.6 8.25S14.4 17.65 12 20.25C9.6 17.65 8.4 14.85 8.4 12S9.6 6.35 12 3.75Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative mt-auto scroll-mt-24 overflow-hidden bg-[#0e0e0e] text-white"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        aria-hidden
      />

      <SiteShell className="relative py-14 lg:py-16 xl:py-20">
        <SiteContent>
          <Stagger
            className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 xl:gap-20"
            stagger={0.12}
          >
            {/* Brand column */}
            <StaggerItem className="flex flex-col">
              <AuroraLogo variant="footer" />
              <FooterNewsletter />
              <div className="mt-8 flex flex-col gap-3 sm:mt-10">
                <a
                  href={FOOTER_CONTACT.community.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 border-b border-aurora-lime/50 pb-1 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-aurora-lime transition-colors hover:border-aurora-lime hover:text-white"
                >
                  {FOOTER_CONTACT.community.label}
                  <span aria-hidden>→</span>
                </a>
                <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white/55">
                  {FOOTER_CONTACT.tagline}
                </p>
              </div>
            </StaggerItem>

            {/* Contact */}
            <StaggerItem>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-8 shrink-0 bg-aurora-lime" aria-hidden />
                <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-white lg:text-base">
                  Contact Us
                </h2>
              </div>

              <a
                href={FOOTER_CONTACT.emailHref}
                className="group mt-6 flex items-start gap-4 sm:mt-7"
              >
                <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-xl border border-aurora-lime/35 text-aurora-lime transition-colors group-hover:border-aurora-lime">
                  <MailIcon />
                </span>
                <span>
                  <span className="block font-sans text-xs uppercase tracking-[0.14em] text-white/40">
                    Email
                  </span>
                  <span className="mt-1 block font-sans text-lg font-semibold text-white transition-colors group-hover:text-aurora-lime sm:text-xl lg:text-2xl">
                    {FOOTER_CONTACT.email}
                  </span>
                </span>
              </a>

              <div className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
                {FOOTER_CONTACT.phones.map((phone) => {
                  const isExternal = phone.href.startsWith("http");
                  return (
                    <a
                      key={phone.label}
                      href={phone.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className={cn(
                        "group relative flex flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 transition-colors",
                        "hover:border-white/30",
                      )}
                    >
                      <span className="flex items-center gap-2 text-aurora-lime">
                        <PhoneIcon />
                        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em]">
                          {phone.label}
                        </span>
                      </span>
                      <span className="font-sans text-sm font-medium leading-snug text-white/80 transition-colors group-hover:text-white sm:text-[15px]">
                        {phone.value}
                      </span>
                    </a>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3">
                {FOOTER_CONTACT.websites.map((site) => (
                  <a
                    key={site.href}
                    href={site.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 font-sans text-sm text-white/55 transition-colors hover:text-aurora-lime"
                  >
                    <GlobeIcon className="text-white/35 transition-colors group-hover:text-aurora-lime" />
                    {site.label}
                  </a>
                ))}
              </div>
            </StaggerItem>
          </Stagger>

          {/* Social constellation */}
          <Reveal className="mt-14 border-t border-white/10 pt-10 sm:mt-16 sm:pt-12 lg:mt-16">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-aurora-lime">
                  Signal Out
                </p>
                <p className="mt-2 max-w-md font-sans text-sm text-white/50 sm:text-base">
                  Follow the build — research, robots, and the people behind them.
                </p>
              </div>

              <ul className="relative flex flex-wrap items-end gap-3 sm:gap-4">
                <li
                  className="pointer-events-none absolute top-1/2 right-0 left-0 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent sm:block"
                  aria-hidden
                />
                {FOOTER_SOCIAL_LINKS.map((social, index) => (
                  <li
                    key={`${social.name}-${social.href}`}
                    className={cn(
                      "relative",
                      index % 2 === 1 && "sm:-translate-y-2",
                      index % 3 === 2 && "sm:translate-y-1",
                    )}
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      className={cn(
                        "flex size-12 items-center justify-center rounded-xl border border-white/15 bg-[#151514] text-white",
                        "transition-all duration-300",
                        "hover:-translate-y-1 hover:border-aurora-lime hover:bg-aurora-lime hover:text-[#151514]",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora-lime",
                        "sm:size-14",
                      )}
                    >
                      <SocialIcon name={social.name} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </SiteContent>
      </SiteShell>

      <div className="relative border-t border-white/10">
        <SiteShell className="py-5 sm:py-6">
          <SiteContent>
            <p className="font-sans text-sm text-white/40">{FOOTER_COPYRIGHT}</p>
          </SiteContent>
        </SiteShell>
      </div>
    </footer>
  );
};

export default Footer;
