"use client";

import { FormEvent, useState } from "react";

export function FooterNewsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmail("");
  };

  return (
    <div className="mt-8 max-w-sm">
      <h3 className="font-sans text-base font-semibold text-white">
        Subscribe to Newsletter
      </h3>
      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <label className="sr-only" htmlFor="footer-email">
          Email address
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 6h16v12H4V6Zm0-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4Zm2.35 1 7.65 5.1L21.65 6H6.35Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <input
            id="footer-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter Your Email"
            className="h-12 w-full rounded-lg bg-white pr-4 pl-11 text-sm text-[#171717] placeholder:text-[#9ca3af] outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="h-12 w-full rounded-lg bg-aurora-lime text-sm font-semibold text-black transition-opacity hover:opacity-90"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
