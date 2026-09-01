import CircuitFlow from "./CircuitFlow";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-ink-line">
      <div className="grid-field pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -left-40 top-0 h-[560px] w-[560px] rounded-full bg-copper/[0.06] blur-[120px]" />

      <div className="relative mx-auto grid max-w-content items-center gap-12 px-6 pb-14 pt-24 md:px-10 md:pb-16 md:pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 border border-ink-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-mute">
            <span className="h-1.5 w-1.5 rounded-full bg-copper" />
            Hardware Product Development &amp; Engineering
          </div>

          <h1 className="text-balance font-display text-[42px] font-semibold leading-[1.08] tracking-tight text-paper sm:text-[52px] lg:text-[58px]">
            Schematic to PCB. Ready to build.
          </h1>

          <p className="mt-6 max-w-[520px] text-balance text-[17px] leading-relaxed text-paper-dim">
            Hardware schematic and PCB design for product teams. We take your
            concept through electronics architecture and manufacturable
            layout, and hand off complete design files — ready for
            procurement and prototyping.
          </p>

          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-copper px-6 py-3.5 font-mono text-[13px] font-medium uppercase tracking-[0.08em] text-ink transition-colors hover:bg-copper-bright"
            >
              Discuss Your Project
            </a>
            <a
              href="#capabilities"
              className="inline-flex items-center justify-center gap-2 border border-ink-line px-6 py-3.5 font-mono text-[13px] uppercase tracking-[0.08em] text-paper-dim transition-colors hover:border-ink-line2 hover:text-paper"
            >
              Explore Our Capabilities
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <dl className="mt-10 grid max-w-[440px] grid-cols-1 gap-6 border-t border-ink-line pt-6 sm:grid-cols-3 lg:mt-10">
            {[
              ["Schematic → PCB", "Full circuit-to-layout workflow"],
              ["BOM & Sourcing", "Procurement-ready component lists"],
              ["Design Handoff", "Files ready to build"],
            ].map(([term, def]) => (
              <div key={term}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.06em] text-copper">{term}</dt>
                <dd className="mt-1.5 text-[13px] leading-snug text-paper-mute">{def}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hidden lg:flex lg:justify-end">
          <CircuitFlow />
        </div>
      </div>
    </section>
  );
}
