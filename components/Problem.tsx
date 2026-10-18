const GAPS = [
  {
    title: "The tools are there, the workflow isn’t.",
    body: "Teams pay for AI subscriptions, but nothing is connected to the systems where the work actually happens, so people copy and paste between them.",
  },
  {
    title: "Pilots stall before they go live.",
    body: "A demo works on ten tidy examples, then meets real data, odd cases and a security review, and quietly gets parked.",
  },
  {
    title: "Nobody looks after it once it’s live.",
    body: "Without monitoring and someone to tune it, accuracy drifts, people stop trusting it and go back to doing it by hand.",
  },
];

export default function Problem() {
  return (
    <section className="border-y border-line bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-content px-5 md:px-10">
        <h2 className="max-w-[44rem] text-balance font-display text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[46px]">
          Most businesses have tried AI. Far fewer have it doing real work.
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
          {GAPS.map((gap) => (
            <div key={gap.title} className="border-t-2 border-ink pt-5">
              <h3 className="font-display text-[21px] font-semibold leading-snug tracking-[-0.01em] text-ink">{gap.title}</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-graphite">{gap.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-14 max-w-[44rem] text-pretty text-[19px] leading-relaxed text-ink">
          We handle all three: choosing the workflow that’s worth it, building it properly against your real data, and
          keeping it running after launch.
        </p>
      </div>
    </section>
  );
}
