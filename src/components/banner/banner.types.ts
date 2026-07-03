export type Banner = {
  /** Path under `public/` (e.g. `/images/banner/banner.webp`). */
  src: string;
  /** Descriptive alt text for SEO/accessibility. */
  alt: string;
  /** Intrinsic pixel width of the asset — defines the aspect ratio (prevents CLS). */
  width: number;
  /** Intrinsic pixel height of the asset — defines the aspect ratio (prevents CLS). */
  height: number;
};

export type BannerProps = {
  className?: string;
};
