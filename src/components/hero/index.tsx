// Next
import Link from "next/link";
import Image from "next/image";

// Libs
import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section id="topo">
      {/* Breadcrumb strip */}
      <div className="bg-white text-neutral-500">
        <nav
          aria-label="Você está aqui"
          className="mx-auto flex max-w-6xl items-center gap-1.5 px-6 py-3 text-sm"
        >
          <Link href="/" className="hover:text-neutral-900">
            Início
          </Link>
          <ChevronRight className="size-4" />
          <span className="font-semibold text-fogo-purple">Termogênico</span>
        </nav>
      </div>

      {/* Short full-bleed banner — the artwork already carries the title,
          badges and bottle, so it's centered (contain) on a black backdrop
          that blends with the image's own black edges. */}
      <div className="relative h-[160px] w-full bg-black sm:h-[240px] lg:h-[340px]">
        <Image
          src="/images/hero/hero-foro-roxo.webp"
          alt="Fogo Roxo — o melhor termogênico da atualidade, 60 cápsulas. Controle de peso, leveza, energia e disposição."
          fill
          priority
          sizes="100vw"
          className="object-contain object-center"
        />
      </div>
    </section>
  );
}
