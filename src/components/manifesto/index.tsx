// Components
import { FadeIn } from "@/components/fade-in";
import { Banner } from "@/components/banner";

export function Manifesto() {
  return (
    <section className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <FadeIn>
              <p className="text-2xl font-bold leading-snug tracking-tight text-balance sm:text-3xl">
                Tudo que um grande termogênico precisa ter, o{" "}
                <span className="text-fogo-purple-light">Fogo Roxo</span> tem.
                Tudo que faz do{" "}
                <span className="text-fogo-purple-light">Fogo Roxo</span> único,
                nenhum outro tem.
              </p>
            </FadeIn>

            <FadeIn delay={0.08}>
              <p className="mt-6 text-lg text-muted-foreground text-pretty sm:text-xl">
                Agora só falta uma decisão: continuar onde você está ou descobrir
                do que o seu corpo realmente é capaz.
              </p>
            </FadeIn>

            <FadeIn delay={0.16}>
              <p className="mt-8 text-xl font-semibold tracking-tight text-balance sm:text-2xl">
                Experimente o Fogo Roxo. <span aria-hidden>👾</span>
              </p>
            </FadeIn>
          </div>

          <Banner />
        </div>
      </div>
    </section>
  );
}
