import type { ReactNode } from "react";
import { SITE_INNER_CONTENT, SITE_SHELL } from "@/lib/constants";
import { cn } from "@/lib/utils";

type ShellProps = {
  as?: "div" | "section" | "footer";
  className?: string;
  children: ReactNode;
};

/** style outer content band — max-width + side padding */
export function SiteShell({
  as: Tag = "div",
  className,
  children,
}: ShellProps) {
  return <Tag className={cn(SITE_SHELL, className)}>{children}</Tag>;
}

/** Inner inset matching nav pill — logo / headline alignment line */
export function SiteContent({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn(SITE_INNER_CONTENT, className)}>{children}</div>;
}
