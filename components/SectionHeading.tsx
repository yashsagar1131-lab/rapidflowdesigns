export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-[640px] text-center" : "max-w-[640px]"}>
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-copper">{eyebrow}</p>
      <h2 className="mt-3 text-balance font-display text-[30px] font-semibold leading-tight tracking-tight text-paper sm:text-[36px]">
        {title}
      </h2>
      {lead && <p className="mt-4 text-balance text-[15.5px] leading-relaxed text-paper-dim">{lead}</p>}
    </div>
  );
}
