/**
 * NodeListFallback — the accessibility node-list (PRD-NG-001 §9: "keyboard-
 * navigable views incl. graph node list fallback"). A visually-hidden <ul> of
 * the top-N visible labels (by degree, LABELS_VISIBLE_MAX) that a screen-reader
 * or keyboard user can tab through; focusing an item selects it and centres the
 * camera, so the canvas is fully operable without a pointer.
 *
 * It is not `display:none` — it is the `.ng-sr-only` clip pattern so it stays in
 * the accessibility tree and the tab order.
 */

import type { ScopeNode } from './types';

interface Props {
  nodes: readonly ScopeNode[];
  /** focus this node (select + centre camera). */
  onFocus: (node: ScopeNode) => void;
  /** total nodes on screen, for the summary line. */
  totalNodes: number;
}

export function NodeListFallback({ nodes, onFocus, totalNodes }: Props) {
  return (
    <nav className="ng-sr-only" aria-label="Graph nodes (list view)">
      <p>
        {totalNodes} nodes on screen. The {nodes.length} most-connected are listed; use the
        search box to reach any node.
      </p>
      <ul>
        {nodes.map((n) => (
          <li key={n.index}>
            <button type="button" onClick={() => onFocus(n)}>
              {n.label || n.iri}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
