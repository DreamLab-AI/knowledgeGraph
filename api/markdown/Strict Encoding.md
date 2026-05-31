public:: true

# Strict Encoding
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:strict-encoding",
  "@type": "Page",
  "vc:slug": "strict-encoding",
  "title": "Strict Encoding",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:strict-encoding",
  "@type": "Class",
  "label": "Strict Encoding",
  "definition": "Strict encoding is a deterministic binary serialisation scheme used in the RGB protocol that guarantees a single canonical byte representation for any given data structure. By forbidding ambiguous orderings and optional layout choices, it ensures that independently computed commitments and hashes match exactly, which is essential for client-side validation. It pairs with strict types to give RGB its reproducible, consensus-free verification.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:cryptographic-primitive", "label": "Cryptographic Primitive"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:rgb-and-client-side-validation", "label": "RGB and Client-Side Validation"},
      {"@id": "urn:ngm:class:strict-types", "label": "Strict Types"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Strict encoding is the deterministic serialisation format underlying [[RGB and Client-Side Validation]], producing one canonical byte sequence per value so that commitments verify identically across parties.
- ### Content
  - Determinism is the defining property: every structure maps to exactly one encoding with fixed field order and no padding ambiguity, so two implementations always derive identical hashes. This reproducibility lets RGB clients validate state transitions locally against on-chain commitments without a global consensus over the data itself. Strict encoding is implemented alongside strict types, which define the schemas that the encoder serialises.
