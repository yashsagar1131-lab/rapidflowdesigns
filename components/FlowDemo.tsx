"use client";

import { useEffect, useState } from "react";

type Example = {
  tab: string;
  source: string;
  input: string;
  steps: string[];
  output: string;
  outputNote: string;
};

const EXAMPLES: Example[] = [
  {
    tab: "Support",
    source: "Customer email",
    input: "“Order #4471 arrived damaged. Can I get a replacement?”",
    steps: ["Reads the email", "Finds order #4471 in your store", "Checks it against your returns policy", "Drafts a reply"],
    output: "Replacement approved under the 30-day policy. Reply drafted, return label attached, ticket tagged “damaged item”.",
    outputNote: "Waiting for a person to approve",
  },
  {
    tab: "Finance",
    source: "Supplier invoice, PDF",
    input: "3-page invoice with 12 line items from a regular supplier.",
    steps: ["Pulls out every line item", "Matches it to purchase order PO-2219", "Flags anything that doesn’t match", "Prepares the entry in your accounts"],
    output: "11 of 12 lines match. One price difference flagged for approval; the rest queued in your accounting system.",
    outputNote: "One item needs a decision",
  },
  {
    tab: "Sales",
    source: "Website enquiry",
    input: "“We need help onboarding about 200 new staff a month.”",
    steps: ["Looks up the company", "Scores fit against your criteria", "Writes a tailored first reply", "Creates the record in your CRM"],
    output: "Strong fit. Personal reply drafted, CRM record created, two call slots suggested for this week.",
    outputNote: "Ready to send",
  },
  {
    tab: "Internal",
    source: "Question in team chat",
    input: "“What’s our current process for approving overtime?”",
    steps: ["Searches your policy documents", "Finds the latest version", "Answers in plain language with sources"],
    output: "Answer posted in the thread, linked to HR policy v3, section 4.2.",
    outputNote: "Answered in seconds",
  },
];

const STEP_MS = 750;
const HOLD_MS = 3600;

export default function FlowDemo() {
  const [index, setIndex] = useState(0);
  // phase = how many steps are revealed; steps.length + 1 means output is shown too
  const [phase, setPhase] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [reduced, setReduced] = useState(false);

  const example = EXAMPLES[index];
  const done = phase > example.steps.length;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduced) {
      setPhase(example.steps.length + 1);
      return;
    }
    if (!done) {
      const t = window.setTimeout(() => setPhase((p) => p + 1), phase === 0 ? 500 : STEP_MS);
      return () => window.clearTimeout(t);
    }
    if (autoplay) {
      const t = window.setTimeout(() => {
        setIndex((i) => (i + 1) % EXAMPLES.length);
        setPhase(0);
      }, HOLD_MS);
      return () => window.clearTimeout(t);
    }
  }, [phase, done, autoplay, reduced, example.steps.length]);

  function choose(i: number) {
    setAutoplay(false);
    setIndex(i);
    setPhase(reduced ? EXAMPLES[i].steps.length + 1 : 0);
  }

  return (
    <div className="rounded-2xl border border-line bg-surface p-4 shadow-[0_1px_0_rgba(21,23,28,0.04),0_24px_48px_-24px_rgba(21,23,28,0.18)] sm:p-6">
      <div role="tablist" aria-label="Example workflows" className="flex flex-wrap gap-1.5">
        {EXAMPLES.map((ex, i) => (
          <button
            key={ex.tab}
            type="button"
            role="tab"
            aria-selected={i === index}
            onClick={() => choose(i)}
            className={`rounded-full px-3.5 py-1.5 text-[13.5px] font-medium transition-colors ${
              i === index ? "bg-ink text-paper" : "text-graphite hover:bg-paper hover:text-ink"
            }`}
          >
            {ex.tab}
          </button>
        ))}
      </div>

      <div className="mt-5" aria-live="polite">
        {/* Comes in */}
        <div key={`in-${index}`} className="step-in rounded-xl border border-line bg-paper p-4">
          <p className="text-[12.5px] font-medium text-graphite">Comes in · {example.source}</p>
          <p className="mt-1.5 text-[15.5px] leading-snug text-ink">{example.input}</p>
        </div>

        <Connector />

        {/* AI does */}
        <div className="rounded-xl bg-ink p-4 text-paper">
          <p className="text-[12.5px] font-medium text-paper/60">AI does the work</p>
          <ol className="mt-2.5 space-y-2">
            {example.steps.map((step, i) => {
              const shown = phase > i;
              const active = phase === i + 1 && !done;
              return (
                <li
                  key={`${index}-${step}`}
                  className={`flex items-center gap-2.5 text-[14.5px] ${shown ? "step-in" : "opacity-25"}`}
                >
                  <span
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                      active ? "bg-amber" : shown ? "bg-teal" : "border border-paper/40"
                    }`}
                    aria-hidden="true"
                  >
                    {shown && !active && (
                      <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                        <path d="M1 3.5L3.5 6L8 1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  <span className={shown ? "text-paper" : "text-paper/70"}>{step}</span>
                </li>
              );
            })}
          </ol>
        </div>

        <Connector />

        {/* Goes out */}
        <div
          className={`rounded-xl border p-4 transition-colors duration-300 ${
            done ? "border-teal/30 bg-teal-wash" : "border-dashed border-line bg-surface"
          }`}
        >
          <p className="text-[12.5px] font-medium text-teal-deep">Goes out</p>
          {done ? (
            <div key={`out-${index}`} className="step-in">
              <p className="mt-1.5 text-[15.5px] leading-snug text-ink">{example.output}</p>
              <p className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-surface px-2.5 py-1 text-[12.5px] font-medium text-teal-deep">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
                {example.outputNote}
              </p>
            </div>
          ) : (
            <p className="mt-1.5 text-[15.5px] leading-snug text-graphite/70">Working…</p>
          )}
        </div>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="relative mx-auto h-6 w-px bg-line" aria-hidden="true">
      <span className="flow-dot absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal" />
    </div>
  );
}
