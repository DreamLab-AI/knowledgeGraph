/**
 * PageView — the reading surface (PRD-NG-001 §4). Typography-first: a measured
 * serif column, a provenance chip (did:nostr author · generated-at · URN), a
 * JSON-LD-source toggle, a backlinks/related aside, and a "View in graph →"
 * round-trip link that focuses this class in the explorer (PRD "reading
 * round-trip"). The reading unit is first-class; the graph is the lens.
 */

import { useParams, Link } from 'react-router-dom';
import { usePage } from '../hooks/usePage';
import { usePageMeta, focusHref, fmtDate, AUTHOR_DID } from '../site/pageMeta';
import { useStats } from '../site/useStats';
import { DOMAIN_META } from '../site/domains';
import { GraphIcon, ProvenanceIcon, CodeIcon, ArrowRightIcon } from '../site/icons';
import { MarkdownRenderer } from '../components/PageRenderer/MarkdownRenderer';
import './PageView.css';

function domainTint(slug: string | undefined): string | undefined {
  const meta = DOMAIN_META.find((d) => d.slug === slug);
  return meta?.tintVar;
}

export default function PageView() {
  const { pageName } = useParams<{ pageName: string }>();
  const slug = pageName || '';
  const { data: page, isLoading, error } = usePage(slug);
  const meta = usePageMeta(slug);
  const stats = useStats();

  if (isLoading) {
    return <div className="ng-loading" role="status">Loading page…</div>;
  }
  if (error) {
    return (
      <div className="ng-empty">
        <h2>Could not load this page</h2>
        <p>{error.message}</p>
        <Link className="ng-btn ng-btn--ghost" to="/search">Back to search</Link>
      </div>
    );
  }
  if (!page) {
    return (
      <div className="ng-empty">
        <h2>Page not found</h2>
        <p>No page called &ldquo;{slug}&rdquo; exists in the corpus.</p>
        <Link className="ng-btn ng-btn--ghost" to="/search">Search instead</Link>
      </div>
    );
  }

  const domain = meta?.domain ?? page.ontology?.domain;
  const tint = domainTint(domain);
  const domainLabel = DOMAIN_META.find((d) => d.slug === domain)?.label;
  const classIri = meta?.classIri;

  // Provenance triple: author is the run constant unless the page carries its
  // own attribution; generated-at prefers the page field, else the run date.
  const author = meta?.attributedTo ?? AUTHOR_DID;
  const generatedAt =
    meta?.generatedAtTime ??
    (stats.status === 'ready' ? stats.data.datasetDate ?? stats.data.generatedAt : undefined);
  const urn = meta?.urn ?? page.ontology?.term_id;

  const hasAside =
    (meta?.backlinks.length ?? 0) > 0 ||
    (meta?.broader.length ?? 0) > 0 ||
    (meta?.related.length ?? 0) > 0;

  return (
    <article className="ng-page">
      <div className={'ng-page__grid' + (hasAside ? ' ng-page__grid--aside' : '')}>
        <div className="min-w-0">
          <header className="ng-page__header">
            {domainLabel && (
              <span
                className="ng-chip ng-chip--domain"
                style={tint ? { background: tint } : undefined}
              >
                {domainLabel}
              </span>
            )}
            <h1 className="ng-page__title">{page.title}</h1>

            {/* Provenance chip — traceability of generation, never a claim of
                human authorship (PRD §1 corpus-honesty directive, §9a.4). */}
            <div className="ng-provchip">
              <span className="ng-provchip__id">
                <ProvenanceIcon size={16} /> AI-generated synthetic corpus
              </span>
              <span className="ng-provchip__field">human-directed</span>
              <span className="ng-provchip__field">
                <b>did</b>{' '}
                <Link className="ng-textlink" to="/about#provenance">
                  <code>{author}</code>
                </Link>
              </span>
              {generatedAt && (
                <span className="ng-provchip__field">
                  <b>generated</b> {fmtDate(generatedAt)}
                </span>
              )}
              {urn && (
                <span className="ng-provchip__field">
                  <b>URN</b> <code>{urn}</code>
                </span>
              )}
            </div>

            <div className="ng-page__toolbar">
              {classIri && (
                <Link className="ng-btn ng-btn--primary ng-btn--sm" to={focusHref(classIri, 1)}>
                  <GraphIcon size={15} /> View in graph <ArrowRightIcon size={14} />
                </Link>
              )}
              <Link className="ng-btn ng-btn--ghost ng-btn--sm" to="/search">
                Search the corpus
              </Link>
            </div>
          </header>

          <div className="ng-prose">
            <MarkdownRenderer content={page.content} />
          </div>

          {/* JSON-LD source toggle — a PRD §4 must-have ("the semantics are the
              product"), so it is ALWAYS present. When the page markdown carries
              inline json-ld fences we show them verbatim; otherwise we synthesise
              an OWL2/JSON-LD projection from the page's ontology metadata so every
              reading surface still exposes its machine-readable form. */}
          {(() => {
            const inline = page.jsonldBlocks && page.jsonldBlocks.length > 0;
            const blocks: string[] = inline
              ? page.jsonldBlocks!
              : [
                  JSON.stringify(
                    Object.fromEntries(
                      Object.entries({
                        '@context': 'https://narrativegoldmine.com/ns/v2.jsonld',
                        '@id': classIri ?? urn ?? undefined,
                        '@type': 'owl:Class',
                        'rdfs:label': page.title,
                        'skos:definition': page.ontology?.definition,
                        'ngg:domain': domainLabel ?? domain,
                        'rdfs:subClassOf': page.ontology?.is_subclass_of,
                        'ngg:relatesTo': page.ontology?.relates_to,
                        'prov:wasAttributedTo': author,
                        'prov:generatedAtTime': generatedAt,
                        'ngg:corpusNature': 'synthetic-ai-generated-human-directed',
                      }).filter(([, v]) => v != null && !(Array.isArray(v) && v.length === 0)),
                    ),
                    null,
                    2,
                  ),
                ];
            return (
              <details className="ng-jsonld">
                <summary>
                  <CodeIcon size={16} /> JSON-LD source ({blocks.length} block
                  {blocks.length > 1 ? 's' : ''})
                  {inline ? '' : ' · derived from ontology metadata'} — the semantics are the product
                </summary>
                {blocks.map((block, i) => (
                  <pre key={i}>
                    {(() => {
                      try {
                        return JSON.stringify(JSON.parse(block), null, 2);
                      } catch {
                        return block;
                      }
                    })()}
                  </pre>
                ))}
              </details>
            );
          })()}
        </div>

        {hasAside && meta && (
          <aside className="ng-aside" aria-label="Related concepts">
            {meta.broader.length > 0 && (
              <nav className="ng-panel" aria-label="Broader classes">
                <h3>Broader</h3>
                <ul>
                  {meta.broader.map((c) => (
                    <li key={c.slug}>
                      <Link to={`/page/${encodeURIComponent(c.slug)}`}>{c.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {meta.related.length > 0 && (
              <nav className="ng-panel" aria-label="Related concepts">
                <h3>Related in the graph</h3>
                <ul>
                  {meta.related.slice(0, 12).map((c) => (
                    <li key={c.slug}>
                      <Link to={`/page/${encodeURIComponent(c.slug)}`}>{c.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {meta.backlinks.length > 0 && (
              <nav className="ng-panel" aria-label="Backlinks">
                <h3>Linked from</h3>
                <ul>
                  {meta.backlinks.map((c) => (
                    <li key={c.slug}>
                      <Link to={`/page/${encodeURIComponent(c.slug)}`}>{c.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </aside>
        )}
      </div>
    </article>
  );
}
