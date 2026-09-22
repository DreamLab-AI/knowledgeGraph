public:: true

# Data Sharing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7b3e07f5f27ec5ff34803ee69574486da86a4459f04f9d5d287893dd9eaf28f2",
  "@type": "Page",
  "vc:slug": "data-sharing",
  "title": "Data Sharing",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9558"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Data Sharing"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-sharing",
  "@type": "Class",
  "label": "Data Sharing",
  "definition": "The controlled exchange of datasets, data streams, or derived information between organisations, systems, or individuals under agreed governance, access control, and privacy constraints. Data sharing in distributed infrastructure contexts relies on interoperability standards, consent management frameworks, and data governance policies to balance openness with security and sovereignty.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-data-management",
      "label": "Data Management"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      },
      {
        "@id": "urn:ngm:class:data-interoperability",
        "label": "Data Interoperability"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      },
      {
        "@id": "urn:ngm:class:data-standards",
        "label": "Data Standards"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      },
      {
        "@id": "urn:ngm:class:data-sovereignty",
        "label": "Data Sovereignty"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:data-sharing:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7b3e07f5f27ec5ff34803ee69574486da86a4459f04f9d5d287893dd9eaf28f2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The controlled exchange of datasets, data streams, or derived information between organisations, systems, or individuals under agreed governance, access control, and privacy constraints. Data sharing in distributed infrastructure contexts relies on interoperability standards, consent management frameworks, and data governance policies to balance openness with security and sovereignty.

- ### Semantic Classification
  - owl-class:: infrastructure:DataSharing
  - owl-role:: concept

- ### Relationships
  - Requires: [[Data Governance]]
  - Requires: [[Access Control]]
  - Uses: [[Interoperability]]
  - Uses: [[Data Standards]]
  - Enables: [[Federated Learning]]
  - Enables: [[Data Interoperability]]
  - Related To: [[Privacy]]
  - Related To: [[Data Sovereignty]]

- ### Content

  ## Overview

  Data Sharing represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - bridges-to:: [[Blockchain]] (bc)
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
