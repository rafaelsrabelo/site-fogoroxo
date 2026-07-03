// Components
import { FadeIn } from "@/components/fade-in";
import { ProductCard } from "@/components/products/product-card";

// Utils
import { PRODUCTS } from "@/components/products/products.data";

export function Products() {
  return (
    <section id="produtos" className="scroll-mt-24 bg-white py-20 text-neutral-900">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="max-w-2xl">
          <span className="text-sm font-semibold text-fogo-purple">
            Loja Fogo Roxo
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Escolha o seu termogênico
          </h2>
          <p className="mt-4 text-neutral-500 text-pretty">
            Frete grátis nos kits, pronta entrega e brindes exclusivos. Adicione
            ao carrinho e finalize direto no WhatsApp.
          </p>
        </FadeIn>

        <FadeIn
          delay={0.05}
          className="mt-8 flex items-center justify-between border-b border-neutral-200 pb-4 text-sm text-neutral-500"
        >
          <span>
            <strong className="font-semibold text-neutral-900">
              {PRODUCTS.length}
            </strong>{" "}
            produtos encontrados
          </span>
          <span className="hidden sm:inline">Ordenar por: Relevância</span>
        </FadeIn>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, index) => (
            <FadeIn key={product.id} delay={index * 0.04}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
