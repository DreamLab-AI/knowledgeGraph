public:: true

# Economic Systems
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:eea30aea3b130a7496d33fcfcac71fed8cd9337d910e74a412a05e3bd1751002",
  "@type": "Page",
  "vc:slug": "economic-systems",
  "title": "Economic Systems",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9598"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Economic Systems"
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
  "@id": "urn:ngm:class:economic-systems",
  "@type": "Class",
  "label": "Economic Systems",
  "definition": "Economic Systems are the structured sets of rules, institutions, and mechanisms that govern the production, distribution, and consumption of goods, value, and digital assets within a platform or environment. In spatial computing and Web3 contexts, economic systems encompass tokenomics, smart-contract-enforced incentive structures, and decentralised exchange mechanisms.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:tokenomics",
        "label": "Tokenomics"
      },
      {
        "@id": "urn:ngm:class:token-economics",
        "label": "Token Economics"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:blockchain-economics",
        "label": "Blockchain Economics"
      },
      {
        "@id": "urn:ngm:class:dao-governance",
        "label": "DAO Governance"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:economic-systems:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:eea30aea3b130a7496d33fcfcac71fed8cd9337d910e74a412a05e3bd1751002"
  },
  "vc:resolutions": [
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
  - Economic Systems are the structured sets of rules, institutions, and mechanisms that govern the production, distribution, and consumption of goods, value, and digital assets within a platform or environment. In spatial computing and Web3 contexts, economic systems encompass tokenomics, smart-contract-enforced incentive structures, and decentralised exchange mechanisms.

- ### Semantic Classification
  - owl-class:: spatial-computing:EconomicSystems
  - owl-role:: concept

- ### Relationships
  - Has Part [[Tokenomics]]
  - Has Part [[Token Economics]]
  - Requires [[Smart Contract]]
  - Related To [[Blockchain Economics]]
  - Related To [[DAO Governance]]

- ### Content

  ## Overview

  Economic Systems represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
