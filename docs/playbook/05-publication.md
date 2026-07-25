# 05: Publication as contract

Normative rules for turning a corpus into published artefacts and for the
boundary between what stays private and what ships. This document is written to
be included in agent context verbatim. An agent that builds, gates, or deploys a
v3-profile corpus MUST satisfy every invariant (INV-n) and follow every numbered
protocol here; where this document and a convenience script disagree, this
document governs. Keywords MUST, MUST NOT, SHOULD, MAY are RFC 2119.

Publication starts in week one, small and gated, and grows one artefact at a
time behind a fixed invariant set. The reference corpus published late and large
and paid for it: a double-writer left 7.9k orphan files, a stale checkout
republished deleted pages, a single-slot binary flattened 1,401 multi-parent
classes. Every invariant below has an incident behind it. Deep reference detail:
[../ci-cd/build-and-gates.md](../ci-cd/build-and-gates.md),
[../architecture/pipeline.md](../architecture/pipeline.md),
[../guides/reproduce.md](../guides/reproduce.md). Sibling documents:
[04-quality.md](04-quality.md), [06-worked-example.md](06-worked-example.md).

---

## 1. Terms

One term per concept, defined once, used identically below.

- **ARTEFACT**: one named build output with a fixed schema. The publication
  artefact set is closed to these names:
  `ontology.ttl`, `ontology.json`, `pages/*.json` (Page API), `backlinks.json`,
  `search-index.json`, `full.bin` (NGG1 tier), `bridges.json`, `stats.json`,
  `overview.json`, `markdown-mirror/`.
- **WRITER**: the single process that produces one ARTEFACT (INV-1).
- **PUBLIC / PRIVATE**: an entity's publication state, decided by the predicate
  `vc:public` on its Page block (§4). PRIVATE is the default (fail-closed).
- **SIDECAR**: a JSON ARTEFACT carrying membership a compact ARTEFACT cannot hold
  (INV-4). `bridges.json` is the worked case.
- **COUNT GATE**: a CI check asserting `expected == actual` where both sides are
  read from ARTEFACTs, never from stdout (INV-2).
- **PUBLIC CI**: the deploy-stripped workflow anyone may reproduce (§5).
- **PRIVATE CI**: the publishing workflow that holds deploy secrets (§5).

---

## 2. Week-one publication protocol

First publication MUST occur in week one, over a seed corpus of any size,
including a single page. The week-one release is deliberately minimal: it exists
to stand up the invariant set and the gate chain before the corpus is large
enough to hide a regression.

Week-one release MUST contain exactly:

1. `ontology.ttl` (OWL 2 Turtle), the canonical identity ARTEFACT.
2. `stats.json`, carrying the counts the COUNT GATE asserts.
3. The validator report from [04-quality.md](04-quality.md) §2, at 0 errors.

Week-one release MUST NOT yet contain: Page API, search index, `full.bin`,
media. Those are added in later weeks (§3), each behind the same invariants.

Protocol P-WEEK-1, in order, every step required:

1. Build clean (INV-3): delete the output directory, then build into it.
2. Emit `ontology.ttl` and `stats.json` from one WRITER each (INV-1).
3. Run the secret scan (§4.3). Exit non-zero on any hit; block.
4. Run the COUNT GATE (INV-2): `stats.json.classes == EXPECTED_CLASSES`.
5. Run the validator; block on any `error`.
6. Deploy through PRIVATE CI (§5) to a gated target, behind those four gates.

If any of steps 3 to 5 fails, the agent MUST NOT deploy and MUST report the
failing gate and its actual-versus-expected numbers. A green build that shipped
a subset is the failure these gates catch; absence of an error is not evidence of
completeness.

---

## 3. Growth ladder

After week one, add ARTEFACTs in this order, one per release, each gated by the
full invariant set before the next is added:

1. Page API (`pages/*.json`) plus `backlinks.json`, plus the markdown mirror.
2. `search-index.json`.
3. Graph tiers: `full.bin`, and its mandatory SIDECARs `bridges.json`,
   `stats.json`, `overview.json` (INV-4).
4. Media (§6), only after the size budget and skip-if-larger gate are wired.

An ARTEFACT MUST NOT ship before the invariant that guards it is in CI. Adding
`full.bin` without `bridges.json` violates INV-4 and MUST be rejected at review.

---

## 4. Private source, public release

Publication partitions every entity into PUBLIC or PRIVATE. On a data-lake corpus
the PRIVATE set includes every grounding locator, every confidential individual,
and the deploy machinery. The boundary is enforced by three mechanisms, never by
trust: a parser-driven filter (§4.1), a per-source grounding policy (§4.2), a
secret scan and COUNT GATE (§4.3).

### 4.1 Publication predicate (INV-5, INV-6)

**INV-5, parse never text-match.** Publication state MUST be read by parsing the
fenced `json-ld` Page block, never by pattern-matching page text. A
whitespace-sensitive `grep -l '"vc:public": true'` once dropped 653 public pages
because compact JSON-LD writes `"vc:public":true` with no space; on today's
7,874-page corpus that same literal-versus-tolerant divergence measures 890
files. If a format permits variance, every consumer MUST parse it.

**INV-6, fail-closed predicate.** `vc:public` is the sole publication predicate.
It is read once per entity and evaluated fail-closed:

```
public(entity) := (parse(PageBlock).vc:public == true)
                  otherwise false   # missing, null, non-true => PRIVATE
```

Each emitter (Turtle, Graph JSON, Page API, search, tiers) MUST re-derive
publication independently from the parsed model. No emitter MAY inherit a
publication list from an upstream stage; a stale inherited list is how a filter
under-publishes without error. One documented exception: backlink derivation MAY
run over the full page set so a PRIVATE page still contributes a backlink to a
PUBLIC one. Any such exception MUST be stated in the emitter, not left implicit.

### 4.2 Grounding release policy

A grounding block's `locator` points into a private lake
(`tag://WTG-A07/GearboxOilTemp`, `wo://2026/WT-A07/48213`, a contract document
id). Before an entity carrying grounding ships, exactly one release policy MUST
be applied to each `sources[]` entry. The policy set is closed:

- `strip-locators`: publish `dataset`, `method`, `confidence`, `retrievedAt`;
  drop `locator` and `field`/`query`. The public claim becomes "extracted from
  scada-historian at 0.82 confidence" without naming the tag.
- `abstract-locator`: replace the instance locator with a source class, so
  `tag://WTG-A07/GearboxOilTemp` becomes `scada-historian:gearbox-temperature`.
- `withhold-entity`: the entity is PRIVATE (INV-6 default) and never leaves. Use
  for an individual whose existence is itself confidential (a specific
  `WarrantyClaim`).

Policy application MUST be performed by the §4.1 parser-driven filter, never by
hand, and the surviving count MUST be asserted by the COUNT GATE.

### 4.3 Boundary gates

**Secret scan.** Pages ship verbatim, so a scan runs over the pages directory
before any build. Every pattern MUST be anchored to a token-shaped suffix: a bare
`sk-` substring matches 1,107 innocent files (`risk-`, `task-`, `desk-`), while
`sk-[A-Za-z0-9]{20,}` matches 0. Exit-code handling is load-bearing under
`bash -e`: capture as `hits=$(grep …) || rc=$?`; grep exit 1 (no match) is the
pass, exit 2 or above is a broken scan and MUST fail, never be read as clean.

**COUNT GATE at the boundary.** Under-publication raises no error, so the filter
is asserted by count. `EXPECTED_CLASSES` (reference: `'7874'`) is checked against
two build ARTEFACTs, not stdout, and moved deliberately in the same commit as any
corpus change. On a data-lake corpus a matching `EXPECTED_INDIVIDUALS` guards the
ABox against a filter that dropped every confidential individual and then, being
smaller, looked like a smaller ABox.

**Markdown-mirror COUNT GATE.** The mirror's file count is compared against a
count recomputed through the parser over the population the mirror writes. Compute
the expectation over the right population: on the reference corpus that is PUBLIC
pages with a non-empty body, 7,823 not 7,874, because 51 PUBLIC pages have empty
bodies. Computed over the wrong population, the gate fails on a corpus property,
not a regression.

---

## 5. Two pipelines

Separate the build anyone can reproduce from the publish only the operator can
run. Both run the same seven-stage pipeline; they differ in permissions and in
the deploy tail.

**PUBLIC CI** MUST:

- declare `permissions: contents: read` at workflow and job level both, so it
  cannot write to the repository even if a step tried;
- run the four gates: secret scan, pipeline unit tests, COUNT GATE, validation;
- build into a throwaway directory and upload the result as a run ARTEFACT with
  bounded retention;
- read no secret and deploy nothing.

PUBLIC CI MUST stay runnable by anyone who forks the repository, with no
credentials. That is the property that keeps it a shareable contract.

**PRIVATE CI** MAY additionally:

- build the SPA and WASM explorer and run a browser smoke test (INV: adversarial
  end-to-end, [04-quality.md](04-quality.md) §1);
- run the markdown-mirror COUNT GATE;
- deploy: push to a publish branch on a private target, authenticated with a
  repository secret, with a `CNAME` written into the output.

Two properties keep the split clean:

1. The IRI namespace (`urn:<project>:class/<slug>`; reference
   `https://narrativegoldmine.com/class/<slug>`) is **identity, not deployment**.
   It is baked into every triple and every binary IRI; removing the deploy does
   not remove the namespace, and stripping the namespace would invalidate every
   ARTEFACT and break the golden tests.
2. The deploy tail references secrets a fork cannot have, so keeping it out of
   PUBLIC CI is what lets PUBLIC CI stay reproducible.

Full step difference: [../ci-cd/build-and-gates.md](../ci-cd/build-and-gates.md).

---

## 6. Publication invariants

Each invariant holds on every build from week one onward. Each names its
incident. INV-5 (parse never text-match) and INV-6 (fail-closed predicate) are
defined at the boundary they guard, §4.1.

**INV-1, single writer per artefact.** Exactly one WRITER produces each ARTEFACT.
Two writers into one markdown mirror produced 7.9k orphan files that no COUNT GATE
could assert against, because neither writer owned the total (commit `326285fb`,
"single writer for the markdown mirror"). A COUNT GATE is meaningful only over an
ARTEFACT one process is responsible for.

**INV-2, count gate asserts expected == actual.** Every ARTEFACT whose size is a
corpus property MUST be gated on `expected == actual`, both read from ARTEFACTs.
The reference class-count gate caught a double-writer and cumulative stale deploys
it was never designed for, because each moved actual off expected.

**INV-3, build clean.** The build MUST start from an empty output directory, never
over a prior checkout. An incremental deploy over a stale checked-in output tree
republished deleted pages indefinitely (commit `a4ad77bb`, "build from a clean
www/, not on top of the checked-in one"). Committed ARTEFACTs are products, never
build state.

**INV-4, lossless sidecar.** Whatever a compact or binary ARTEFACT structurally
cannot hold MUST ship in a JSON SIDECAR alongside it. The NGG1 node record holds a
single `u16` category; a class belonging to three categories by design is
flattened to its nearest category at pack time, and the other two memberships
vanish from the binary. The reference fix is `bridges.json`: 542 entries (classes
reaching more than one category or domain), keyed by IRI, with category and domain
indices matching the arrays the binary indexes. Aggregates live in `stats.json`
(`multiParent: 1401, crossCategory: 454, crossDomain: 153`); the 90 weighted
category-to-category lattice edges live in `overview.json`. A consumer needing full
membership joins binary and SIDECAR. One slot cannot hold two memberships; publish
full membership in JSON always, and document which ARTEFACT is authoritative for
membership. Worked case: `Weather Window` bridges `marine-operations`,
`asset-engineering` and `energy-markets`; the binary shows one, the SIDECAR carries
all three and the weighted edges between them.

**INV-7, build output not tracked in source.** Generated ARTEFACTs MUST NOT be
tracked in the source repository as build state. The reference repository commits
its published dataset (`ontology.ttl`, tiers, SIDECARs) as products but gitignores
the 15,701-file API tier, which rebuilds in seconds; tracking it would bloat every
clone and diff for no gain. A tracked output tree is also the stale checkout INV-3
forbids.

---

## 7. Size budgets

Static hosting imposes limits a local build never shows. Budget before the deploy
fails, not after.

**Site-size cap.** GitHub Pages enforces a hard 1 GB published-site limit. A
graph ontology carrying media (incident-report photos, survey imagery, met-ocean
plots, SCADA screenshots) reaches it faster than a text-only corpus. The size
budget MUST be a CI check, not a post-mortem.

**Media calibration protocol** (calibrate-on-samples-before-bulk). Media MUST NOT
be re-encoded at a guessed quality. Protocol P-MEDIA:

1. Draw a representative sample from the media library.
2. Encode the sample across a range of CRF or quantisation settings.
3. Inspect the size-versus-quality curve on your own material.
4. Fix the setting from the curve, then encode the library. The reference corpus
   settled video at CRF 26 (commit `7c8151ad`, "re-encode videos at CRF 26") only
   after sampling.

**Skip-if-larger gate.** Each re-encoded file MUST be kept only when it is smaller
than the original. A codec change can inflate an already-efficient asset; a blind
replace then makes the site bigger, not smaller. Retain the re-encode iff
`size(new) < size(original)`, else keep the original.

---

## 8. Dataset dating and versioning

A published dataset MUST say when it was made and against what schema, so a
consumer can tell two builds apart. Every graph ARTEFACT MUST be stamped from data,
never from hardcoded copy:

- `pipelineVersion` (reference `ng-1.0.0`) names the code that built the ARTEFACT.
- `datasetDate` and `generatedAt` carry `date.today()`, the only wall-clock input
  to the build. Within one day a re-run reproduces the binary tiers and JSON
  byte-for-byte; across a day boundary only these date fields move.
- `schemaVersion` on each Page block (reference: 2) lets the parser accept more
  than one schema generation and normalise them into one model.

**Reproducibility claim, stated honestly.** `ontology.ttl` is NOT byte-stable:
`rdflib` mints fresh blank-node identifiers for the ~19,751 existential
restrictions on every run, so the Turtle is isomorphic and identical in length but
reshuffled in order. Turtle builds MUST be compared by parsed triple set, never by
hash. The binary tiers and JSON ARTEFACTs are byte-reproducible and MAY be hashed.
An agent MUST NOT claim byte-reproducibility for an ARTEFACT that does not have it.

---

## 9. Licensing, split by ancestry

Publication ends at a licence. A corpus like this holds things of different
ancestry, and one licence rarely fits. The split MUST be by ancestry, with an
explicit scope table as the authoritative statement.
[../../LICENSING.md](../../LICENSING.md) is the worked example; its scope table:

| Ancestry | Reference path | Licence | Basis |
|----------|----------------|---------|-------|
| Original software | `pipeline/`, `static/`, `docs/` prose, CI glue | `AGPL-3.0-or-later` | build-and-publish machinery whose natural deployment is a hosted service; the network clause is the point |
| Machine-generated data | `ontology/`, `dist/` | `ODbL-1.0` | a database: share-alike over selection and arrangement plus the sui generis database right, with an express contents grant |
| Vendored derivative | `explorer/` | `MIT` | passing the upstream WebVOWL grant through unchanged; relicensing would be hollow when an MIT copy sits one repository away |

Three invariants generalise past the specific licences:

1. GitHub's licence detector reads the root `LICENSE` file and labels the whole
   repository by it. That label is wrong for any path under a different grant, and
   only an explicit scope table corrects it. Ship the table.
2. A data licence rests on a jurisdiction-specific basis. Under UK law a
   computer-generated work has an author (the party who made the arrangements:
   schema, generation machinery, taxonomy, gates); that basis is weaker or absent
   elsewhere. State which layer of the grant does the work in which jurisdiction,
   rather than asserting one grant everywhere.
3. If the corpus is synthetic, the licence MUST say so as plainly as the data
   does. The reference states the corpus is mostly AI-generated synthetic content
   produced under human direction, by design; its provenance attests traceable
   generation, not human authorship.

Added obligation for a data-lake corpus: grounding evidence derived from
third-party data (a turbine OEM's SCADA schema, a met-ocean provider's series) MAY
carry its own contractual terms that the database licence cannot override. Those
terms MUST be checked before the derived grounding ships, and an entity whose
source terms forbid redistribution MUST be handled under `withhold-entity` (§4.2).

---

## 10. Failure modes and required behaviour

Enumerated failure modes; on each, the agent behaviour is required, not advisory.

| # | Failure mode | Required behaviour |
|---|--------------|--------------------|
| F-1 | A gate (secret scan, COUNT GATE, validator) fails | Do not deploy. Report the failing gate with actual-versus-expected numbers. |
| F-2 | `expected != actual` on any COUNT GATE | Treat as a regression until proven a corpus change; do not move the constant to make the gate pass. |
| F-3 | A compact ARTEFACT would drop membership with no SIDECAR | Reject at review; the ARTEFACT MUST NOT ship without its SIDECAR (INV-4). |
| F-4 | Two writers target one ARTEFACT | Consolidate to one WRITER before adding a COUNT GATE over it (INV-1). |
| F-5 | Build runs over a non-empty output directory | Fail; rebuild clean from empty (INV-3). |
| F-6 | Secret scan exits 2 or above | Treat as broken scan and fail; never read as clean. |
| F-7 | Publication read by text-match rather than parse | Replace with parser-driven read (INV-5); re-run the boundary COUNT GATE. |
| F-8 | A grounding `locator` would ship unredacted | Apply a §4.2 policy before ship; an unresolved leak is `withhold-entity`. |
| F-9 | Turtle compared by hash | Compare by parsed triple set; a hash mismatch here is expected, not a defect (§8). |
| F-10 | Re-encoded media larger than original | Keep the original (skip-if-larger, §7). |

---

## Cross-references

- Reference gates, incidents, commands: [../ci-cd/build-and-gates.md](../ci-cd/build-and-gates.md)
- Pipeline stages and the NGG1 format that drops memberships: [../architecture/pipeline.md](../architecture/pipeline.md)
- Clone-to-render reproduction: [../guides/reproduce.md](../guides/reproduce.md)
- Validation codes and the page format: [../reference/jsonld-schema.md](../reference/jsonld-schema.md)
- Licensing scope table: [../../LICENSING.md](../../LICENSING.md)
- Playbook: [01-discovery.md](01-discovery.md) · [02-schema.md](02-schema.md) · [03-generation.md](03-generation.md) · [04-quality.md](04-quality.md) · [06-worked-example.md](06-worked-example.md)
