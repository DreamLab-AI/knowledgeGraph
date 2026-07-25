/**
 * AboutPage (/about) — what this corpus is (honestly), the mesh, the VisionClaw
 * bridge, the provenance explainer, the Buzz convergence line, and corpus
 * rights (PRD-NG-001 §1 corpus-honesty directive, §4/§8, §9a.4/§9a.4a/§9a.7).
 * Framing: this site is the Lexicon; VisionClaw is the Laboratory.
 */

import { Link } from 'react-router-dom';
import { MeshMarkIcon, ProvenanceIcon, ExternalIcon } from '../site/icons';
import { MESH_REPOS, VISIONCLAW } from '../site/mesh';
import { useStats, fmt, corpusOf } from '../site/useStats';

export default function AboutPage() {
  const stats = useStats();
  const corpus = corpusOf(stats);
  const s = stats.status === 'ready' ? stats.data : undefined;
  const repoNames = MESH_REPOS.map((r) => r.name).join(', ');

  return (
    <section className="ng-about">
      <div className="ng-about__body">
        <p className="ng-eyebrow">About</p>
        <h1>The Lexicon</h1>
        <p>
          narrativegoldmine.com is the readable tier of the DreamLab knowledge mesh: a
          6.8-million-word corpus mapping the Fourth Industrial Revolution across six domains:
          artificial intelligence, blockchain, spatial computing, robotics, distributed
          collaboration and infrastructure. It compiles to a reasoned OWL2 DL ontology, not a pile
          of hyperlinks. Every page carries its semantics in the source and its generation record on
          its face.
        </p>

        <h2 id="what-this-is">What this corpus is</h2>
        <p>
          Know what you are reading: this is a <strong>{corpus.label}</strong>,{' '}
          {corpus.generation}, by design. It was written mostly by AI models under human direction,
          and it exists to <em>exercise and demonstrate</em> the VisionFlow pipeline and the
          VisionClaw engine on a medium-scale ontology. It is a testbed, not an authoritative
          encyclopedia. Where a claim reads as settled fact, treat it as generated content with a
          traceable origin rather than a vetted human reference.
        </p>
        <p>
          That is the point of the demonstration:{' '}
          <em>this is what the toolchain builds and reasons over at scale</em>.{' '}
          {s ? (
            <>
              At this build the corpus holds{' '}
              <strong>{fmt(s.pages)} pages</strong> and{' '}
              <strong>{fmt(s.classes)} OWL classes</strong>
              {s.relations?.declared !== undefined && (
                <>
                  {' '}across <strong>{fmt(s.relations.declared)} declared relations</strong>
                  {s.relations.resolvable !== undefined && (
                    <> ({fmt(s.relations.resolvable)} resolvable)</>
                  )}
                </>
              )}
              {s.domains !== undefined && (
                <>
                  , organised into {fmt(s.domains)} domains
                  {s.categories !== undefined && <> and {fmt(s.categories)} categories</>}
                </>
              )}
              , reasoned under {s.reasoner ?? 'EL++'}. Every figure here is emitted by the pipeline
              into <code>/data/graph/stats.json</code>; nothing is hand-typed.
            </>
          ) : (
            <>
              The scale figures are published by the pipeline into{' '}
              <code>/data/graph/stats.json</code> and shown across the site once a build has run —
              never guessed at.
            </>
          )}
        </p>
        <p>
          It exists to make a corpus too large to read linearly navigable: search to find, read to
          understand, and, when reading runs out, an ontology explorer as a lens over the structure.
          The explorer serves reading; it never replaces it.
        </p>

        <h2 id="laboratory">The Laboratory</h2>
        <p>
          The same source renders live inside{' '}
          <a className="ng-textlink" href={VISIONCLAW.repo} target="_blank" rel="noopener noreferrer">
            VisionClaw <ExternalIcon size={14} />
          </a>
          , an ontology-grounded 3D reasoning engine. This site is where you <em>read</em> the
          corpus, the Lexicon; the Laboratory is where you <em>inhabit</em> it. The Lexicon funnels
          the curious toward the deep tier without becoming an advert for it.
        </p>

        <h2 id="provenance">Provenance</h2>
        <p>
          In an era of undifferentiated machine-generated text, <em>traceability</em> matters more
          than a claim to authorship. Every page carries a generation record:{' '}
          <code>prov:wasAttributedTo did:nostr:jjohare</code>, with a generation timestamp and a
          stable URN. The{' '}
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <ProvenanceIcon size={16} /> provenance chip
          </span>{' '}
          on every reading page surfaces this rather than hiding it. A <code>did:nostr</code>{' '}
          identity is a Nostr public key acting as a W3C Decentralised Identifier: verifiable,
          self-sovereign, and tied to no central registrar. It records <em>who directed this
          synthetic corpus into being, and when</em>. The claim is a traceable origin at scale,
          openly labelled as generated. Until a public resolver is live, the identifier is the
          attestation; the chip links here.
        </p>

        <h2 id="mesh">Where this sits</h2>
        <p>
          This corpus is one node in a seven-repository mesh. All seven share three principles:
          sovereignty, provenance and open contracts.
        </p>
        <figure className="ng-figure">
          <img
            className="ng-figure__img"
            src="/img/dreamlab-hero.webp"
            loading="lazy"
            decoding="async"
            alt="Hand-drawn 'DreamLab AI — sovereign agentic knowledge mesh' diagram: VisionClaw (Godot XR client) feeds agentbox (ontology-to-agent retrieval brain), which cycles through nostr-rust-forum, solid-pod-rs and dreamlab-ai-website / VisionFlow around a central knowledge graph (Oxigraph RDF + Whelk-rs OWL, 5975 classes), with did:nostr identity, solid-pod storage and L402 web-contracts."
          />
          <figcaption className="ng-figure__cap">
            The seven-repository mesh: {repoNames}. One ontology, one identity kernel, one set of
            open contracts.
          </figcaption>
        </figure>
        <div className="ng-lexlab">
          {MESH_REPOS.map((repo) => (
            <a
              key={repo.name}
              className="ng-lexlab__card"
              href={repo.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <h3 style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <MeshMarkIcon size={18} /> {repo.name}
              </h3>
              <p>{repo.blurb}</p>
            </a>
          ))}
        </div>

        <h2 id="convergence">Industry convergence</h2>
        <p>
          The six domains mapped here are converging in practice, not just on paper: agentic AI now
          coordinates over sovereign protocols, spatial computing renders the reasoning, and
          distributed infrastructure carries it. The wider industry has taken to calling this the
          agentic, embodied web. This corpus is a working, machine-reasoned map of that convergence
          rather than a forecast of it.
        </p>

        <h2 id="rights">Corpus & rights</h2>
        <p>
          The corpus is curated in a private repository (<code>jjohare/logseq</code>) by Dr John
          O&rsquo;Hare at DreamLab AI, and published here as open, documented artifacts. The source
          graph is private; the published projection is public and free to build on: page JSON,
          markdown, search index, ontology TTL and graph tiers. See{' '}
          <Link className="ng-textlink" to="/data">
            the Data page
          </Link>{' '}
          for every endpoint, or{' '}
          <Link className="ng-textlink" to="/graph">
            open the explorer
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
