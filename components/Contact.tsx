import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-b border-ink-line bg-ink-raised py-24 md:py-32">
      <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-copper/[0.07] blur-[130px]" />

      <div className="relative mx-auto grid max-w-content gap-14 px-6 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-copper">Contact</p>
          <h2 className="mt-3 text-balance font-display text-[30px] font-semibold leading-tight tracking-tight text-paper sm:text-[36px]">
            Have a hardware product in development?
          </h2>
          <p className="mt-5 max-w-[440px] text-[15.5px] leading-relaxed text-paper-dim">
            Tell us what you&apos;re building, where you are in the
            development process, and where you need engineering support.
          </p>

          <div className="mt-10 space-y-4 border-t border-ink-line pt-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper-mute">General inquiries</p>
              <a href="mailto:hello@rapidflowdesigns.com" className="mt-1 block text-[16px] text-paper transition-colors hover:text-copper">
                hello@rapidflowdesigns.com
              </a>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper-mute">Direct</p>
              <a href="mailto:yash@rapidflowdesigns.com" className="mt-1 block text-[16px] text-paper transition-colors hover:text-copper">
                yash@rapidflowdesigns.com
              </a>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper-mute">Web</p>
              <a href="https://rapidflowdesigns.com" className="mt-1 block text-[16px] text-paper transition-colors hover:text-copper">
                rapidflowdesigns.com
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="border border-ink-line bg-ink p-7 md:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
