const STEPS = [
  {
    name: "Map",
    time: "Typically 1–2 weeks",
    body: "We look at how the work actually gets done today, pick one workflow where AI can save real time or money, and agree on the number we’ll measure it by.",
  },
  {
    name: "Prove",
    time: "Typically 2–4 weeks",
    body: "A working prototype on your real data, tested against real cases, so you can judge the results before committing to more.",
  },
  {
    name: "Build",
    time: "Depends on scope",
    body: "The production version, connected to your systems, with access controls, testing against known cases, and a person in the loop wherever it matters.",
  },
  {
    name: "Run and hand over",
    time: "Ongoing, if you want it",
    body: "Monitoring, tuning and documentation. Your team is trained to use it, and the code, prompts and accounts are yours.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-ink py-20 text-paper md:py-28">
      <div className="mx-auto max-w-content px-5 md:px-10">
        <div className="max-w-[40rem]">
          <h2 className="text-balance font-display text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[46px]">
            How a project runs
          </h2>
          <p className="mt-5 text-pretty text-[17.5px] leading-relaxed text-paper/70">
            Small, visible steps. You see something working early, and you can stop after any stage.
          </p>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-paper/10 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li key={step.name} className="bg-ink p-6 md:p-7">
              <span className="font-display text-[44px] font-semibold leading-none tracking-[-0.04em] text-teal-wash/30">
                {i + 1}
              </span>
              <h3 className="mt-6 font-display text-[22px] font-semibold tracking-[-0.01em]">{step.name}</h3>
              <p className="mt-1 text-[14px] text-amber">{step.time}</p>
              <p className="mt-4 text-[15.5px] leading-relaxed text-paper/70">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
