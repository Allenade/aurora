import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

export function ChipIcon({ className }: IconProps) {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <path d="M14.25 14.25H23.75V23.75H14.25V14.25Z" fill="currentColor" />
      <path
        d="M31.666 9.49984C31.666 7.75817 30.241 6.33317 28.4993 6.33317H25.3327V3.1665H22.166V6.33317H15.8327V3.1665H12.666V6.33317H9.49935C7.75768 6.33317 6.33268 7.75817 6.33268 9.49984V12.6665H3.16602V15.8332H6.33268V22.1665H3.16602V25.3332H6.33268V28.4998C6.33268 30.2415 7.75768 31.6665 9.49935 31.6665H12.666V34.8332H15.8327V31.6665H22.166V34.8332H25.3327V31.6665H28.4993C30.241 31.6665 31.666 30.2415 31.666 28.4998V25.3332H34.8327V22.1665H31.666V15.8332H34.8327V12.6665H31.666V9.49984ZM9.49935 28.4998V9.49984H28.4993V28.4998H9.49935Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LaunchIcon({ className }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <path
        d="M7 9V14C7 14 4 16 4 19V20H8L10 23H14L16 20H20V19C20 16 17 14 17 14V9C17 5 14 1 12 1C10 1 7 5 7 9ZM8 20H16M12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 21.5 21.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <circle
        cx="10.75"
        cy="10.75"
        r="10"
        fill="#C6FF00"
        stroke="#C6FF00"
        strokeWidth="1.5"
      />
      <path
        d="M7.315 11.73C7.315 11.73 8.051 11.73 9.032 13.447C9.032 13.447 11.76 8.95 14.184 8.05"
        stroke="#242424"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InfoIcon({ className }: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <path
        d="M10.713 14.713C10.9043 14.521 11 14.2833 11 14V10C11 9.71667 10.904 9.47933 10.712 9.288C10.52 9.09667 10.2827 9.00067 10 9C9.71733 8.99933 9.48 9.09533 9.288 9.288C9.096 9.48067 9 9.718 9 10V14C9 14.2833 9.096 14.521 9.288 14.713C9.48 14.905 9.71733 15.0007 10 15C10.2827 14.9993 10.5203 14.9043 10.713 14.713ZM10.713 6.712C10.9043 6.52067 11 6.28333 11 6C11 5.71667 10.904 5.47933 10.712 5.288C10.52 5.09667 10.2827 5.00067 10 5C9.71733 4.99933 9.48 5.09533 9.288 5.288C9.096 5.48067 9 5.718 9 6C9 6.282 9.096 6.51967 9.288 6.713C9.48 6.90633 9.71733 7.002 10 7C10.2827 6.998 10.5203 6.902 10.713 6.712ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88334 18.6867 3.825 17.9743 2.925 17.075C2.025 16.1757 1.31267 15.1173 0.788001 13.9C0.263335 12.6827 0.000667932 11.3827 1.26582e-06 10C-0.000665401 8.61733 0.262001 7.31733 0.788001 6.1C1.314 4.88267 2.02633 3.82433 2.925 2.925C3.82367 2.02567 4.882 1.31333 6.1 0.788C7.318 0.262667 8.618 0 10 0C11.382 0 12.682 0.262667 13.9 0.788C15.118 1.31333 16.1763 2.02567 17.075 2.925C17.9737 3.82433 18.6863 4.88267 19.213 6.1C19.7397 7.31733 20.002 8.61733 20 10C19.998 11.3827 19.7353 12.6827 19.212 13.9C18.6887 15.1173 17.9763 16.1757 17.075 17.075C16.1737 17.9743 15.1153 18.687 13.9 19.213C12.6847 19.739 11.3847 20.0013 10 20Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ShareNodesIcon({ className }: IconProps) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <circle cx="18" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="6" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="18" cy="19" r="2.5" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M8.4 11.1L15.6 6.4M8.4 12.9L15.6 17.6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LinkIcon({ className }: IconProps) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <path
        d="M10 13a5 5 0 007.54.54l1.9-1.9a5 5 0 00-7.07-7.07l-1.1 1.1"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 11a5 5 0 00-7.54-.54l-1.9 1.9a5 5 0 007.07 7.07l1.1-1.1"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <path
        d="M12 3l7 3v5.5c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V6l7-3z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12l1.8 1.8L14.8 10"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IngestIcon({ className }: IconProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <ellipse cx="12" cy="6" rx="6" ry="2.2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6 6v4c0 1.2 2.7 2.2 6 2.2s6-1 6-2.2V6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6 10v4c0 1.2 2.7 2.2 6 2.2s6-1 6-2.2v-4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6 14v4c0 1.2 2.7 2.2 6 2.2s6-1 6-2.2v-4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function StreamIcon({ className }: IconProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <path
        d="M4.5 12a7.5 7.5 0 0112.4-5.7L19 4v6h-6l2.2-2.2A5.5 5.5 0 006.5 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.5 12a7.5 7.5 0 01-12.4 5.7L5 20v-6h6l-2.2 2.2A5.5 5.5 0 0017.5 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ValidateFlowIcon({ className }: IconProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8.5 12.2l2.3 2.3 4.7-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CloudExportIcon({ className }: IconProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <path
        d="M7.5 17.5H7a4 4 0 01-.3-8 5.5 5.5 0 0110.6 1.5A3.5 3.5 0 0117 17.5h-1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14V8m0 0l-2.5 2.5M12 8l2.5 2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FlowArrowIcon({ className }: IconProps) {
  return (
    <svg
      width="40"
      height="12"
      viewBox="0 0 40 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <path
        d="M1 6h34M31 2l5 4-5 4"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArchitectureHeaderIcon({ className }: IconProps) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
      <path d="M11 7h3.5A2.5 2.5 0 0117 9.5V13" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function BellIcon({ className }: IconProps) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <path
        d="M6 9.5a6 6 0 0112 0c0 3.5 1.5 5 1.5 5H4.5S6 13 6 9.5z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M10 18.5a2 2 0 004 0"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HeartIcon({ className }: IconProps) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <path
        d="M12 20.5s-7-4.35-7-9.2A3.8 3.8 0 0112 8.1a3.8 3.8 0 017 3.2c0 4.85-7 9.2-7 9.2z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11.5" r="1.6" fill="currentColor" />
    </svg>
  );
}

/** mdi:users-outline — Co-design with Xavier */
export function UsersOutlineIcon({ className }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <path
        d="M13.07 10.41a5 5 0 0 0 0-5.82A3.4 3.4 0 0 1 15 4a3.5 3.5 0 0 1 0 7a3.4 3.4 0 0 1-1.93-.59M5.5 7.5A3.5 3.5 0 1 1 9 11a3.5 3.5 0 0 1-3.5-3.5m2 0A1.5 1.5 0 1 0 9 6a1.5 1.5 0 0 0-1.5 1.5M16 17v2H2v-2s0-4 7-4s7 4 7 4m-2 0c-.14-.78-1.33-2-5-2s-4.93 1.31-5 2m11.95-4A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Industry & Institutions — building with flag */
export function InstitutionBuildingIcon({ className }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <path
        d="M3 21h18M5 21V13h4V7h6v6h4v8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 7V3.5M12 3.5h3.5L14 5.5 15.5 7.5H12"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 10h1v1h-1zm2 0h1v1h-1zm-2 2h1v1h-1zm2 0h1v1h-1z"
        fill="currentColor"
      />
      <path
        d="M11 21v-2.5a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1V21"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Innovation Partners — open bulb / head with chip */
export function IdeaChipIcon({ className }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <path
        d="M7.5 15.25C6.55 14.2 6 12.85 6 11.4A6 6 0 0 1 17.5 9.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M7.5 15.25h5.75c.97 0 1.75.78 1.75 1.75v.75c0 .69-.56 1.25-1.25 1.25H9"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 21h4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <rect
        x="10.25"
        y="7.5"
        width="5"
        height="5"
        rx="0.75"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10.25 9H9M10.25 10H9M10.25 11H9M15.25 9H16.5M15.25 10H16.5M15.25 11H16.5M11.5 7.5V6.25M13.5 7.5V6.25M11.5 12.5v1.25M13.5 12.5v1.25"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Framed architecture step icon — matches Figma node 1529:2841 */
function FlowFrame({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <rect
        x="1.25"
        y="1.25"
        width="53.5"
        height="53.5"
        rx="10"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      {children}
    </svg>
  );
}

export function MachinesFlowIcon({ className }: IconProps) {
  return (
    <FlowFrame className={className}>
      <rect x="18" y="18" width="20" height="20" rx="2.5" stroke="currentColor" strokeWidth="2" />
      <rect x="23" y="23" width="10" height="10" rx="1" fill="currentColor" />
      <path
        d="M22 15.5v2.5M28 15.5v2.5M34 15.5v2.5M22 38v2.5M28 38v2.5M34 38v2.5M15.5 22h2.5M15.5 28h2.5M15.5 34h2.5M38 22h2.5M38 28h2.5M38 34h2.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </FlowFrame>
  );
}

export function StreamforgeFlowIcon({ className }: IconProps) {
  return (
    <FlowFrame className={className}>
      <ellipse cx="28" cy="20" rx="9" ry="3.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M19 20v5c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5v-5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M19 25v5c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5v-5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M19 30v5c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5v-5"
        stroke="currentColor"
        strokeWidth="2"
      />
    </FlowFrame>
  );
}

export function DurableStreamFlowIcon({ className }: IconProps) {
  return (
    <FlowFrame className={className}>
      <rect x="17" y="16" width="22" height="24" rx="2.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="28" cy="33" r="3" stroke="currentColor" strokeWidth="2" />
      <path d="M21 22h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </FlowFrame>
  );
}

export function ValidateBoxedIcon({ className }: IconProps) {
  return (
    <FlowFrame className={className}>
      <path
        d="M18 28.5l6.5 6.5L39 20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </FlowFrame>
  );
}

export function CloudBoxedIcon({ className }: IconProps) {
  return (
    <FlowFrame className={className}>
      <path
        d="M20 36h-1a6 6 0 01-.4-12 8 8 0 0115.4 2.2A5 5 0 0137 36h-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </FlowFrame>
  );
}
