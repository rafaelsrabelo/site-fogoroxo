// Utils
import { SITE_CONFIG } from "@/lib/site-config";
import { formatPrice } from "@/lib/format";

// Types
import type { CartLine } from "@/providers/cart-provider.types";

/**
 * Builds a wa.me checkout link with the order summary pre-filled. The customer
 * finishes the purchase in a WhatsApp conversation.
 */
export function buildCheckoutUrl(lines: CartLine[], total: number): string {
  const items = lines
    .map(
      (line) =>
        `• ${line.qty}x ${line.name} — R$ ${formatPrice(line.price * line.qty)}`,
    )
    .join("\n");

  const message = [
    "Olá! Quero finalizar meu pedido do Fogo Roxo 👾",
    "",
    items,
    "",
    `Total: R$ ${formatPrice(total)}`,
  ].join("\n");

  return `${SITE_CONFIG.whatsapp.href}?text=${encodeURIComponent(message)}`;
}

/** Builds a wa.me link with any custom message pre-filled. */
export function buildWhatsAppUrl(message: string): string {
  return `${SITE_CONFIG.whatsapp.href}?text=${encodeURIComponent(message)}`;
}

/** Simple pre-filled WhatsApp link for the "need help" helper. */
export function buildHelpUrl(): string {
  return buildWhatsAppUrl("Olá! Tenho uma dúvida sobre o Fogo Roxo 👾");
}
