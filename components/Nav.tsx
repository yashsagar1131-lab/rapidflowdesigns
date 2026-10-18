"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const LINKS = [
  { href: "#services", label: "What we build" },
  { href: "#examples", label: "Examples" },
  { href: "#process", label: "How we work" },
  { href: "#faq", label: "FAQ" },
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
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled || open ? "border-line bg-paper/95 backdrop-blur" : "border-transparent bg-paper/0"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-5 py-4 md:px-10">
        <a href="#top" aria-label="RapidFlow Designs home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-[15px] text-graphite transition-colors hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-lg bg-ink px-4 py-2.5 text-[14.5px] font-medium text-paper transition-colors hover:bg-teal-deep md:inline-block"
        >
          Book a call
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink md:hidden"
        >
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
            {open ? (
              <path d="M2 1L14 11M14 1L2 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M1 1H15M1 6H15M1 11H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="h-[calc(100dvh-73px)] border-t border-line bg-paper px-5 pb-8 pt-2 md:hidden">
          <ul className="flex flex-col">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-4 font-display text-[22px] font-medium text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-8 block rounded-lg bg-ink px-4 py-3.5 text-center text-[16px] font-medium text-paper"
          >
            Book a call
          </a>
        </div>
      )}
    </header>
  );
}
