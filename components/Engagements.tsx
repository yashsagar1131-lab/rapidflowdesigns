import Heading from "./Heading";

const OPTIONS = [
  {
    name: "AI opportunity review",
    fit: "If you’re not sure where to start",
    body: "A short, fixed-scope look at how your team works. You get a ranked list of where AI fits, rough costs, and a recommended first project.",
  },
  {
    name: "Pilot build",
    fit: "If you know the problem you want solved",
    body: "One workflow, built and tested on your data. The price is fixed and agreed after scoping, before any work starts.",
  },
  {
    name: "Ongoing build and support",
    fit: "Once something is live",
    body: "A monthly arrangement to monitor and improve what’s running and take on the next workflow when you’re ready.",
  },
];

export default function Engagements() {
  return (
    <section id="engagements" className="py-20 md:py-28">
      <div className="mx-auto max-w-content px-5 md:px-10">
        <Heading title="Ways to start" lead="Every engagement begins with a free 30-minute call to understand what you need." />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {OPTIONS.map((o) => (
            <div key={o.name} className="flex flex-col rounded-2xl border border-line bg-surface p-6 md:p-7">
              <p className="text-[14px] font-medium text-teal">{o.fit}</p>
              <h3 className="mt-2 font-display text-[23px] font-semibold leading-tight tracking-[-0.015em] text-ink">{o.name}</h3>
              <p className="mt-4 text-[16px] leading-relaxed text-graphite">{o.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
