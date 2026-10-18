import Heading from "./Heading";

const SERVICES = [
  {
    title: "AI assistants and agents",
    body: "Systems that take a request, look things up, act in your tools and hand over to a person when they should.",
  },
  {
    title: "Workflow automation",
    body: "Email, forms, spreadsheets, CRMs and internal systems connected so routine steps happen without anyone copying and pasting.",
  },
  {
    title: "Answers from your own documents",
    body: "Ask questions of policies, contracts, manuals or past work and get a plain answer with the sources it came from.",
  },
  {
    title: "Document and data extraction",
    body: "Invoices, forms, PDFs and emails turned into clean, structured data your other systems can use.",
  },
  {
    title: "AI features in your product",
    body: "Search, summaries, recommendations or a chat interface added to software you already sell to customers.",
  },
  {
    title: "Strategy, advice and training",
    body: "Where AI is worth it in your business, which tools and models to use, how to roll it out, and how your team keeps it working.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-content gap-12 px-5 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Heading
            title="What we build"
            lead="Practical AI systems that fit into how your business already runs. No industry is off the table; what matters is a repeated piece of work that costs you time, money or customers."
          />
        </div>

        <dl className="divide-y divide-line border-y border-line">
          {SERVICES.map((s) => (
            <div key={s.title} className="grid gap-2 py-6 sm:grid-cols-[14rem_1fr] sm:gap-8">
              <dt className="font-display text-[19px] font-semibold leading-snug tracking-[-0.01em] text-ink">{s.title}</dt>
              <dd className="text-[16px] leading-relaxed text-graphite">{s.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
