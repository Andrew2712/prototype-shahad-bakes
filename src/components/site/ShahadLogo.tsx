interface LogoProps {
  variant?: "full" | "icon" | "horizontal";
  className?: string;
  /** px size for icon variant */
  size?: number;
}

/**
 * Shahad Bakes logo — three variants:
 *  - "full"       : orange badge with SHAHAD + tagline (matches PDF)
 *  - "icon"       : just the circular orange badge with bee
 *  - "horizontal" : icon + wordmark side by side (for navbar)
 */
export function ShahadLogo({ variant = "horizontal", className = "", size = 40 }: LogoProps) {
  if (variant === "icon") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Shahad Bakes"
      >
        <rect width="100" height="100" rx="50" fill="#E8600A" />
        {/* Honey bee simplified */}
        <ellipse cx="50" cy="54" rx="16" ry="11" fill="#FFF8E7" />
        <ellipse cx="50" cy="54" rx="16" ry="11" fill="none" stroke="#E8600A" strokeWidth="1.5" />
        {/* Stripes */}
        <rect x="38" y="50" width="24" height="4" rx="2" fill="#E8600A" opacity="0.5" />
        <rect x="38" y="56" width="24" height="4" rx="2" fill="#E8600A" opacity="0.5" />
        {/* Wings */}
        <ellipse cx="36" cy="47" rx="9" ry="5" fill="white" opacity="0.85" transform="rotate(-20 36 47)" />
        <ellipse cx="64" cy="47" rx="9" ry="5" fill="white" opacity="0.85" transform="rotate(20 64 47)" />
        {/* Head */}
        <circle cx="50" cy="43" r="5" fill="#FFF8E7" />
        {/* Antennae */}
        <line x1="47" y1="39" x2="43" y2="33" stroke="#FFF8E7" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="43" cy="32" r="2" fill="#FFF8E7" />
        <line x1="53" y1="39" x2="57" y2="33" stroke="#FFF8E7" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="57" cy="32" r="2" fill="#FFF8E7" />
        {/* S letter */}
        <text x="50" y="82" textAnchor="middle" fontSize="14" fontWeight="800" fill="white" fontFamily="serif" letterSpacing="1">S</text>
      </svg>
    );
  }

  if (variant === "full") {
    return (
      <svg
        width="260"
        height="120"
        viewBox="0 0 260 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Shahad Bakes — Sweetness of Purity and Health"
      >
        {/* Background */}
        <rect width="260" height="120" rx="12" fill="#E8600A" />

        {/* Top decorative leaf elements */}
        {[20, 50, 80, 110, 150, 180, 210, 240].map((x, i) => (
          <ellipse key={i} cx={x} cy={6} rx="5" ry="8" fill="#C94E00" opacity="0.6" />
        ))}

        {/* ONE TASTE, MANY LANGUAGES */}
        <text x="130" y="22" textAnchor="middle" fontSize="7.5" fill="white" fontFamily="sans-serif" fontWeight="600" letterSpacing="2">
          ONE TASTE, MANY LANGUAGES.
        </text>

        {/* Bee icon */}
        <g transform="translate(108, 38)">
          <ellipse cx="22" cy="18" rx="14" ry="10" fill="#FFF8E7" />
          <rect x="11" y="15" width="22" height="3.5" rx="1.5" fill="#E8600A" opacity="0.45" />
          <rect x="11" y="20" width="22" height="3.5" rx="1.5" fill="#E8600A" opacity="0.45" />
          <ellipse cx="10" cy="12" rx="8" ry="4" fill="white" opacity="0.8" transform="rotate(-20 10 12)" />
          <ellipse cx="34" cy="12" rx="8" ry="4" fill="white" opacity="0.8" transform="rotate(20 34 12)" />
          <circle cx="22" cy="9" r="5" fill="#FFF8E7" />
          <line x1="19" y1="5" x2="15" y2="0" stroke="#FFF8E7" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="14" cy="-1" r="1.5" fill="#FFF8E7" />
          <line x1="25" y1="5" x2="29" y2="0" stroke="#FFF8E7" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="30" cy="-1" r="1.5" fill="#FFF8E7" />
        </g>

        {/* SHAHAD */}
        <text x="130" y="78" textAnchor="middle" fontSize="30" fill="white" fontFamily="serif" fontWeight="900" letterSpacing="6">
          SHAHAD
        </text>

        {/* Tagline */}
        <text x="130" y="92" textAnchor="middle" fontSize="7" fill="white" fontFamily="sans-serif" fontWeight="500" letterSpacing="2.5" opacity="0.9">
          SWEETNESS OF PURITY AND HEALTH
        </text>

        {/* Bottom bar */}
        <text x="20" y="112" fontSize="7" fill="white" fontFamily="monospace" fontWeight="500" opacity="0.8">shahad_bakes</text>
        <line x1="100" y1="110" x2="215" y2="110" stroke="white" strokeWidth="0.8" opacity="0.5" />

        {/* Social icons placeholder dots */}
        <circle cx="222" cy="110" r="4" fill="white" opacity="0.7" />
        <circle cx="234" cy="110" r="4" fill="white" opacity="0.7" />
        <circle cx="246" cy="110" r="4" fill="white" opacity="0.7" />
      </svg>
    );
  }

  // horizontal — for navbar
  return (
    <div className={`flex items-center gap-2.5 ${className}`} aria-label="Shahad Bakes">
      {/* Orange badge */}
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="50" fill="#E8600A" />
        {/* Bee */}
        <ellipse cx="50" cy="55" rx="15" ry="10" fill="#FFF8E7" />
        <rect x="38" y="51" width="24" height="3.5" rx="1.5" fill="#E8600A" opacity="0.45" />
        <rect x="38" y="56" width="24" height="3.5" rx="1.5" fill="#E8600A" opacity="0.45" />
        <ellipse cx="36" cy="47" rx="9" ry="4.5" fill="white" opacity="0.85" transform="rotate(-20 36 47)" />
        <ellipse cx="64" cy="47" rx="9" ry="4.5" fill="white" opacity="0.85" transform="rotate(20 64 47)" />
        <circle cx="50" cy="44" r="5" fill="#FFF8E7" />
        <line x1="47" y1="40" x2="43" y2="33" stroke="#FFF8E7" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="42" cy="32" r="2" fill="#FFF8E7" />
        <line x1="53" y1="40" x2="57" y2="33" stroke="#FFF8E7" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="58" cy="32" r="2" fill="#FFF8E7" />
        {/* S wordmark inside badge */}
        <text x="50" y="80" textAnchor="middle" fontSize="13" fontWeight="800" fill="white" fontFamily="Georgia, serif">S</text>
      </svg>
      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className="font-display font-bold tracking-widest text-secondary"
          style={{ fontSize: size * 0.42, letterSpacing: "0.12em" }}
        >
          SHAHAD
        </span>
        <span
          className="text-primary font-medium tracking-wider uppercase"
          style={{ fontSize: size * 0.18, letterSpacing: "0.15em", fontFamily: "var(--font-button)" }}
        >
          Baked with Love
        </span>
      </div>
    </div>
  );
}
