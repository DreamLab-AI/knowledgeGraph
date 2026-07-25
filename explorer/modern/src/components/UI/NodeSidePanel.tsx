/**
 * NodeSidePanel — the reading round-trip surface (PRD-NG-001 §5, §8).
 *
 * Selected node → label, IRI (copyable), domain / category, degree (shipped vs
 * declared), "Read page" (when the class resolves to a Page), "View in graph"
 * (descend to a T2 ego-graph), a provenance line (did:nostr attribution +
 * generated-at + pipeline version), and — on the focus tier — the VisionClaw
 * bridge ("the Lexicon → the Laboratory", PRD §9a.7).
 *
 * Pure presentation: it never touches scopeStore. GraphPage feeds it a
 * ScopeNode view-model plus the derived strings.
 */

import { useCallback, useState } from 'react';
import type { ProvenanceInfo, ScopeNode, Tier } from './types';

interface Props {
  node: ScopeNode | null;
  open: boolean;
  domainLabel: string;
  categoryLabel: string;
  /** incident edges actually present in the loaded scope (capped tiers). */
  shippedDegree: number;
  tier: Tier;
  provenance: ProvenanceInfo;
  /** the class resolves to a readable Page (FLAG_HAS_PAGE). */
  canRead: boolean;
  /** /page/<slug> href when canRead, else null. */
  pageHref: string | null;
  onClose: () => void;
  /** descend into a T2 ego-graph focused on this node. */
  onFocusInGraph: (node: ScopeNode) => void;
}

const VISIONCLAW_URL = 'https://visionflow.info';

export function NodeSidePanel({
  node,
  open,
  domainLabel,
  categoryLabel,
  shippedDegree,
  tier,
  provenance,
  canRead,
  pageHref,
  onClose,
  onFocusInGraph,
}: Props) {
  const [copied, setCopied] = useState(false);

  const copyIri = useCallback(() => {
    if (!node) return;
    void navigator.clipboard?.writeText(node.iri).then(
      () => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1400);
      },
      () => setCopied(false),
    );
  }, [node]);

  if (!open || !node) return null;

  const degreeCapped = shippedDegree < node.degree;

  return (
    <aside className="ng-panel" aria-label="Selected node details">
      <div className="ng-panel__head">
        <span className="ng-panel__eyebrow">{domainLabel}</span>
        <button type="button" className="ng-iconbtn ng-panel__close" onClick={onClose} aria-label="Close panel">
          <span aria-hidden="true">×</span>
        </button>
      </div>

      <h2 className="ng-panel__title">{node.label || node.iri}</h2>

      <dl className="ng-panel__meta">
        <div className="ng-panel__field">
          <dt>IRI</dt>
          <dd className="ng-panel__iri">
            <code title={node.iri}>{node.iri}</code>
            <button type="button" className="ng-linkbtn" onClick={copyIri} aria-label="Copy IRI">
              {copied ? 'Copied' : 'Copy'}
            </button>
          </dd>
        </div>

        <div className="ng-panel__field">
          <dt>Category</dt>
          <dd>{categoryLabel}</dd>
        </div>

        <div className="ng-panel__field">
          <dt>Degree</dt>
          <dd>
            <strong>{shippedDegree}</strong> shipped
            {degreeCapped && (
              <>
                {' · '}
                <span className="ng-panel__muted">{node.degree} declared</span>
              </>
            )}
          </dd>
        </div>
      </dl>

      <div className="ng-panel__actions">
        {canRead && pageHref ? (
          <a className="ng-btn ng-btn--primary" href={pageHref}>
            Read page →
          </a>
        ) : (
          <span className="ng-panel__nopage" title="No public page is attached to this class">
            No page for this class
          </span>
        )}
        <button type="button" className="ng-btn" onClick={() => onFocusInGraph(node)}>
          View in graph
        </button>
      </div>

      {(provenance.attributedTo || provenance.generatedAt || provenance.pipelineVersion) && (
        <p className="ng-panel__prov">
          {/* Honesty-at-scale framing (PRD §1 corpus directive, §9a.4): the chip
              attests traceable, human-directed generation of a synthetic corpus —
              never human authorship. Mirrors Home / PageView wording. */}
          <span className="ng-panel__prov-chip" title="Traceable generation, not human authorship">
            AI-generated synthetic corpus
          </span>
          {' · '}
          <span className="ng-panel__muted">human-directed</span>
          {provenance.attributedTo && (
            <>
              {' · '}
              <span title="Cryptographically attributed generation">{provenance.attributedTo}</span>
            </>
          )}
          {provenance.generatedAt && <> · generated {provenance.generatedAt}</>}
          {provenance.pipelineVersion && <> · pipeline {provenance.pipelineVersion}</>}
        </p>
      )}

      {tier === 'focus' && (
        <p className="ng-panel__bridge">
          This corpus is the <strong>Lexicon</strong>. It also renders live inside an
          ontology-grounded 3D reasoning engine — the <strong>Laboratory</strong>.{' '}
          <a href={VISIONCLAW_URL} target="_blank" rel="noopener noreferrer">
            Open it in VisionClaw →
          </a>
        </p>
      )}
    </aside>
  );
}
