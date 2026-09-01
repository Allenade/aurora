"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type CountUpProps = {
  value: string;
  className?: string;
  duration?: number;
};

/** Animates numeric portion of strings like "30+", "100%", "190+", "1,500+". */
export function CountUp({ value, className, duration = 1.2 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const motionValue = useMotionValue(0);

  const match = value.match(/^([^0-9]*)([0-9][0-9,]*)(.*)$/);
  const prefix = match?.[1] ?? "";
  const numeric = match?.[2]?.replace(/,/g, "") ?? "";
  const suffix = match?.[3] ?? "";
  const target = numeric ? Number(numeric) : NaN;
  const hasNumber = Number.isFinite(target);
  const useCommas = Boolean(match?.[2]?.includes(","));

  const display = useTransform(motionValue, (latest) => {
    if (!hasNumber) return value;
    const rounded = Math.round(latest);
    const formatted = useCommas
      ? rounded.toLocaleString("en-US")
      : String(rounded);
    return `${prefix}${formatted}${suffix}`;
  });

  useEffect(() => {
    if (!inView || !hasNumber) return;
    const controls = animate(motionValue, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, hasNumber, motionValue, target, duration]);

  if (!hasNumber) {
    return <span className={cn(className)}>{value}</span>;
  }

  return <motion.span ref={ref} className={cn(className)}>{display}</motion.span>;
}
