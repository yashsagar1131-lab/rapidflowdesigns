export default function CircuitFlow() {
  return (
    <svg
      viewBox="0 0 640 600"
      fill="none"
      className="h-auto w-full max-w-[540px]"
      role="img"
      aria-label="Diagram showing a circuit schematic transitioning into a routed printed circuit board layout"
    >
      <defs>
        <linearGradient id="fadeMask" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ECECE8" stopOpacity="0.5" />
          <stop offset="1" stopColor="#C1875A" stopOpacity="0.95" />
        </linearGradient>
      </defs>

      {/* ---- SCHEMATIC HALF (top-left) ---- */}
      <g stroke="#7C8288" strokeWidth="1.4" strokeLinecap="square">
        {/* diode */}
        <path d="M40 50 H110 M130 50 H196" />
        <path d="M110 38 L110 62 L130 50 Z" fill="#7C8288" stroke="none" />
        <path d="M130 38 V62" strokeWidth="2" />
        <circle cx="40" cy="50" r="3.5" fill="#09090B" stroke="#B8BABE" />
        <circle cx="196" cy="50" r="3.5" fill="#09090B" stroke="#B8BABE" />

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
        <path d="M40 226 H10 M40 240 H10 M40 254 H10 M40 268 H10" opacity="0.6" />
        <path d="M200 226 H230 M200 240 H230 M200 254 H230 M200 268 H230" opacity="0.6" />
      </g>

      {/* reference designators */}
      <g fontFamily="var(--font-mono)" fontSize="10" fill="#5C6167">
        <text x="158" y="44">D1</text>
        <text x="106" y="72">R1</text>
        <text x="106" y="140">C1</text>
      </g>

      <text x="0" y="330" fontFamily="var(--font-mono)" fontSize="12" fill="#7C8288" letterSpacing="2">
        01 — SCHEMATIC
      </text>

      {/* ---- TRANSITION FLOW LINE ---- */}
      <path
        d="M40 380 C 180 380, 220 460, 340 460 S 480 400, 520 398"
        stroke="url(#fadeMask)"
        strokeWidth="1.6"
        strokeDasharray="6 10"
        className="animate-dash-flow"
      />
      {[
        { cx: 40, cy: 380 },
        { cx: 340, cy: 460 },
        { cx: 520, cy: 398 },
      ].map((p, i) => (
        <circle key={i} cx={p.cx} cy={p.cy} r="3" fill="#C1875A" className="animate-pulse-soft" style={{ animationDelay: `${i * 0.4}s` }} />
      ))}

      {/* ---- PCB HALF (bottom-right) ---- */}
      <rect x="300" y="396" width="300" height="178" rx="8" fill="#0C1210" stroke="#1E2126" strokeWidth="1.2" />

      {/* board traces */}
      <g stroke="#C1875A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M520 398 V414 H430 V440" opacity="0.95" />
        <path d="M470 460 H540 V556" opacity="0.9" />
      </g>
      <g stroke="#8A6244" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.55">
        <path d="M410 470 H340 V420" />
        <path d="M470 480 H560 V500" />
      </g>

      {/* vias */}
      {[
        [430, 414],
        [540, 460],
        [340, 420],
        [560, 500],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="4.5" fill="none" stroke="#C1875A" strokeWidth="1.3" opacity="0.85" />
          <circle cx={cx} cy={cy} r="1.4" fill="#C1875A" />
        </g>
      ))}

      {/* IC footprint */}
      <rect x="410" y="440" width="60" height="60" rx="1" stroke="#ECECE8" strokeOpacity="0.3" strokeWidth="1.1" />
      <circle cx="415" cy="445" r="2" fill="#C1875A" />
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={`icTop${i}`} d={`M${420 + i * 10} 440 V434`} stroke="#ECECE8" strokeOpacity="0.3" strokeWidth="1.1" />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={`icBot${i}`} d={`M${420 + i * 10} 500 V506`} stroke="#ECECE8" strokeOpacity="0.3" strokeWidth="1.1" />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={`icL${i}`} d={`M410 ${446 + i * 10} H404`} stroke="#ECECE8" strokeOpacity="0.3" strokeWidth="1.1" />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={`icR${i}`} d={`M470 ${446 + i * 10} H476`} stroke="#ECECE8" strokeOpacity="0.3" strokeWidth="1.1" />
      ))}

      {/* SMD passives */}
      <g stroke="#ECECE8" strokeOpacity="0.28" strokeWidth="1">
        <rect x="378" y="450" width="18" height="8" rx="1" />
        <rect x="486" y="470" width="18" height="8" rx="1" />
      </g>
      <g fill="#C1875A" opacity="0.8">
        <rect x="375" y="450.5" width="4" height="7" />
        <rect x="393" y="450.5" width="4" height="7" />
        <rect x="483" y="470.5" width="4" height="7" />
        <rect x="501" y="470.5" width="4" height="7" />
      </g>

      {/* mounting hole */}
      <circle cx="574" cy="416" r="8" fill="none" stroke="#ECECE8" strokeOpacity="0.3" strokeWidth="1.3" />
      <circle cx="574" cy="416" r="4" fill="none" stroke="#C1875A" strokeOpacity="0.6" strokeWidth="1.3" />

      {/* edge connector fingers */}
      {Array.from({ length: 8 }).map((_, i) => (
        <rect key={i} x={330 + i * 20} y="558" width="8" height="15" fill="#C1875A" opacity={0.55 + (i % 2) * 0.25} />
      ))}

      <text x="580" y="415" textAnchor="end" fontFamily="var(--font-mono)" fontSize="8" fill="#ECECE8" opacity="0.3" letterSpacing="1">
        RFD
      </text>

      <text x="300" y="594" fontFamily="var(--font-mono)" fontSize="12" fill="#C1875A" letterSpacing="2">
        02 — PCB LAYOUT
      </text>
    </svg>
  );
}
