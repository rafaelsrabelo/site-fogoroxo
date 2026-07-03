// Next
import Link from "next/link";

// Libs
import { Play } from "lucide-react";

// Components
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";

// YouTube Shorts id — swap here to change the featured video.
const VIDEO_ID = "yULYnHLv4_U";

export function Video() {
  return (
    <section className="scroll-mt-24 bg-background py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2">
        <FadeIn>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-fogo-purple-light">
            <Play className="size-4 fill-current" />
            Fogo Roxo em ação
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Veja como o Fogo Roxo funciona
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground text-pretty">
            Menos de um minuto pra entender por que o Fogo Roxo é o termo da
            atualidade: mais energia, controle da fome e queima de gordura de
            verdade.
          </p>
          <Button
            asChild
            className="mt-8 h-12 bg-fogo-purple px-7 text-base font-semibold text-primary-foreground shadow-[0_0_28px_var(--fogo-glow)] transition-colors duration-150 hover:bg-fogo-purple-light"
          >
            <Link href="#produtos">Quero experimentar</Link>
          </Button>
        </FadeIn>

        <FadeIn delay={0.1} className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[300px] overflow-hidden rounded-3xl border border-white/10 bg-black shadow-[0_20px_60px_-20px_var(--fogo-glow)]">
            <div className="relative aspect-[9/16]">
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0`}
                title="Fogo Roxo — o melhor termogênico da atualidade"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 size-full"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
