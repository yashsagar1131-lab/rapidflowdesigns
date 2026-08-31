import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const CAPABILITIES = [
  {
    index: "01",
    title: "Hardware Architecture",
    desc: "System architecture, requirements and technical definition.",
  },
  {
    index: "02",
    title: "Schematic Design",
    desc: "Component selection, circuit design and power architecture.",
  },
  {
    index: "03",
    title: "PCB Design",
    desc: "Multilayer PCB layout, routing, stack-up and design optimization.",
  },
  {
    index: "04",
    title: "Design Handoff",
    desc: "Complete schematics, PCB files and BOM, delivered ready for procurement and prototyping.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="border-b border-ink-line py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Schematic and PCB design, done properly."
            lead="We design the electronics — from architecture through manufacturable PCB layout — and hand off complete files ready for procurement and prototyping. Testing, validation and production are yours to run, on clean, well-documented design outputs."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px border border-ink-line bg-ink-line sm:grid-cols-2">
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.index} delay={i * 60}>
              <div className="group h-full bg-ink p-7 transition-colors hover:bg-ink-raised md:p-8">
                <span className="font-mono text-[12px] text-paper-mute">{cap.index}</span>
                <h3 className="mt-5 font-display text-[18px] font-semibold text-paper">{cap.title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-paper-dim">{cap.desc}</p>
                <div className="mt-6 h-px w-8 bg-copper/50 transition-all duration-300 group-hover:w-14" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
