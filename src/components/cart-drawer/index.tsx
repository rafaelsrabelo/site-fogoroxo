"use client";

// React
import { useEffect } from "react";

// Libs
import { X, Minus, Plus, Trash2, ShoppingCart, MessageCircle } from "lucide-react";

// Components
import { Button } from "@/components/ui/button";

// Hooks
import { useCart } from "@/providers/cart-provider";

// Utils
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/format";
import { buildCheckoutUrl } from "@/lib/whatsapp";

export function CartDrawer() {
  const { lines, count, total, isOpen, closeCart, setQty, removeItem } =
    useCart();

  // Close on Escape.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden
        onClick={closeCart}
        className={cn(
          "fixed inset-0 z-[90] bg-black/60 transition-opacity duration-300",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Carrinho de compras"
        className={cn(
          "fixed inset-y-0 right-0 z-[100] flex w-full max-w-md flex-col border-l border-white/10 bg-card shadow-2xl transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <header className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <h2 className="flex items-center gap-2 text-lg font-bold">
            <ShoppingCart className="size-5 text-fogo-purple-light" />
            Seu carrinho
            {count > 0 && (
              <span className="text-sm font-normal text-muted-foreground">
                ({count})
              </span>
            )}
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Fechar carrinho"
            className="grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
          >
            <X className="size-5" />
          </button>
        </header>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <span className="grid size-16 place-items-center rounded-full bg-white/5 text-muted-foreground">
              <ShoppingCart className="size-7" />
            </span>
            <p className="font-medium">Seu carrinho está vazio</p>
            <p className="text-sm text-muted-foreground">
              Adicione um kit para começar seu tratamento.
            </p>
            <Button
              onClick={closeCart}
              variant="outline"
              className="mt-2 border-white/15"
            >
              Ver produtos
            </Button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-white/10 overflow-y-auto px-6">
              {lines.map((line) => (
                <li key={line.id} className="flex gap-4 py-4">
                  <div className="grid size-16 shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-fogo-purple-dark/40 to-background text-xs text-muted-foreground">
                    👾
                  </div>
                  <div className="flex flex-1 flex-col">
                    <span className="text-sm font-semibold leading-snug">
                      {line.name}
                    </span>
                    <span className="mt-0.5 text-sm text-fogo-purple-light">
                      {formatPrice(line.price)}
                    </span>

                    <div className="mt-auto flex items-center justify-between pt-2">
                      <div className="flex items-center gap-1 rounded-full border border-white/10">
                        <button
                          type="button"
                          onClick={() => setQty(line.id, line.qty - 1)}
                          aria-label="Diminuir quantidade"
                          className="grid size-8 place-items-center rounded-full text-muted-foreground hover:text-foreground"
                        >
                          <Minus className="size-3.5" />
                        </button>
                        <span className="w-6 text-center text-sm font-medium">
                          {line.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQty(line.id, line.qty + 1)}
                          aria-label="Aumentar quantidade"
                          className="grid size-8 place-items-center rounded-full text-muted-foreground hover:text-foreground"
                        >
                          <Plus className="size-3.5" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(line.id)}
                        aria-label="Remover item"
                        className="grid size-8 place-items-center rounded-full text-muted-foreground transition-colors hover:text-destructive"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <footer className="border-t border-white/10 px-6 py-5">
              <div className="flex items-center justify-between text-base">
                <span className="text-muted-foreground">Total</span>
                <span className="text-xl font-extrabold">
                  {formatPrice(total)}
                </span>
              </div>
              <Button
                asChild
                className="mt-4 h-12 w-full bg-wpp text-base font-semibold text-black transition-colors hover:bg-wpp-dark"
              >
                <a
                  href={buildCheckoutUrl(lines, total)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-5" />
                  Finalizar no WhatsApp
                </a>
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Você conclui a compra em uma conversa no WhatsApp.
              </p>
            </footer>
          </>
        )}
      </aside>
    </>
  );
}
