// Libs
import { Droplet } from "lucide-react";

// Components
import { FadeIn } from "@/components/fade-in";

// Utils
import { DOSAGE_MODES } from "./how-to-take.data";

export function HowToTake() {
  return (
    <section id="como-tomar" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="max-w-2xl">
          <span className="text-sm font-semibold text-fogo-purple-light">
            Como tomar
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Simples de encaixar na sua rotina
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Ajuste a dose conforme o seu dia. Tome sempre com água e respeite a
            recomendação diária.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {DOSAGE_MODES.map(({ icon: Icon, title, dose, timing }, index) => (
            <FadeIn key={title} delay={index * 0.06}>
              <article className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-8">
                <span className="grid size-12 place-items-center rounded-xl bg-fogo-purple/12 text-fogo-purple-light">
                  <Icon className="size-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-fogo-purple-light">
                    {dose}
                  </p>
                  <p className="mt-2 text-muted-foreground">{timing}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.12}>
          <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Droplet className="size-4 shrink-0 text-fogo-purple-light" />
            Recomendação: tome com água e não exceder a dose diária indicada.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
