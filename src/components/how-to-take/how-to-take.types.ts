// Types
import type { LucideIcon } from "lucide-react";

export interface DosageMode {
  /** Lucide icon for the mode. */
  icon: LucideIcon;
  /** Mode title, e.g. "Dias de treino". */
  title: string;
  /** Highlighted dose, e.g. "2 cápsulas". */
  dose: string;
  /** When / how to take it. */
  timing: string;
}
