/**
 * SearchView — Fuse index over titles/labels/definitions/IRIs (PRD-NG-001 §4).
 * Mechanics unchanged (services/searchService); this is the editorial restyle.
 * Every hit offers the reading round-trip entry points: Read | Focus in graph.
 */

import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { search, getDocumentCount, type SearchResult } from '../services/searchService';
import { DOMAIN_META } from '../site/domains';
import { SearchIcon, ReadIcon, FocusIcon, ArrowRightIcon } from '../site/icons';
import { focusHref } from '../site/pageMeta';
import './SearchView.css';

/** id === slug and iri === urn:ngm:class:<id> across the index (verified). */
function focusIri(result: SearchResult): string {
  return `urn:ngm:class:${result.id}`;
}
function tintFor(domain: string | undefined): string | undefined {
  return DOMAIN_META.find((d) => d.slug === domain)?.tintVar;
}
function labelFor(domain: string | undefined): string | undefined {
  return DOMAIN_META.find((d) => d.slug === domain)?.label;
}

export default function SearchView() {
  const [params, setParams] = useSearchParams();
  const query = params.get('q') || '';
  const [draft, setDraft] = useState(query);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [ms, setMs] = useState(0);

  useEffect(() => setDraft(query), [query]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    const t0 = performance.now();
    const r = search(query, 100);
    setMs(performance.now() - t0);
    setResults(r);
  }, [query]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const term = draft.trim();
    if (term) setParams({ q: term });
  };

  const corpusSize = useMemo(() => getDocumentCount(), []);

  if (!query) {
    return (
      <section className="ng-search">
        <div className="ng-empty">
          <SearchIcon size={40} />
          <h2>Search the corpus</h2>
          <p>
            {corpusSize > 0
              ? `Fuzzy search across ${corpusSize.toLocaleString('en-GB')} indexed concepts: titles, labels, definitions and IRIs.`
              : 'Fuzzy search across the corpus: titles, labels, definitions and IRIs.'}
          </p>
          <form role="search" onSubmit={submit} style={{ maxWidth: '34rem', margin: '0 auto' }}>
            <div className="ng-searchbox">
              <SearchIcon size={20} />
              <input
                type="search"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="neural network, smart contract, digital twin…"
                aria-label="Search the corpus"
                autoFocus
              />
              <button type="submit" className="ng-btn ng-btn--primary ng-btn--sm">
                Search <ArrowRightIcon size={15} />
              </button>
            </div>
          </form>

          <div className="ng-search__doors">
            {DOMAIN_META.map(({ slug, label, tintVar, Icon }) => (
              <Link
                key={slug}
                to={`/graph?scope=domain:${slug}`}
                className="ng-chip"
                style={{ borderColor: tintVar, color: tintVar }}
              >
                <Icon size={14} /> {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="ng-search">
      <div className="ng-search__head">
        <h1>Search</h1>
        <form role="search" onSubmit={submit}>
          <div className="ng-searchbox">
            <SearchIcon size={20} />
            <input
              type="search"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              aria-label="Search the corpus"
            />
            <button type="submit" className="ng-btn ng-btn--primary ng-btn--sm">
              Search
            </button>
          </div>
        </form>
        <p className="ng-search__meta">
          <strong>{results.length}</strong> result{results.length === 1 ? '' : 's'} for &ldquo;
          {query}&rdquo; in <strong>{ms.toFixed(0)}ms</strong>
        </p>
      </div>

      {results.length > 0 ? (
        <div className="ng-results">
          {results.map((r) => {
            const tint = tintFor(r.domain);
            const dLabel = labelFor(r.domain) ?? r.domain_name;
            return (
              <article
                key={r.id}
                className="ng-result"
                style={tint ? ({ ['--result-tint' as string]: tint }) : undefined}
              >
                <div className="ng-result__top">
                  <h2 className="ng-result__title">
                    <Link className="ng-textlink" to={`/page/${encodeURIComponent(r.id)}`}>
                      {r.title}
                    </Link>
                  </h2>
                  {dLabel && (
                    <span
                      className="ng-chip"
                      style={tint ? { borderColor: tint, color: tint } : undefined}
                    >
                      {dLabel}
                    </span>
                  )}
                </div>
                <p className="ng-result__excerpt">{r.excerpt}</p>
                <div className="ng-result__actions">
                  <Link className="ng-btn ng-btn--ghost ng-btn--sm" to={`/page/${encodeURIComponent(r.id)}`}>
                    <ReadIcon size={14} /> Read
                  </Link>
                  <Link className="ng-btn ng-btn--ghost ng-btn--sm" to={focusHref(focusIri(r), 1)}>
                    <FocusIcon size={14} /> Focus in graph
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="ng-empty">
          <h2>No results for &ldquo;{query}&rdquo;</h2>
          <p>Try different keywords, a broader term, or an exact IRI fragment.</p>
        </div>
      )}
    </section>
  );
}
