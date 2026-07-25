/**
 * EdgeLegend — the ONLY filter UI that survives from WebVOWL's 44 settings
 * (PRD-NG-001 §5, §9a). Two edge-type toggles (backbone / relations) plus a
 * non-interactive colour key for the six domains so the cream drawing stays
 * legible.
 *
 * Edge-label mode (off/hover/on) was removed 2026-07-23: the control was dead
 * end-to-end (no renderer consumed it and NGG1 carries no per-edge predicate
 * strings). A dead control overclaims capability (PRD §1 honesty directive);
 * it returns when the pipeline ships predicate labels and a renderer exists.
 *
 * Backbone = subClassOf, quiet charcoal (--ng-edge-backbone).
 * Relation  = objectProperty, accented teal (--ng-edge-relation).
 */

import { DOMAIN_LABELS, DOMAIN_SLUGS } from '../../types/scope';
import type { EdgeToggles } from './types';

/** One swatch in the active node-colour key (a domain hue, or a category rung). */
export interface ColourKeyEntry {
  label: string;
  /** CSS colour string (already resolved from the palette). */
  color: string;
}

interface Props {
  toggles: EdgeToggles;
  onToggleBackbone: () => void;
  onToggleRelations: () => void;
  /** true on T0 overview — domains are the nodes, so show the domain key. */
  showDomainKey: boolean;
  /**
   * Active category colour key for a domain/focus scope (PRD-NG-001 §6): nodes
   * are tinted by category off the domain's base hue, so the legend shows which
   * rung is which. Capped list; the caller appends an "+N others" rung. Absent
   * on T0 (where `showDomainKey` shows the six domains instead).
   */
  categoryKey?: readonly ColourKeyEntry[];
}

export function EdgeLegend({
  toggles,
  onToggleBackbone,
  onToggleRelations,
  showDomainKey,
  categoryKey,
}: Props) {
  return (
    <section className="ng-legend" aria-label="Legend and edge filters">
      <div className="ng-legend__group">
        <h3 className="ng-legend__heading">Edges</h3>
        <label className="ng-legend__row">
          <input
            type="checkbox"
            checked={toggles.backbone}
            onChange={onToggleBackbone}
          />
          <span className="ng-legend__swatch ng-legend__swatch--backbone" aria-hidden="true" />
          <span className="ng-legend__text">Backbone <em>(subclass of)</em></span>
        </label>
        <label className="ng-legend__row">
          <input
            type="checkbox"
            checked={toggles.relations}
            onChange={onToggleRelations}
          />
          <span className="ng-legend__swatch ng-legend__swatch--relation" aria-hidden="true" />
          <span className="ng-legend__text">Relations <em>(object property)</em></span>
        </label>
      </div>

      {showDomainKey && (
        <div className="ng-legend__group">
          <h3 className="ng-legend__heading">Domains</h3>
          <ul className="ng-legend__domains">
            {DOMAIN_SLUGS.map((slug, id) => (
              <li key={slug} className="ng-legend__row ng-legend__row--static">
                <span
                  className="ng-legend__swatch ng-legend__swatch--domain"
                  style={{ background: `var(--ng-domain-${id})` }}
                  aria-hidden="true"
                />
                <span className="ng-legend__text">{DOMAIN_LABELS[slug]}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {!showDomainKey && categoryKey && categoryKey.length > 0 && (
        <div className="ng-legend__group">
          <h3 className="ng-legend__heading">Categories</h3>
          <ul className="ng-legend__domains">
            {categoryKey.map((entry) => (
              <li key={entry.label} className="ng-legend__row ng-legend__row--static">
                <span
                  className="ng-legend__swatch ng-legend__swatch--domain"
                  style={{ background: entry.color }}
                  aria-hidden="true"
                />
                <span className="ng-legend__text">{entry.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
