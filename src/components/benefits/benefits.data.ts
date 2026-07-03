// Libs
import { Flame, Salad, Cookie, Droplets, Zap, Target, Pill } from "lucide-react";

// Types
import type { Benefit } from "./benefits.types";

/** Product benefits shown as an icon grid. Edit copy here — the UI is data-driven. */
export const BENEFITS: Benefit[] = [
  {
    icon: Flame,
    title: "Acelera o emagrecimento",
    description:
      "Auxilia o processo quando associado a alimentação equilibrada e atividade física.",
  },
  {
    icon: Salad,
    title: "Mais saciedade",
    description: "Aumenta a sensação de saciedade e ajuda no controle da fome.",
  },
  {
    icon: Cookie,
    title: "Menos vontade de doce",
    description: "Contribui para reduzir a vontade de consumir doces.",
  },
  {
    icon: Droplets,
    title: "Desincha",
    description: "Auxilia na redução da retenção de líquidos.",
  },
  {
    icon: Zap,
    title: "Mais energia",
    description: "Fornece mais disposição e energia para os seus treinos.",
  },
  {
    icon: Target,
    title: "Mais aderência à dieta",
    description: "Reduz episódios de beliscos entre as refeições.",
  },
  {
    icon: Pill,
    title: "Prático no dia a dia",
    description: "Fórmula em cápsulas, fácil de consumir todos os dias.",
  },
];
