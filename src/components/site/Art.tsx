// Inline SVG illustrations in the logo's cartoon style.
type P = { className?: string };
const S = { stroke: "var(--ink)", strokeWidth: 4, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };

export function Cloud({ className }: P) {
  return (
    <svg viewBox="0 0 200 90" className={className} aria-hidden>
      <path d="M20 75 Q5 75 12 60 Q8 40 35 42 Q40 15 75 22 Q95 0 125 20 Q160 12 165 45 Q195 45 188 75 Z" fill="var(--cloud)" {...S} />
      <path d="M50 55 Q60 45 75 50 M115 40 Q130 32 140 45" fill="none" stroke="var(--cream)" strokeWidth="6" strokeLinecap="round" />
      <line x1="0" y1="80" x2="200" y2="80" stroke="var(--cloud)" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export function Cactus({ className }: P) {
  return (
    <svg viewBox="0 0 80 140" className={className} aria-hidden>
      <path d="M32 138 V30 Q32 14 40 14 Q48 14 48 30 V70 H58 V40 Q58 30 64 30 Q70 30 70 40 V75 Q70 85 60 85 H48 V138 Z M32 90 H20 Q10 90 10 80 V55 Q10 46 16 46 Q22 46 22 55 V75 H32" fill="var(--ink)" />
    </svg>
  );
}

export function Rocks({ className, tone = "canyon" }: P & { tone?: "canyon" | "ember" | "chili" }) {
  const fill = `var(--${tone})`;
  return (
    <svg viewBox="0 0 1200 220" preserveAspectRatio="none" className={className} aria-hidden>
      <path
        d="M0 220 V150 L40 140 L60 80 L110 70 L130 30 L190 25 L210 90 L260 100 L280 140 L340 130 L360 60 L420 50 L450 110 L520 120 L540 160 L600 150 L630 90 L680 40 L740 45 L760 120 L820 130 L850 70 L900 60 L930 20 L990 30 L1010 110 L1070 120 L1100 80 L1160 90 L1200 140 V220 Z"
        fill={fill}
        {...S}
      />
      <path d="M120 70 L150 110 M200 60 L190 120 M380 80 L410 130 M700 70 L690 130 M950 50 L980 110 M1120 100 L1110 150" stroke="var(--wood-dark)" strokeWidth="5" strokeLinecap="round" opacity="0.55" />
    </svg>
  );
}

export function Sun({ className }: P) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden>
      <g className="origin-center animate-spin-slow" style={{ transformBox: "fill-box" }}>
        {Array.from({ length: 16 }).map((_, i) => (
          <path key={i} d="M200 200 L188 0 L212 0 Z" fill="var(--ember)" opacity="0.35" transform={`rotate(${i * 22.5} 200 200)`} />
        ))}
      </g>
      <circle cx="200" cy="200" r="120" fill="var(--sun)" {...S} />
    </svg>
  );
}

export function Tumbleweed({ className }: P) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <circle cx="50" cy="50" r="42" fill="var(--canyon)" opacity="0.35" />
      <g fill="none" stroke="var(--wood-dark)" strokeWidth="4" strokeLinecap="round">
        <path d="M15 50 Q50 10 85 50 Q50 90 15 50" />
        <path d="M50 10 Q90 50 50 90 Q10 50 50 10" />
        <path d="M22 25 Q60 40 78 78 M78 22 Q40 50 22 78" />
        <circle cx="50" cy="50" r="42" stroke="var(--ink)" />
      </g>
    </svg>
  );
}

export function Guitar({ className }: P) {
  return (
    <svg viewBox="0 0 120 200" className={className} aria-hidden>
      <rect x="52" y="4" width="16" height="22" rx="4" fill="var(--wood-dark)" {...S} />
      <rect x="55" y="24" width="10" height="80" fill="var(--wood)" {...S} />
      <path d="M60 95 Q20 90 22 125 Q10 140 18 165 Q30 196 60 196 Q90 196 102 165 Q110 140 98 125 Q100 90 60 95 Z" fill="var(--canyon)" {...S} />
      <circle cx="60" cy="140" r="13" fill="var(--ink)" />
      <rect x="45" y="170" width="30" height="7" fill="var(--wood-dark)" stroke="var(--ink)" strokeWidth="3" />
    </svg>
  );
}

export function Bass({ className }: P) {
  return (
    <svg viewBox="0 0 120 220" className={className} aria-hidden>
      <path d="M55 4 Q50 4 52 14 L54 30 H66 L68 14 Q70 4 65 4 Z" fill="var(--wood-dark)" {...S} />
      <rect x="54" y="28" width="12" height="80" fill="var(--ink)" />
      <path d="M60 100 Q30 98 32 125 Q36 140 26 150 Q10 170 22 195 Q34 214 60 214 Q86 214 98 195 Q110 170 94 150 Q84 140 88 125 Q90 98 60 100 Z" fill="var(--chili)" {...S} />
      <path d="M44 150 q-6 10 0 20 M76 150 q6 10 0 20" fill="none" stroke="var(--ink)" strokeWidth="4" strokeLinecap="round" />
      <rect x="50" y="185" width="20" height="8" fill="var(--ink)" />
    </svg>
  );
}

export function Harmonica({ className }: P) {
  return (
    <svg viewBox="0 0 200 80" className={className} aria-hidden>
      <rect x="6" y="14" width="188" height="52" rx="10" fill="var(--cloud)" {...S} />
      <rect x="20" y="32" width="160" height="18" fill="var(--wood-dark)" stroke="var(--ink)" strokeWidth="3" />
      {Array.from({ length: 10 }).map((_, i) => (
        <rect key={i} x={26 + i * 15.5} y="36" width="9" height="10" fill="var(--ink)" />
      ))}
    </svg>
  );
}

export function Drum({ className }: P) {
  return (
    <svg viewBox="0 0 160 140" className={className} aria-hidden>
      <ellipse cx="80" cy="40" rx="66" ry="22" fill="var(--cream)" {...S} />
      <path d="M14 40 V100 Q80 140 146 100 V40" fill="var(--chili)" {...S} />
      <path d="M14 60 L40 110 L66 64 L94 120 L120 66 L146 100" fill="none" stroke="var(--sun)" strokeWidth="5" strokeLinejoin="round" />
      <line x1="40" y1="10" x2="110" y2="34" {...S} />
      <line x1="120" y1="8" x2="70" y2="32" {...S} />
    </svg>
  );
}

export function Boot({ className }: P) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <path d="M30 6 H72 L70 70 Q110 72 114 96 V110 H14 L16 70 Z" fill="var(--wood)" {...S} />
      <path d="M26 30 H74 M40 50 q10 -10 20 0" fill="none" stroke="var(--sun)" strokeWidth="5" strokeLinecap="round" />
      <circle cx="18" cy="96" r="10" fill="var(--sun)" {...S} />
    </svg>
  );
}

export function Wavy({ className, fill }: P & { fill: string }) {
  return (
    <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className={className} aria-hidden>
      <path d="M0 30 Q50 0 100 28 T200 30 T300 26 T400 32 T500 28 T600 30 T700 24 T800 32 T900 28 T1000 30 T1100 26 T1200 30 V60 H0 Z" fill={fill} stroke="var(--ink)" strokeWidth="4" />
    </svg>
  );
}

export function Scallop({ className, fill }: P & { fill: string }) {
  return (
    <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className={className} aria-hidden>
      <path d={`M0 40 ${Array.from({ length: 24 }).map((_, i) => `Q${i * 50 + 25} -8 ${i * 50 + 50} 40`).join(" ")} Z`} fill={fill} />
    </svg>
  );
}

export function Torn({ className, fill }: P & { fill: string }) {
  return (
    <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className={className} aria-hidden>
      <path d="M0 40 L0 18 L40 26 L70 10 L120 22 L160 6 L210 24 L260 12 L300 28 L350 8 L400 20 L450 14 L500 30 L560 10 L610 24 L660 6 L720 22 L770 12 L820 28 L870 8 L930 24 L980 14 L1030 26 L1080 6 L1130 22 L1200 12 L1200 40 Z" fill={fill} />
    </svg>
  );
}
