"use client";

import { useState, type FormEvent } from "react";

const STAGES = [
  "Just exploring what AI could do for us",
  "We have a specific task or workflow in mind",
  "We’ve tried AI tools but aren’t seeing results",
  "We have a pilot that needs to reach production",
  "We want AI features in our own product",
];

const inputClasses =
  "w-full rounded-lg border border-line bg-paper px-4 py-3 text-[16px] text-ink placeholder:text-graphite/60 transition-colors focus:border-teal focus:bg-surface disabled:opacity-60";

const labelClasses = "text-[14px] font-medium text-ink";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Web3Forms access keys are designed to be public (embedded in client-side forms).
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "");
    formData.append(
      "subject",
      `AI enquiry — ${String(formData.get("company") || formData.get("name") || "New enquiry")}`
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
      <div className="flex min-h-[340px] flex-col items-center justify-center text-center" role="status">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-wash">
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" aria-hidden="true">
            <path d="M1 8L7 14L19 1" stroke="#1F6F5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display text-[22px] font-semibold text-ink">Message sent</h3>
        <p className="mt-2 max-w-[360px] text-[16px] leading-relaxed text-graphite">
          Thanks. We’ll reply to set up a call, usually within two working days.
        </p>
      </div>
    );
  }

  const busy = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {/* honeypot field for basic bot protection, hidden from real users */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className={labelClasses}>
          Name
        </label>
        <input id="name" name="name" type="text" autoComplete="name" required disabled={busy} className={inputClasses} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className={labelClasses}>
          Work email
        </label>
        <input id="email" name="email" type="email" autoComplete="email" required disabled={busy} className={inputClasses} />
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="company" className={labelClasses}>
          Company <span className="font-normal text-graphite">(optional)</span>
        </label>
        <input id="company" name="company" type="text" autoComplete="organization" disabled={busy} className={inputClasses} />
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="stage" className={labelClasses}>
          Where are you with AI?
        </label>
        <div className="relative">
          <select id="stage" name="stage" defaultValue="" disabled={busy} className={`${inputClasses} appearance-none pr-10`}>
            <option value="" disabled>
              Choose the closest fit
            </option>
            {STAGES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <svg
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-graphite"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            aria-hidden="true"
          >
            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="help" className={labelClasses}>
          What would you like AI to help with?
        </label>
        <textarea
          id="help"
          name="help"
          required
          rows={4}
          disabled={busy}
          placeholder="For example: we answer the same supplier questions by email every day"
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="budget" className={labelClasses}>
          Budget or timeline <span className="font-normal text-graphite">(optional)</span>
        </label>
        <input id="budget" name="budget" type="text" disabled={busy} className={inputClasses} />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={busy}
          className="inline-flex w-full items-center justify-center rounded-lg bg-teal px-6 py-3.5 text-[16px] font-medium text-white transition-colors hover:bg-teal-deep disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {busy ? "Sending…" : "Send message"}
        </button>
        {status === "error" && (
          <p className="mt-3 text-[14.5px] text-graphite" role="alert">
            The message didn’t send. Try again, or email{" "}
            <a href="mailto:yash@rapidflowdesigns.com" className="font-medium text-teal underline underline-offset-2">
              yash@rapidflowdesigns.com
            </a>{" "}
            directly.
          </p>
        )}
      </div>
    </form>
  );
}
