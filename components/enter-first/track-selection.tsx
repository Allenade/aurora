"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ROUTES } from "@/lib/constants";

type TrackSelectionContextValue = {
  selectedIds: string[];
  setSelectedIds: (ids: string[] | ((current: string[]) => string[])) => void;
  toggleTrack: (id: string) => void;
  clearSelection: () => void;
  enrollHref: (extraIds?: string[]) => string;
};

const TrackSelectionContext = createContext<TrackSelectionContextValue | null>(
  null,
);

export function TrackSelectionProvider({ children }: { children: ReactNode }) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleTrack = useCallback((id: string) => {
    setSelectedIds((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedIds([]);
  }, []);

  const enrollHref = useCallback(
    (extraIds: string[] = []) => {
      const ids = [...new Set([...selectedIds, ...extraIds].filter(Boolean))];
      if (!ids.length) return ROUTES.CORE_3_ENROLL;
      const params = new URLSearchParams();
      ids.forEach((id) => params.append("track", id));
      return `${ROUTES.CORE_3_ENROLL}?${params.toString()}`;
    },
    [selectedIds],
  );

  const value = useMemo(
    () => ({
      selectedIds,
      setSelectedIds,
      toggleTrack,
      clearSelection,
      enrollHref,
    }),
    [selectedIds, toggleTrack, clearSelection, enrollHref],
  );

  return (
    <TrackSelectionContext.Provider value={value}>
      {children}
    </TrackSelectionContext.Provider>
  );
}

export function useTrackSelection() {
  const ctx = useContext(TrackSelectionContext);
  if (!ctx) {
    throw new Error(
      "useTrackSelection must be used within TrackSelectionProvider",
    );
  }
  return ctx;
}

/** Safe for CTAs that may render outside the provider. */
export function useEnrollHref(extraIds: string[] = []) {
  const ctx = useContext(TrackSelectionContext);
  if (!ctx) {
    if (!extraIds.length) return ROUTES.CORE_3_ENROLL;
    const params = new URLSearchParams();
    extraIds.forEach((id) => params.append("track", id));
    return `${ROUTES.CORE_3_ENROLL}?${params.toString()}`;
  }
  return ctx.enrollHref(extraIds);
}
