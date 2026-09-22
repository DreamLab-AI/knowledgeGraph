public:: true

# Format Migration
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:format-migration",
  "@type": "Page",
  "vc:slug": "format-migration",
  "title": "Format Migration",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:format-migration",
  "@type": "Class",
  "label": "Format Migration",
  "definition": "Format migration is the process of converting data or digital assets from one file format to another while preserving meaning, structure, and fidelity. It is central to digital preservation, where obsolete formats are migrated to current ones to keep content accessible over time. Migration must manage information loss, metadata mapping, and validation of the converted output.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:conversion-pipeline", "label": "Conversion Pipeline"}, {"@id": "urn:ngm:class:archival-standards", "label": "Archival Standards"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Format migration converts assets between formats while retaining their semantics, and is enabled by a [[Conversion Pipeline]] and governed by [[Archival Standards]]. It is the principal preservation strategy for long-lived digital collections.
- ### Content
  - Migration strategies trade off automation against fidelity: lossless conversions preserve all data, while lossy ones accept controlled degradation to gain compatibility. Best practice records provenance, retains originals, and validates outputs against the target schema. Batch pipelines handle large archives, applying consistent transformation rules and emitting audit logs.
