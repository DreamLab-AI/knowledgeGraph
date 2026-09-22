public:: true

# Data Deduplication
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:data-deduplication",
  "@type": "Page",
  "vc:slug": "data-deduplication",
  "title": "Data Deduplication",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-deduplication",
  "@type": "Class",
  "label": "Data Deduplication",
  "definition": "Data deduplication is the process of detecting and eliminating redundant copies of data so that only unique instances are retained or referenced. In storage it reduces capacity and bandwidth needs through chunk- or block-level matching, while in data preparation it removes duplicate records to improve quality. It is foundational for clean training data and for identity resolution where records must be matched and merged.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:training-data", "label": "Training Data"},
      {"@id": "urn:ngm:class:identity-resolution", "label": "Identity Resolution"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Data deduplication detects and removes redundant data, improving the quality of [[Training Data]] and supporting [[Identity Resolution]] by matching and merging duplicate records.
- ### Content
  - Storage systems deduplicate by hashing chunks and storing each unique block once, reclaiming capacity. In data quality and entity resolution, fuzzy matching and clustering collapse near-duplicate records into a single canonical entity.
