// Next
import { Manrope } from "next/font/google";

// Libs
import "@/styles/globals.css";

// Providers
import { QueryProvider } from "@/providers/query-provider";
import { CartProvider } from "@/providers/cart-provider";

// Components
import { CartDrawer } from "@/components/cart-drawer";
import { FloatingHelper } from "@/components/floating-helper";

// Utils
import { cn } from "@/lib/utils";
import { DEFAULT_METADATA } from "@/lib/site-config";

// Types
import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = DEFAULT_METADATA;

export const viewport: Viewport = {
  themeColor: "#8221df",
  colorScheme: "dark",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR" className={cn("dark", manrope.variable)}>
      <body className="font-sans">
        <QueryProvider>
          <CartProvider>
            {children}
            <CartDrawer />
            <FloatingHelper />
          </CartProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
