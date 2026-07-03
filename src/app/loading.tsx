/**
 * Route-level skeleton. Mirrors the real DOM structure (navbar + hero) with
 * neutral pulsing blocks — no spinners, no "carregando..." text.
 */
export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* Navbar skeleton */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="h-8 w-32 rounded-lg bg-muted" />
          <div className="h-10 w-32 rounded-lg bg-muted" />
        </div>
      </header>

      {/* Hero skeleton */}
      <section className="pt-32 pb-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="h-8 w-64 rounded-full bg-muted" />
            <div className="space-y-3">
              <div className="h-14 w-full rounded-lg bg-muted" />
              <div className="h-14 w-3/4 rounded-lg bg-muted" />
            </div>
            <div className="space-y-2">
              <div className="h-5 w-full rounded bg-muted" />
              <div className="h-5 w-5/6 rounded bg-muted" />
            </div>
            <div className="flex gap-3">
              <div className="h-13 w-44 rounded-lg bg-muted" />
              <div className="h-13 w-44 rounded-lg bg-muted" />
            </div>
          </div>
          <div className="mx-auto aspect-square w-full max-w-md rounded-3xl bg-muted" />
        </div>
      </section>
    </div>
  );
}
