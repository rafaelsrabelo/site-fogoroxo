// Libs
import { Star } from "lucide-react";

// Types
import type { TestimonialCardProps } from "./testimonial-card.types";

/** Derives up to two initials from a name for the avatar. */
function initialsOf(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, context, quote, rating } = testimonial;

  return (
    <article className="flex h-full w-[85vw] shrink-0 snap-start flex-col rounded-2xl border border-border bg-card p-7 sm:w-[380px]">
      <div className="flex items-center gap-1 text-fogo-purple-light">
        {Array.from({ length: rating }).map((_, index) => (
          <Star key={index} className="size-4 fill-current" />
        ))}
      </div>

      <p className="mt-5 flex-1 text-pretty text-foreground/90">“{quote}”</p>

      <footer className="mt-6 flex items-center gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-fogo-purple/15 text-sm font-semibold text-fogo-purple-light">
          {initialsOf(name)}
        </span>
        <span className="flex flex-col">
          <span className="font-semibold">{name}</span>
          <span className="text-sm text-muted-foreground">{context}</span>
        </span>
      </footer>
    </article>
  );
}
