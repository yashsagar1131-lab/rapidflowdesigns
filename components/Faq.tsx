import Heading from "./Heading";

const FAQS = [
  {
    q: "We only have a vague idea. Is that too early?",
    a: "No, that’s a normal place to start. The first call and the opportunity review exist to turn “we should be using AI” into one concrete, worthwhile project.",
  },
  {
    q: "Do we need our own technical team?",
    a: "No. We can work directly with whoever owns the process. If you do have engineers, we work alongside them and hand over cleanly.",
  },
  {
    q: "How long until something is working?",
    a: "Usually a few weeks for a first working version on your data. It depends on how many systems are involved, so you’ll get a firm timeline after the first call.",
  },
  {
    q: "What does it cost?",
    a: "It depends on scope. Pilots are priced as a fixed fee agreed before work begins, so there are no open-ended bills. Running costs for AI models and hosting are estimated up front.",
  },
  {
    q: "Which AI models and tools do you use?",
    a: "Whatever suits the job: models from OpenAI, Anthropic, Google or open-source alternatives, plus the tools you already rely on. We avoid tying you to any one vendor.",
  },
  {
    q: "What happens to our data?",
    a: "It stays in systems you control wherever possible. Access is limited to what each part needs, and we configure providers so your data isn’t used to train their models.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="border-t border-line bg-surface py-20 md:py-28">
      <div className="mx-auto grid max-w-content gap-12 px-5 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Heading title="Questions people ask first" />
        </div>
        <div className="divide-y divide-line border-y border-line">
          {FAQS.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex cursor-pointer items-start justify-between gap-6 py-5 font-display text-[19px] font-semibold leading-snug tracking-[-0.01em] text-ink">
                {f.q}
                <svg
                  className="mt-1.5 shrink-0 transition-transform duration-200 group-open:rotate-45"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </summary>
              <p className="max-w-[38rem] pb-6 text-[16px] leading-relaxed text-graphite">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
