import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-teal-deep py-20 text-white md:py-28">
      <div className="mx-auto grid max-w-content gap-12 px-5 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <h2 className="text-balance font-display text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[46px]">
            Tell us what you’d like AI to take off your plate.
          </h2>
          <p className="mt-5 max-w-[30rem] text-pretty text-[17.5px] leading-relaxed text-white/75">
            A few lines is enough. We’ll reply, usually within two working days, to set up a free 30-minute call.
          </p>
          <div className="mt-10 border-t border-white/20 pt-6">
            <p className="text-[14px] text-white/60">Prefer email?</p>
            <a
              href="mailto:yash@rapidflowdesigns.com"
              className="mt-1 inline-block text-[18px] font-medium text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
            >
              yash@rapidflowdesigns.com
            </a>
          </div>
        </div>

        <div className="rounded-2xl bg-surface p-6 text-ink md:p-9">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
