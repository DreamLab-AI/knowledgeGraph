public:: true

# Data Aggregation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7a78d51125f97254dbdfe424929046037528d3a91acb8385f43ab81b096b89e4",
  "@type": "Page",
  "vc:slug": "data-aggregation",
  "title": "Data Aggregation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:data-integration",
      "vc:label": "Data Integration"
    },
    {
      "@id": "urn:visionflow:linked:community-detection",
      "vc:label": "Community Detection"
    },
    {
      "@id": "urn:visionflow:linked:knowledge-graph",
      "vc:label": "Knowledge Graph"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Data Aggregation"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-aggregation",
  "@type": "Class",
  "label": "Data Aggregation",
  "definition": "Data aggregation is the process of gathering data from multiple sources and combining or summarising it into a consolidated form. It supports analysis, reporting and downstream processing.",
  "domain": "data",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-integration",
      "label": "Data Integration"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:data-integration",
        "label": "Data Integration"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:community-detection",
        "label": "Community Detection"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:data-aggregation:448cc0b95519",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7a78d51125f97254dbdfe424929046037528d3a91acb8385f43ab81b096b89e4"
  },
  "vc:resolutions": [
    {
      "raw": "[[Data Integration]]",
      "resolved": "urn:visionflow:linked:data-integration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Community Detection]]",
      "resolved": "urn:visionflow:linked:community-detection",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Knowledge Graph]]",
      "resolved": "urn:visionflow:linked:knowledge-graph",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Data aggregation is the process of gathering data from multiple sources and combining or summarising it into a consolidated form. It supports analysis, reporting and downstream processing.

- ### Semantic Classification
  - owl-class:: data:DataAggregation
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Data Integration]]
  - bridges-to:: [[Knowledge Graph]]
  - requires:: [[Data Integration]]
  - enables:: [[Community Detection]]

- ### Content
  - Data aggregation collects records from disparate sources and combines them, often computing summaries such as counts, sums or averages, to produce a unified view. It may operate in batch or streaming modes and is a common step in analytics, monitoring and reporting pipelines.
  - Aggregation reduces volume and exposes patterns that individual records do not show, but it requires consistent schemas and careful handling of duplicates and missing values. It frequently follows data integration, where heterogeneous sources are first reconciled.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
