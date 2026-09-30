"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type ToastTone = "success" | "error" | "info";

type ToastItem = {
  id: string;
  message: string;
  tone: ToastTone;
};

type ToastApi = {
  success: (message: string) => void;
  error: (message: string) => void;
  info: (message: string) => void;
};

const ToastContext = createContext<ToastApi | null>(null);

const TONE_STYLES: Record<ToastTone, string> = {
  success: "border-aurora-lime/40 bg-[#151514] text-white",
  error: "border-[#ff4d4f]/50 bg-[#1a1010] text-white",
  info: "border-white/15 bg-[#151514] text-white",
};

const ACCENT: Record<ToastTone, string> = {
  success: "bg-aurora-lime",
  error: "bg-[#ff4d4f]",
  info: "bg-white/40",
};

let toastId = 0;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([]);

  const dismiss = useCallback((id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
  }, []);

  const push = useCallback((message: string, tone: ToastTone) => {
    const id = `toast-${++toastId}`;
    setItems((current) => [...current.slice(-3), { id, message, tone }]);
  }, []);

  const api = useMemo<ToastApi>(
    () => ({
      success: (message) => push(message, "success"),
      error: (message) => push(message, "error"),
      info: (message) => push(message, "info"),
    }),
    [push],
  );

  return (
    <ToastContext.Provider value={api}>
      {children}
      <div
        className="pointer-events-none fixed inset-x-0 bottom-4 z-[100] flex flex-col items-center gap-2 px-4 sm:bottom-6 sm:items-end sm:px-6"
        aria-live="polite"
        aria-relevant="additions"
      >
        {items.map((item) => (
          <ToastCard
            key={item.id}
            item={item}
            onDismiss={() => dismiss(item.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function ToastCard({
  item,
  onDismiss,
}: {
  item: ToastItem;
  onDismiss: () => void;
}) {
  useEffect(() => {
    const timer = window.setTimeout(onDismiss, 4200);
    return () => window.clearTimeout(timer);
  }, [onDismiss]);

  return (
    <div
      role="status"
      className={cn(
        "pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-xl border px-4 py-3 shadow-lg shadow-black/40",
        "animate-[toast-in_220ms_ease-out]",
        TONE_STYLES[item.tone],
      )}
    >
      <span
        className={cn("mt-1.5 size-2 shrink-0 rounded-full", ACCENT[item.tone])}
        aria-hidden
      />
      <p className="min-w-0 flex-1 font-sans text-sm leading-relaxed">
        {item.message}
      </p>
      <button
        type="button"
        onClick={onDismiss}
        className="shrink-0 font-sans text-xs text-white/50 transition-colors hover:text-white"
        aria-label="Dismiss notification"
      >
        Close
      </button>
    </div>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return ctx;
}
