// Types
import type { LucideIcon } from "lucide-react";

export interface Benefit {
  /** Lucide icon representing the benefit. */
  icon: LucideIcon;
  /** Short title. */
  title: string;
  /** One-line supporting description. */
  description: string;
}
