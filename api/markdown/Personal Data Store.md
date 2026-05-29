public:: true

# Personal Data Store
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:161b6fdb3fe1beccf8016bd942f46b9a589b69a39aa1c74de31881441fe54d44",
  "@type": "Page",
  "vc:slug": "personal-data-store",
  "title": "Personal Data Store",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9184"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Personal Data Store"
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
  "@id": "urn:ngm:class:personal-data-store",
  "@type": "Class",
  "label": "Personal Data Store",
  "definition": "A user-controlled repository that aggregates, manages, and selectively shares an individual's personal data, enabling the data owner to grant and revoke third-party access under consent-based mechanisms, thereby supporting data sovereignty and privacy-by-design principles in digital and metaverse contexts.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-data-management",
      "label": "Data Management"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:decentralized-identifiers",
        "label": "Decentralized Identifiers"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-sovereignty",
        "label": "Data Sovereignty"
      },
      {
        "@id": "urn:ngm:class:privacy-by-design",
        "label": "Privacy By Design"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:personal-data-store:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:161b6fdb3fe1beccf8016bd942f46b9a589b69a39aa1c74de31881441fe54d44"
  },
  "vc:resolutions": [],
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
  - A user-controlled repository that aggregates, manages, and selectively shares an individual's personal data, enabling the data owner to grant and revoke third-party access under consent-based mechanisms, thereby supporting data sovereignty and privacy-by-design principles in digital and metaverse contexts.

- ### Semantic Classification
  - owl-class:: infrastructure:PersonalDataStore
  - owl-role:: Concept

- ### Relationships
  - Supports: [[Data Sovereignty]]
  - Supports: [[Privacy By Design]]
  - Uses: [[Decentralized Identifiers]]
  - Uses: [[Access Control]]
  - Related To: [[Digital Identity]]
  - Related To: [[Data Governance]]

- ### Content
  # PersonalDataStore
  PersonalDataStore represents a key component in Metaverse infrastructure and technology. Research: PersonalDataStore - user data storage, decentralized storage, data ownership
  - https://www.khronos.org/ - Industry standards
  - https://www.w3.org/TR/ - Web standards
  - https://developer.mozilla.org/ - Technical documentation

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
