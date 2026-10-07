"use client";

import { useEffect, useId, useRef, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { ENTER_FIRST_TRACKS } from "@/lib/constants";
import { syllabusRenderModel } from "@/lib/enter-first/media";
import type { PublicCourse } from "@/lib/enter-first/types";

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M3 3l8 8M11 3l-8 8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SyllabusBody({ html }: { html: string }) {
  const model = syllabusRenderModel(html);
  if (!model) {
    return (
      <p className="mt-5 font-sans text-sm leading-relaxed text-[#adadad] sm:text-base">
        This syllabus has no text to show.
      </p>
    );
  }
  if (model.kind === "text") {
    return (
      <p className="mt-5 whitespace-pre-wrap font-sans text-sm leading-relaxed text-[#d4d4d4] sm:text-base">
        {model.text}
      </p>
    );
  }
  return (
    <div
      className="syllabus-html mt-5 font-sans text-sm leading-relaxed text-[#d4d4d4] sm:text-base"
      dangerouslySetInnerHTML={{ __html: model.html }}
    />
  );
}

export function SyllabusDialog({
  course,
  onClose,
}: {
  course: PublicCourse;
  onClose: () => void;
}) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const text = course.syllabus.text;
  const pdfUrl = course.syllabus.url;
  const { syllabusDownloadLabel } = ENTER_FIRST_TRACKS;

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [onClose]);

  const trapFocus = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") return;
    const root = dialogRef.current;
    if (!root) return;
    const focusable = [
      ...root.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      ),
    ];
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-black/70 p-3 sm:items-center sm:p-6"
      onMouseDown={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onMouseDown={(event) => event.stopPropagation()}
        onKeyDown={trapFocus}
        className="flex max-h-[min(88vh,42rem)] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#151514] shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-7 sm:py-5">
          <div className="min-w-0">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-aurora-lime">
              Syllabus
            </p>
            <h2
              id={titleId}
              className="mt-1 font-sans text-lg font-semibold text-white sm:text-xl"
            >
              {course.name}
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close syllabus"
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-aurora-lime hover:text-aurora-lime"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
          {text ? <SyllabusBody html={text} /> : null}
          {pdfUrl ? (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={course.syllabus.filename ?? undefined}
              className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-aurora-lime transition-opacity hover:opacity-80 sm:text-base"
            >
              {syllabusDownloadLabel}
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
