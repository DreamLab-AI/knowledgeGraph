# WebVOWL v2 JSON Data Analysis

**File**: `/tmp/test-webvowl-v2.json`
**Size**: 2.5 MB, 83,359 lines
**Generated from**: Narrative Goldmine Ontology v2.0

## Top-Level Structure

```
header:          dict  (languages, title, description, version)
namespace:       list  [37 entries]
class:           list  [3,182 entries]
classAttribute:  list  [3,182 entries]  -- 1:1 with class
property:        list  [1,392 entries]
propertyAttribute: list [1,392 entries] -- 1:1 with property
```

The JSON uses the standard WebVOWL v2 dual-array pattern: `class`/`property` carry only `{id, type}`, while `classAttribute`/`propertyAttribute` carry the full metadata keyed by the same `id`.

## class Array

Every entry is minimal:

```json
{ "id": "aiadoption", "type": "owl:Class" }
```

**All class keys**: `id`, `type` -- nothing else.

## classAttribute Array

All 3,182 entries share exactly these keys:

| Key | Type | Description |
|-----|------|-------------|
| `id` | string | Matches `class[].id` |
| `iri` | string | Full IRI, e.g. `http://narrativegoldmine.com/artificial-intelligence#AIAdoption` |
| `baseIri` | string | Namespace portion of the IRI |
| `attributes` | string[] | Always `["colored"]` for all 3,182 classes |
| `backgroundColor` | string | Hex colour keyed to domain (6 distinct values) |
| `domain` | string | Domain slug (6 values, see below) |
| `term_id` | string | Structured identifier, e.g. `AI-0600`, `MV-2001`, `BC-1234` |
| `label` | `{en: string}` | Human-readable label |
| `comment` | `{en: string}` | Description (0-200 chars, avg 118, 2,689 non-empty) |

## Domain Distribution (Classes)

| Domain | Count | Colour | term_id Prefix |
|--------|-------|--------|---------------|
| spatial-computing | 1,076 | `#9C27B0` (purple) | MV- |
| artificial-intelligence | 659 | `#4CAF50` (green) | AI- |
| infrastructure | 564 | `#607D8B` (grey) | NGM- |
| blockchain | 464 | `#2196F3` (blue) | BC- |
| robotics | 330 | `#FF9800` (orange) | RB- |
| distributed-collaboration | 89 | `#00BCD4` (cyan) | TC- |

## property Array

Two distinct types:

| Type | Count | Description |
|------|-------|-------------|
| `owl:objectProperty` | 25 | Named relationships (has part, requires, enables, etc.) |
| `rdfs:subClassOf` | 1,367 | Class hierarchy edges |

## propertyAttribute Array

### owl:objectProperty attributes (25 entries)

Keys: `id`, `iri`, `baseIri`, `attributes`, `domain`, `range`, `label`, `inverseOf` (optional)

**Critical finding**: All 25 object properties have **placeholder domain/range** set to the first class (`3dcontentgeneration`). These are schema-level property definitions, not instance-level edges. The actual edge connectivity is carried entirely by the 1,367 `rdfs:subClassOf` entries.

Named object properties (all 25):

```
haspart / ispartof (inverseOf pair)
requires, enables, implements, bridgesto, dependson
belongstodomain, implementedinlayer, affects, complements
enablesgovernance, enhances, governedby, implementedin
imposedby, operationalisedthrough, optimizedfor
parentconcept, partof, precededby, relatedto
trainedvia, usedin, uses
```

### rdfs:subClassOf attributes (1,367 entries)

Keys: `id`, `domain`, `range`, `attributes`

No `iri`, `baseIri`, `label`, or `inverseOf`. The `id` is a composite: `subclassof-{child}-{parent}`.

Attributes are always `["anonymous", "object"]`.

These form the actual graph edges:
- **Cross-class edges**: 1,367 (domain != range)
- **Self-referencing**: 25 (domain == range, from the object property placeholders)

## VisionClaw-Specific Fields

### Present in JSON

| Field | Status | Detail |
|-------|--------|--------|
| `vcw:` namespace | **Declared** | `prefix: "vcw"`, `iri: "https://visionclaw.dreamlab-ai.systems/ns/v2#"` |
| `bridgesTo` property | **Present** | One of the 25 named object properties |
| `VisionClawAgenticContainer` class | **Present** | Class `artificial-intelligence-visionclawagenticcontainer` with full label, comment, domain `artificial-intelligence`, term_id `AI-visionclaw-agentic-container` |

### NOT Present in JSON (TTL-only)

| Field | Occurrences in JSON |
|-------|-------------------|
| `vcw:qualityScore` | 0 |
| `vcw:canonicalUri` | 0 |
| `owl:sameAs` | 0 |
| `vcw:bridgesTo` (as IRI-prefixed) | 0 (present as bare `bridgesto` id) |

These VisionClaw annotation properties (`qualityScore`, `canonicalUri`) and `owl:sameAs` equivalences exist only in the source TTL. The TTL-to-WebVOWL converter strips datatype properties and annotations that are not `rdfs:label`/`rdfs:comment`.

## Data Shape Summary for React SPA

### What the SPA receives:

```typescript
interface WebVOWLv2 {
  header: {
    languages: string[];
    title: Record<string, string>;
    description: Record<string, string>;
    version: string;
  };
  namespace: Array<{ prefix: string; iri: string }>;
  class: Array<{ id: string; type: "owl:Class" }>;
  classAttribute: Array<{
    id: string;           // join key to class[].id
    iri: string;
    baseIri: string;
    attributes: string[]; // always ["colored"]
    backgroundColor: string;
    domain: string;       // one of 6 domain slugs
    term_id: string;
    label: { en: string };
    comment: { en: string };
  }>;
  property: Array<{
    id: string;
    type: "owl:objectProperty" | "rdfs:subClassOf";
  }>;
  propertyAttribute: Array<{
    id: string;
    iri?: string;          // only on owl:objectProperty
    baseIri?: string;      // only on owl:objectProperty
    attributes: string[];  // ["object"] or ["anonymous","object"]
    domain: string;        // source class id
    range: string;         // target class id
    label?: { en: string }; // only on owl:objectProperty
    inverseOf?: string;    // only on 2 properties
  }>;
}
```

### Key architectural implications:

1. **Node data** lives in `classAttribute[]`, not `class[]`. The SPA must join on `id`.
2. **Edge data** lives in `propertyAttribute[]`, not `property[]`. Join on `id`.
3. **Hierarchy is the primary topology**: 1,367 subClassOf edges vs 25 named properties (which are schema-level only with placeholder domain/range).
4. **Domain colouring is pre-computed**: `backgroundColor` is already a hex string per domain.
5. **No VisionClaw quality/canonical data in JSON**: If the SPA needs `qualityScore` or `canonicalUri`, they must be injected from the TTL pipeline or a separate API.
6. **Labels are i18n objects**: Always `{en: "..."}`, keyed by the `header.languages` array.
7. **Scale**: 3,182 nodes + 1,392 edges. Large but manageable for force-directed layout with WebGL.
