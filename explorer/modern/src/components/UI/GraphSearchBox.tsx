/**
 * GraphSearchBox — search-within-graph (PRD-NG-001 §5: "every node reachable by
 * label search"). Filters the loaded scope's string table by label; Enter
 * focuses the best hit; each result offers Read | Focus (the reading round-trip
 * and the T2 descent). Bound to `/` for keyboard focus (handled in GraphPage).
 */

import { forwardRef } from 'react';
import type { ScopeNode } from './types';

interface Props {
  query: string;
  results: readonly ScopeNode[];
  open: boolean;
  onQueryChange: (q: string) => void;
  onOpenChange: (open: boolean) => void;
  /** Enter (or click title) → select + centre camera on this node. */
  onFocusHit: (node: ScopeNode) => void;
  /** Read → navigate to the node's page (only when it resolves). */
  onRead: (node: ScopeNode) => void;
  /** Focus in graph → descend to a T2 ego-graph around this node. */
  onFocusInGraph: (node: ScopeNode) => void;
  /** predicate: does this node resolve to a readable Page? (FLAG_HAS_PAGE) */
  canRead: (node: ScopeNode) => boolean;
}

export const GraphSearchBox = forwardRef<HTMLInputElement, Props>(function GraphSearchBox(
  { query, results, open, onQueryChange, onOpenChange, onFocusHit, onRead, onFocusInGraph, canRead },
  ref,
) {
  const showResults = open && query.trim().length > 0;

  return (
    <div className="ng-search" role="search">
      <input
        ref={ref}
        type="search"
        className="ng-search__input"
        placeholder="Search this graph…  ( / )"
        value={query}
        aria-label="Search within the graph"
        aria-expanded={showResults}
        aria-controls="ng-search-results"
        autoComplete="off"
        spellCheck={false}
        onFocus={() => onOpenChange(true)}
        onChange={(e) => onQueryChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && results.length > 0) {
            e.preventDefault();
            onFocusHit(results[0]);
          } else if (e.key === 'Escape') {
            onOpenChange(false);
          }
        }}
      />

      {showResults && (
        <ul className="ng-search__results" id="ng-search-results" role="listbox">
          {results.length === 0 ? (
            <li className="ng-search__empty" role="option" aria-selected={false}>
              No nodes match &ldquo;{query.trim()}&rdquo; in this scope.
            </li>
          ) : (
            results.map((n) => (
              <li key={n.index} className="ng-search__hit" role="option" aria-selected={false}>
                <button
                  type="button"
                  className="ng-search__hit-title"
                  onClick={() => onFocusHit(n)}
                  title={n.iri}
                >
                  {n.label || n.iri}
                </button>
                <span className="ng-search__hit-actions">
                  {canRead(n) && (
                    <button type="button" className="ng-linkbtn" onClick={() => onRead(n)}>
                      Read
                    </button>
                  )}
                  <button type="button" className="ng-linkbtn" onClick={() => onFocusInGraph(n)}>
                    Focus
                  </button>
                </span>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
});
