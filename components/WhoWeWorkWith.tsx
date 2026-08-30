import Reveal from "./Reveal";

const AUDIENCES = ["Hardware Startups", "Product Companies", "SMEs & Industrial Businesses", "Engineering & Design Partners"];

export default function WhoWeWorkWith() {
  return (
    <section className="border-b border-ink-line py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-copper">Who We Work With</p>
            <h2 className="mt-3 text-balance font-display text-[30px] font-semibold leading-tight tracking-tight text-paper sm:text-[36px]">
              Built for teams that need to move.
            </h2>
            <p className="mt-5 max-w-[480px] text-[15.5px] leading-relaxed text-paper-dim">
              Whether you have an early-stage concept, a working prototype that
              needs refinement, or a product moving toward production, we can
              provide focused engineering support where you need it.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {AUDIENCES.map((a) => (
                <li
                  key={a}
                  className="flex items-center justify-between border border-ink-line px-6 py-5 text-[15px] text-paper transition-colors hover:border-ink-line2"
                >
                  {a}
                  <span className="font-mono text-copper" aria-hidden="true">→</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
