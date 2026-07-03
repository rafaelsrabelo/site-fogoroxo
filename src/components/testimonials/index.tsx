"use client";

// React
import { useRef } from "react";

// Libs
import { ChevronLeft, ChevronRight } from "lucide-react";

// Components
import { FadeIn } from "@/components/fade-in";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";

// Utils
import { TESTIMONIALS } from "./testimonials.data";

// gap-5 between cards, in px.
const CARD_GAP = 20;

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByStep = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;

    // Measure a real card so the step matches the actual card width at any
    // breakpoint (instead of a hardcoded guess).
    const card = track.querySelector<HTMLElement>(":scope > article");
    const step = card ? card.getBoundingClientRect().width + CARD_GAP : 380;

    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section id="depoimentos" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-fogo-purple-light">
              Depoimentos
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Resultados de quem já é Mutante
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              Histórias reais de quem incluiu o Fogo Roxo na rotina de dieta e
              treino.
            </p>
          </div>

          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollByStep(-1)}
              aria-label="Depoimento anterior"
              className="grid size-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors duration-150 hover:border-fogo-purple/50 hover:text-foreground"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByStep(1)}
              aria-label="Próximo depoimento"
              className="grid size-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors duration-150 hover:border-fogo-purple/50 hover:text-foreground"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </FadeIn>
      </div>

      <div
        ref={trackRef}
        className="mt-12 flex snap-x snap-proximity gap-5 overflow-x-auto scroll-pl-6 px-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {/* Left spacer keeps the first card aligned to the container gutter. */}
        <div aria-hidden className="w-0 shrink-0 sm:w-[calc((100vw-72rem)/2)]" />
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
