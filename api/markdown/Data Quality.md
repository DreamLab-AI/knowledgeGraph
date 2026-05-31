public:: true

# Data Quality
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e47bd45c8a61fe23a1eca640d215cef57ecf5ebf550f8f0c63d5563df0283a2f",
  "@type": "Page",
  "vc:slug": "data-quality",
  "title": "Data Quality",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:data-governance",
      "vc:label": "Data Governance"
    },
    {
      "@id": "urn:visionflow:linked:master-data-management",
      "vc:label": "Master Data Management"
    },
    {
      "@id": "urn:visionflow:linked:data-integration",
      "vc:label": "Data Integration"
    },
    {
      "@id": "urn:visionflow:linked:data-management",
      "vc:label": "Data Management"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Data Quality"
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
  "@id": "urn:ngm:class:data-quality",
  "@type": "Class",
  "label": "Data Quality",
  "definition": "The degree to which data is fit for its intended use, assessed against dimensions such as accuracy, completeness, consistency, timeliness, and validity. Poor data quality undermines analysis and decision making.",
  "domain": "data-management",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-management",
      "label": "Data Management"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:master-data-management",
        "label": "Master Data Management"
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
  "@id": "urn:visionflow:annotation:link-resolutions:data-quality:87e600d3def6",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e47bd45c8a61fe23a1eca640d215cef57ecf5ebf550f8f0c63d5563df0283a2f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Data Governance]]",
      "resolved": "urn:visionflow:linked:data-governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Master Data Management]]",
      "resolved": "urn:visionflow:linked:master-data-management",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Integration]]",
      "resolved": "urn:visionflow:linked:data-integration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Management]]",
      "resolved": "urn:visionflow:linked:data-management",
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
  - The degree to which data is fit for its intended use, assessed against dimensions such as accuracy, completeness, consistency, timeliness, and validity. Poor data quality undermines analysis and decision making.

- ### Semantic Classification
  - owl-class:: data-management:DataQuality
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Data Management]]
  - bridges-to:: [[Data Integration]]
  - requires:: [[Data Governance]]
  - enables:: [[Master Data Management]]

- ### Content
  - Data quality is commonly measured along several dimensions, including accuracy, completeness, consistency across systems, timeliness of updates, uniqueness of records, and conformity to defined formats and rules.
  - Maintaining data quality involves profiling, validation, cleansing, and monitoring, often supported by governance processes. It is a prerequisite for reliable analytics, master data management, and entity resolution.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
