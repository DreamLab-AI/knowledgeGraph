public:: true

# Strict Types
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:strict-types",
  "@type": "Page",
  "vc:slug": "strict-types",
  "title": "Strict Types",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:strict-types",
  "@type": "Class",
  "label": "Strict Types",
  "definition": "Strict types is a type system and schema language used by the RGB protocol to define data structures with a fully deterministic memory layout and a content-addressable type identity. Each type has a unique hash derived from its definition, so schemas can be referenced and verified without ambiguity. It provides the typed foundation that strict encoding serialises during client-side validation.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:programming-language", "label": "Programming Language"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:rgb-and-client-side-validation", "label": "RGB and Client Side Validation"},
      {"@id": "urn:ngm:class:strict-encoding", "label": "Strict Encoding"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Strict types is the deterministic type system of [[RGB and Client-Side Validation]], giving each schema a content-addressed identity so that data definitions are unambiguous and verifiable.
- ### Content
  - A strict type definition fixes field names, ordering, and primitive widths, then hashes the definition to produce a stable type identifier that any party can reference. This eliminates schema drift and allows RGB contracts to commit to exact data shapes. Strict types and strict encoding work as a pair: the former defines the structure, the latter serialises it into the single canonical byte form required for reproducible validation.
