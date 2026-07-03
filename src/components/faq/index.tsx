// Libs
import { Plus } from "lucide-react";

// Components
import { FadeIn } from "@/components/fade-in";

// Utils
import { FAQ_ITEMS } from "./faq.data";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-white py-20 text-neutral-900">
      <div className="mx-auto max-w-3xl px-6">
        <FadeIn className="text-center">
          <span className="text-sm font-semibold text-fogo-purple">FAQ</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Perguntas frequentes
          </h2>
        </FadeIn>

        <FadeIn delay={0.05} className="mt-12 flex flex-col gap-3">
          {FAQ_ITEMS.map(({ question, answer }) => (
            <details
              key={question}
              className="group rounded-2xl border border-neutral-200 bg-white px-6 transition-colors duration-150 open:border-fogo-purple/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-semibold [&::-webkit-details-marker]:hidden">
                {question}
                <Plus className="size-5 shrink-0 text-fogo-purple transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <p className="pb-5 text-neutral-500 text-pretty">{answer}</p>
            </details>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
