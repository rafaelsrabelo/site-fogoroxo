// Types
import type { PropsWithChildren } from "react";

/** Tags `FadeIn` can render as (see the MOTION_TAGS map in index.tsx). */
export type FadeInTag =
  | "div"
  | "section"
  | "article"
  | "span"
  | "ul"
  | "li"
  | "p";

export interface FadeInProps extends PropsWithChildren {
  /** Delay before the entrance animation starts, in seconds. */
  delay?: number;
  /** Element rendered as the animated container. Defaults to `div`. */
  as?: FadeInTag;
  className?: string;
}
