// Types
import type { Product } from "./products.types";

/**
 * Source of truth for the product line-up. Each entry points to its own full
 * promo artwork in `public/images/products/`. To edit an offer, change it here
 * — the Products section renders whatever is in this array.
 */
export const PRODUCTS: Product[] = [
  {
    id: "doses-teste",
    name: "Fogo Roxo — 02 Doses grátis para teste",
    description: "2 doses teste",
    price: 0.01,
    image: {
      label: "Fogo Roxo — 2 doses grátis para teste",
      path: "/images/products/fogo-roxo-doses-teste.webp",
    },
    note: "Somente 1 por cliente, CPF e/ou endereço.",
  },
  {
    id: "fogo-roxo-1",
    name: "Fogo Roxo — 1 Unidade",
    description: "Frete grátis.",
    price: 89,
    badge: "Mais vendido",
    featured: true,
    bottles: 1,
    image: { label: "Fogo Roxo — 1 unidade", path: "/images/products/fogo-roxo-1.webp" },
  },
  {
    id: "fogo-roxo-2",
    name: "Fogo Roxo — 2 Unidades",
    description: "Frete grátis.",
    price: 169,
    originalPrice: 178,
    bottles: 2,
    image: { label: "Fogo Roxo — 2 unidades", path: "/images/products/fogo-roxo-2.webp" },
  },
  {
    id: "fogo-roxo-3",
    name: "Fogo Roxo — 3 Unidades",
    description: "Frete grátis + coqueteleira exclusiva de brinde.",
    price: 253,
    originalPrice: 267,
    badge: "Melhor custo-benefício",
    bottles: 3,
    image: { label: "Fogo Roxo — 3 unidades", path: "/images/products/fogo-roxo-3.webp" },
  },
  {
    id: "fogo-roxo-4",
    name: "Fogo Roxo — 4 Unidades",
    description: "Frete grátis + meia poliamida Mutante de brinde.",
    price: 338,
    originalPrice: 356,
    bottles: 4,
    image: { label: "Fogo Roxo — 4 unidades", path: "/images/products/fogo-roxo-4.webp" },
  },
  {
    id: "fogo-roxo-5",
    name: "Fogo Roxo — 5 Unidades",
    description: "Frete grátis + bolsa térmica Mutante de brinde.",
    price: 419,
    originalPrice: 445,
    bottles: 5,
    image: { label: "Fogo Roxo — 5 unidades", path: "/images/products/fogo-roxo-5.webp" },
  },
];
