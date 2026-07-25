/**
 * HomePage — the front door (PRD-NG-001 §4). A house-aesthetic hero visual,
 * story hook, an honest synthetic-corpus one-liner (§1 corpus-honesty
 * directive), search, six domain doors, an honest stats strip rendered ONLY
 * from the pipeline artifact (never hard-typed, PRD §7), a mid-page ecosystem
 * panel (§9a.4a), and the VisionClaw bridge.
 */

import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DOMAIN_META } from '../site/domains';
import {
  SearchIcon,
  ArrowRightIcon,
  ProvenanceIcon,
  GraphIcon,
  ChevronRightIcon,
  MeshMarkIcon,
} from '../site/icons';
import { useStats, fmt, corpusOf } from '../site/useStats';
import { fmtDate } from '../site/pageMeta';
import { VISIONCLAW, MESH_REPOS } from '../site/mesh';
import './HomePage.css';

function StatsStrip() {
  const stats = useStats();
  const corpus = corpusOf(stats);

  if (stats.status === 'loading') {
    return <div className="ng-stats ng-stats--absent">Loading corpus statistics…</div>;
  }
  if (stats.status === 'absent') {
    return (
      <div className="ng-stats ng-stats--absent">
        Corpus statistics are published by the pipeline into{' '}
        <code>/data/graph/stats.json</code> and appear here once a build has run. No figures are
        hand-typed.
      </div>
    );
  }

  const s = stats.data;
  const cells: { value: string; label: string }[] = [];
  if (s.pages !== undefined) cells.push({ value: fmt(s.pages), label: 'Public pages' });
  if (s.classes !== undefined) cells.push({ value: fmt(s.classes), label: 'OWL classes' });
  if (s.individuals !== undefined) cells.push({ value: fmt(s.individuals), label: 'Individuals' });
  if (s.relations?.declared !== undefined) {
    cells.push({
      value: fmt(s.relations.declared),
      label:
        s.relations.resolvable !== undefined
          ? `Relations · ${fmt(s.relations.resolvable)} resolvable`
          : 'Relations',
    });
  }
  if (s.domains !== undefined) cells.push({ value: fmt(s.domains), label: 'Domains' });

  // The dataset is labelled honestly as a synthetic corpus (PRD §1, §7).
  const metaBits: string[] = [`${corpus.label} · ${corpus.generation}`];
  if (s.reasoner) metaBits.push(`reasoned under ${s.reasoner}`);
  else metaBits.push('reasoned under EL++');
  const date = fmtDate(s.datasetDate ?? s.generatedAt);
  if (date) metaBits.push(`dataset ${date}`);
  if (s.pipelineVersion) metaBits.push(`pipeline ${s.pipelineVersion}`);

  return (
    <div className="ng-stats">
      {cells.map((c) => (
        <div key={c.label} className="ng-stat">
          <span className="ng-stat__value">{c.value}</span>
          <span className="ng-stat__label">{c.label}</span>
        </div>
      ))}
      <div className="ng-stats__meta">{metaBits.join(' · ')}</div>
    </div>
  );
}

export default function HomePage() {
  const navigate = useNavigate();
  const [q, setQ] = useState('');
  const corpus = corpusOf(useStats());

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    const term = q.trim();
    if (term) navigate(`/search?q=${encodeURIComponent(term)}`);
  };

  return (
    <>
      <section className="ng-hero">
        <div className="ng-wide">
          <figure className="ng-hero__media">
            <img
              src="/img/ng-hero.webp"
              width={1600}
              height={893}
              decoding="async"
              alt="Hand-drawn editorial diagram: a stack of AI-generated pages labelled 'synthetic corpus (AI-generated, human-directed)' pours into a compiler funnel labelled 'JSON-LD pipeline · OWL2 DL · Whelk EL++', which splits into two consumers — an open book labelled 'the Lexicon' and a VR headset with a node graph labelled 'the Laboratory'."
            />
          </figure>

          <p className="ng-eyebrow">The DreamLab knowledge mesh · readable tier</p>
          <h1 className="ng-hero__title">
            A 6.8-million-word corpus of the Fourth Industrial Revolution, mapped as a{' '}
            <em>reasoned ontology</em>.
          </h1>
          <p className="ng-hero__lede">
            Not a wiki. Every page carries OWL2 semantics and a traceable generation record; the
            whole corpus compiles to a graph you can read, follow and cite, then explore as a lens
            when linear reading runs out.
          </p>

          <p className="ng-honest">{corpus.statement}</p>

          <form className="ng-hero__search" role="search" onSubmit={onSearch}>
            <div className="ng-searchbox">
              <SearchIcon size={20} />
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search concepts, definitions, relations…"
                aria-label="Search the corpus"
                autoComplete="off"
              />
              <button type="submit" className="ng-btn ng-btn--primary ng-btn--sm">
                Search <ArrowRightIcon size={15} />
              </button>
            </div>
          </form>

          <p className="ng-hero__prov">
            <ProvenanceIcon size={18} />
            Every page names the identity that generated it:{' '}
            <code>prov:wasAttributedTo did:nostr:jjohare</code>
          </p>
        </div>
      </section>

      <section className="ng-section">
        <div className="ng-wide">
          <div className="ng-section__head">
            <h2>Six domains, one map</h2>
            <p>
              Each door opens the explorer at that domain&rsquo;s subClassOf backbone: orientation
              first, structure on demand.
            </p>
          </div>
          <div className="ng-doors">
            {DOMAIN_META.map(({ slug, label, blurb, tintVar, Icon }) => (
              <Link
                key={slug}
                to={`/graph?scope=domain:${slug}`}
                className="ng-door"
                style={{ ['--door-tint' as string]: tintVar }}
              >
                <span className="ng-door__glyph">
                  <Icon size={26} />
                </span>
                <h3 className="ng-door__name">{label}</h3>
                <p className="ng-door__blurb">{blurb}</p>
                <span className="ng-door__go">
                  Open domain <ChevronRightIcon size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ng-section">
        <div className="ng-wide">
          <div className="ng-section__head">
            <h2>Honest by construction</h2>
            <p>
              Every number below is generated by the pipeline. If a build has not run you see no
              figure, never a guess. The dataset is a {corpus.label}: {corpus.generation}, not an
              authoritative encyclopedia.
            </p>
          </div>
          <StatsStrip />
        </div>
      </section>

      <section className="ng-section">
        <div className="ng-wide">
          <div className="ng-section__head">
            <h2>One node in a sovereign mesh</h2>
            <p>
              This corpus is the readable projection of a seven-repository mesh: an agentic mycelia
              of sovereign pods, Nostr relays and open web-contracts, all reasoning over the same
              ontology.
            </p>
          </div>
          <figure className="ng-figure">
            <img
              className="ng-figure__img"
              src="/img/decentralised-agents.webp"
              loading="lazy"
              decoding="async"
              alt="Hand-drawn 'Agentic Mycelia' diagram: mushroom-like nodes (solid-pod-rs, jss pods, did:nostr agents) linked by a mycelial network inside a dashed Nostr relay mesh, over a Bitcoin trust ledger (BIP-341 block-trail), with an L0–L3 web-contract trust spectrum."
            />
            <figcaption className="ng-figure__cap">
              The DreamLab mesh: sovereign pods and agents linked over Nostr relays and a Bitcoin
              trust ledger.
            </figcaption>
          </figure>
          <nav className="ng-meshlinks" aria-label="Ecosystem repositories">
            {MESH_REPOS.map((repo) => (
              <a
                key={repo.name}
                className="ng-meshlink"
                href={repo.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MeshMarkIcon size={15} /> {repo.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="ng-section">
        <div className="ng-wide">
          <div className="ng-bridge-line">
            <GraphIcon size={22} />
            <span>
              <strong>This corpus is also alive.</strong> The same source renders live inside{' '}
              <a className="ng-textlink" href={VISIONCLAW.repo} target="_blank" rel="noopener noreferrer">
                VisionClaw
              </a>
              , an ontology-grounded 3D reasoning engine. This site is the Lexicon; VisionClaw is the
              Laboratory. <Link className="ng-textlink" to="/about">Read about the mesh →</Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
