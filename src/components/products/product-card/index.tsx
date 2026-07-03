"use client";

// Next
import Image from "next/image";

// Libs
import { ShoppingCart, Star } from "lucide-react";

// Components
import { Button } from "@/components/ui/button";

// Hooks
import { useCart } from "@/providers/cart-provider";

// Utils
import { cn } from "@/lib/utils";
import { formatPrice, discountPercent } from "@/lib/format";

// Types
import type { ProductCardProps } from "./product-card.types";

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const { id, name, description, price, originalPrice, badge, featured, image, note } =
    product;
  const discount = discountPercent(price, originalPrice);

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border bg-white transition-shadow duration-200 hover:shadow-[0_16px_40px_-24px_rgba(130,33,223,0.5)]",
        featured
          ? "border-fogo-purple/60 ring-1 ring-fogo-purple/30"
          : "border-neutral-200",
      )}
    >
      {/* Full promo artwork — carries the branding, benefits, shipping and gift */}
      <Image
        src={image.path}
        alt={image.label}
        width={1086}
        height={1448}
        className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.03]"
      />

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-0.5 text-fogo-purple">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="size-3.5 fill-current" />
              ))}
            </div>
            <span className="text-xs text-neutral-400">(5,0)</span>
          </div>
          {badge && (
            <span className="rounded-full bg-fogo-purple/10 px-2.5 py-1 text-[11px] font-semibold text-fogo-purple">
              {badge}
            </span>
          )}
        </div>

        <h3 className="mt-2 text-base font-bold leading-snug text-neutral-900">
          {name}
        </h3>
        <p className="mt-1.5 line-clamp-3 text-sm text-neutral-500 text-pretty">
          {description}
        </p>

        <div className="mt-auto flex items-end gap-2 pt-4">
          {originalPrice && (
            <span className="text-sm text-neutral-400 line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
          <span className="text-2xl font-extrabold tracking-tight text-neutral-900">
            {formatPrice(price)}
          </span>
          {discount > 0 && (
            <span className="mb-1 rounded bg-fogo-purple/10 px-1.5 py-0.5 text-xs font-bold text-fogo-purple">
              -{discount}%
            </span>
          )}
        </div>

        <Button
          onClick={() => addItem({ id, name, price, image: image.path })}
          className="mt-4 h-11 w-full bg-fogo-purple text-sm font-semibold text-white transition-colors duration-150 hover:bg-fogo-purple-dark"
        >
          <ShoppingCart className="size-4" />
          Adicionar ao carrinho
        </Button>

        {note && (
          <p className="mt-3 text-center text-[11px] text-neutral-400">{note}</p>
        )}
      </div>
    </article>
  );
}
