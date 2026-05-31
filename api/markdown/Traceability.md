public:: true

# Traceability
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:traceability",
  "@type": "Page",
  "vc:slug": "traceability",
  "title": "Traceability",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:traceability",
  "@type": "Class",
  "label": "Traceability",
  "definition": "Traceability is the ability to verify the history, location, or application of an item or piece of information by means of recorded identification. It requires that each unit or event be uniquely identified and that the linkages between successive states be persistently recorded, enabling both forward tracking from origin to destination and backward tracing from any point to its provenance. Traceability is foundational to supply-chain integrity, regulatory compliance, food and pharmaceutical safety, and software and data provenance, and it is increasingly underpinned by tamper-evident ledgers.",
  "domain": "supply-chain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:process", "label": "Process"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:supply-chain-traceability", "label": "Supply Chain Traceability"},
      {"@id": "urn:ngm:class:traceability-mechanism", "label": "Traceability Mechanism"},
      {"@id": "urn:ngm:class:provenance-tracking", "label": "Provenance Tracking"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:compliance", "label": "Compliance"}
    ]
  },
  "quality": 0.78
}
```

- ### Definition
  - [[Traceability]] is the ability to verify the history, location, or application of an item through recorded identification. It is a [[Process]] requiring unique identification of each unit and persistent linkage of successive states, supporting both forward tracking and backward tracing.
- ### Relationships
  - In physical goods this is realised as [[Supply Chain Traceability]], implemented through a [[Traceability Mechanism]] such as serialised barcodes or ledger entries, and it shares its conceptual basis with [[Provenance Tracking]] of data and digital artefacts. Effective traceability enables regulatory [[Compliance]].
- ### Content
  - Traceability systems assign each item or batch a unique identifier and record custody and transformation events against it. The completeness of these records determines whether tracing can reach the granularity required — for example, distinguishing individual units rather than only lots.

  - Distributed-ledger approaches strengthen traceability by making records tamper-evident and shareable across organisational boundaries without a single trusted intermediary, which is particularly valuable in multi-party supply chains for food safety, pharmaceutical anti-counterfeiting, and conflict-mineral compliance.
