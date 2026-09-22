public:: true

# Columnar Storage
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:columnar-storage",
  "@type": "Page",
  "vc:slug": "columnar-storage",
  "title": "Columnar Storage",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-07-25T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:columnar-storage",
  "@type": "Class",
  "label": "Columnar Storage",
  "definition": "Columnar storage is a data organisation scheme that stores values from the same column of a table contiguously on disk, rather than storing complete rows together as in row-oriented storage. This layout allows analytical queries to scan only the columns they need, and enables aggressive compression because adjacent values within a column tend to be similar. Formats such as Apache Parquet and engines built for online analytical processing rely on columnar storage to accelerate large-scale aggregation and filtering workloads.",
  "domain": "data",
  "maturity": "emerging",
  "qualityScore": 0.5,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-storage",
      "label": "Data Storage"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "DanglingRelationFix-batch6-2026-07-25"
  }
}
```

- ### Definition
  - Columnar storage is a data organisation scheme that stores values from the same column of a table contiguously on disk, rather than storing complete rows together as in row-oriented storage. This layout allows analytical queries to scan only the columns they need, and enables aggressive compression because adjacent values within a column tend to be similar. Formats such as Apache Parquet and engines built for online analytical processing rely on columnar storage to accelerate large-scale aggregation and filtering workloads.
