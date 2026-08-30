"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#process", label: "Process" },
  { href: "#industries", label: "Industries" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-ink-line bg-ink/90 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-2.5" aria-label="RapidFlow Designs home">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <path d="M4 11H8L10 6L13 16L15 11H18" stroke="#C1875A" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="round" />
          </svg>
          <span className="font-display text-[15px] font-semibold tracking-tight text-paper">
            RapidFlow<span className="text-copper"> Designs</span>
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[13px] uppercase tracking-[0.08em] text-paper-dim transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-sm border border-copper/40 px-4 py-2 font-mono text-[13px] uppercase tracking-[0.08em] text-copper transition-colors hover:border-copper hover:bg-copper/10 md:inline-block"
        >
          Discuss Your Project
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-9 w-9 items-center justify-center border border-ink-line text-paper md:hidden"
        >
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
            {open ? (
              <path d="M1 1L15 11M15 1L1 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
            ) : (
              <path d="M0 1H16M0 6H16M0 11H16" stroke="currentColor" strokeWidth="1.4" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-line bg-ink px-6 pb-8 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-ink-line/60 py-4 font-mono text-sm uppercase tracking-[0.08em] text-paper-dim"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 block rounded-sm border border-copper/50 px-4 py-3 text-center font-mono text-[13px] uppercase tracking-[0.08em] text-copper"
          >
            Discuss Your Project
          </a>
        </div>
      )}
    </header>
  );
}
