import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const STEPS = [
  { index: "01", title: "Define", desc: "Requirements, constraints and system architecture." },
  { index: "02", title: "Design", desc: "Electronics architecture, schematics, components and PCB layout." },
  { index: "03", title: "Deliver", desc: "Schematics, PCB files and BOM handed off, ready for procurement and prototyping." },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden border-b border-ink-line bg-ink-raised py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Development Flow"
            title="From concept to manufacturable PCB."
            lead="Keep engineering decisions connected from the first schematic to the production-ready design file."
          />
        </Reveal>

        <div className="relative mt-16">
          {/* connecting line, desktop */}
          <svg
            className="pointer-events-none absolute left-0 top-[27px] hidden w-full lg:block"
            height="2"
            viewBox="0 0 1000 2"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line x1="0" y1="1" x2="1000" y2="1" stroke="#2A2E35" strokeWidth="1" />
            <line
              x1="0"
              y1="1"
              x2="1000"
              y2="1"
              stroke="#C1875A"
              strokeWidth="1.4"
              strokeDasharray="4 8"
              className="animate-dash-flow"
            />
          </svg>

          <ol className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:gap-10">
            {STEPS.map((step, i) => (
              <Reveal key={step.index} delay={i * 90}>
                <li className="relative lg:pt-0">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center border border-copper/40 bg-ink-raised font-mono text-[13px] text-copper">
                    {step.index}
                  </div>
                  <h3 className="mt-5 font-display text-[17px] font-semibold text-paper">{step.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-paper-dim">{step.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
