public:: true

# Data Security
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:48f1a61fedb25651c5d54b327adffe18b940995a6e38a66d7d68be08e1b5f61e",
  "@type": "Page",
  "vc:slug": "data-security",
  "title": "Data Security",
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
      "vc:value": "MV-9557"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Data Security"
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
  "@id": "urn:ngm:class:data-security",
  "@type": "Class",
  "label": "Data Security",
  "definition": "Data security comprises the policies, controls, and technologies that protect digital information from unauthorised access, corruption, or theft throughout its lifecycle. It spans encryption at rest and in transit, access control mechanisms, identity verification, and governance frameworks that together ensure confidentiality, integrity, and availability of data assets.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-governance-and-safety",
      "label": "Governance and Safety"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cybersecurity",
        "label": "Cybersecurity"
      },
      {
        "@id": "urn:ngm:class:information-security",
        "label": "Information Security"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:data-security:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:48f1a61fedb25651c5d54b327adffe18b940995a6e38a66d7d68be08e1b5f61e"
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
  - Data security comprises the policies, controls, and technologies that protect digital information from unauthorised access, corruption, or theft throughout its lifecycle. It spans encryption at rest and in transit, access control mechanisms, identity verification, and governance frameworks that together ensure confidentiality, integrity, and availability of data assets.

- ### Semantic Classification
  - owl-class:: spatial-computing:DataSecurity
  - owl-role:: concept

- ### Relationships
  - Requires [[Encryption]]
  - Requires [[Access Control]]
  - Supports [[Privacy]]
  - Supports [[Data Governance]]
  - Related to [[Cybersecurity]]
  - Related to [[Information Security]]

- ### Content

  ## Overview

  Data Security represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - bridges-to:: [[Blockchain]] (bc)
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
