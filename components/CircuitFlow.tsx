export default function CircuitFlow() {
  return (
    <svg
      viewBox="0 0 640 600"
      fill="none"
      className="h-auto w-full max-w-[560px]"
      role="img"
      aria-label="Diagram showing a circuit schematic transitioning into a routed printed circuit board layout"
    >
      <defs>
        <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8A6244" stopOpacity="0.9" />
          <stop offset="1" stopColor="#DDA679" />
        </linearGradient>
        <radialGradient id="panelGlow" cx="0.18" cy="0.12" r="0.55">
          <stop offset="0" stopColor="#C1875A" stopOpacity="0.09" />
          <stop offset="1" stopColor="#C1875A" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="boardGrad" cx="0.3" cy="0.25" r="0.9">
          <stop offset="0" stopColor="#101815" />
          <stop offset="1" stopColor="#0A0D0B" />
        </radialGradient>
      </defs>

      {/* ---- CONTAINING PANEL ---- */}
      <rect x="10" y="10" width="620" height="580" rx="16" fill="#0A0B0C" stroke="#1E2126" strokeWidth="1.3" />
      <rect x="10" y="10" width="620" height="580" rx="16" fill="url(#panelGlow)" />

      {/* ---- SCHEMATIC HALF (top-left) ---- */}
      <g stroke="#7C8288" strokeWidth="1.5" strokeLinecap="square">
        {/* diode */}
        <path d="M60 66 H130 M150 66 H216" />
        <path d="M130 54 L130 78 L150 66 Z" fill="#7C8288" stroke="none" />
        <path d="M150 54 V78" strokeWidth="2" />
        <circle cx="60" cy="66" r="3.5" fill="#0A0B0C" stroke="#B8BABE" />
        <circle cx="216" cy="66" r="3.5" fill="#0A0B0C" stroke="#B8BABE" />

        {/* resistor */}
        <path d="M60 106 H106 L114 90 L130 122 L146 90 L162 122 L170 106 H216" />
        <circle cx="60" cy="106" r="3.5" fill="#0A0B0C" stroke="#B8BABE" />
        <circle cx="216" cy="106" r="3.5" fill="#0A0B0C" stroke="#B8BABE" />

        {/* capacitor */}
        <path d="M60 176 H120 M140 176 H216" />
        <path d="M120 160 V192 M140 160 V192" strokeWidth="2" />
        <circle cx="60" cy="176" r="3.5" fill="#0A0B0C" stroke="#B8BABE" />
        <circle cx="216" cy="176" r="3.5" fill="#0A0B0C" stroke="#B8BABE" />

        {/* IC outline */}
        <rect x="80" y="226" width="120" height="72" rx="1" />
        <text x="140" y="268" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="#7C8288" letterSpacing="1">
          U1
        </text>
        {[0, 1, 2, 3].map((i) => (
          <path key={`pinL${i}`} d={`M60 ${242 + i * 14} H80`} />
        ))}
        {[0, 1, 2, 3].map((i) => (
          <path key={`pinR${i}`} d={`M200 ${242 + i * 14} H220`} />
        ))}
        <path d="M60 242 H30 M60 256 H30 M60 270 H30 M60 284 H30" opacity="0.6" />
        <path d="M220 242 H250 M220 256 H250 M220 270 H250 M220 284 H250" opacity="0.6" />
      </g>

      {/* reference designators */}
      <g fontFamily="var(--font-mono)" fontSize="10" fill="#63686E">
        <text x="178" y="60">D1</text>
        <text x="126" y="88">R1</text>
        <text x="126" y="156">C1</text>
      </g>

      <text x="20" y="346" fontFamily="var(--font-mono)" fontSize="12" fill="#7C8288" letterSpacing="2">
        01 — SCHEMATIC
      </text>

      {/* ---- TRANSITION FLOW LINE ---- */}
      <path
        d="M60 396 C 200 396, 216 450, 336 450 S 476 390, 516 388"
        stroke="url(#flowGrad)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeDasharray="7 9"
        className="animate-dash-flow"
      />
      {[
        { cx: 60, cy: 396 },
        { cx: 336, cy: 450 },
        { cx: 516, cy: 388 },
      ].map((p, i) => (
        <circle key={i} cx={p.cx} cy={p.cy} r="3.5" fill="#DDA679" className="animate-pulse-soft" style={{ animationDelay: `${i * 0.4}s` }} />
      ))}

      {/* ---- PCB HALF (bottom-right) ---- */}
      <rect x="296" y="386" width="300" height="178" rx="10" fill="url(#boardGrad)" stroke="#1E2126" strokeWidth="1.2" />

      {/* board traces */}
      <g stroke="#C1875A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M516 388 V404 H426 V430" opacity="0.95" />
        <path d="M466 450 H536 V546" opacity="0.9" />
      </g>
      <g stroke="#8A6244" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.55">
        <path d="M406 460 H336 V410" />
        <path d="M466 470 H556 V490" />
      </g>

      {/* vias */}
      {[
        [426, 404],
        [536, 450],
        [336, 410],
        [556, 490],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="4.5" fill="none" stroke="#C1875A" strokeWidth="1.3" opacity="0.85" />
          <circle cx={cx} cy={cy} r="1.4" fill="#C1875A" />
        </g>
      ))}

      {/* IC footprint */}
      <rect x="406" y="430" width="60" height="60" rx="1" stroke="#ECECE8" strokeOpacity="0.3" strokeWidth="1.1" />
      <circle cx="411" cy="435" r="2" fill="#C1875A" />
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={`icTop${i}`} d={`M${416 + i * 10} 430 V424`} stroke="#ECECE8" strokeOpacity="0.3" strokeWidth="1.1" />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={`icBot${i}`} d={`M${416 + i * 10} 490 V496`} stroke="#ECECE8" strokeOpacity="0.3" strokeWidth="1.1" />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={`icL${i}`} d={`M406 ${436 + i * 10} H400`} stroke="#ECECE8" strokeOpacity="0.3" strokeWidth="1.1" />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={`icR${i}`} d={`M466 ${436 + i * 10} H472`} stroke="#ECECE8" strokeOpacity="0.3" strokeWidth="1.1" />
      ))}

      {/* SMD passives */}
      <g stroke="#ECECE8" strokeOpacity="0.28" strokeWidth="1">
        <rect x="374" y="440" width="18" height="8" rx="1" />
        <rect x="482" y="460" width="18" height="8" rx="1" />
      </g>
      <g fill="#C1875A" opacity="0.8">
        <rect x="371" y="440.5" width="4" height="7" />
        <rect x="389" y="440.5" width="4" height="7" />
        <rect x="479" y="460.5" width="4" height="7" />
        <rect x="497" y="460.5" width="4" height="7" />
      </g>

      {/* mounting hole */}
      <circle cx="570" cy="406" r="8" fill="none" stroke="#ECECE8" strokeOpacity="0.3" strokeWidth="1.3" />
      <circle cx="570" cy="406" r="4" fill="none" stroke="#C1875A" strokeOpacity="0.6" strokeWidth="1.3" />

      {/* edge connector fingers */}
      {Array.from({ length: 8 }).map((_, i) => (
        <rect key={i} x={326 + i * 20} y="548" width="8" height="15" fill="#C1875A" opacity={0.55 + (i % 2) * 0.25} />
      ))}

      <text x="312" y="404" fontFamily="var(--font-mono)" fontSize="8" fill="#ECECE8" opacity="0.3" letterSpacing="1">
        RFD
      </text>

      <text x="296" y="584" fontFamily="var(--font-mono)" fontSize="12" fill="#C1875A" letterSpacing="2">
        02 — PCB LAYOUT
      </text>
    </svg>
  );
}
