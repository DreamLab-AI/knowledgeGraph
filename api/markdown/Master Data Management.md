public:: true

# Master Data Management
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:95d21d51cd67e0f65af5750126fce651543df16238e0ad7711bdacfb4a2504b2",
  "@type": "Page",
  "vc:slug": "master-data-management",
  "title": "Master Data Management",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:entity-resolution",
      "vc:label": "Entity Resolution"
    },
    {
      "@id": "urn:visionflow:linked:data-governance",
      "vc:label": "Data Governance"
    },
    {
      "@id": "urn:visionflow:linked:data-quality",
      "vc:label": "Data Quality"
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
      "vc:value": "Master Data Management"
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
  "@id": "urn:ngm:class:master-data-management",
  "@type": "Class",
  "label": "Master Data Management",
  "definition": "A discipline and set of processes for creating and maintaining a single, consistent view of an organisation's core business entities such as customers, products, and suppliers. It governs how master data is defined, stored, and shared.",
  "domain": "data",
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
        "@id": "urn:ngm:class:entity-resolution",
        "label": "Entity Resolution"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
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
  "@id": "urn:visionflow:annotation:link-resolutions:master-data-management:e4e415dde346",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:95d21d51cd67e0f65af5750126fce651543df16238e0ad7711bdacfb4a2504b2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Entity Resolution]]",
      "resolved": "urn:visionflow:linked:entity-resolution",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Governance]]",
      "resolved": "urn:visionflow:linked:data-governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Quality]]",
      "resolved": "urn:visionflow:linked:data-quality",
      "kind": "ResolvedLink"
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
  - A discipline and set of processes for creating and maintaining a single, consistent view of an organisation's core business entities such as customers, products, and suppliers. It governs how master data is defined, stored, and shared.

- ### Semantic Classification
  - owl-class:: data-management:MasterDataManagement
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Data Management]]
  - bridges-to:: [[Data Integration]]
  - requires:: [[Entity Resolution]], [[Data Governance]]
  - enables:: [[Data Quality]]

- ### Content
  - Master data management addresses the problem of the same business entity being represented inconsistently across systems. It establishes authoritative records, governance rules, and processes for reconciling and distributing them.
  - It typically combines data governance, entity resolution, and integration tooling to maintain a trusted source of truth for key entities, supporting reporting, compliance, and operational consistency.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
