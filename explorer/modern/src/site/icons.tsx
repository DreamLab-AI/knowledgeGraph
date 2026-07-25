/**
 * icons.tsx — the in-repo inline-SVG icon set (PRD-NG-001 §6, fixes defect D3).
 *
 * No icon fonts. Every glyph is authored here as a stroke SVG on a 24-grid,
 * inheriting `currentColor` so it tints from the house palette (theme.css).
 * Decorative by default (`aria-hidden`); pass a `title` to make one labelled.
 *
 * Two families:
 *   · DOMAIN_ICONS — one glyph per Domain, keyed by DomainSlug (FORMAT-NGG1 §6).
 *   · UI icons     — search / graph / read / focus / external / download / copy /
 *                    provenance / chevron / menu / close, etc.
 */

import type { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  /** Accessible name. When present the SVG becomes `img` role; else decorative. */
  title?: string;
  /** px size (width = height). Default 24. */
  size?: number;
}

function Svg({ title, size = 24, children, ...rest }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

/* ───────────────────────── Domain glyphs (6) ────────────────────────────
 * index = domain id. Simple line marks, legible at 20–64px, one idea each. */

/** Artificial Intelligence — a reasoning node with branching synapses. */
export const AiIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 9V5m0 14v-4M9.2 10.5 5.7 8.5m12.6 7-3.5-2M9.2 13.5l-3.5 2m12.6-7-3.5 2" />
    <circle cx="5" cy="8" r="1.3" />
    <circle cx="19" cy="8" r="1.3" />
    <circle cx="5" cy="16" r="1.3" />
    <circle cx="19" cy="16" r="1.3" />
    <circle cx="12" cy="4" r="1.3" />
  </Svg>
);

/** Blockchain — three linked blocks. */
export const BlockchainIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3.5" y="4" width="7" height="7" rx="1.2" />
    <rect x="13.5" y="4" width="7" height="7" rx="1.2" />
    <rect x="8.5" y="13.5" width="7" height="7" rx="1.2" />
    <path d="M10.5 7.5h3M12 11v2.5m0 7v-.2" />
  </Svg>
);

/** Spatial Computing — an isometric cube / AR volume. */
export const SpatialIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3 4 7.2v9.6L12 21l8-4.2V7.2z" />
    <path d="M4 7.2 12 11.5l8-4.3M12 11.5V21" />
  </Svg>
);

/** Robotics — a robot head with antenna and sensor eyes. */
export const RoboticsIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="5" y="8" width="14" height="11" rx="2.4" />
    <path d="M12 8V4.8M12 3.6v.2" />
    <circle cx="12" cy="3.4" r="1" />
    <circle cx="9.3" cy="13" r="1.2" />
    <circle cx="14.7" cy="13" r="1.2" />
    <path d="M2.8 12v3m18.4-3v3" />
  </Svg>
);

/** Distributed Collaboration — three peers meshed together. */
export const CollaborationIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="5.5" r="2.4" />
    <circle cx="5.5" cy="16.5" r="2.4" />
    <circle cx="18.5" cy="16.5" r="2.4" />
    <path d="M10.4 7.4 7.1 14.6m9.8-7.2 3.3 7.2M8 16.5h8" />
  </Svg>
);

/** Infrastructure — a stack of servers / substrate. */
export const InfrastructureIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3.5" y="4.5" width="17" height="6" rx="1.4" />
    <rect x="3.5" y="13.5" width="17" height="6" rx="1.4" />
    <path d="M6.5 7.5h.2m0 9h-.2M17.5 7.5h-4m4 9h-4" />
  </Svg>
);

/* The 6 domain glyphs are exported as components above. Their slug→component
 * map and the derived DOMAIN_META descriptors live in site/domains.ts, keeping
 * this module component-only for React Fast Refresh. */

/* ─────────────────────────────── UI icons ──────────────────────────────── */

export const SearchIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="10.5" cy="10.5" r="6" />
    <path d="m20 20-5.2-5.2" />
  </Svg>
);

/** Graph / explorer — connected nodes. */
export const GraphIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="6" cy="6" r="2.2" />
    <circle cx="18" cy="8" r="2.2" />
    <circle cx="9" cy="18" r="2.2" />
    <path d="M7.8 7.3 15.9 8m-8.4 8.4 1.1-8.2m8.1 2 -7.7 7" />
  </Svg>
);

export const ReadIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 6.5C10.3 5.2 8 4.8 4.8 5.2 4.3 5.3 4 5.7 4 6.2v11c0 .6.5 1 1.1.9 2.9-.4 5 0 6.9 1.4 1.9-1.4 4-1.8 6.9-1.4.6.1 1.1-.3 1.1-.9v-11c0-.5-.3-.9-.8-1C16 4.8 13.7 5.2 12 6.5Z" />
    <path d="M12 6.5v12" />
  </Svg>
);

export const FocusIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 3v3m0 12v3M3 12h3m12 0h3" />
  </Svg>
);

export const ArrowRightIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12h14m-6-6 6 6-6 6" />
  </Svg>
);

export const ExternalIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M14 4h6v6m0-6-8.5 8.5" />
    <path d="M18 13.5V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5.5" />
  </Svg>
);

export const DownloadIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3v11m0 0 4-4m-4 4-4-4" />
    <path d="M4 17v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2" />
  </Svg>
);

export const CopyIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="8.5" y="8.5" width="11" height="11" rx="1.8" />
    <path d="M15.5 8.5v-2a1.8 1.8 0 0 0-1.8-1.8h-7A1.8 1.8 0 0 0 4.9 6.5v7a1.8 1.8 0 0 0 1.8 1.8h1.8" />
  </Svg>
);

export const CheckIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </Svg>
);

/** Provenance — a signed/attested shield. */
export const ProvenanceIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3.5 5 6v5.5c0 4 2.9 7.3 7 8.9 4.1-1.6 7-4.9 7-8.9V6z" />
    <path d="m9 12 2 2 4-4.5" />
  </Svg>
);

export const CodeIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m8.5 8-4 4 4 4m7-8 4 4-4 4M13.5 6l-3 12" />
  </Svg>
);

export const ChevronRightIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m9 6 6 6-6 6" />
  </Svg>
);

export const MenuIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
);

export const CloseIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Svg>
);

/** DreamLab mesh mark — six-node hexagonal mesh (footer/brand). */
export const MeshMarkIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3 5 7v10l7 4 7-4V7z" />
    <circle cx="12" cy="12" r="1.4" />
    <path d="M12 12 5 7m7 5 7-5m-7 5v9m0-9L5 17m7-5 7 5" />
  </Svg>
);
