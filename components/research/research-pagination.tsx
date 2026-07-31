"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export type ResearchPaginationPage = number | "ellipsis";

export type ResearchPaginationProps = {
  previousLabel?: string;
  nextLabel?: string;
  pages: readonly ResearchPaginationPage[];
  initialPage?: number;
  className?: string;
  "aria-label"?: string;
};

const ResearchPagination = ({
  previousLabel = "Previous",
  nextLabel = "Next >",
  pages,
  initialPage = 1,
  className,
  "aria-label": ariaLabel = "Pagination",
}: ResearchPaginationProps) => {
  const [activePage, setActivePage] = useState(initialPage);

  return (
    <nav
      aria-label={ariaLabel}
      className={cn(
        "flex flex-wrap items-center justify-end gap-2 sm:gap-2.5",
        className,
      )}
    >
      <button
        type="button"
        className="rounded-md bg-[#fcfcfe] px-4 py-2 font-sans text-sm font-medium text-[#151514] transition-opacity hover:opacity-90 sm:px-5 sm:py-2.5"
      >
        {previousLabel}
      </button>

      {pages.map((page, index) =>
        page === "ellipsis" ? (
          <span
            key={`ellipsis-${index}`}
            className="px-1 font-sans text-sm text-[#fcfcfe]"
            aria-hidden
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            type="button"
            aria-current={activePage === page ? "page" : undefined}
            onClick={() => setActivePage(page)}
            className={cn(
              "flex size-9 items-center justify-center rounded-md font-sans text-sm font-medium transition-opacity hover:opacity-90 sm:size-10",
              activePage === page
                ? "bg-aurora-lime text-[#151514]"
                : "bg-[#2a2a2a] text-[#fcfcfe]",
            )}
          >
            {page}
          </button>
        ),
      )}

      <button
        type="button"
        className="rounded-md bg-aurora-lime px-4 py-2 font-sans text-sm font-medium text-[#151514] transition-opacity hover:opacity-90 sm:px-5 sm:py-2.5"
      >
        {nextLabel}
      </button>
    </nav>
  );
};

export default ResearchPagination;
