// Types
import type { Metadata } from "next";

/**
 * Global site configuration. Single source of truth for brand strings, URLs and
 * default SEO metadata. Consume this instead of repeating literals.
 */
export const SITE_CONFIG = {
  name: "Fogo Roxo",
  productName: "Fogo Roxo Mutante",
  emoji: "👾",
  tagline: "O melhor termo da atualidade",
  description:
    "Termogênico Fogo Roxo Mutante: mais energia enquanto você seca, desincha e acelera o emagrecimento. Controla a fome, reduz a vontade de doce e diminui a retenção de líquido — em cápsulas práticas para o dia a dia.",
  whatsapp: {
    display: "(85) 9.9663-3206",
    href: "https://wa.me/5585996633206",
  },
  // TODO: replace with the production domain before launch.
  url: "https://fogoroxo.com.br",
  locale: "pt_BR",
} as const;

export const DEFAULT_METADATA = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  applicationName: SITE_CONFIG.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
} satisfies Metadata;
