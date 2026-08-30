export default function CircuitFlow() {
  return (
    <svg
      viewBox="0 0 620 560"
      fill="none"
      className="h-auto w-full max-w-[520px]"
      role="img"
      aria-label="Diagram showing a circuit schematic transitioning into a routed printed circuit board layout"
    >
      <defs>
        <linearGradient id="fadeMask" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ECECE8" stopOpacity="0.5" />
          <stop offset="1" stopColor="#C1875A" stopOpacity="0.95" />
        </linearGradient>
      </defs>

      {/* ---- SCHEMATIC HALF (top) ---- */}
      <g stroke="#7C8288" strokeWidth="1.4" strokeLinecap="square">
        {/* resistor */}
        <path d="M40 90 H86 L94 74 L110 106 L126 74 L142 106 L150 90 H196" />
        <circle cx="40" cy="90" r="3.5" fill="#09090B" stroke="#B8BABE" />
        <circle cx="196" cy="90" r="3.5" fill="#09090B" stroke="#B8BABE" />

        {/* capacitor */}
        <path d="M40 160 H100 M120 160 H196" />
        <path d="M100 144 V176 M120 144 V176" strokeWidth="2" />
        <circle cx="40" cy="160" r="3.5" fill="#09090B" stroke="#B8BABE" />
        <circle cx="196" cy="160" r="3.5" fill="#09090B" stroke="#B8BABE" />

        {/* IC outline */}
        <rect x="60" y="210" width="120" height="72" rx="1" />
        <text x="120" y="252" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="#7C8288" letterSpacing="1">
          U1
        </text>
        {[0, 1, 2, 3].map((i) => (
          <path key={`pinL${i}`} d={`M40 ${226 + i * 14} H60`} />
        ))}
        {[0, 1, 2, 3].map((i) => (
          <path key={`pinR${i}`} d={`M180 ${226 + i * 14} H200`} />
        ))}

        {/* connecting nodes */}
        <path d="M40 226 H10 M40 240 H10 M40 254 H10 M40 268 H10" opacity="0.6" />
        <path d="M200 226 H230 M200 240 H230 M200 254 H230 M200 268 H230" opacity="0.6" />
      </g>

      {/* schematic label */}
      <text x="0" y="330" fontFamily="var(--font-mono)" fontSize="12" fill="#7C8288" letterSpacing="2">
        01 — SCHEMATIC
      </text>

      {/* ---- TRANSITION FLOW LINE ---- */}
      <path
        d="M40 380 C 180 380, 200 470, 340 470 S 520 380, 600 380"
        stroke="url(#fadeMask)"
        strokeWidth="1.6"
        strokeDasharray="6 10"
        className="animate-dash-flow"
      />
      {[
        { cx: 40, cy: 380 },
        { cx: 340, cy: 470 },
        { cx: 600, cy: 380 },
      ].map((p, i) => (
        <circle key={i} cx={p.cx} cy={p.cy} r="3" fill="#C1875A" className="animate-pulse-soft" style={{ animationDelay: `${i * 0.4}s` }} />
      ))}

      {/* ---- PCB HALF (bottom) ---- */}
      <g stroke="#C1875A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M424 520 V470 H480 V430 H540" opacity="0.9" />
        <path d="M424 520 H360 V486" opacity="0.55" />
        <path d="M540 430 H580 V400" opacity="0.7" />
      </g>
      <g stroke="#8A6244" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
        <path d="M300 520 V492 H360" />
        <path d="M480 520 V500 H520 V478" />
      </g>

      {/* pads */}
      {[
        [424, 520],
        [360, 486],
        [480, 430],
        [540, 430],
        [580, 400],
        [300, 520],
        [520, 478],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="6" fill="none" stroke="#C1875A" strokeWidth="1.4" opacity="0.85" />
          <circle cx={cx} cy={cy} r="1.6" fill="#C1875A" />
        </g>
      ))}

      {/* IC footprint on pcb */}
      <rect x="440" y="450" width="52" height="52" rx="1" stroke="#ECECE8" strokeOpacity="0.35" strokeWidth="1.2" />
      <path d="M448 452 L436 440" stroke="#ECECE8" strokeOpacity="0.35" strokeWidth="1" />

      <text x="360" y="545" fontFamily="var(--font-mono)" fontSize="12" fill="#C1875A" letterSpacing="2">
        05 — PRODUCTION
      </text>
    </svg>
  );
}
