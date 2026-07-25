/**
 * GraphBreadcrumb — tier ascent (PRD-NG-001 §5: "Every node double-click
 * descends a tier; breadcrumb ascends"). Overview / Domain / Focus. The current
 * crumb is inert; ancestor crumbs navigate up by publishing a ScopeRef.
 */

import type { Crumb } from './types';
import type { ScopeRef } from '../../types/scope';

interface Props {
  crumbs: readonly Crumb[];
  /** ascend to an ancestor scope (URL is the state — GraphPage pushes it). */
  onNavigate: (ref: ScopeRef) => void;
}

export function GraphBreadcrumb({ crumbs, onNavigate }: Props) {
  return (
    <nav className="ng-breadcrumb" aria-label="Graph tier">
      <ol>
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={`${c.kind}-${i}`}>
              {c.ref && !last ? (
                <button
                  type="button"
                  className="ng-breadcrumb__link"
                  onClick={() => onNavigate(c.ref as ScopeRef)}
                >
                  {c.label}
                </button>
              ) : (
                <span className="ng-breadcrumb__current" aria-current={last ? 'page' : undefined}>
                  {c.label}
                </span>
              )}
              {!last && <span className="ng-breadcrumb__sep" aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
