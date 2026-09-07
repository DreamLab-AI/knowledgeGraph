```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b593a994701ace5efad1b480b72bed09c502e154d3f54462ae80638095ed4c87",
  "@type": "Page",
  "vc:slug": "social-token-economy",
  "title": "Social Token Economy",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:community-platform",
      "vc:label": "Community Platform"
    },
    {
      "@id": "urn:visionflow:linked:community-token",
      "vc:label": "Community Token"
    },
    {
      "@id": "urn:visionflow:linked:creator-monetization",
      "vc:label": "Creator Monetization"
    },
    {
      "@id": "urn:visionflow:linked:creator-token",
      "vc:label": "Creator Token"
    },
    {
      "@id": "urn:visionflow:linked:fan-engagement",
      "vc:label": "Fan Engagement"
    },
    {
      "@id": "urn:visionflow:linked:governance-rights",
      "vc:label": "Governance Rights"
    },
    {
      "@id": "urn:visionflow:linked:token-economy",
      "vc:label": "Token Economy"
    },
    {
      "@id": "urn:visionflow:linked:token-economy-framework-2024",
      "vc:label": "Token Economy Framework 2024"
    },
    {
      "@id": "urn:visionflow:linked:value-distribution",
      "vc:label": "Value Distribution"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-infrastructure",
      "vc:label": "Blockchain Infrastructure"
    },
    {
      "@id": "urn:visionflow:owl:class:community-governance",
      "vc:label": "Community Governance"
    },
    {
      "@id": "urn:visionflow:owl:class:decentralized-exchange",
      "vc:label": "Decentralized Exchange"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-wallet",
      "vc:label": "Digital Wallet"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "MiddlewareLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:reputation-system",
      "vc:label": "Reputation System"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract-platform",
      "vc:label": "Smart Contract Platform"
    },
    {
      "@id": "urn:visionflow:owl:class:token-standard",
      "vc:label": "Token Standard"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-economy",
      "vc:label": "VirtualEconomyDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20268"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Social Token Economy"
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
  "@id": "urn:ngm:class:social-token-economy",
  "@type": "Class",
  "label": "Social Token Economy",
  "definition": "Economic model where communities issue tokens representing reputation, participation value, or creator-fan relationships, enabling decentralized governance and value distribution.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:virtual-economy",
        "label": "Virtual Economy"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:token",
        "label": "Community Token"
      },
      {
        "@id": "urn:ngm:class:governance-rights",
        "label": "Governance Rights"
      },
      {
        "@id": "urn:ngm:class:reputation-system",
        "label": "Reputation System"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:blockchain-infrastructure",
        "label": "Blockchain Infrastructure"
      },
      {
        "@id": "urn:ngm:class:smart-contract-platform",
        "label": "Smart Contract Platform"
      },
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:creator-monetization",
        "label": "Creator Monetization"
      },
      {
        "@id": "urn:ngm:class:community-governance",
        "label": "Community Governance"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:token-economy",
        "label": "Token Economy"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

- ### Definition
  - Economic model where communities issue tokens representing reputation, participation value, or creator-fan relationships, enabling decentralized governance and value distribution.

- ### Semantic Classification
  - owl-class:: spatial-computing:SocialTokenEconomy
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[VirtualEconomyDomain]]
  - implemented-in-layer:: [[MiddlewareLayer]]

- ### Relationships
  - has-part:: [[Creator Token]], [[Community Token]], [[Governance Rights]], [[Reputation System]]
  - is-part-of:: [[Token Economy]]
  - requires:: [[Blockchain Infrastructure]], [[Smart Contract Platform]], [[Token Standard]]
  - enables:: [[Creator Monetization]], [[Fan Engagement]], [[Community Governance]], [[Value Distribution]]
  - depends-on:: [[Digital Wallet]], [[Decentralized Exchange]], [[Community Platform]]

- ### Content
  Social Token Economy — content pending enrichment.

- ### Provenance
  - sources:: [[Token Economy Framework 2024]]
  - migration-date:: 2026-04-26T00:00:00Z
