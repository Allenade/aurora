"use client";

import { motion, type Variants } from "motion/react";
import {
  createContext,
  useContext,
  useMemo,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants = (stagger: number, delayChildren: number): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

const itemVariants = (y: number, duration: number): Variants => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: EASE },
  },
});

const StaggerItemContext = createContext({ y: 24, duration: 0.55 });

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  y?: number;
  duration?: number;
  immediate?: boolean;
  as?: ElementType;
};

export function Stagger({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0,
  y = 24,
  duration = 0.55,
  immediate = false,
  as = "div",
}: StaggerProps) {
  const MotionTag = useMemo(
    () => motion.create(as as ElementType),
    [as],
  );

  return (
    <MotionTag
      className={cn(className)}
      variants={containerVariants(stagger, delayChildren)}
      initial="hidden"
      {...(immediate
        ? { animate: "visible" as const }
        : {
            whileInView: "visible" as const,
            viewport: { once: true, amount: 0.15 },
          })}
    >
      <StaggerItemContext.Provider value={{ y, duration }}>
        {children}
      </StaggerItemContext.Provider>
    </MotionTag>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export function StaggerItem({
  children,
  className,
  as = "div",
}: StaggerItemProps) {
  const { y, duration } = useContext(StaggerItemContext);
  const MotionTag = useMemo(
    () => motion.create(as as ElementType),
    [as],
  );

  return (
    <MotionTag className={cn(className)} variants={itemVariants(y, duration)}>
      {children}
    </MotionTag>
  );
}
