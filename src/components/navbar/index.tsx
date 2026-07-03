"use client";

// Next
import Link from "next/link";
import Image from "next/image";

// Libs
import { Search, ShoppingCart } from "lucide-react";

// Hooks
import { useCart } from "@/providers/cart-provider";

// Utils
import { SITE_CONFIG } from "@/lib/site-config";

const NAV_LINKS = [
  { label: "Benefícios", href: "#beneficios" },
  { label: "Como tomar", href: "#como-tomar" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Produtos", href: "#produtos" },
  { label: "FAQ", href: "#faq" },
] as const;

const TRUST_ITEMS = [
  "100% Original",
  "Frete grátis nos kits",
  "Pronta entrega",
  "Pagamento seguro",
] as const;

export function Navbar() {
  const { count, openCart } = useCart();

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-neutral-950 text-neutral-400">
        <ul className="mx-auto flex max-w-6xl items-center justify-center gap-6 px-6 py-2 text-[11px] font-medium sm:justify-between">
          {TRUST_ITEMS.map((item) => (
            <li key={item} className="hidden sm:block">
              {item}
            </li>
          ))}
          <li className="sm:hidden">👾 O melhor termogênico da atualidade</li>
        </ul>
      </div>

      {/* Main header */}
      <div className="border-b border-white/10 bg-background/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-6">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image
              src="/images/mutante/mutante-light.png"
              alt="Fogo Roxo"
              width={34}
              height={34}
              priority
              className="h-8 w-auto"
            />
            <span className="text-lg font-extrabold tracking-tight">
              {SITE_CONFIG.name}
            </span>
          </Link>

          <div className="relative hidden flex-1 md:block">
            <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Busque por termogênico, kits..."
              aria-label="Buscar produtos"
              className="h-11 w-full rounded-full border border-white/10 bg-white/5 pl-11 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-fogo-purple/60"
            />
          </div>

          <button
            type="button"
            onClick={openCart}
            aria-label={`Abrir carrinho (${count} itens)`}
            className="relative ml-auto grid size-11 shrink-0 place-items-center rounded-full border border-white/10 text-foreground transition-colors duration-150 hover:border-fogo-purple/50 md:ml-0"
          >
            <ShoppingCart className="size-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid min-w-5 place-items-center rounded-full bg-fogo-purple px-1 text-[11px] font-bold text-white">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Category / section nav */}
      <nav className="hidden border-b border-white/10 bg-background/95 backdrop-blur-xl md:block">
        <ul className="mx-auto flex max-w-6xl items-center gap-8 px-6 py-3 text-sm font-medium text-muted-foreground">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors duration-150 hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
