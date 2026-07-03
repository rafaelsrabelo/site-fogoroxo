@AGENTS.md

# Fogo Roxo 👾 — Landing Page

Standalone conversion landing page for **Fogo Roxo**, a thermogenic weight-loss
supplement. Positioning: _"O melhor termo da atualidade"_. Dark, premium,
high-conversion. Reference quality bar: Linear / Vercel / Stripe.

## Stack

- **Next.js 16** (App Router) + **TypeScript** (strict, no `any`, prefer `satisfies`)
- **React 19**
- **Tailwind CSS v4** — CSS-first, no `tailwind.config.js`. Tokens live in
  `src/styles/globals.css` via `@theme`/`@theme inline`.
- **shadcn/ui** (radix-nova style, base color neutral, CSS variables, dark mode)
- **TanStack React Query** (`src/providers/query-provider.tsx`)
- **Framer Motion** (entrance/hover animations)
- **lucide-react** (icons)
- **pnpm**

```bash
pnpm dev      # dev server (Turbopack, default in Next 16)
pnpm build    # production build
pnpm lint     # eslint
```

## Folder structure (`src/`, alias `@/* -> ./src/*`)

```
src/app/            App Router (layout, page, loading, error, sitemap, robots)
src/components/     one component per folder: index.tsx + <name>.types.ts
src/components/ui/  shadcn components (do not hand-edit unless necessary)
src/services/       API services + React Query hooks (index.ts + <name>.types.ts)
src/hooks/          shared hooks
src/lib/            utils (cn, format, site-config, ...)
src/providers/      context providers (QueryProvider, ...)
src/types/          ONLY truly global types
src/styles/         globals.css (Tailwind + design tokens)
```

Each component gets its own folder with `index.tsx`. Co-locate a
`<name>.types.ts` whenever the component has props or domain types (skip the file
only when there genuinely are none). Feature data lives beside the feature
(e.g. `products/products.data.ts`, `products/products.types.ts`).

## Naming

- Files & folders: **kebab-case**. React components: **PascalCase**.
- Hooks: **camelCase** with `use` prefix. Data constants: **UPPER_SNAKE_CASE**.
- Everything in **English** (UI copy is PT-BR).

## Import order (grouped, blank line between groups, labelled comment)

`React` → `Next` → `Libs` → `Services` → `Components` → `Hooks` → `Utils` →
`Types`. `import type` always comes last (in the `Types` group).

```tsx
// React
import { useMemo } from "react";

// Next
import Link from "next/link";

// Libs
import { motion } from "framer-motion";

// Components
import { Button } from "@/components/ui/button";

// Utils
import { cn } from "@/lib/utils";

// Types
import type { Product } from "./products.types";
```

## Rules

- **No inline styles** (`style={{}}`) — use Tailwind (arbitrary values allowed).
  `style` only for a genuinely dynamic runtime value.
- **No duplication** of components / types / logic. Single responsibility,
  ~250 lines max per component.
- **Avoid `useState`**: server data → React Query; derived → `useMemo`; forms →
  `useForm`/refs; URL state → `searchParams`. `useState` only for ephemeral local UI.
- **All fetching via React Query** (`useQuery`/`useMutation`), **never** `useEffect`.
- **Server Components by default**; `"use client"` only when required.
- **Loading states are mandatory**: `loading.tsx` per fetching page, `<Suspense>`
  around async components, `isPending` → skeleton (never a spinner or
  "carregando..."). Skeletons mirror the real DOM, `animate-pulse`, neutral colors.
- **SEO mandatory**: complete metadata (title, description, openGraph,
  canonical), JSON-LD, semantic HTML, a single `<h1>` per page, descriptive
  `alt`, `sitemap.ts` + `robots.ts`. Target Core Web Vitals: LCP < 2.5s, CLS < 0.1.
- `next/image` for images; fonts with `display: swap`; lazy-load heavy pieces
  via `dynamic()`.

## Brand & design tokens

- Primary purple **#8221DF** is defined **once** in `globals.css` as
  `--fogo-purple` and exposed as Tailwind tokens: `fogo-purple`,
  `fogo-purple-light`, `fogo-purple-dark`, and the glow var `--fogo-glow`.
  **Never** hardcode a hex in a component — always consume a token.
- Theme is **dark only** (near-black petroleum background), purple as accent with
  subtle purposeful glows. High contrast, premium, energetic.
- Spacing in multiples of 4px. Max 3 typographic levels. Animations subtle &
  functional (entrance opacity 0→1 + y 8→0 ~0.3s via `<FadeIn>`; hover 150ms).
- Avoid generic "AI-look": no gratuitous indigo/purple gradients, glass-morphism,
  or floating orbs without purpose.

## Sections

Navbar · Hero · Benefits · How to take · Testimonials · Products · FAQ · Footer.
Products are data-driven: edit `src/components/products/products.data.ts`
(typed by `Product`) — the UI renders whatever is in the `PRODUCTS` array via the
reusable `ProductCard`.
