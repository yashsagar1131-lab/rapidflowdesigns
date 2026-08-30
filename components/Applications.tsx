import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const AREAS = [
  "Energy & Battery Systems",
  "EV & Mobility",
  "Industrial Electronics",
  "IoT & Connected Devices",
  "Automation & Control",
  "Custom Electronics",
];

export default function Applications() {
  return (
    <section id="industries" className="border-b border-ink-line py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Applications"
            title="Where we can help."
            lead="Areas we support include the following. Depth of experience varies by project — we'll tell you plainly where we fit."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px border border-ink-line bg-ink-line sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((area, i) => (
            <Reveal key={area} delay={i * 50}>
              <div className="flex h-full items-center gap-4 bg-ink px-7 py-6 md:px-8">
                <span className="h-1 w-1 shrink-0 bg-copper" />
                <span className="text-[15px] text-paper">{area}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
