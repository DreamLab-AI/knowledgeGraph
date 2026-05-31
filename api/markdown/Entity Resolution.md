public:: true

# Entity Resolution
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4035c6b844056866261f5064af7cb83ff33adf1f9acfdb34f35a3da4699bc164",
  "@type": "Page",
  "vc:slug": "entity-resolution",
  "title": "Entity Resolution",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:data-quality",
      "vc:label": "Data Quality"
    },
    {
      "@id": "urn:visionflow:linked:master-data-management",
      "vc:label": "Master Data Management"
    },
    {
      "@id": "urn:visionflow:linked:named-entity-recognition",
      "vc:label": "Named Entity Recognition"
    },
    {
      "@id": "urn:visionflow:linked:data-integration",
      "vc:label": "Data Integration"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Entity Resolution"
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
  "@id": "urn:ngm:class:entity-resolution",
  "@type": "Class",
  "label": "Entity Resolution",
  "definition": "The process of determining whether multiple records refer to the same real-world entity and linking or merging them accordingly. It is central to data integration and master data management.",
  "domain": "data-management",
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
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
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
  "@id": "urn:visionflow:annotation:link-resolutions:entity-resolution:514f75fe738d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4035c6b844056866261f5064af7cb83ff33adf1f9acfdb34f35a3da4699bc164"
  },
  "vc:resolutions": [
    {
      "raw": "[[Data Quality]]",
      "resolved": "urn:visionflow:linked:data-quality",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Master Data Management]]",
      "resolved": "urn:visionflow:linked:master-data-management",
      "kind": "StubLink"
    },
    {
      "raw": "[[Named Entity Recognition]]",
      "resolved": "urn:visionflow:linked:named-entity-recognition",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Integration]]",
      "resolved": "urn:visionflow:linked:data-integration",
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
  - The process of determining whether multiple records refer to the same real-world entity and linking or merging them accordingly. It is central to data integration and master data management.

- ### Semantic Classification
  - owl-class:: data-management:EntityResolution
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Data Integration]]
  - bridges-to:: [[Named Entity Recognition]]
  - requires:: [[Data Quality]]
  - enables:: [[Master Data Management]]

- ### Content
  - Entity resolution, also called record linkage or deduplication, identifies records across one or more datasets that describe the same person, organisation, or object despite differences in spelling, format, or completeness.
  - Techniques range from deterministic rules and probabilistic matching to machine learning models that score candidate pairs. It underpins master data management, fraud detection, and the construction of knowledge graphs.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
