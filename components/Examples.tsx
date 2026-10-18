import Heading from "./Heading";

const ROWS = [
  {
    area: "Customer support",
    input: "Tickets, emails and chat messages",
    ai: "Sorts them, answers common questions from your help content, drafts replies for the rest",
    result: "Quicker first replies; your team spends its time on the hard cases",
  },
  {
    area: "Sales",
    input: "New leads and enquiries",
    ai: "Researches the company, scores fit, writes a personal first reply, updates the CRM",
    result: "Every lead gets a considered reply the same day",
  },
  {
    area: "Operations",
    input: "Orders, schedules and supplier emails",
    ai: "Reads them, updates your systems and flags anything unusual",
    result: "Fewer manual updates and fewer details missed",
  },
  {
    area: "Finance",
    input: "Invoices, receipts and statements",
    ai: "Extracts the figures, matches them to orders, highlights mismatches",
    result: "Less manual checking at month end",
  },
  {
    area: "People and HR",
    input: "Policy questions and onboarding tasks",
    ai: "Answers from your handbook with sources and keeps onboarding steps on track",
    result: "New starters get answers without waiting on someone",
  },
  {
    area: "Product and engineering",
    input: "Specs, tickets and code",
    ai: "Summarises, triages, drafts tests and documentation",
    result: "More of the week spent building",
  },
];

export default function Examples() {
  return (
    <section id="examples" className="border-y border-line bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-content px-5 md:px-10">
        <Heading
          title="Where AI usually earns its keep"
          lead="Examples by business function rather than industry. The same patterns show up whether you run a clinic, a factory, an agency or a software company."
        />

        <div className="mt-12 overflow-hidden rounded-2xl border border-line">
          <div className="hidden grid-cols-[11rem_1fr_1.4fr_1.2fr] gap-6 bg-paper px-6 py-3.5 text-[13.5px] font-medium text-graphite md:grid">
            <span>Area</span>
            <span>What comes in</span>
            <span>What AI does</span>
            <span>What changes</span>
          </div>
          <ul className="divide-y divide-line">
            {ROWS.map((r) => (
              <li key={r.area} className="grid gap-3 px-5 py-6 md:grid-cols-[11rem_1fr_1.4fr_1.2fr] md:gap-6 md:px-6">
                <h3 className="font-display text-[18px] font-semibold tracking-[-0.01em] text-ink">{r.area}</h3>
                <Cell label="What comes in" text={r.input} />
                <Cell label="What AI does" text={r.ai} />
                <Cell label="What changes" text={r.result} strong />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Cell({ label, text, strong = false }: { label: string; text: string; strong?: boolean }) {
  return (
    <p className={`text-[15.5px] leading-relaxed ${strong ? "text-teal-deep" : "text-graphite"}`}>
      <span className="mb-0.5 block text-[12.5px] font-medium text-graphite/80 md:hidden">{label}</span>
      {text}
    </p>
  );
}
