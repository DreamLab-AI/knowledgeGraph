/**
 * DataPage (/data) — "the site is an API" (PRD-NG-001 §4/§8, ADR-NG-001 §2).
 * Documents every public artifact contract with a 1-click copy URL (PRD §9a.3)
 * and an open/download link, plus the llms.txt pointer for agent builders.
 * No fabricated figures — descriptions are of shape; counts live in stats.json.
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DownloadIcon, CopyIcon, CheckIcon, ExternalIcon, CodeIcon } from '../site/icons';

interface Artifact {
  name: string;
  path: string;
  desc: string;
  /** When true the URL is a family/example (per-slug or per-domain), not a single file. */
  family?: boolean;
}

interface ArtifactGroup {
  heading: string;
  blurb: string;
  items: Artifact[];
}

const GROUPS: ArtifactGroup[] = [
  {
    heading: 'Reading & pages',
    blurb:
      'The per-page JSON is the reading unit as data: definition, typed relations, backlinks, provenance.',
    items: [
      {
        name: 'api/pages/<slug>.json',
        path: '/api/pages/climate-modelling.json',
        desc: 'One page as structured JSON: id (URN), classIri, domain, definition, subClassOf, typed relationships, wikilinks, backlinks.',
        family: true,
      },
      {
        name: 'api/markdown/<title>.md',
        path: '/api/markdown/Climate%20Modelling.md',
        desc: 'The markdown mirror of a page: source prose with JSON-LD blocks intact.',
        family: true,
      },
      {
        name: 'api/search-index.json',
        path: '/api/search-index.json',
        desc: 'The full Fuse search corpus: id, title, labels, definition, domain, iri, subclass links.',
      },
    ],
  },
  {
    heading: 'Ontology & semantics',
    blurb: 'OWL2 DL semantics: the reasoned Turtle and the JSON-LD context binding the vocabulary.',
    items: [
      {
        name: 'ontology.ttl',
        path: '/data/ontology.ttl',
        desc: 'The corpus as Turtle: classes, the subClassOf backbone and object properties, reasoned under EL++. TTL download is the contract; static hosting excludes a live SPARQL endpoint.',
      },
      {
        name: 'ns/ (JSON-LD context)',
        path: '/ns/',
        desc: 'The JSON-LD @context for the ngm: vocabulary. Dereference it to align terms programmatically.',
      },
    ],
  },
  {
    heading: 'Graph tiers (NGG1 binary)',
    blurb: 'The explorer never loads a monolith. Tiered NGG1 binaries load ≤2 MB per scope (ADR §2).',
    items: [
      {
        name: 'data/graph/overview.json',
        path: '/data/graph/overview.json',
        desc: 'T0: the 6 domain roots + 34 taxonomy categories with member counts and pre-baked layout positions.',
      },
      {
        name: 'data/graph/domain-<slug>.bin',
        path: '/data/graph/domain-artificial-intelligence.bin',
        desc: 'T1: one domain’s classes, full subClassOf backbone, object-property edges capped per-node top-k. NGG1 little-endian, 24-byte node stride.',
        family: true,
      },
      {
        name: 'data/graph/full.bin',
        path: '/data/graph/full.bin',
        desc: 'The whole graph as CSR for power users: the explicit "load everything" contract, never on a route’s hot path.',
      },
      {
        name: 'data/graph/stats.json',
        path: '/data/graph/stats.json',
        desc: 'Pipeline-derived truth: pages, classes, individuals, relations declared/resolvable/shipped, dataset date, pipeline version. The only number source on the site.',
      },
    ],
  },
  {
    heading: 'For agents & LLMs',
    blurb: 'A reliable ground-truth dependency for agent builders: documented, stable, CORS-open.',
    items: [
      {
        name: 'llms.txt',
        path: '/llms.txt',
        desc: 'The site map for language models: what this corpus is, where the artifacts live, how to consume them.',
      },
      {
        name: '.well-known/llms.txt',
        path: '/.well-known/llms.txt',
        desc: 'The well-known alias of the same file, for agents that probe the standard location.',
      },
    ],
  },
];

function CopyButton({ path }: { path: string }) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== 'undefined' ? window.location.origin + path : path;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      className={'ng-copyurl' + (copied ? ' is-copied' : '')}
      onClick={copy}
      aria-label={copied ? 'URL copied' : `Copy URL ${url}`}
    >
      {copied ? <CheckIcon size={13} /> : <CopyIcon size={13} />}
      {copied ? 'Copied' : 'Copy URL'}
    </button>
  );
}

export default function DataPage() {
  return (
    <section className="ng-data">
      <div className="ng-data__intro">
        <p className="ng-eyebrow">Publication · API surface</p>
        <h1>The site is an API</h1>
        <p>
          Everything you read here is also a documented, stable, CORS-open endpoint. The page JSON,
          markdown mirrors, search index, reasoned ontology and tiered graph binaries are public
          contracts: versioned, self-describing, and free to build on.
        </p>
        <p>
          For language models and agents, start at <code>/llms.txt</code>. Every count on this site
          is generated into <code>/data/graph/stats.json</code>; nothing is hand-typed.
        </p>
      </div>

      {GROUPS.map((group) => (
        <div className="ng-wide" key={group.heading} style={{ marginBottom: '2rem' }}>
          <div className="ng-section__head">
            <h2 style={{ fontSize: 'var(--ng-text-xl)' }}>{group.heading}</h2>
            <p>{group.blurb}</p>
          </div>
          <div className="ng-artifacts">
            {group.items.map((a) => (
              <div className="ng-artifact" key={a.name}>
                <span className="ng-artifact__name">{a.name}</span>
                <p className="ng-artifact__desc">{a.desc}</p>
                <div className="ng-artifact__foot">
                  <a
                    className="ng-btn ng-btn--ghost ng-btn--sm"
                    href={a.path}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {a.name.endsWith('/') ? <ExternalIcon size={14} /> : <DownloadIcon size={14} />}
                    {a.family ? 'Example' : 'Open'}
                  </a>
                  <CopyButton path={a.path} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="ng-data__intro" style={{ marginTop: '1rem' }}>
        <div className="ng-bridge-line">
          <CodeIcon size={20} />
          <span>
            Building an agent against this corpus? The{' '}
            <Link className="ng-textlink" to="/about">
              About page
            </Link>{' '}
            explains the provenance model and the mesh these artifacts belong to.
          </span>
        </div>
      </div>
    </section>
  );
}
