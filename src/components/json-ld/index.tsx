// Utils
import { SITE_CONFIG } from "@/lib/site-config";
import { PRODUCTS } from "@/components/products/products.data";
import { FAQ_ITEMS } from "@/components/faq/faq.data";

/**
 * Structured data (schema.org) for rich results: the product line-up plus the
 * FAQ. Rendered once in the page. Offers and questions are derived from their
 * data sources so they stay in sync.
 */
export function ProductJsonLd() {
  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: SITE_CONFIG.productName,
    description: SITE_CONFIG.description,
    brand: {
      "@type": "Brand",
      name: SITE_CONFIG.name,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "BRL",
      offerCount: PRODUCTS.length,
      lowPrice: Math.min(...PRODUCTS.map((product) => product.price)),
      highPrice: Math.max(...PRODUCTS.map((product) => product.price)),
      availability: "https://schema.org/InStock",
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD injection is the Next.js-recommended pattern for structured data.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </>
  );
}
