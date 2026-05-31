public:: true

# Customer Data Platform
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e64264581dae9869f02c24faa75a7b26aa1a7351922f87f84b21f870dcedfe2f",
  "@type": "Page",
  "vc:slug": "customer-data-platform",
  "title": "Customer Data Platform",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:data-integration",
      "vc:label": "Data Integration"
    },
    {
      "@id": "urn:visionflow:linked:data-management",
      "vc:label": "Data Management"
    },
    {
      "@id": "urn:visionflow:linked:privacy",
      "vc:label": "Privacy"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Customer Data Platform"
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
  "@id": "urn:ngm:class:customer-data-platform",
  "@type": "Class",
  "label": "Customer Data Platform",
  "definition": "A software system that consolidates customer data from multiple sources into a unified, persistent profile that other marketing and analytics systems can access.",
  "domain": "general",
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
        "@id": "urn:ngm:class:data-integration",
        "label": "Data Integration"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-management",
        "label": "Data Management"
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
  "@id": "urn:visionflow:annotation:link-resolutions:customer-data-platform:050f71489820",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e64264581dae9869f02c24faa75a7b26aa1a7351922f87f84b21f870dcedfe2f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Data Integration]]",
      "resolved": "urn:visionflow:linked:data-integration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Management]]",
      "resolved": "urn:visionflow:linked:data-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Privacy]]",
      "resolved": "urn:visionflow:linked:privacy",
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
  - A software system that consolidates customer data from multiple sources into a unified, persistent profile that other marketing and analytics systems can access.

- ### Semantic Classification
  - owl-class:: general:CustomerDataPlatform
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Data Management]]
  - bridges-to:: [[Privacy]]
  - requires:: [[Data Integration]]
  - enables:: [[Data Management]]

- ### Content
  - A customer data platform (CDP) ingests data from sources such as websites, applications, transactional systems and customer relationship management tools, then resolves records into unified profiles keyed to individual customers. The unified profiles are made available to downstream systems for segmentation, personalisation and analysis.
  - CDPs are distinguished from data warehouses by their focus on persistent, identity-resolved customer profiles and on activating that data in marketing channels. Their handling of personal data raises privacy and consent management considerations.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
