/**
 * ScopeStatus — loading / progress / error overlay for a scope load
 * (PRD-NG-001 §5 "Loading/progress states; error states with honest copy",
 * §9 budgets). Honest copy: no "production ready", no fake spinners on success;
 * the error path names what failed and offers retry + a fall-back to overview.
 */

import type { Tier } from './types';

export type ScopeLoadStatus = 'idle' | 'loading' | 'ready' | 'error';

interface Props {
  status: ScopeLoadStatus;
  /** 0..1 — omit for indeterminate. */
  progress?: number;
  progressLabel?: string;
  error?: string | null;
  tier: Tier;
  onRetry: () => void;
  onOverview: () => void;
}

export function ScopeStatus({ status, progress, progressLabel, error, tier, onRetry, onOverview }: Props) {
  if (status === 'ready' || status === 'idle') return null;

  if (status === 'error') {
    return (
      <div className="ng-scope-status ng-scope-status--error" role="alert">
        <div className="ng-scope-status__card">
          <h2>This scope didn&rsquo;t load</h2>
          <p className="ng-scope-status__detail">{error || 'The graph tier could not be fetched or parsed.'}</p>
          <p className="ng-scope-status__hint">
            The data ships as static files — a network hiccup or a stale deploy is the usual cause.
          </p>
          <div className="ng-scope-status__actions">
            <button type="button" className="ng-btn ng-btn--primary" onClick={onRetry}>
              Try again
            </button>
            {tier !== 'overview' && (
              <button type="button" className="ng-btn" onClick={onOverview}>
                Back to overview
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // loading
  const pct = typeof progress === 'number' ? Math.max(0, Math.min(1, progress)) : undefined;
  return (
    <div className="ng-scope-status" role="status" aria-live="polite">
      <div className="ng-scope-status__card">
        <div className="ng-scope-status__spinner" aria-hidden="true" />
        <p>{progressLabel || label(tier)}</p>
        {pct !== undefined && (
          <div className="ng-progress" role="progressbar" aria-valuenow={Math.round(pct * 100)} aria-valuemin={0} aria-valuemax={100}>
            <span className="ng-progress__bar" style={{ width: `${pct * 100}%` }} />
          </div>
        )}
      </div>
    </div>
  );
}

function label(tier: Tier): string {
  switch (tier) {
    case 'overview':
      return 'Loading the overview…';
    case 'domain':
      return 'Loading this domain…';
    case 'focus':
      return 'Building the neighbourhood…';
  }
}
