// Libs
import { Dumbbell, Sun } from "lucide-react";

// Types
import type { DosageMode } from "./how-to-take.types";

/** The two recommended dosage routines. */
export const DOSAGE_MODES: DosageMode[] = [
  {
    icon: Dumbbell,
    title: "Dias de treino",
    dose: "2 cápsulas",
    timing: "De 30 a 45 minutos antes do treino.",
  },
  {
    icon: Sun,
    title: "Dias sem treino",
    dose: "1 + 1 cápsula",
    timing: "Uma pela manhã e uma à tarde.",
  },
];
