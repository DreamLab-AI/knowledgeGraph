public:: true

# Customer Experience Management
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1ffe0426a5e09d3f821d747700dd248360baf912326f288917640d94efa220c6",
  "@type": "Page",
  "vc:slug": "customer-experience-management",
  "title": "Customer Experience Management",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:crm",
      "vc:label": "CRM"
    },
    {
      "@id": "urn:visionflow:linked:e-commerce",
      "vc:label": "E-Commerce"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Customer Experience Management"
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
  "@id": "urn:ngm:class:customer-experience-management",
  "@type": "Class",
  "label": "Customer Experience Management",
  "definition": "Customer experience management is the practice of designing and coordinating customer interactions across channels to improve satisfaction and retention.",
  "domain": "business",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:crm",
      "label": "CRM"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:crm",
        "label": "CRM"
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
  "@id": "urn:visionflow:annotation:link-resolutions:customer-experience-management:e6c007b8b6c7",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1ffe0426a5e09d3f821d747700dd248360baf912326f288917640d94efa220c6"
  },
  "vc:resolutions": [
    {
      "raw": "[[CRM]]",
      "resolved": "urn:visionflow:linked:crm",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[E-Commerce]]",
      "resolved": "urn:visionflow:linked:e-commerce",
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
  - Customer experience management is the practice of designing and coordinating customer interactions across channels to improve satisfaction and retention.

- ### Semantic Classification
  - owl-class:: business:CustomerExperienceManagement
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[CRM]]
  - bridges-to:: [[E-Commerce]]
  - requires:: [[CRM]]

- ### Content
  - Customer experience management spans the full set of touchpoints a customer has with an organisation, including marketing, sales, support, and product use. It uses feedback data and journey mapping to identify where interactions can be improved.
  - The discipline overlaps with customer relationship management systems, which store interaction records, but extends beyond data storage to the deliberate design of the experience itself.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
