// Libs
import { ShieldAlert } from "lucide-react";

// Components
import { FadeIn } from "@/components/fade-in";

const CONTRAINDICATIONS = [
  "Produto destinado a adultos.",
  "Não recomendado para gestantes ou lactantes, salvo orientação médica.",
  "Pessoas com hipertensão, doenças cardiovasculares, arritmias ou sensibilidade à cafeína e outros estimulantes devem consultar um profissional de saúde antes do uso.",
  "Pessoas em tratamento com medicamentos de uso contínuo devem buscar orientação médica antes de consumir o produto.",
  "Não exceder a recomendação diária de consumo.",
  "Manter fora do alcance de crianças.",
  "Este produto não substitui uma alimentação equilibrada e hábitos de vida saudáveis.",
] as const;

export function Contraindications() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <FadeIn>
          <div className="rounded-2xl border border-border bg-card/60 p-7">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <ShieldAlert className="size-5 text-fogo-purple-light" />
              Contraindicações e advertências
            </h2>
            <ul className="mt-5 flex flex-col gap-2.5 text-sm text-muted-foreground">
              {CONTRAINDICATIONS.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span
                    aria-hidden
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-fogo-purple-light/70"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
