const PRINCIPLES = [
  {
    title: "You own everything",
    body: "Code, prompts, data and accounts stay with you. Nothing is locked inside a platform you have to keep paying us for.",
  },
  {
    title: "We’ll say when AI isn’t the answer",
    body: "Sometimes a simple automation or a small process change does the job better and cheaper. If so, we’ll tell you.",
  },
  {
    title: "Measured against a number",
    body: "Hours saved, response time, error rate: we agree what success looks like before building, and report against it.",
  },
  {
    title: "Any model, no lock-in",
    body: "We use whatever fits the job, from OpenAI, Anthropic and Google models to open-source ones, and design so you can switch later.",
  },
  {
    title: "Careful with your data",
    body: "Systems run in your own accounts wherever possible, with access limited to what each part needs, and set up so your data isn’t used to train public models.",
  },
];

export default function Principles() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="mx-auto grid max-w-content gap-12 px-5 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <h2 className="text-balance font-display text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[46px] lg:sticky lg:top-28 lg:self-start">
          What you can hold us to
        </h2>
        <ul className="space-y-10">
          {PRINCIPLES.map((p) => (
            <li key={p.title} className="flex gap-5">
              <svg className="mt-1.5 shrink-0" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <circle cx="9" cy="9" r="9" fill="#E3EEEA" />
                <path d="M5 9.2L7.8 12L13 6.5" stroke="#1F6F5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <h3 className="font-display text-[21px] font-semibold tracking-[-0.01em] text-ink">{p.title}</h3>
                <p className="mt-2 max-w-[36rem] text-[16px] leading-relaxed text-graphite">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
