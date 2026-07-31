"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

type AppLinkProps = ComponentProps<typeof Link>;

function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: "smooth" });
  window.history.pushState(null, "", `#${id}`);
  return true;
}

/** Next Link wrapper that reliably scrolls to same-page hash targets (e.g. #contact). */
export function AppLink({ href, onClick, ...props }: AppLinkProps) {
  const hrefString = typeof href === "string" ? href : "";
  const hashOnly = hrefString.startsWith("#");
  const pathWithHash =
    hrefString.includes("#") && !hashOnly ? hrefString : null;

  if (hashOnly) {
    return (
      <a
        href={hrefString}
        onClick={(event: MouseEvent<HTMLAnchorElement>) => {
          onClick?.(event as never);
          if (event.defaultPrevented) return;
          if (scrollToHash(hrefString)) {
            event.preventDefault();
          }
        }}
        {...(props as ComponentProps<"a">)}
      />
    );
  }

  return (
    <Link
      href={href}
      onClick={(event) => {
        onClick?.(event);
        if (pathWithHash && !event.defaultPrevented) {
          const hash = pathWithHash.slice(pathWithHash.indexOf("#"));
          // After client nav, retry scroll once the target is in the DOM
          window.setTimeout(() => scrollToHash(hash), 50);
          window.setTimeout(() => scrollToHash(hash), 300);
        }
      }}
      {...props}
    />
  );
}
