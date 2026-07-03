/**
 * A purchasable Fogo Roxo product (a single bottle, a bundle, or the free
 * sample). Add or edit entries in `products.data.ts` — the UI is driven
 * entirely by this shape.
 */
export interface Product {
  id: string;
  /** Display name, e.g. "FOGO ROXO 👾" or "3 Unidades". */
  name: string;
  /** Short benefit-oriented description shown on the card. */
  description: string;
  /** Current price in BRL (e.g. 89). */
  price: number;
  /** Optional strike-through original price to signal a discount. */
  originalPrice?: number;
  /** Small tag above the card, e.g. "Pronta entrega". */
  tag?: string;
  /** Highlight badge, e.g. "Mais vendido" or "Melhor custo-benefício". */
  badge?: string;
  /** Highlights the card as the primary recommendation. */
  featured?: boolean;
  /** Optional free gift / highlight, e.g. "+ coqueteleira de brinde". */
  gift?: string;
  /** Number of bottles included (omitted for the free sample). */
  bottles?: number;
  /** Placeholder image descriptor (label + intended path). */
  image: {
    label: string;
    path?: string;
  };
  /** Optional fine-print note, e.g. purchase limits. */
  note?: string;
}
