// Next
import Image from "next/image";

// Components
import { FadeIn } from "@/components/fade-in";

// Utils
import { cn } from "@/lib/utils";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { BANNER } from "./banner.data";

// Types
import type { BannerProps } from "./banner.types";

const RESELLER_URL = buildWhatsAppUrl(
  "Olá! Quero ser um revendedor do Fogo Roxo 👾",
);

/** Clickable "seja um revendedor" banner — opens WhatsApp pre-filled. */
export function Banner({ className }: BannerProps) {
  return (
    <FadeIn
      delay={0.1}
      className={cn(
        "overflow-hidden rounded-3xl border border-white/10 shadow-[0_20px_60px_-20px_var(--fogo-glow)]",
        className,
      )}
    >
      <a
        href={RESELLER_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale no WhatsApp para se tornar um revendedor Fogo Roxo"
        className="block transition-transform duration-200 hover:scale-[1.02]"
      >
        <Image
          src={BANNER.src}
          alt={BANNER.alt}
          width={BANNER.width}
          height={BANNER.height}
          sizes="(min-width: 1024px) 576px, 100vw"
          className="h-auto w-full"
        />
      </a>
    </FadeIn>
  );
}
