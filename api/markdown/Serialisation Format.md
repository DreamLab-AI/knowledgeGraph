public:: true

# Serialisation Format
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:serialisation-format",
  "@type": "Page",
  "vc:slug": "serialisation-format",
  "title": "Serialisation Format",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:serialisation-format",
  "@type": "Class",
  "label": "Serialisation Format",
  "definition": "A serialisation format is a specification for encoding in-memory data structures into a byte or text stream that can be persisted or transmitted and later reconstructed. Formats differ in schema rigidity, compactness, speed, and cross-language support, spanning text formats like JSON and YAML and binary formats like Protocol Buffers, Avro, and Parquet. It is fundamental to checkpointing, messaging, and distributed computation.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:checkpoints", "label": "Checkpoints"}, {"@id": "urn:ngm:class:distributed-computing", "label": "Distributed Computing"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A serialisation format specifies how in-memory data is encoded into a transmittable or storable stream and decoded back. It is required to write [[Checkpoints]] and to exchange state across nodes in [[Distributed Computing]].
- ### Content
  - Choice of format trades human-readability against size and parsing cost: JSON and YAML favour interoperability, while binary schemas such as Protocol Buffers and Avro favour throughput and schema evolution. In distributed and ML systems, columnar and zero-copy formats reduce checkpoint size and accelerate fault recovery.
