import Reveal from "./Reveal";

const POINTS = [
  {
    title: "Think beyond the schematic",
    desc: "We consider how the design will actually be assembled and manufactured downstream, not just whether it works on paper.",
  },
  {
    title: "Clean, well-documented handoff",
    desc: "Design files are structured so your team — or your prototyping and manufacturing partners — can pick them up without back-and-forth.",
  },
  {
    title: "Flexible engineering support",
    desc: "Work with us for a focused schematic or PCB task, or the full electronics design scope.",
  },
  {
    title: "Built for real-world constraints",
    desc: "Cost, component availability, manufacturability and time-to-market shape every design decision.",
  },
];

export default function WhyRapidFlow() {
  return (
    <section className="border-b border-ink-line py-24 md:py-32">
      <div className="mx-auto grid max-w-content gap-12 px-6 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-copper">Why RapidFlow</p>
          <h2 className="mt-3 text-balance font-display text-[30px] font-semibold leading-tight tracking-tight text-paper sm:text-[36px]">
            Engineering with the product in mind.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-px border border-ink-line bg-ink-line sm:grid-cols-2">
          {POINTS.map((point, i) => (
            <Reveal key={point.title} delay={i * 70}>
              <div className="h-full bg-ink p-7 md:p-8">
                <h3 className="font-display text-[16.5px] font-semibold leading-snug text-paper">{point.title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-paper-dim">{point.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
