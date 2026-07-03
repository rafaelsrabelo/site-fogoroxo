// Next
import Link from "next/link";

// Libs
import { MessageCircle } from "lucide-react";

// Utils
import { SITE_CONFIG } from "@/lib/site-config";

const FOOTER_LINKS = [
  { label: "Benefícios", href: "#beneficios" },
  { label: "Como tomar", href: "#como-tomar" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Produtos", href: "#produtos" },
  { label: "FAQ", href: "#faq" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <span className="text-lg font-extrabold tracking-tight">
              {SITE_CONFIG.name}
            </span>
            <p className="mt-3 text-sm text-muted-foreground text-pretty">
              {SITE_CONFIG.tagline}. Termogênico para emagrecimento, controle do
              apetite e mais disposição no dia a dia.
            </p>
            <a
              href={SITE_CONFIG.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-fogo-purple-light transition-colors duration-150 hover:text-foreground"
            >
              <MessageCircle className="size-4" />
              {SITE_CONFIG.whatsapp.display}
            </a>
          </div>

          <nav aria-label="Rodapé">
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-150 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          <span>
            © {year} {SITE_CONFIG.name}. Todos os direitos reservados.
          </span>
          <span className="text-pretty">
            Este produto não substitui uma alimentação equilibrada. Não exceda a
            recomendação diária de consumo. Consulte um profissional de saúde
            antes do uso.
          </span>
        </div>
      </div>
    </footer>
  );
}
