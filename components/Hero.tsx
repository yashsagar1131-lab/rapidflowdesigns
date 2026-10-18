import FlowDemo from "./FlowDemo";

export default function Hero() {
  return (
    <section id="top" className="pb-20 pt-28 md:pb-28 md:pt-36">
      <div className="mx-auto grid max-w-content items-center gap-12 px-5 md:px-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <p className="text-[15px] font-medium text-teal">AI development and implementation</p>
          <h1 className="mt-4 text-balance font-display text-[44px] font-semibold leading-[0.98] tracking-[-0.035em] text-ink sm:text-[60px] lg:text-[72px]">
            AI that does real work inside your business.
          </h1>
          <p className="mt-6 max-w-[34rem] text-pretty text-[18px] leading-relaxed text-graphite">
            We design, build and run AI assistants, agents and automations that connect to the tools you already use.
            Start with one workflow, see it working on your own data within weeks, and keep everything we build.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-teal px-6 py-3.5 text-[16px] font-medium text-white transition-colors hover:bg-teal-deep"
            >
              Book a 30-minute call
            </a>
            <a
              href="#examples"
              className="inline-flex items-center justify-center rounded-lg border border-line px-6 py-3.5 text-[16px] font-medium text-ink transition-colors hover:border-ink"
            >
              See example workflows
            </a>
          </div>
          <p className="mt-4 text-[14px] text-graphite">The first call is free and there’s no commitment.</p>
        </div>

        <div>
          <FlowDemo />
          <p className="mt-3 text-center text-[13px] text-graphite">
            Illustrative examples. Every build is shaped around your own tools and rules.
          </p>
        </div>
      </div>
    </section>
  );
}
