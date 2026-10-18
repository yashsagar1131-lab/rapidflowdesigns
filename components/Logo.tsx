export default function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <svg width="26" height="26" viewBox="0 0 22 22" aria-hidden="true">
        <rect width="22" height="22" rx="5" fill="#1F6F5C" />
        <path
          d="M4 11H8L10 6L13 16L15 11H18"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span className="font-display text-[17px] font-semibold tracking-[-0.01em] text-ink">RapidFlow Designs</span>
    </span>
  );
}
