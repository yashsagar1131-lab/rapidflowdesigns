export default function Heading({ title, lead }: { title: string; lead?: string }) {
  return (
    <div className="max-w-[40rem]">
      <h2 className="text-balance font-display text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[46px]">
        {title}
      </h2>
      {lead && <p className="mt-5 text-pretty text-[17.5px] leading-relaxed text-graphite">{lead}</p>}
    </div>
  );
}
