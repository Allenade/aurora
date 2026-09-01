"use client";

import { motion } from "motion/react";
import { useMemo, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  /** Use mount animation (heroes) instead of whileInView */
  immediate?: boolean;
  as?: ElementType;
  id?: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  y = 24,
  immediate = false,
  as = "div",
  id,
}: RevealProps) {
  const MotionTag = useMemo(
    () => motion.create(as as ElementType),
    [as],
  );
  const transition = { duration, delay, ease: EASE };

  if (immediate) {
    return (
      <MotionTag
        id={id}
        className={cn(className)}
        initial={{ opacity: 0, y }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      id={id}
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={transition}
    >
      {children}
    </MotionTag>
  );
}
