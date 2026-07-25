public:: true

# Platform Economy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:platform-economy",
  "@type": "Page",
  "vc:slug": "platform-economy",
  "title": "Platform Economy",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:platform-economy",
  "@type": "Class",
  "label": "Platform Economy",
  "definition": "The Platform Economy describes an economic model in which digital intermediaries — platforms — create value by facilitating interactions, transactions, and information exchanges between two or more distinct user groups, typically producers and consumers. Platforms achieve scale through network effects: the value of the platform increases with the number of participants on one or both sides, creating winner-take-most market dynamics. Major platform types include transaction platforms (e-commerce, gig labour), innovation platforms (app stores, developer ecosystems), and content platforms (social media, streaming). Platform operators capture value through transaction fees, data monetisation, advertising, and software licences while externalising costs and risks to platform participants.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:digital-platform",
    "label": "Digital Platform"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:network-effects",
        "label": "Network Effect"
      },
      {
        "@id": "urn:ngm:class:platform-governance",
        "label": "Platform Governance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:digital-infrastructure",
        "label": "Digital Infrastructure"
      },
      {
        "@id": "urn:ngm:class:application-programming-interface",
        "label": "Application Programming Interface"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-marketplace",
        "label": "Digital Marketplace"
      },
      {
        "@id": "urn:ngm:class:nft-marketplace",
        "label": "NFT Marketplace"
      },
      {
        "@id": "urn:ngm:class:metaverse-platform",
        "label": "Metaverse Platform"
      },
      {
        "@id": "urn:ngm:class:gig-economy",
        "label": "Gig Economy"
      },
      {
        "@id": "urn:ngm:class:creator-monetization",
        "label": "Creator Monetization"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data-monetisation",
        "label": "Data Monetisation"
      },
      {
        "@id": "urn:ngm:class:algorithmic-recommendation",
        "label": "Algorithmic Recommendation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:platform-layer",
        "label": "Platform Layer"
      },
      {
        "@id": "urn:ngm:class:platform-service",
        "label": "Platform Service"
      },
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:creator-economy",
        "label": "Creator Economy"
      },
      {
        "@id": "urn:ngm:class:marketplace-integration",
        "label": "Marketplace Integration"
      },
      {
        "@id": "urn:ngm:class:open-source-software",
        "label": "Open Source Software"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:decentralised-autonomous-organisation",
        "label": "Decentralised Autonomous Organisation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:token-economy",
        "label": "Tokenised Economy"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:marketplace",
        "label": "Marketplace"
      },
      {
        "@id": "urn:ngm:class:digital-markets-act",
        "label": "Digital Markets Act"
      },
      {
        "@id": "urn:ngm:class:antitrust-regulation",
        "label": "Antitrust Regulation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:platform-business-model",
      "label": "Platform Business Model"
    },
    {
      "@id": "urn:ngm:class:digital-platform-economy",
      "label": "Digital Platform Economy"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - The [[Platform Economy]] is an economic structure in which digital intermediary [[Digital Platform]] organisations capture value by orchestrating interactions between producers and consumers, leveraging network effects to achieve scale and exercising [[Platform Governance]] over the terms of participation.
- ### Relationships
  - Platform Economy dynamics underpin the [[Creator Economy]], as content creators depend on platform-owned distribution channels, recommendation algorithms, and monetisation infrastructure. [[Marketplace]] models operationalise the two-sided market at the core of platform economics, whilst [[NFT Marketplace]] and [[Metaverse Platform]] extensions create new arenas in which platform operators compete for transaction fee and data monetisation revenues. [[Platform Governance]] frameworks determine the rules of participation, content moderation, and fee structures that shape who benefits from platform growth. [[Creator Monetization]] is structurally constrained by the platform's capture of data and distribution relationships.
- ### Content
  - The theoretical foundations of platform economics draw on two-sided market theory, formalised by economists Rochet and Tirole in 2003, and network effect analysis from Metcalfe and others. Two-sided markets exhibit cross-side network effects: adding more producers increases value for consumers and vice versa. Platform operators must solve the "chicken-and-egg" problem of bootstrapping both sides simultaneously, often subsidising one side (e.g., free consumer access) to attract the other (paying advertisers or sellers). Same-side network effects can be positive (social networks become more valuable with more users) or negative (more competing sellers reduce individual seller revenues).

  - Platform market structures tend towards concentration because of network effect dynamics, switching costs created by data lock-in and social graph ownership, and economies of scale in infrastructure. This concentration raises regulatory concerns about monopolistic gatekeeping, in which dominant platforms can extract rents from participants who have no viable alternatives. The EU's Digital Markets Act and UK's proposed Digital Markets, Competition and Consumers Act represent legislative responses targeting "gatekeeper" platforms and mandating interoperability, data portability, and fair access obligations.

  - Gig economy platforms — Uber, Deliveroo, Upwork — represent a distinct platform subtype in which the platform intermediates labour services rather than goods or information. These platforms have provoked intense debate about worker classification, minimum wage applicability, and algorithmic management of workers. The UK Supreme Court's ruling in 2021 that Uber drivers are workers rather than independent contractors exemplifies the legal tensions between platform economic models and labour law frameworks designed for direct employment relationships.

  - Emerging Web3 and decentralised platform models attempt to redistribute platform economic value from operators to participants through token-based ownership, protocol-level governance, and open data. Decentralised exchanges, protocol DAOs, and token-incentivised social networks represent early instantiations of this model, though they face significant challenges in user experience, regulatory compliance, and sustaining the governance participation needed for effective decentralisation.
