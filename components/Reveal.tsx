"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Content is visible by default (both on the server-rendered HTML and on
  // first client paint). We only ever ADD a hidden state client-side, and
  // only once we're certain an observer is watching to bring it back —
  // so a slow/failed observer can never leave content stuck invisible.
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If the element is already on screen at mount time, don't hide it —
    // just skip straight to visible.
    const rect = node.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyInView) {
      setVisible(true);
      return;
    }

    setArmed(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(node);

    // Safety net: if the observer never fires for any reason, force the
    // content visible after a short delay rather than leaving it hidden.
    const fallback = window.setTimeout(() => setVisible(true), 1500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  const hidden = armed && !visible;

  return (
    <div
      ref={ref}
      className={`${hidden ? "reveal-pending" : ""} ${visible ? "reveal-in" : ""} ${className}`}
      style={{ animationDelay: visible ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
