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
  "w-full border border-ink-line bg-ink-raised px-4 py-3 text-[14.5px] text-paper placeholder:text-paper-mute/70 transition-colors focus:border-copper/60 disabled:opacity-60";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Web3Forms config — access key is safe to expose client-side (that's
    // how Web3Forms is designed to be used: embedded in public HTML forms).
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "");
    formData.append(
      "subject",
      `Project inquiry — ${String(formData.get("project") || formData.get("name") || "New project")}`
    );
    formData.append("from_name", "RapidFlow Designs website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-copper/40">
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" aria-hidden="true">
            <path d="M1 8L7 14L19 1" stroke="#C1875A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display text-[18px] font-semibold text-paper">Message sent</h3>
        <p className="mt-2 max-w-[360px] text-[14.5px] leading-relaxed text-paper-dim">
          Thanks — that landed in our inbox. We&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {/* honeypot field for basic bot protection — hidden from real users */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper-mute">
          Name
        </label>
        <input id="name" name="name" type="text" required disabled={status === "submitting"} className={inputClasses} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="company" className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper-mute">
          Company
        </label>
        <input id="company" name="company" type="text" disabled={status === "submitting"} className={inputClasses} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper-mute">
          Email
        </label>
        <input id="email" name="email" type="email" required disabled={status === "submitting"} className={inputClasses} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="project" className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper-mute">
          Project / Product
        </label>
        <input id="project" name="project" type="text" disabled={status === "submitting"} className={inputClasses} />
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="stage" className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper-mute">
          Current Stage
        </label>
        <select
          id="stage"
          name="stage"
          defaultValue=""
          disabled={status === "submitting"}
          className={`${inputClasses} appearance-none`}
        >
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
        <textarea id="help" name="help" required rows={4} disabled={status === "submitting"} className={inputClasses} />
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="budget" className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper-mute">
          Budget / Timeline <span className="normal-case text-paper-mute/70">(optional)</span>
        </label>
        <input id="budget" name="budget" type="text" disabled={status === "submitting"} className={inputClasses} />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center bg-copper px-6 py-3.5 font-mono text-[13px] font-medium uppercase tracking-[0.08em] text-ink transition-colors hover:bg-copper-bright disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {status === "submitting" ? "Sending…" : "Start a Conversation"}
        </button>
        {status === "error" && (
          <p className="mt-3 text-[13px] text-paper-dim">
            Something went wrong sending that. You can also reach us directly at{" "}
            <a href="mailto:yash@rapidflowdesigns.com" className="text-copper hover:underline">
              yash@rapidflowdesigns.com
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
