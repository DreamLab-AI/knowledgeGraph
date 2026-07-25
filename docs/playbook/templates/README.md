# Templates: copy-paste artefacts

This document is written to be included in agent context verbatim. It indexes the
working files for building a v3-profile domain ontology, instantiated for the
offshore wind farm O&M exemplar, project token `owf`. Copy them, rename `owf` to
your project token, and edit. They are the contracts and the worked pages that let
40 parallel authors and extractors produce mergeable output without a human
reconciling each file. Format detail is normative in [../02-schema.md](../02-schema.md).

Contracts before content. The authoring spec, extraction spec, slug law, domain
enum, grounding requirement, count gates and namespace decision all exist and run
BEFORE the first content page is written. The reference corpus built its validator
after generation and then spent a large fraction of roughly 37M tokens on repair:
519 invalid domains, a fallback parent-inference rule that exists only because
parents were missing at scale, thousands of dangling refs, alias and false-gap
cleanup. Structure enforced at authoring time costs a prompt line; retrofitted, it
costs repair waves.

## Order of use

### Phase A: contracts, before any page

1. **[taxonomy-seed.json](taxonomy-seed.json)**: the seed contract. `owl:Thing`,
   six subject Domains, and 30 Categories beneath them, each with a `definition`
   and an explicit `boundary` (what it excludes and where the excluded concept
   goes instead). One classification axis (Domain) plus first-class bridging;
   a second axis is added only when a competency question demands it. Leaf
   concepts are not seeded; they arrive demand-driven once two independent pages
   reference them. Read and edit this first.
2. **[authoring-spec.md](authoring-spec.md)**: the Class (TBox) contract. Exact
   file format, slug law, closed domain enum, parent requirement, per-tier density
   targets, grounding requirement, external alignment, and the forbidden moves.
   Quality is computed downstream, never asserted by an author.
3. **[extraction-spec.md](extraction-spec.md)**: the Individual (ABox) contract.
   Row schema, extraction protocol, the cluster-to-class proposal, and the
   risk-weighted human gate. This is where data-lake work starts: the rows ARE the
   individuals.
4. **[competency-questions.md](competency-questions.md)**: the ten questions the
   built graph must answer, each with a SPARQL sketch. The acceptance test for the
   taxonomy, and the sole trigger for any second axis.
5. **[gate-config.md](gate-config.md)**: the CI gate set as a checklist with
   expected-count placeholders, plus the wave budget-declaration schema. Wire it up
   before bulk generation. It gates on expected == actual and carries the grounding,
   extraction-audit and bridge-publication gates the v3 profile adds.

### Phase B: content, ABox first

Extract Individuals from the lake with grounding blocks, cluster them, propose
Classes from the clusters, have a human name and approve each class, then promote.
TBox seeding still happens for the upper structure and domain roots, but it is
informed by the ABox clusters rather than derived from expert priors alone. The
reference corpus was seeded from expert notes, is TBox-only to this day (0
individuals), and its hardest quality problems were placement disputes a grounded
ABox would have settled.

Three worked pages show what conforming output looks like, one of each kind the
profile supports. The worked-example chapter
([../06-worked-example.md](../06-worked-example.md)) narrates the same three
entities, a gearbox class, a turbine individual and a weather-window bridge,
across a month of operations.

- **[example-class.md](example-class.md)**: a TBox Class (`Gearbox`), single
  parent, standard tier, authored, aligned by `standardizedBy` to a real standard.
- **[example-individual.md](example-individual.md)**: an ABox Individual
  (`Turbine A07`), grounded `extracted` from SCADA and CMMS, `sameAs` its asset
  registry.
- **[example-bridge.md](example-bridge.md)**: a cross-domain bridge Class
  (`Weather Window`), two `subClassOf` parents at info severity, `bridgesTo` a
  third concept, authored, `closeMatch` to `time:Interval`.

## How the pieces fit

The seed is the contract; the authoring and extraction specs are how authors and
extractors honour it; the examples are what honouring it looks like; the competency
questions are what the result must do; the gates refuse to publish a corpus that
fails any of the above. Growth is a loop: measure the corpus, generate the pages
two or more existing pages already demand, repair what the gates reject, re-measure,
until the frontier is dry. Every wave declares a token budget and expected yield
first, and stops to re-seed if acceptance falls. The method behind that loop is in
[../../methodology/corpus-generation.md](../../methodology/corpus-generation.md) and
[../../methodology/the-hybrid-approach.md](../../methodology/the-hybrid-approach.md);
the reproduction walkthrough is in [../../guides/reproduce.md](../../guides/reproduce.md).

## Proposal, not shipped fact

- **Grounding block** (`sources`, `method`, `confidence`) on every entity. The
  reference corpus records synthetic status in prose only; the grounding block is
  the v3 fix and has no shipped precedent here.
- **ABox individuals**: the reference corpus has zero. The TBox/ABox split is
  required for data-lake work and is new in v3.
- **Parameterised namespaces** `urn:owf:...` and the
  `https://owf.example/owf/ns/v3.jsonld` context, a documentation host. Publish a
  resolving context at your own URL before shipping.

Everything else (the two-block pattern, multi-parent bridging, the twelve
relations, demand-driven growth, the count and severity gates) is drawn directly
from the shipped reference corpus and its 2026-07-25 operating record.
