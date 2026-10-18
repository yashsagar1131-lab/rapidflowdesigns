import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-paper py-10">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <Logo />
          <p className="mt-2 text-[14px] text-graphite">AI development and implementation.</p>
        </div>
        <div className="flex flex-col gap-1 md:items-end">
          <a href="mailto:yash@rapidflowdesigns.com" className="text-[14px] text-ink hover:text-teal">
            yash@rapidflowdesigns.com
          </a>
          <p className="text-[13px] text-graphite">© 2026 RapidFlow Designs</p>
        </div>
      </div>
    </footer>
  );
}
