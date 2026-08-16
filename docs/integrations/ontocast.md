# OntoCast integration: extraction upstream, governed authoring downstream

This repository integrates with [OntoCast](https://github.com/growgraph/ontocast)
through an RDF-to-Logseq staging boundary. It does not vendor, fork, or reproduce
OntoCast. The decision was made against OntoCast `e44005d1` (0.6.1, inspected
2026-08-16).

## Decision

OntoCast and this framework solve adjacent problems.

| Capability | OntoCast | This repository | Decision |
|---|---|---|---|
| Document conversion and semantic chunking | Native | Out of scope | Use OntoCast upstream. |
| Parallel ontology and fact extraction | Native render/critic loops | Agent-wave contracts, no extraction runtime | Use OntoCast as one possible WAVE E producer. |
| Incremental graph refinement | `GraphUpdate` insert/delete patches | File-level reviewed commits | Keep each model: patches during extraction, files after acceptance. |
| Cross-chunk identity | Embedding plus symbolic alignment | Slug/IRI uniqueness gates | Accept proposals, then re-mint project-local identity and report collisions. |
| RDF provenance | RDF 1.2 reification and separate provenance artifacts | Entity-level v3 `grounding` | Preserve RDF source statements as import evidence; promote only reviewed grounding. |
| Validation | Invariants, optional SHACL, machine repair | Corpus contract, deterministic build and count gates | Run both at their respective boundaries. |
| Storage and serving | Pyoxigraph/Fuseki, REST and embedded modes | Git, Logseq pages and static artefacts | Do not import a triple-store service into this build. |
| Human-readable authoring | RDF is the primary product | Markdown plus machine-readable header | Convert to private candidates; a reviewer owns promotion. |

The useful augmentation is therefore a **producer adapter**, not a framework
merger. Pulling LangGraph, an LLM provider, vector stores, document processors,
and a service runtime into the deterministic publication pipeline would expand
its dependency and security surface while duplicating OntoCast's maintained
product. Publishing OntoCast RDF directly would instead bypass the namespace,
parent, grounding, review, and count contracts that make this corpus governable.

## Product boundary

`pipeline.ontocast_import` accepts standards-compliant Turtle and emits one
candidate Markdown file per explicit `owl:Class` or `owl:NamedIndividual`.
Subjects typed directly with an extracted catalog class are also recognised as
Individuals, matching OntoCast fact output.

The boundary provides these guarantees:

1. Preview is the default. Files are written only with `--write`.
2. Every page is `public:: false`, schema v3 and `pending-review`.
3. Source IRIs are retained in `sameAs`; local IRIs are minted under the chosen
   project token.
4. `rdfs:subClassOf`, `rdf:type`, labels and definitions are mapped directly.
5. The twelve-predicate closed relation vocabulary is mapped by RDF predicate
   local name. It is not widened implicitly by model output.
6. Every original predicate/object pair is copied into a `vc:ImportEvidence`
   block. Unsupported data properties remain machine-readable for review instead
   of disappearing.
7. Slug collisions are reported and skipped. Existing files are never
   overwritten. A class with no extracted parent receives the explicit fallback
   parent supplied by the operator.
8. Grounding starts at confidence `0.5` and method `inferred`. The importer cannot
   know that a generated claim is correct; only the WAVE E audit may raise
   confidence or promote it.

`vc:ImportEvidence` is a staging record. The publisher ignores that block by
design. During review, supported statements become `relations`, `instanceOf`,
`subClassOf`, grounding fields, or prose; domain-specific data properties require
an explicit schema decision rather than silently extending the ontology.

## Run the seam

First produce Turtle with OntoCast. For an existing ontology, supply this
repository's built `dist/data/ontology.ttl` as the selected seed and use facts
mode when schema growth is not intended. Keep OntoCast's provenance in the
response so it remains available during review.

Preview an import:

```bash
python -m pipeline.ontocast_import out/facts.ttl \
  --output-dir review/ontocast-wave-e07 \
  --project-token owf \
  --domain asset-engineering \
  --source-document 'ontocast:run/e07/document/maintenance-report-17' \
  --default-parent-iri urn:owf:class/asset \
  --default-parent-label Asset
```

Inspect the JSON report, especially `skipped`, then repeat with `--write`.
Writing to `ontology/pages/` is intentionally discouraged: use an isolated review
directory, audit the candidates, then promote accepted pages with normal Git
history.

After review:

```bash
python -m pipeline.validate review/ontocast-wave-e07
python -m pipeline.build review/ontocast-wave-e07 /tmp/ontocast-wave-e07-build
```

The extraction wave still follows the budget declaration, confidence-sized
sample and human promotion gate in
[`templates/extraction-spec.md`](../playbook/templates/extraction-spec.md). An
OntoCast success response is producer evidence, not corpus acceptance evidence.

## Deliberately not adopted

- No OntoCast dependency in CI or the publication package.
- No direct writes from OntoCast or the adapter into the public corpus.
- No automatic promotion of ontology patches, SHACL repairs or entity merges.
- No conversion of arbitrary RDF predicates into new schema terms.
- No claim that RDF 1.2 quoted-triple provenance and v3 entity grounding are the
  same model. The former traces statements inside an extraction run; the latter
  is the publication contract for an entity claim.

These exclusions keep the integration replaceable. Any extractor that emits RDF
can use the same boundary, while OntoCast remains valuable for the difficult
upstream work it already owns.
