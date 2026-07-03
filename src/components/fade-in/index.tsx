"use client";

// Libs
import { motion } from "framer-motion";

// Types
import type { FadeInProps } from "./fade-in.types";

/**
 * Motion components must be declared once, outside render — creating them during
 * render (via `motion.create`) resets state and trips the react-hooks rule. We
 * pre-build the handful of tags `FadeIn` supports and pick from this map.
 */
const MOTION_TAGS = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  span: motion.span,
  ul: motion.ul,
  li: motion.li,
  p: motion.p,
} as const;

/**
 * Functional entrance animation: opacity 0 -> 1 and y 8 -> 0 over ~0.3s.
 * Runs once when the element scrolls into view. Keep animations subtle.
 */
export function FadeIn({
  children,
  delay = 0,
  as = "div",
  className,
}: FadeInProps) {
  const MotionTag = MOTION_TAGS[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.3, delay, ease: "easeOut" }}
    >
      {children}
    </MotionTag>
  );
}
