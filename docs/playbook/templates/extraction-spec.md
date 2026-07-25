# Extraction spec: Wind O&M corpus, Individual pages (v3 profile)

This document is written to be included in agent context verbatim. It is the
operating contract for an agent extracting **Individuals** (ABox) from the
operator's data lake, project token `owf`. The rows of the lake ARE the
individuals: turbines, work orders, vessels, contracts, met-ocean observations,
incidents. This spec covers extraction, the cluster-to-class proposal, and the
human gate before any proposed class is promoted. It reuses the shared grammar in
[authoring-spec.md](authoring-spec.md) (slug law §2, namespaces §3, grounding
block §6, relations §7, alignment §9, forbidden moves §11); read that first for
the closed enums. Where the two specs would disagree, this one governs Individual
pages and that one governs Class pages.

ABox first: the reference corpus was seeded from expert notes, is TBox-only to
this day (0 individuals), and its hardest quality problems were placement disputes
a grounded ABox would have settled. Extract individuals, cluster them, propose
classes from the clusters, let a human name and approve the class, then promote.

## 1. What you extract

INV-1. One page per lake object, `@type: "Individual"`, written to
`pages/<Title Case Name>.md`. An Individual asserts `instanceOf` (its class via
`rdf:type`) and NEVER `subClassOf`.

INV-2. Every Individual MUST carry a `grounding` block with `method: extracted`
or `method: inferred`. An Individual with `method: authored` is a defect: if it
has no lake evidence it is not an individual, it is a concept, and belongs under
[authoring-spec.md](authoring-spec.md).

## 2. Input row schema

An extraction agent is handed rows in this shape. Each row is one candidate
Individual (or, for a join, one candidate inferred Individual).

```
row ::= {
  "dataset":     string,        ; registered lake dataset id, e.g. "scada.turbine_10min"
  "locator":     string,        ; stable re-resolvable pointer, e.g. "wtg_id=A07"
  "primaryLabel": string,       ; human label seed, e.g. "Turbine A07"
  "domain":      domain-enum,    ; one of the six (authoring-spec §4)
  "attributes":  { column: value, * },  ; the columns read for this object
  "retrievedAt": xsd:dateTime   ; when the row was pulled
}
```

INV-3. `dataset` MUST be a registered lake dataset id, not free prose.
INV-4. `locator` MUST survive re-fetch: a primary key, a row predicate, an S3 URI
plus offset, or a file path plus line. A later audit re-reads the exact evidence
through it.

## 3. Extraction protocol (per row)

1. Assign a slug from `primaryLabel` by the slug law (authoring-spec §2). The
   Individual `@id` is `urn:owf:individual/<slug>`; the Page `@id` is
   `urn:owf:page/<slug>`.
2. Write `label`, and a `definition` that states what the object IS in one or two
   sentences, drawn only from the row attributes. Do not invent attributes not in
   the row.
3. Set `domain` from the row.
4. Set `instanceOf` to the class the object is a member of:
   - If a Class already exists for the object's type, name it:
     `{ "@id": "urn:owf:class/<type-slug>", "label": "<Type>" }`.
   - If no Class exists yet, set `instanceOf` to a **proposed** class ref
     (§5) and record the object in the cluster handoff (§4). The proposed class
     `@id` still uses `urn:owf:class/<type-slug>`; it is not promoted until the
     human gate passes.
5. Write `grounding`:
   - Direct read of one or more rows: `method: extracted`, `sources` non-empty,
     each source carrying `dataset`, `locator`, one of `query`/`field`, and
     `retrievedAt`. Confidence is typically >= 0.9.
   - Object derived by a join or rule over rows (a computed weather-window
     occurrence, a curtailment event reconstructed from a price series and a
     set-point): `method: inferred`, `sources` naming the inputs, confidence
     reflecting the rule or model, not the input quality.
6. Add `relations` from the twelve-predicate set (authoring-spec §7) only where a
   row attribute or a foreign key supports the link (`partOf`, `hasPart`,
   `standardizedBy`). Do not assert a relation the row does not evidence.
7. Add `sameAs` only for genuine cross-system identity: the same physical object
   under two registries (a turbine's SCADA id and its asset-registry id denote
   one machine). This is the one place `owl:sameAs` between named individuals is
   correct.

INV-5. Do NOT emit `quality` or `qualityScore` on an Individual (authoring-spec
§10). Grounding coverage and confidence are the evidence signals; quality, if
wanted, is derived downstream.

## 4. Clustering handoff

Extracted individuals accumulate; a class is proposed from a cluster of them, not
from an expert prior. Emit one handoff record per cluster.

```
cluster ::= {
  "proposedClassSlug": slug,           ; e.g. "geared-turbine"
  "proposedLabel":     string,         ; e.g. "Geared Turbine"
  "domain":            domain-enum,
  "members":           [ individual-iri, * ],   ; >= 3 individuals
  "sharedAttributes":  { column: value-or-range, * },  ; what makes them a cluster
  "candidateParents":  [ class-iri, * ],  ; seed categories the class would sit under
  "distinguishingFrom": [ { classSlug, difference }, * ]  ; nearest siblings and the boundary
}
```

INV-6. A cluster MUST hold >= 3 member individuals before a class is proposed. A
class proposed from one or two rows is premature; carry those individuals against
an existing parent class until the cluster forms.
INV-7. `candidateParents` MUST resolve to nodes in
[taxonomy-seed.json](taxonomy-seed.json). If none fit, the proposal includes the
missing category as a separate note; a new category is a human decision, not an
agent one.

## 5. Proposal format (cluster to class)

A proposed class is authored to the full Class contract
([authoring-spec.md](authoring-spec.md)) EXCEPT that it is marked pending and is
not published until the human gate passes.

```
classProposal ::= {
  "@id":         "urn:owf:class/<slug>",
  "label":       string,
  "definition":  string,            ; what the class IS, informed by sharedAttributes
  "domain":      domain-enum,
  "subClassOf":  [ ref, * ],        ; from candidateParents; 2 or 3 for a bridge
  "grounding":   { "method": "inferred", "confidence": float, "sources": [ member evidence, * ] },
  "supportingIndividuals": [ individual-iri, * ],
  "status":      "pending-human-approval"
}
```

INV-8. A proposed class's `grounding.method` is `inferred`: the class is a
generalisation over evidenced individuals, and `sources` cites the member rows
that motivated it. On promotion the human MAY change the method to `authored` if
the class is better understood as editorial rather than data-driven.

## 6. Human gate (risk-weighted)

Concept pages are cheap to accept and cheap to fix. Grounding claims about the
business are expensive to get wrong. Review depth is therefore risk-weighted, not
uniform.

INV-9. Every extraction wave carries a human audit of a random sample of its
Individuals before the wave is accepted. Sample size is set by the wave's median
extraction confidence:

| Median confidence | Sampled fraction | Floor |
|---|---|---|
| >= 0.95 | 5% | 20 individuals |
| 0.85 to 0.95 | 10% | 30 individuals |
| < 0.85 | 20% | 50 individuals |

INV-10. For each sampled Individual the reviewer confirms, against the real lake:
the `locator` re-resolves to the stated evidence; the `field`/`query` returns the
asserted value; `method` is honest (extracted only when a row was read); and
`instanceOf` names a defensible class. A sampled Individual that fails any check
fails the sample.

INV-11. Acceptance threshold: the wave is accepted only if the sampled failure
rate is <= 5%. Above 5%, the wave is rejected, the extraction re-calibrated on a
fresh sample, and re-run. Do not bulk-accept an extraction that its sample refutes.

INV-12. Every proposed class (§5) is named and approved by a human before
promotion. The human sets the final `label`, confirms `subClassOf`, and decides
whether the class is `inferred` or `authored`. Promotion writes the class page
under [authoring-spec.md](authoring-spec.md) and clears `status`.

INV-13. Verify agent self-reports independently. On the reference operating record
agent self-reports were wrong three times in one day. Calibrate any bulk
extraction on a sample before running it over the lake; adversarial review (a pass
that tries to break each grounded claim) finds what friendly review approves.

## 7. Failure modes and required behaviour

| Condition | Required agent behaviour |
|---|---|
| Row has no re-resolvable `locator` | Do not extract. Report the row as unlocatable; a source without a stable pointer cannot be audited. |
| `method: extracted` but `sources` empty | Reject the page. Extracted with no source is the defect the grounding gate blocks. |
| Object type has no existing Class and cluster has < 3 members | Attach the Individual to the nearest existing parent Class via `instanceOf`; do not propose a class yet. |
| Candidate parent is not in the seed | Emit the proposal with a separate missing-category note; do not invent a seed node or a seventh domain. |
| Two rows in different datasets denote the same physical object | Emit one Individual, link the second source in `grounding.sources`, and assert `sameAs` only if the two carry distinct registry IRIs. Do not emit two individuals. |
| Extraction confidence below the wave floor | Lower the wave's median band and enlarge the sample (§6); do not silently accept. |
| Sampled failure rate above 5% | Reject the wave, re-calibrate, re-run (INV-11). Do not grind a failing wave. |

## 8. Definition of done, per Individual

- Both JSON blocks parse; `vc:slug`, `@id` tail, filename agree.
- `@type` is `"Individual"`; `instanceOf` present; `subClassOf` absent.
- `grounding.method` is `extracted` or `inferred`; `sources` satisfies the method;
  `confidence` in `[0, 1]`.
- No `quality`/`qualityScore` field present.
- `locator` re-resolves against the lake.
- Validates at 0 errors: `python -m pipeline.validate pages/`.
