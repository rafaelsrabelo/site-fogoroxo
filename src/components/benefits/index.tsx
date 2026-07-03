// Components
import { FadeIn } from "@/components/fade-in";

// Utils
import { BENEFITS } from "./benefits.data";

export function Benefits() {
  return (
    <section
      id="beneficios"
      className="scroll-mt-24 bg-white py-20 text-neutral-900"
    >
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="max-w-2xl">
          <span className="text-sm font-semibold text-fogo-purple">
            Benefícios
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Tudo que o Fogo Roxo faz pelo seu corpo
          </h2>
          <p className="mt-4 text-neutral-500 text-pretty">
            Um termogênico completo para quem busca emagrecimento, controle do
            apetite e mais disposição — dentro e fora do treino.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, description }, index) => (
            <FadeIn key={title} delay={index * 0.04}>
              <article className="group h-full rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-150 hover:border-fogo-purple/40 hover:shadow-[0_16px_40px_-28px_rgba(130,33,223,0.6)]">
                <span className="grid size-11 place-items-center rounded-xl bg-fogo-purple/10 text-fogo-purple transition-colors duration-150 group-hover:bg-fogo-purple group-hover:text-white">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm text-neutral-500 text-pretty">
                  {description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
