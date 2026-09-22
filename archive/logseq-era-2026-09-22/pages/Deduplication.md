public:: true

# Deduplication
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:deduplication",
  "@type": "Page",
  "vc:slug": "deduplication",
  "title": "Deduplication",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:deduplication",
  "@type": "Class",
  "label": "Deduplication",
  "definition": "Deduplication is a data-management technique that eliminates redundant copies of identical data by storing a single instance and referencing it wherever the same content recurs. Implementations typically hash data chunks and compare digests, so identical blocks resolve to the same stored object. It reduces storage footprint, backup windows, and network transfer in content-addressed and backup systems.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:hash-function", "label": "Hash Function"},
      {"@id": "urn:ngm:class:content-addressing", "label": "Content Addressing"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Deduplication detects and removes duplicate data so only one physical copy is retained, with all duplicates pointing at it. It is enabled by a [[Hash Function]] that produces stable digests and underpins [[Content Addressing]] systems where identical content maps to a single address.
- ### Content
  - Deduplication operates at file, block, or variable-length-chunk granularity, inline or post-process. Gains are largest for repetitive datasets such as backups and VM images; costs include hashing overhead and the need to handle hash collisions safely.
