const PRICE_FORMATTER = new Intl.NumberFormat("pt-BR", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

/**
 * Formats a price WITHOUT the currency symbol (money framing hurts conversion),
 * e.g. 419 -> "419", 0.01 -> "0,01".
 */
export function formatPrice(value: number): string {
  return PRICE_FORMATTER.format(value);
}

/** Percentage discount between an original and current price (0 if none). */
export function discountPercent(price: number, originalPrice?: number): number {
  if (!originalPrice || originalPrice <= price) return 0;
  return Math.round((1 - price / originalPrice) * 100);
}
