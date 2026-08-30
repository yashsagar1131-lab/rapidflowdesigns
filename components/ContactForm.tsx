"use client";

import { useState, type FormEvent } from "react";

const STAGES = [
  "Concept / early idea",
  "Requirements defined",
  "Prototype in progress",
  "Prototype exists, needs refinement",
  "Moving toward production",
];

const inputClasses =
  "w-full border border-ink-line bg-ink-raised px-4 py-3 text-[14.5px] text-paper placeholder:text-paper-mute/70 transition-colors focus:border-copper/60";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const company = String(form.get("company") || "");
    const email = String(form.get("email") || "");
    const project = String(form.get("project") || "");
    const stage = String(form.get("stage") || "");
    const help = String(form.get("help") || "");
    const budget = String(form.get("budget") || "");

    const subject = `Project inquiry — ${project || name || "New project"}`;
    const bodyLines = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Project / Product: ${project}`,
      `Current Stage: ${stage}`,
      "",
      "What they need help with:",
      help,
      "",
      budget ? `Budget / timeline: ${budget}` : "",
    ].filter(Boolean);

    const mailto = `mailto:hello@rapidflowdesigns.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper-mute">
          Name
        </label>
        <input id="name" name="name" type="text" required className={inputClasses} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="company" className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper-mute">
          Company
        </label>
        <input id="company" name="company" type="text" className={inputClasses} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper-mute">
          Email
        </label>
        <input id="email" name="email" type="email" required className={inputClasses} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="project" className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper-mute">
          Project / Product
        </label>
        <input id="project" name="project" type="text" className={inputClasses} />
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="stage" className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper-mute">
          Current Stage
        </label>
        <select id="stage" name="stage" defaultValue="" className={`${inputClasses} appearance-none`}>
          <option value="" disabled>
            Select the closest fit
          </option>
          {STAGES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="help" className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper-mute">
          What do you need help with?
        </label>
        <textarea id="help" name="help" required rows={4} className={inputClasses} />
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="budget" className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper-mute">
          Budget / Timeline <span className="normal-case text-paper-mute/70">(optional)</span>
        </label>
        <input id="budget" name="budget" type="text" className={inputClasses} />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center bg-copper px-6 py-3.5 font-mono text-[13px] font-medium uppercase tracking-[0.08em] text-ink transition-colors hover:bg-copper-bright sm:w-auto"
        >
          Start a Conversation
        </button>
        {status === "sent" && (
          <p className="mt-3 text-[13px] text-paper-dim">
            Opening your email client with these details filled in — send it across whenever you&apos;re ready.
          </p>
        )}
      </div>
    </form>
  );
}
