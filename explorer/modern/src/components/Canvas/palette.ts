/**
 * palette.ts — read the house design tokens (site/theme.css) once, as THREE
 * colours, so the instanced renderers tint from the single source of truth
 * (PRD-NG-001 §6). No hard-coded hexes in the render layer: everything resolves
 * from `--ng-*` custom properties at runtime, so a token swap (or the deferred
 * dark theme) re-tints the graph with no code change.
 */

import { Color } from 'three';
import { CATEGORY_NONE, FLAG_DOMAIN_ROOT, FLAG_CATEGORY_ROOT } from '../../lib/ngg1';

// Re-export the flag/sentinel masks the colour layer keys off, so the renderers
// import their colour vocabulary from one place (this module owns colour logic).
export { CATEGORY_NONE, FLAG_DOMAIN_ROOT, FLAG_CATEGORY_ROOT };

/**
 * ABox marker — bit 4 (0x10), emitted by the pipeline (pipeline/
 * emit_graph_tiers.py FLAG_INDIVIDUAL) for OWL individuals. Not in the base
 * FORMAT-NGG1 §5 table (a spare bit; readers mask specific bits, so it is
 * byte-compatible), it flows through the NGG1 reader's getFlags untouched. The
 * colour layer reads it to render individuals as a darker fill than their
 * sibling classes (PRD-NG-001 §6 — individuals distinguished from classes).
 */
export const FLAG_INDIVIDUAL = 0x10;

/** Resolve a CSS custom property to a trimmed string (empty if unavailable). */
function cssVar(name: string, fallback: string): string {
  if (typeof window === 'undefined' || typeof document === 'undefined') return fallback;
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fallback;
}

export interface GraphPalette {
  /** Six domain tints, index === domain id (FORMAT-NGG1 §6). */
  domains: Color[];
  canvas: Color;
  backbone: Color; // subClassOf — quiet
  relation: Color; // objectProperty — accented
  nodeStroke: Color;
  nodeHover: Color;
  nodeSelected: Color;
  labelInk: Color;
  labelHalo: Color;
}

/** Read the palette from the live CSS variables. Call after mount / theme change. */
export function readPalette(): GraphPalette {
  return {
    domains: [
      new Color(cssVar('--ng-domain-0', '#1a6b6b')),
      new Color(cssVar('--ng-domain-1', '#c85a2a')),
      new Color(cssVar('--ng-domain-2', '#4f7a9c')),
      new Color(cssVar('--ng-domain-3', '#7a8b3f')),
      new Color(cssVar('--ng-domain-4', '#9c6b8a')),
      new Color(cssVar('--ng-domain-5', '#8a6d4a')),
    ],
    canvas: new Color(cssVar('--ng-graph-canvas', '#f7f4ea')),
    backbone: new Color(cssVar('--ng-edge-backbone', '#6f6d64')),
    relation: new Color(cssVar('--ng-edge-relation', '#1a6b6b')),
    nodeStroke: new Color(cssVar('--ng-node-stroke', '#2d2d2d')),
    nodeHover: new Color(cssVar('--ng-node-hover', '#c85a2a')),
    nodeSelected: new Color(cssVar('--ng-node-selected', '#a8471f')),
    labelInk: new Color(cssVar('--ng-label-ink', '#2d2d2d')),
    labelHalo: new Color(cssVar('--ng-label-halo', '#fdfcf7')),
  };
}

/**
 * Self-hosted label font URL for troika-three-text (LabelsTopN). Undefined →
 * troika's bundled default. Integration should point this at a self-hosted font
 * (e.g. `/fonts/Inter.woff`) to keep the site self-contained / CSP-safe.
 */
export const LABEL_FONT_URL: string | undefined = undefined;

/** Domain tint by id, clamped into range (uncategorised → last tint). */
export function domainColor(p: GraphPalette, domain: number): Color {
  const i = domain >= 0 && domain < p.domains.length ? domain : p.domains.length - 1;
  return p.domains[i];
}

// Ladder endpoints — we only lerp the domain hue toward cream-white or charcoal,
// never rotate hue, so every rung stays inside the house family (PRD §6) and the
// ladder is monotonic + colour-management-agnostic (works in any THREE space).
const TINT_WHITE = new Color(1, 1, 1);
const TINT_BLACK = new Color(0, 0, 0);

/**
 * Category tint ladder derived from a domain's base hue (PRD-NG-001 §6). `step`
 * is the category's rank among the categories present in the domain scope,
 * `total` their count. Returns a NEW colour lightened/darkened along a band that
 * stays legible on the cream canvas and AA-distinguishable rung-to-rung: the
 * lightest rung keeps 70% of the domain hue (not washed into cream), the darkest
 * retains ink contrast. Deterministic — the same (base, step, total) always maps
 * to the same tint, so leaves, their metanode and the legend swatch agree.
 */
export function categoryTint(base: Color, step: number, total: number): Color {
  const n = Math.max(total, 1);
  const t = n > 1 ? Math.min(Math.max(step, 0), n - 1) / (n - 1) : 0.5; // 0..1
  const k = -0.28 + t * 0.58; // shade (−0.28) → tint (+0.30)
  const out = base.clone();
  return k >= 0 ? out.lerp(TINT_WHITE, k) : out.lerp(TINT_BLACK, -k);
}

/**
 * Colour for one node in a category-coloured (domain) scope. Domain roots keep
 * the pure domain hue; categorised classes + their category metanodes take the
 * category rung; uncategorised leaves keep the domain hue; individuals (ABox)
 * are darkened so they read distinctly from their class kin. `rankOf` maps a
 * category id → its ladder rung within this scope, `total` the rung count.
 */
export function nodeCategoryColor(
  p: GraphPalette,
  domain: number,
  category: number,
  flags: number,
  rankOf: ReadonlyMap<number, number>,
  total: number,
): Color {
  const base = domainColor(p, domain);
  let col: Color;
  if (flags & FLAG_DOMAIN_ROOT) {
    col = base.clone();
  } else if (category !== CATEGORY_NONE && rankOf.has(category)) {
    col = categoryTint(base, rankOf.get(category) ?? 0, total);
  } else {
    col = base.clone(); // uncategorised leaf → plain domain hue
  }
  if (flags & FLAG_INDIVIDUAL) col.lerp(TINT_BLACK, 0.3); // darker fill for individuals
  return col;
}

/** Edge alphas (PRD §5: backbone quiet, relation accented). */
export const EDGE_ALPHA_BACKBONE = 0.3;
export const EDGE_ALPHA_RELATION = 0.55;

/**
 * Node disc sizing is SCREEN-SPACE (pixels), not world units. A fixed world-unit
 * radius is sub-pixel after `fit()` frames a scope whose coordinate range varies
 * wildly per tier (overview spans ~±2000, a domain ~±335): a 5-unit disc in a
 * 4000-unit-wide overview renders < 1px and vanishes. Sizing in pixels — like
 * the labels (`LABEL_PX / zoom`) — keeps every disc legible at any fit/zoom.
 */
export const NODE_MIN_PX = 3.5; // smallest leaf disc radius, on screen
export const NODE_MAX_PX = 16; // largest hub disc radius, on screen

/** On-screen disc radius (px) from degree, normalised to the scope max. */
export function nodeRadiusPx(degree: number, maxDegree: number): number {
  const t = maxDegree > 1 ? Math.sqrt(Math.max(0, degree)) / Math.sqrt(maxDegree) : 0;
  return NODE_MIN_PX + t * (NODE_MAX_PX - NODE_MIN_PX);
}

/**
 * World-unit disc scale for the current camera zoom: screen px ÷ zoom. The disc
 * geometry has radius 1, so setting the instance scale to this value renders a
 * disc of exactly `nodeRadiusPx` pixels regardless of the scope's coordinate
 * range. Recomputed each frame because zoom changes on wheel/fit.
 */
export function nodeWorldScale(degree: number, maxDegree: number, zoom: number): number {
  return nodeRadiusPx(degree, maxDegree) / Math.max(zoom, 1e-6);
}
