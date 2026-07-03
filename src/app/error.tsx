"use client";

// Components
import { Button } from "@/components/ui/button";

// Types
interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ reset }: ErrorProps) {
  return (
    <main className="grid min-h-screen place-items-center px-6">
      <div className="max-w-md text-center">
        <span className="text-5xl">👾</span>
        <h1 className="mt-6 text-2xl font-bold tracking-tight">
          Algo deu errado
        </h1>
        <p className="mt-3 text-muted-foreground text-pretty">
          Não foi possível carregar esta página. Tente novamente em instantes.
        </p>
        <Button
          onClick={reset}
          className="mt-8 h-11 bg-fogo-purple px-6 font-semibold text-primary-foreground hover:bg-fogo-purple-light"
        >
          Tentar novamente
        </Button>
      </div>
    </main>
  );
}
