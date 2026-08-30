export default function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="font-display text-[15px] font-semibold text-paper">RapidFlow Designs</p>
          <p className="mt-1 text-[13px] text-paper-mute">Hardware Product Development &amp; Engineering</p>
          <p className="text-[13px] text-paper-mute">From Concept to Production.</p>
        </div>

        <div className="flex flex-col gap-1 md:items-end">
          <a href="mailto:hello@rapidflowdesigns.com" className="text-[13px] text-paper-dim transition-colors hover:text-copper">
            hello@rapidflowdesigns.com
          </a>
          <p className="font-mono text-[12px] text-paper-mute">© 2026 RapidFlow Designs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
