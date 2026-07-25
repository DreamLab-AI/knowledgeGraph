# Page contract: the v3 profile

This document is written to be included in agent context verbatim. It is the
normative on-page format for a grounded domain ontology, precise enough to author
a valid page or write an independent parser from this document alone. It is a
superset of the shipped v2 format in
[../reference/jsonld-schema.md](../reference/jsonld-schema.md); v2 pages remain
valid input, and §13 lists every difference. RFC 2119 keywords (MUST, MUST NOT,
SHOULD, MAY) are normative. Worked examples use one exemplar: offshore wind farm
operations and maintenance, project token `owf`, six domains: `asset-engineering`,
`marine-operations`, `energy-markets`, `environment-consenting`,
`commercial-finance`, `hse-workforce`. Design rationale, in human register, is in
[01-discovery.md](01-discovery.md); the hybrid one-file-two-views design is in
[../methodology/the-hybrid-approach.md](../methodology/the-hybrid-approach.md).

---

## 1. Invariants

These hold for every page. A validator MUST enforce each; a defect MUST fail the
build unless marked info.

- **INV-1** A published page MUST carry exactly one `Page` block and exactly one
  entity block, each a fenced <code>```json-ld</code> block. A page missing either
  MUST be skipped, never half-read.
- **INV-2** Block identity MUST be decided by the `@type` key, never by position or
  order. The entity block's `@type` is `Class` or `Individual`.
- **INV-3** Every consumer MUST parse the JSON. No consumer MAY text-match or `grep`
  the raw block. `"vc:public": true` and `"vc:public":true` are the same fact.
- **INV-4** The filename stem, `vc:slug`, the `Page` `@id` tail, and the entity
  `@id` tail MUST be equal. A mismatch MUST raise `SLUG_MISMATCH`.
- **INV-5** Every entity MUST carry exactly one `domain` from the closed enum (§2).
  A value outside the enum MUST fail; there is no seventh domain.
- **INV-6** Every entity MUST carry a `grounding` object (§7). An entity without it
  MUST fail.
- **INV-7** `grounding.method` MUST be honest: `extracted` or `inferred` require
  `sources` that point at real lake records; content with no lake row MUST be
  `authored`. Writing lake-shaped `sources` on synthetic content is a defect.
- **INV-8** A `Class` MUST carry at least one `subClassOf` and MUST NOT carry
  `instanceOf`. An `Individual` MUST carry at least one `instanceOf` and MUST NOT
  carry `subClassOf`. Neither key MAY be empty.
- **INV-9** Authors MUST NOT emit `quality`, `qualityScore`, or any `vc:signals`
  field. Quality is computed, never asserted (§8). A validator MUST reject an
  author-set quality field.
- **INV-10** Multiple `subClassOf` parents are legal and MUST be reported at **info**
  severity, never as a warning, and MUST be published as data. A true parent MUST
  NOT be deleted to silence a warning (§9).
- **INV-11** `relations` MUST use only the twelve canonical predicates (§12).
  A predicate outside the set is silently dropped; authors MUST NOT invent one.
- **INV-12** `sameAs` MUST be used only for identity (§10). Class-to-external
  alignment SHOULD default to `closeMatch`.
- **INV-13** A grounding claim about the business (`extracted` or `inferred`) MUST
  carry into the extraction-wave human audit sample, and any entity with
  `confidence < 0.70` MUST NOT publish before human review (§7.4).
- **INV-14** Authoritative metadata MUST live in the JSON-LD blocks, not in native
  Logseq or Obsidian properties (§11).
- **INV-15** Authors MUST NOT set, clear, or change `vc:public`. Publication is
  gated by the pipeline and a human.

---

## 2. Namespaces and slug law

v3 replaces the fixed reference namespaces with a parameterised set. Choose one
lowercase-alnum `<project>` token and hold it fixed corpus-wide. For the exemplar,
`<project>` is `owf`.

```
project        ::= lowercase-alnum *( "-" lowercase-alnum )
slug           ::= lowercase-alnum *( "-" lowercase-alnum )
class-iri      ::= "urn:" project ":class/" slug
individual-iri ::= "urn:" project ":individual/" slug
page-iri       ::= "urn:" project ":page/" ( slug | sha256-hex )
link-iri       ::= "urn:" project ":linked/" slug
sha256-hex     ::= 64 * HEXDIG-lower
```

`slug` MUST be computed as `re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')`, the
v2 `slugify`. The slug in the file is authoritative (INV-4).

Class and Individual occupy separate namespaces so a concept and a lake object of
the same name never collide: `urn:owf:class/wind-turbine-generator` is the concept,
`urn:owf:individual/turbine-t-047` is one machine. Surface links stay in `linked/`
so an unresolved link never masquerades as an asserted class. A build maps each URN
prefix to an HTTPS IRI under a project host. Every block MUST cite the one project
`@context` IRI that resolves (`https://<host>/owf/ns/v3.jsonld`).

`domain` is exactly one of the closed set:

```
asset-engineering | marine-operations | energy-markets |
environment-consenting | commercial-finance | hse-workforce
```

`maturity` (Class only) is one of `established | emerging | mature | draft`.

---

## 3. Page anatomy

A v3 page is a Logseq or Obsidian markdown file carrying, in order:

1. Optional page properties (`public:: true`, `alias::`).
2. An H1 title line (`# Weather Window`).
3. Two fenced <code>```json-ld</code> blocks: a `Page` block then an entity block.
4. An optional third annotation block.
5. A human-readable outline the pipeline never reads.

Blocks MUST be extracted with the v2 regex, unchanged:

```
JSONLD_BLOCK_RE = re.compile(r'```json-ld\s*\n(.*?)```', re.DOTALL)
```

**Parse, never text-match** (INV-3). A whitespace-sensitive `grep` in the reference
project silently dropped 653 public pages before this rule was enforced; a compact
single-line block and a pretty-printed one carry identical data.

---

## 4. `Page` block

Identity and publication state. Fields marked NEW are v3 additions; the rest are
inherited from v2 §3.

| Key | Type | Required | Semantics | Example |
|---|---|---|---|---|
| `@context` | string (IRI) | MUST | Project context document URL that resolves. | `"https://owf.example/owf/ns/v3.jsonld"` |
| `@id` | string (URN) | MUST | `urn:<project>:page/<slug \| sha256>`. | `"urn:owf:page/weather-window"` |
| `@type` | string | MUST | Literally `"Page"`. | `"Page"` |
| `vc:slug` | string | MUST | Lowercase hyphenated slug; equals entity slug (INV-4). | `"weather-window"` |
| `title` | string | MUST | Display title; context-mapped to `rdfs:label`. | `"Weather Window"` |
| `vc:public` | boolean | MUST | Publication gate. Parser default when absent is `false`. Author MUST NOT set (INV-15). | `true` |
| `vc:schemaVersion` | integer | MUST | Literally `3` for this profile. | `3` |
| `vc:outboundWikilinks` | array of ref | MAY | Surface links harvested from the body; sole input to backlinks. | `[{ "@id": "urn:owf:linked/curtailment", "vc:label": "Curtailment" }]` |
| `prov:wasAttributedTo` | object `{"@id"}` | MAY | Agent DID for the page record. | `{ "@id": "did:nostr:owf-authoring" }` |
| `prov:generatedAtTime` | object `{"@value","@type"}` | MAY | Typed `xsd:dateTime`. | `{ "@value": "2026-07-25T00:00:00Z", "@type": "xsd:dateTime" }` |

Each `vc:outboundWikilinks` item MUST be an object with `@id` and `vc:label`. Note
the key: `vc:label` in the `Page` block, `label` in the entity block, as in v2. A
bare string is skipped by the parser and produces no backlink; authors MUST NOT emit
bare strings.

---

## 5. Entity block: fields common to Class and Individual

The entity block carries the OWL payload. Its `@type` is `Class` (TBox: a concept,
`subClassOf` other classes) or `Individual` (ABox: a thing in the lake, `instanceOf`
a class). The reference corpus is TBox-only (7,874 classes, 0 individuals); the
Individual type is the v3 addition that gives lake rows their own identity.

| Key | Type | Required | Semantics | Example |
|---|---|---|---|---|
| `@context` | string (IRI) | MUST | Project context IRI (equals the `Page` block). | `"https://owf.example/owf/ns/v3.jsonld"` |
| `@id` | string (URN) | MUST | `urn:<project>:class/<slug>` or `:individual/<slug>`. | `"urn:owf:class/weather-window"` |
| `@type` | string | MUST | `"Class"` or `"Individual"`. | `"Class"` |
| `label` | string | MUST | `rdfs:label`. | `"Weather Window"` |
| `definition` | string | MUST | `rdfs:comment`, prose stating what the entity IS. | `"A period during which met-ocean conditions stay within operating limits."` |
| `domain` | string (enum) | MUST | Exactly one of the six `owf` values (§2). | `"marine-operations"` |
| `maturity` | string (enum) | Class only | `established \| emerging \| mature \| draft`. | `"established"` |
| `subClassOf` | array of ref | Class MUST | `rdfs:subClassOf`; one, or more for a bridge (§9). | `[{ "@id": "urn:owf:class/operational-constraint", "label": "Operational Constraint" }]` |
| `instanceOf` | array of ref | Individual MUST | `rdf:type`; the class(es) the individual belongs to. | `[{ "@id": "urn:owf:class/wind-turbine-generator", "label": "Wind Turbine Generator" }]` |
| `relations` | object of predicate → array of ref | MAY | Twelve canonical predicates (§12). | `{ "dependsOn": [{ "@id": "urn:owf:class/met-ocean-forecast", "label": "Met-Ocean Forecast" }] }` |
| `grounding` | object | MUST | Evidence record (§7). | see §7 |
| `sameAs` | array of ref | MAY | `owl:sameAs` identity, within corpus or to an external individual (§10). | `[{ "@id": "urn:owf:asset-registry/WTG-000047", "label": "Asset registry WTG-000047" }]` |
| `closeMatch` | array of ref | MAY | `skos:closeMatch` to an external concept (§10). | `[{ "@id": "http://www.w3.org/ns/sosa/Observation", "label": "sosa:Observation" }]` |
| `exactMatch` | array of ref | MAY | `skos:exactMatch` to an external concept (§10). | `[{ "@id": "https://saref.etsi.org/core/Device", "label": "saref:Device" }]` |
| `provenance` | object | MAY | Machine-written generation record: `attributedTo`, `generatedAt`, `inferenceRule`. | `{ "attributedTo": "did:nostr:owf-ingest", "generatedAt": "2026-07-25T06:05:00Z", "inferenceRule": "LakeIngest" }` |
| `vc:signals` | object | MAY, machine-written | Derived quality signals (§8). Authors MUST NOT set (INV-9). | see §8 |

Every ref object MUST carry `@id` and `label`:
`{ "@id": "urn:owf:class/curtailment", "label": "Curtailment" }`. There is no
author-writable `quality` key in v3; §8 replaces it.

### 5.1 Class, worked: Weather Window

Weather Window sits under an operational-constraint branch and a
maintenance-opportunity branch at once: the running marine-ops × maintenance ×
markets bridge. It is `authored` because the concept has no single lake row.

```json
{
  "@context": "https://owf.example/owf/ns/v3.jsonld",
  "@id": "urn:owf:class/weather-window",
  "@type": "Class",
  "label": "Weather Window",
  "definition": "A period during which met-ocean conditions (wind speed, significant wave height, visibility) stay within the operating limits required to carry out an offshore task safely, such as turbine access, a heavy lift, or subsea cable work.",
  "domain": "marine-operations",
  "maturity": "established",
  "subClassOf": [
    { "@id": "urn:owf:class/operational-constraint", "label": "Operational Constraint" },
    { "@id": "urn:owf:class/maintenance-opportunity", "label": "Maintenance Opportunity" }
  ],
  "relations": {
    "dependsOn": [ { "@id": "urn:owf:class/met-ocean-forecast", "label": "Met-Ocean Forecast" } ],
    "enables":   [ { "@id": "urn:owf:class/jack-up-campaign",   "label": "Jack-up Campaign" } ],
    "bridgesTo": [ { "@id": "urn:owf:class/curtailment",        "label": "Curtailment" } ]
  },
  "grounding": {
    "method": "authored",
    "confidence": 0.9,
    "sources": [
      { "dataset": "standards-library", "locator": "bvg-om-guide#weather-window", "field": "definition", "retrievedAt": "2026-07-25T00:00:00Z" }
    ]
  },
  "provenance": { "attributedTo": "did:nostr:owf-authoring", "generatedAt": "2026-07-25T00:00:00Z", "inferenceRule": "ManualEnrichment" }
}
```

Both `subClassOf` entries are true and both ship in the OWL; bridging is a design
property, not a lint (§9). No `quality` field appears: §8 signals are machine-written
later, not here.

### 5.2 Individual, worked: Turbine T-047

Turbine T-047 is a thing in the lake. Its identity is grounded in a SCADA row and a
CMMS asset record; it is a member of a class, never a subclass.

```json
{
  "@context": "https://owf.example/owf/ns/v3.jsonld",
  "@id": "urn:owf:individual/turbine-t-047",
  "@type": "Individual",
  "label": "Turbine T-047",
  "definition": "Wind turbine generator unit T-047, a 9.5 MW direct-drive machine at grid position T-047 on the example array, string B3.",
  "domain": "asset-engineering",
  "instanceOf": [
    { "@id": "urn:owf:class/wind-turbine-generator", "label": "Wind Turbine Generator" }
  ],
  "relations": {
    "partOf":         [ { "@id": "urn:owf:individual/array-string-b3", "label": "Array String B3" } ],
    "standardizedBy": [ { "@id": "urn:owf:class/iec-61400-1", "label": "IEC 61400-1" } ]
  },
  "sameAs": [ { "@id": "urn:owf:asset-registry/WTG-000047", "label": "Asset registry WTG-000047" } ],
  "grounding": {
    "method": "extracted",
    "confidence": 0.98,
    "sources": [
      { "dataset": "scada.turbine_10min", "locator": "turbine_id=T-047", "field": "turbine_id",
        "query": "SELECT DISTINCT turbine_id FROM scada.turbine_10min WHERE turbine_id = 'T-047'",
        "retrievedAt": "2026-07-25T06:00:00Z" },
      { "dataset": "cmms.assets", "locator": "asset_pk=WTG-000047", "field": "rated_power_kw", "retrievedAt": "2026-07-25T06:00:00Z" }
    ]
  },
  "provenance": { "attributedTo": "did:nostr:owf-ingest", "generatedAt": "2026-07-25T06:05:00Z", "inferenceRule": "LakeIngest" }
}
```

`sameAs` here is genuine identity: the asset-registry IRI and the ontology
individual denote the one physical machine, so `owl:sameAs` is correct. Contrast
§10, where a class aligns to a public concept it is only similar to.

---

## 6. Class versus Individual

A `Class` (TBox) denotes a concept: `@id` in `class/`, MUST carry `subClassOf`
(`rdfs:subClassOf`, ≥ 1), MUST NOT carry `instanceOf`, MAY carry `maturity`, typical
`grounding.method` `authored`. An `Individual` (ABox) denotes one thing in the lake:
`@id` in `individual/`, MUST carry `instanceOf` (`rdf:type`, ≥ 1), MUST NOT carry
`subClassOf` or `maturity`, typical `grounding.method` `extracted` (INV-8).

Under abox-first working the exemplar's first authored entities are Individuals
(turbines, vessels, work orders), not concepts; classes are proposed from clusters of
individuals and named by a human before promotion (see [01-discovery.md](01-discovery.md)).

---

## 7. Grounding block

`grounding` makes the synthetic-versus-evidenced status of every entity
machine-readable rather than a README caveat, and is required on every entity
(INV-6). The reference corpus's whole limitation was that its synthetic status lived
in prose; this block fixes it.

```
grounding ::= {
  "method":     "extracted" | "inferred" | "authored",   ; required
  "confidence": float 0..1,                                ; required
  "sources":    [ source, * ]                              ; required key, MAY be empty for authored
}
source ::= {
  "dataset":     string,        ; required
  "locator":     string,        ; required
  "field":       string,        ; optional
  "query":       string,        ; optional
  "retrievedAt": xsd:dateTime   ; required
}
```

### 7.1 Source fields

| Field | Required | Semantics | Example |
|---|---|---|---|
| `dataset` | MUST | Registered dataset id in the lake, not free prose. | `"scada.turbine_10min"` |
| `locator` | MUST | Stable, re-resolvable pointer into the dataset that survives re-fetch: a key, a row predicate, an S3 URI plus offset, a file plus line. | `"turbine_id=T-047"` |
| `field` | MAY | The single column or attribute read, when one attribute is the evidence. | `"rated_power_kw"` |
| `query` | MAY | The retrieval expression (SQL, predicate, filter) that returns the row(s), when the evidence is a computed set. | `"Hs < 1.5 m sustained for >= 6 h"` |
| `retrievedAt` | MUST | When the evidence was pulled: evidence age, distinct from `provenance.generatedAt`. | `"2026-07-25T06:00:00Z"` |

Give `field` for a single extracted attribute, `query` for an aggregate or derived
set; a source MAY carry both. A source with neither still resolves through `dataset`
+ `locator`, the minimum an audit needs. For `method: extracted`, each source MUST
carry at least one of `field` or `query`.

### 7.2 `method` values and when each is permitted

`method` states how the entity's assertions relate to the lake. It is the field a
consumer filters on to separate evidence from generation.

- **extracted**: read directly from one or more lake records. `sources` MUST be
  non-empty and point at the records read. Permitted only when every load-bearing
  claim traces to a cited record. Lake individuals are almost always extracted;
  Turbine T-047 (§5.2) is extracted.
- **inferred**: derived by a rule, join, or model over lake records, not read from
  any single cell. `sources` MUST point at the **inputs**; `confidence` reflects the
  rule or model uncertainty, not the input quality. A weather-window occurrence
  computed from a wave series is inferred:

```json
"grounding": {
  "method": "inferred",
  "confidence": 0.72,
  "sources": [
    { "dataset": "metocean.wave_hs_30min", "locator": "buoy=DB1;t0=2026-03-14T00:00Z;t1=2026-03-15T00:00Z",
      "query": "Hs < 1.5 m sustained for >= 6 h", "retrievedAt": "2026-03-13T18:00:00Z" }
  ]
}
```

- **authored**: written under human or agent direction with no direct lake row.
  `sources` MAY be empty or MAY cite a standard rather than the lake; `confidence`
  expresses editorial confidence, not evidential weight. Most TBox concepts are
  authored, including Weather Window as a concept (§5.1). Writing lake-shaped
  `sources` on authored content is forbidden (INV-7).

A consumer that trusts only evidenced facts filters `method in {extracted,
inferred}` and, within those, `confidence >= threshold`.

### 7.3 `confidence` semantics

A float in `[0, 1]` whose reading depends on `method`: for `extracted`, confidence
the record was read and mapped correctly; for `inferred`, the rule or model's
certainty; for `authored`, editorial confidence in the definition. Confidence is not
comparable across methods without also reading `method`; a consumer MUST NOT collapse
the two into one number.

### 7.4 Confidence bands: required behaviour

Review depth is risk-weighted: concept pages are cheap to accept and fix; grounding
claims about the business are expensive to get wrong. Any `extracted` or `inferred`
claim MUST carry into the extraction-wave human audit sample regardless of band,
sized by confidence (high sampled thinly, low exhaustively). Full audit protocol is
in [04-quality.md](04-quality.md).

| Band | `confidence` | Required behaviour |
|---|---|---|
| High | `>= 0.90` | Agent-verified is sufficient for a `Class`. An `extracted`/`inferred` entity still enters the audit sample (INV-13). |
| Medium | `>= 0.70 and < 0.90` | MUST be flagged for human sampling before publication, regardless of `@type`. |
| Low | `< 0.70` | MUST NOT publish before human review (INV-13). A `Class` MAY be held at `maturity: draft`; a business-grounding claim MUST enter the audit queue. |

---

## 8. Derived quality signals (no asserted quality)

v3 removes the author-asserted quality float. The reference authoring spec hardcoded
`quality 0.72` into its template; the number meant nothing and propagated
corpus-wide. Quality in v3 is **computed, never asserted** (INV-9): a quality signal,
if wanted, is derived by the pipeline into a machine-written `vc:signals` object.
Authors MUST NOT set any of these fields; a validator MUST reject an author-set one.

| Signal | Type | Written by | Derived from |
|---|---|---|---|
| `vc:signals.relationDensity` | float | pipeline | `relations` count against the page tier's expectation (stub / standard / hub). |
| `vc:signals.groundingCoverage` | float 0–1 | pipeline | Fraction of load-bearing claims with a resolvable `grounding.source`. |
| `vc:signals.reviewStatus` | enum | pipeline | `unreviewed \| agent-verified \| human-sampled \| human-audited`, set by the review pass (§7.4). |
| `vc:signals.inboundCentrality` | integer | pipeline | Resolvable inbound edges (backlinks) to this entity. |

A consumer ranking pages MUST read `vc:signals`, never an author field. A page's tier
(stub / standard / hub) and its relation-count and body-depth expectations are set by
the authoring contract at write time; see [03-generation.md](03-generation.md).

---

## 9. Bridging and multi-membership

A class that genuinely sits under two branches asserts both parents. The taxonomy is
a directed acyclic graph and multiple inheritance is legal in OWL 2 EL. v3 treats
bridging as first-class from day one, published as data. Two mechanisms of different
strength:

- **Multi-parent `subClassOf`** (≥ 2 entries) asserts subsumption by both branches.
  Use only when a reader looking under either branch would expect the class (Weather
  Window, §5.1).
- **`bridgesTo`** (a relation) asserts a weaker associative bridge without
  subsumption (Weather Window `bridgesTo` Curtailment).

Signature `owf` bridges: Weather Window, Curtailment (markets × finance), Cable
Failure (engineering × insurance × marine-ops), Jack-up Campaign, Warranty Claim.

**Severity is a claim about intent** (INV-10). Multiple parents MUST report at
**info**, never as a warning. In the reference project 958 deliberate bridges were
once reported as warnings, so a clean corpus published itself as defective; the fix
was to reclassify the rule, not delete parents. A true parent MUST NOT be removed to
silence a warning; remove one only when it is wrong or already an ancestor of the
other.

**Publish full membership as data.** A compact binary tier that keeps one category
slot per node silently flattens a bridge to its nearest category: one slot cannot
hold two memberships. The build MUST emit complete multi-parent membership in a JSON
sidecar (the reference build ships `dist/data/graph/bridges.json`) alongside any
compact format. The reference corpus carries 1,401 multi-parent classes, 454
cross-category and 153 cross-domain.

---

## 10. External alignment

Where a public ontology already models a concept, align to it rather than reinvent
it. Choose the predicate by strength of claim:

| Predicate | RDF term | Claim | Use for |
|---|---|---|---|
| `sameAs` | `owl:sameAs` | The two IRIs denote the same thing; everything true of one is true of the other. | Individual-to-individual identity (Turbine T-047 `sameAs` the asset registry IRI, §5.2). Rarely correct between classes. |
| `exactMatch` | `skos:exactMatch` | Interchangeable across applications, without asserting logical identity. | A class that means exactly a public class, where OWL identity entailment is not wanted. |
| `closeMatch` | `skos:closeMatch` | Similar enough to be interchangeable in some applications. | The default when aligning a class to a public concept. |

Authors SHOULD prefer `closeMatch` unless a stronger claim is defensible.
`owl:sameAs` between classes propagates every axiom in both directions and is easy to
get wrong (INV-12).

Real targets a researcher can dereference (stable public namespaces):

| `owf` concept | External target | IRI |
|---|---|---|
| Met-Ocean Observation | `sosa:Observation` (W3C SOSA/SSN) | `http://www.w3.org/ns/sosa/Observation` |
| SCADA Sensor | `sosa:Sensor` | `http://www.w3.org/ns/sosa/Sensor` |
| Wind Turbine Generator | `saref:Device` (ETSI SAREF core) | `https://saref.etsi.org/core/Device` |
| Wind Speed (quantity) | QUDT quantity kind | `http://qudt.org/vocab/quantitykind/` + token |
| Metre per second (unit) | QUDT unit | `http://qudt.org/vocab/unit/` + token |
| Operator (company) | `foaf:Organization` | `http://xmlns.com/foaf/0.1/Organization` |
| Turbine location | `geo:Feature` (OGC GeoSPARQL) | `http://www.opengis.net/ont/geosparql#Feature` |
| Generation record | `prov:Entity` (W3C PROV-O) | `http://www.w3.org/ns/prov#Entity` |

A standard family is better expressed as a `standardizedBy` relation than a concept
match, because it is not one dereferenceable class. **IEC 61400** (`-1` onshore
design, `-3` offshore, `-25` SCADA communications for monitoring and control) and
**IEC CIM** (`IEC 61970` / `IEC 61968`, the power-system Common Information Model,
with no single stable public RDF IRI to `sameAs`) both attach via `standardizedBy`
(§5.2). For QUDT, authors MUST confirm the exact unit or quantity-kind token against
qudt.org before pinning it, since QUDT has carried more than one namespace form.

---

## 11. Portability: Logseq and Obsidian

The two-block pattern works verbatim in both tools because each renders a fenced
<code>```json-ld</code> block identically and leaves its content untouched: the block
round-trips byte for byte, only UI rendering differs. Authoritative metadata MUST live
in the JSON-LD (INV-14), never in native properties, because Logseq's `key:: value`
and Obsidian's YAML are each inert text to the other.

| Concern | Logseq | Obsidian | Portable rule |
|---|---|---|---|
| Page metadata | `key:: value` property lines | YAML frontmatter between `---` fences | Authoritative metadata MUST be in the JSON-LD, not either property system. |
| Aliases | `alias:: Foo` | `aliases:` list in YAML | The real alias set MUST live in the entity block; a native property is a convenience mirror only. |
| Structure | Outliner: every line is a block | Free-form markdown | Emit the body as a bulleted outline; it renders in both. |
| Assets | `![](../assets/file.png)` relative path | `![[file.png]]` wikilink | Use standard markdown `![](relative/path)`; Logseq needs it and Obsidian accepts it. |
| Block refs | `((block-id))` | `[[note#^block-id]]` | Load-bearing structure MUST NOT live in block refs; the pipeline reads neither. |

The pipeline reads only the fenced JSON-LD, so the corpus is portable whichever
editor authored a page.

---

## 12. Relation predicates (closed set)

`relations` MUST use only these twelve predicates (INV-11). A predicate outside the
set is silently dropped by the parser; authors MUST NOT invent one.

```
relatedTo, enables, requires, uses, bridgesTo, supports,
hasPart, contrastsWith, partOf, dependsOn, implements, standardizedBy
```

Keep relations purposeful: a competency question should be able to traverse each. A
ref target need not have its own page yet; the demand-driven pass creates a page only
when two independent pages reference it.

---

## 13. Relationship to the shipped v2

v3 is a superset. Every v2 page is valid input to a v3 parser: every v3 addition is
optional or gated on `@type: "Individual"`, which v2 corpora lack. A v3 parser
reading a v2 page finds no `grounding`, no Individuals, `vc:schemaVersion: 2`, and
processes it as v2. Nothing in v3 invalidates
[../reference/jsonld-schema.md](../reference/jsonld-schema.md), still the reference
for the shipped format.

Differences, complete:

| Aspect | v2 (shipped) | v3 (this profile) |
|---|---|---|
| Namespaces | Fixed `urn:ngm:class:`, `urn:visionflow:page:` | Parameterised `urn:<project>:class/`, `:individual/`, `:page/` |
| `@type` on entity block | `Class` only in practice (0 individuals) | `Class` and `Individual`, both first-class |
| ABox | None | `instanceOf` (`rdf:type`) on Individuals |
| `grounding` | Absent | Required on every entity |
| Alignment | `sameAs` only | `sameAs`, `closeMatch`, `exactMatch` |
| `schemaVersion` | `2` | `3` |
| Quality | Author-asserted `quality`/`qualityScore` float (hardcoded 0.72, two keys disagreed) | No author field; machine-written `vc:signals` (§8) |
| Bridging | Info-severity, `bridges.json` sidecar | Same, unchanged |
| Relation predicates | Twelve canonical | Same twelve, unchanged |
| `domain` / `maturity` | Fixed to reference vocabularies | Project-defined enums |

---

## 14. Minimum to build, and conformance

Minimum for a page to build: a `Page` block with `@id`, `@type`, `vc:slug`,
`vc:public`, `vc:schemaVersion`; and an entity block with `@id`, `@type`, `label`,
`definition`, `domain`, `grounding` (`method`, `confidence`, `sources`), and one
`subClassOf` (Class) or `instanceOf` (Individual). Everything else degrades to
warnings or parser defaults. The §5 examples strip to this core cleanly.

Conformance checklist for one page:

1. `public:: true` and a `# Title` H1 before the first fence; `Page` block complete
   per §4; entity block complete per §5 with `@id` matching the page slug.
2. A `Class` carries `subClassOf`, an `Individual` `instanceOf`, never both (INV-8).
3. `grounding.method` honest (INV-7); confidence band behaviour observed (§7.4).
4. No `quality`, `qualityScore`, or author-set `vc:signals` (INV-9).
5. Alignment uses `closeMatch` by default, `sameAs` only for identity (INV-12); every
   ref carries `@id` and `label`; only the twelve relation predicates (§12).
6. Validate to 0 errors; multi-parent info lines are not defects (INV-10).

For the build that consumes this format see
[../architecture/pipeline.md](../architecture/pipeline.md); for the gates that hold a
corpus honest, including the count contract that catches under-publication, see
[../ci-cd/build-and-gates.md](../ci-cd/build-and-gates.md); to run the reference
build end to end, see [../guides/reproduce.md](../guides/reproduce.md).
