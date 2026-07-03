"use client";

// React
import { useEffect, useRef, useState } from "react";

// Next
import Image from "next/image";

// Libs
import { X, Send, Flame, ShoppingBag, HelpCircle, Truck } from "lucide-react";

// Utils
import { buildWhatsAppUrl } from "@/lib/whatsapp";

// Curved label repeated around the ring. Spacing tuned to fill the circle.
const RING_LABEL = "O TERMO DA ATUALIDADE  •";

const QUICK_REPLIES = [
  { icon: ShoppingBag, label: "Quero comprar", message: "Olá! Quero comprar o Fogo Roxo 👾" },
  { icon: Flame, label: "Como tomar?", message: "Olá! Como devo tomar o Fogo Roxo?" },
  { icon: Truck, label: "Rastrear pedido", message: "Olá! Quero rastrear meu pedido do Fogo Roxo." },
  { icon: HelpCircle, label: "Tirar dúvidas", message: "Olá! Tenho uma dúvida sobre o Fogo Roxo 👾" },
] as const;

export function FloatingHelper() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close on Escape or click outside.
  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const sendMessage = () => {
    const text = inputRef.current?.value.trim();
    if (!text) return;
    window.open(buildWhatsAppUrl(text), "_blank", "noopener,noreferrer");
  };

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed bottom-5 right-5 z-[80] flex flex-col items-end gap-3"
    >
      {/* Chat card */}
      <div
        role="dialog"
        aria-label="Chat de ajuda do Fogo Roxo"
        aria-hidden={!open}
        className={`w-[min(88vw,340px)] origin-bottom-right overflow-hidden rounded-3xl border border-white/10 bg-card shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] transition-all duration-200 ${
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-95 opacity-0"
        }`}
      >
        {/* Header */}
        <header className="flex items-center gap-3 bg-gradient-to-r from-fogo-purple-dark to-fogo-purple px-4 py-3 text-white">
          <span className="grid size-9 shrink-0 place-items-center overflow-hidden rounded-full bg-white/15">
            <Image
              src="/images/mutante/mutante-light.png"
              alt=""
              width={28}
              height={28}
              className="h-6 w-auto"
            />
          </span>
          <span className="flex flex-1 flex-col leading-tight">
            <span className="text-sm font-bold">Helper Fogo Roxo</span>
            <span className="flex items-center gap-1.5 text-xs text-white/80">
              <span className="size-2 rounded-full bg-wpp" />
              Online
            </span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar chat"
            className="grid size-8 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white"
          >
            <X className="size-4" />
          </button>
        </header>

        {/* Body */}
        <div className="flex flex-col gap-3 px-4 py-4">
          <p className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/5 px-3.5 py-2.5 text-sm text-foreground/90">
            Oi! 👾 Sou o assistente do Fogo Roxo. Me conta o que você precisa que
            eu te ajudo a chegar no melhor termo da atualidade.
          </p>

          <div className="flex flex-wrap gap-2">
            {QUICK_REPLIES.map(({ icon: Icon, label, message }) => (
              <a
                key={label}
                href={buildWhatsAppUrl(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-fogo-purple/40 bg-fogo-purple/10 px-3 py-1.5 text-xs font-medium text-fogo-purple-light transition-colors hover:bg-fogo-purple/20"
              >
                <Icon className="size-3.5" />
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Input */}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            sendMessage();
          }}
          className="flex items-center gap-2 border-t border-white/10 px-3 py-3"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Escreva sua mensagem..."
            aria-label="Sua mensagem"
            className="h-10 flex-1 rounded-full border border-white/10 bg-white/5 px-4 text-sm outline-none placeholder:text-muted-foreground focus:border-fogo-purple/60"
          />
          <button
            type="submit"
            aria-label="Enviar pelo WhatsApp"
            className="grid size-10 shrink-0 place-items-center rounded-full bg-wpp text-black transition-colors hover:bg-wpp-dark"
          >
            <Send className="size-4" />
          </button>
        </form>
      </div>

      {/* Circular helper button */}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label="Abrir chat de ajuda — O termo da atualidade"
        className="group pointer-events-auto relative grid size-24 shrink-0 place-items-center rounded-full bg-white shadow-[0_10px_30px_-6px_rgba(0,0,0,0.45)] transition-transform duration-200 hover:scale-105 sm:size-28"
      >
        {/* Rotating ring text */}
        <svg
          viewBox="0 0 120 120"
          className="absolute inset-0 size-full animate-[spin_16s_linear_infinite]"
          aria-hidden
        >
          <defs>
            <path
              id="helper-ring"
              d="M 60,60 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
              fill="none"
            />
          </defs>
          <text className="fill-fogo-purple text-[10px] font-bold uppercase">
            {/* textLength = circle circumference (2·π·46) so the single phrase
                spans the whole ring exactly, without repeating or being cut. */}
            <textPath
              href="#helper-ring"
              startOffset="0"
              textLength="289"
              lengthAdjust="spacing"
            >
              {RING_LABEL}
            </textPath>
          </text>
        </svg>

        {/* Center logo */}
        <Image
          src="/images/mutante/mutante-dark.png"
          alt="Fogo Roxo Mutante"
          width={64}
          height={64}
          className="h-12 w-auto sm:h-14"
        />
      </button>
    </div>
  );
}
