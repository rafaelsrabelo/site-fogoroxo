"use client";

// React
import { useState } from "react";

// Libs
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Types
import type { PropsWithChildren } from "react";

export function QueryProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
