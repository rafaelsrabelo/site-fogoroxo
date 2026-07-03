// Types
import type { Banner } from "./banner.types";

/**
 * Designed promo banner. Drop the exported asset in `public/images/banner/`
 * and update `src` here if the filename/extension differs. Set `width`/`height`
 * to the asset's REAL intrinsic pixel size so the aspect ratio stays correct
 * and the layout doesn't shift while the image loads (CLS).
 */
export const BANNER = {
  src: "/images/banner/banner.jpeg",
  alt: "Seja um revendedor Fogo Roxo",
  width: 1536,
  height: 1024,
} satisfies Banner;
