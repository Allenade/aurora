import Link from "next/link";
import {
  FOOTER_CONTACT,
  FOOTER_COPYRIGHT,
  FOOTER_SOCIAL_LINKS,
  FOOTER_URLS,
} from "@/lib/constants";
import { AuroraLogo } from "./aurora-logo";
import { FooterNewsletter } from "./footer-newsletter";

const FOOTER_NAV_HEADING_CLASS =
  "font-sans text-sm font-semibold uppercase tracking-wide text-white lg:text-base";

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

  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const Footer = () => {
  return (
    <footer className="mt-auto bg-[#121212] text-white">
      <div className="mx-auto max-w-[1813px] px-4 py-14 sm:px-6 lg:px-10 lg:py-16">
        <div className="flex flex-col gap-12 xl:flex-row xl:justify-between xl:gap-16">
          <div className="shrink-0 xl:max-w-sm">
            <AuroraLogo variant="footer" />
            <FooterNewsletter />
          </div>

          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6 lg:gap-10">
            {FOOTER_URLS.map((column) => (
              <div key={column.name} className="flex flex-col gap-4">
                <h4 className={FOOTER_NAV_HEADING_CLASS}>{column.name}</h4>
                <ul className="flex flex-col gap-3">
                  {column.routes.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.route}
                        className="font-sans text-sm text-white/55 transition-colors hover:text-aurora-lime"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="flex flex-col gap-4">
              <h4 className={FOOTER_NAV_HEADING_CLASS}>Contact Us</h4>
              <div className="flex flex-col gap-3 font-sans text-sm text-white/55">
                <a
                  href={FOOTER_CONTACT.emailHref}
                  className="transition-colors hover:text-aurora-lime"
                >
                  {FOOTER_CONTACT.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1813px] flex-col gap-6 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <p className="font-sans text-sm font-medium text-white">Connect with Us</p>
            <div className="flex items-center gap-4">
              {FOOTER_SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-white transition-colors hover:text-aurora-lime"
                >
                  <SocialIcon name={social.name} />
                </a>
              ))}
            </div>
          </div>

          <p className="font-sans text-sm text-white/45">{FOOTER_COPYRIGHT}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
