// Types
import type { Product } from "./products.types";

/**
 * Source of truth for the product line-up. To add a product, append an entry —
 * the Products section renders whatever is in this array. Prices reflect the
 * current offer (all kits ship free).
 */
export const PRODUCTS: Product[] = [
  {
    id: "doses-teste",
    name: "Fogo Roxo — 02 Doses grátis para teste",
    description:
      "2 doses de teste do melhor termogênico da atualidade! Totalmente grátis, sem pegadinha, para você experimentar algo que trará resultados.",
    price: 0.01,
    tag: "Pronta entrega",
    image: {
      label: "Amostra Fogo Roxo",
      path: "/images/products/doses-teste.webp",
    },
    note: "Somente 1 por cliente, CPF e/ou endereço.",
  },
  {
    id: "fogo-roxo-unidade",
    name: "FOGO ROXO 👾",
    description:
      "O termogênico definitivo para emagrecer rápido, secar a barriga e eliminar retenção. Fórmula diurética que reduz a vontade de doce e melhora a saciedade. Não queime gordura, incinere! 👾",
    price: 89,
    tag: "Pronta entrega",
    featured: true,
    badge: "Mais vendido",
    bottles: 1,
    image: {
      label: "Frasco Fogo Roxo Mutante",
      path: "/images/products/frasco-mutante.webp",
    },
  },
  {
    id: "kit-2-frascos",
    name: "2 Unidades",
    description: "Constância de 60 dias com economia e frete grátis.",
    price: 169,
    originalPrice: 178,
    tag: "Pronta entrega",
    bottles: 2,
    gift: "Frete grátis",
    image: { label: "Kit 2 unidades", path: "/images/products/kit-2.webp" },
  },
  {
    id: "kit-3-frascos",
    name: "3 Unidades",
    description: "O queridinho: resultado consistente em 90 dias.",
    price: 253,
    originalPrice: 267,
    tag: "Pronta entrega",
    badge: "Melhor custo-benefício",
    bottles: 3,
    gift: "Frete grátis + coqueteleira exclusiva de brinde",
    image: { label: "Kit 3 unidades", path: "/images/products/kit-3.webp" },
  },
  {
    id: "kit-4-frascos",
    name: "4 Unidades",
    description: "Fase de definição completa, 120 dias de tratamento.",
    price: 338,
    originalPrice: 356,
    tag: "Pronta entrega",
    bottles: 4,
    gift: "Frete grátis + meia poliamida Mutante de brinde",
    image: { label: "Kit 4 unidades", path: "/images/products/kit-4.webp" },
  },
  {
    id: "kit-5-frascos",
    name: "5 Unidades",
    description: "Máximo resultado e melhor preço por unidade, 150 dias.",
    price: 419,
    originalPrice: 445,
    tag: "Pronta entrega",
    bottles: 5,
    gift: "Frete grátis + bolsa térmica Mutante de brinde",
    image: { label: "Kit 5 unidades", path: "/images/products/kit-5.webp" },
  },
];
