"use client";

import { FormEvent, useState } from "react";
import { SiteContent, SiteShell } from "@/components/layout/site-shell";
import { Reveal } from "@/components/motion";
import { PRODUCTS_FORM } from "@/lib/constants";
import { cn } from "@/lib/utils";

const fieldClassName = cn(
  "w-full rounded-lg border border-white/10 bg-[#0d0d0d] px-4 py-3.5",
  "font-sans text-sm text-[#fcfcfe] placeholder:text-[#757575]",
  "outline-none transition-colors focus:border-aurora-lime/50 sm:text-base",
);

const ProductsForm = () => {
  const { fields } = PRODUCTS_FORM;
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFullName("");
    setEmail("");
    setOrganization("");
    setCountry("");
    setMessage("");
  };

  return (
    <section className="bg-black">
      <SiteShell className="py-14 sm:py-16 lg:py-20 xl:py-24 min-[2560px]:py-28">
        <SiteContent>
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span
              className="mb-4 h-1 w-10 shrink-0 rounded-full bg-aurora-lime sm:mb-5 sm:w-12"
              aria-hidden
            />
            <p className="font-display text-xs font-semibold uppercase tracking-wide text-aurora-lime sm:text-sm lg:text-base">
              {PRODUCTS_FORM.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-[#fcfcfe] sm:mt-5 sm:text-3xl lg:text-4xl xl:text-[44px] min-[2560px]:text-[56px]">
              {PRODUCTS_FORM.title}
            </h2>
            <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-[#a3a3a3] sm:mt-5 sm:text-base lg:text-lg">
              {PRODUCTS_FORM.description}
            </p>
          </Reveal>

          <Reveal
            as="div"
            className="mx-auto mt-10 max-w-3xl sm:mt-12 lg:mt-14"
            delay={0.1}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-[#151514] p-5 sm:p-8 lg:p-10"
            >
            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="product-full-name"
                  className="font-sans text-sm text-[#fcfcfe] sm:text-base"
                >
                  {fields.fullName.label}
                  {fields.fullName.required ? (
                    <span className="text-[#ff4d4f]" aria-hidden>
                      {" "}
                      *
                    </span>
                  ) : null}
                </label>
                <input
                  id="product-full-name"
                  name="fullName"
                  type="text"
                  required={fields.fullName.required}
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  placeholder={fields.fullName.placeholder}
                  className={fieldClassName}
                  autoComplete="name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="product-email"
                  className="font-sans text-sm text-[#fcfcfe] sm:text-base"
                >
                  {fields.email.label}
                  {fields.email.required ? (
                    <span className="text-[#ff4d4f]" aria-hidden>
                      {" "}
                      *
                    </span>
                  ) : null}
                </label>
                <input
                  id="product-email"
                  name="email"
                  type="email"
                  required={fields.email.required}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={fields.email.placeholder}
                  className={fieldClassName}
                  autoComplete="email"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="product-organization"
                  className="font-sans text-sm text-[#fcfcfe] sm:text-base"
                >
                  {fields.organization.label}
                </label>
                <input
                  id="product-organization"
                  name="organization"
                  type="text"
                  value={organization}
                  onChange={(event) => setOrganization(event.target.value)}
                  placeholder={fields.organization.placeholder}
                  className={fieldClassName}
                  autoComplete="organization"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="product-country"
                  className="font-sans text-sm text-[#fcfcfe] sm:text-base"
                >
                  {fields.country.label}
                </label>
                <input
                  id="product-country"
                  name="country"
                  type="text"
                  value={country}
                  onChange={(event) => setCountry(event.target.value)}
                  placeholder={fields.country.placeholder}
                  className={fieldClassName}
                  autoComplete="country-name"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2 sm:mt-6">
              <label
                htmlFor="product-message"
                className="font-sans text-sm text-[#fcfcfe] sm:text-base"
              >
                {fields.message.label}
              </label>
              <textarea
                id="product-message"
                name="message"
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder={fields.message.placeholder}
                className={cn(fieldClassName, "min-h-[140px] resize-y")}
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-aurora-lime px-6 py-4 font-sans text-base font-semibold text-[#151514] transition-opacity hover:opacity-90 sm:mt-8 sm:text-lg lg:text-xl"
            >
              {PRODUCTS_FORM.submitLabel}
            </button>

            <p className="mt-4 text-center font-sans text-xs leading-relaxed text-[#a3a3a3] sm:mt-5 sm:text-sm">
              {PRODUCTS_FORM.privacy}
            </p>
          </form>
          </Reveal>
        </SiteContent>
      </SiteShell>
    </section>
  );
};

export default ProductsForm;
