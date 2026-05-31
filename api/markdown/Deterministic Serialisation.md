public:: true

# Deterministic Serialisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:deterministic-serialisation",
  "@type": "Page",
  "vc:slug": "deterministic-serialisation",
  "title": "Deterministic Serialisation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:deterministic-serialisation",
  "@type": "Class",
  "label": "Deterministic Serialisation",
  "definition": "Deterministic serialisation is the encoding of structured data into bytes such that semantically identical inputs always yield exactly the same byte sequence. It fixes ambiguities like map-key ordering, number formatting, and whitespace so that the output is canonical and reproducible. This property is essential for hashing, digital signatures, and content addressing, where any byte difference changes the resulting digest.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:uri-canonicaliser", "label": "URI Canonicaliser"},
      {"@id": "urn:ngm:class:content-addressing", "label": "Content Addressing"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Deterministic serialisation guarantees that equivalent data always serialises to identical bytes by removing encoding ambiguity. It enables tools like a [[URI Canonicaliser]] and is a prerequisite component of [[Content Addressing]].
- ### Content
  - Canonical forms such as JCS (RFC 8785) or canonical CBOR define strict rules for key ordering, integer encoding, and string normalisation. Without determinism, two encoders could hash the same logical object to different digests, breaking signature verification and content-addressed deduplication.
