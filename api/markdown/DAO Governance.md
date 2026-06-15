public:: true

# DAO Governance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:71aa001af0ef7f09506e4e57f429194b7d9cd7fd42e07b050e6a55aee8c27d63",
  "@type": "Page",
  "vc:slug": "dao-governance",
  "title": "DAO Governance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:decentralised-decision-making",
      "vc:label": "Decentralised Decision-Making"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "NGM-7016"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "DAO Governance"
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
  "@id": "urn:ngm:class:dao-governance",
  "@type": "Class",
  "label": "DAO Governance",
  "definition": "DAO governance refers to the decision-making structures and voting mechanisms within Decentralised Autonomous Organisations, enabling token holders to collectively govern protocol parameters, treasury allocations, and organisational direction through on-chain and off-chain processes. Governance rules are encoded as smart contracts that automatically execute approved decisions, supporting a spectrum of voting models including token-weighted, quadratic, delegated, conviction, and reputation-based approaches.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:community-governance",
    "label": "Community Governance"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:token-weighted-voting",
        "label": "Token-Based Voting"
      },
      {
        "@id": "urn:ngm:class:quadratic-voting",
        "label": "Quadratic Voting"
      },
      {
        "@id": "urn:ngm:class:delegated-voting",
        "label": "Delegated Voting"
      },
      {
        "@id": "urn:ngm:class:conviction-voting",
        "label": "Conviction Voting"
      },
      {
        "@id": "urn:ngm:class:holographic-consensus",
        "label": "Holographic Consensus"
      },
      {
        "@id": "urn:ngm:class:on-chain-treasury",
        "label": "On-Chain Treasury"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:decentralised-autonomous-organisation",
        "label": "Decentralised Autonomous Organisation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralised-decision-making",
        "label": "Decentralised Decision-Making"
      },
      {
        "@id": "urn:ngm:class:protocol-upgrade",
        "label": "Protocol Upgrade"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      },
      {
        "@id": "urn:ngm:class:cryptographic-signature",
        "label": "Cryptographic Signature"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:liquid-democracy",
        "label": "Liquid Democracy"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:soulbound-tokens",
        "label": "Soulbound Token"
      },
      {
        "@id": "urn:ngm:class:reputation-system",
        "label": "Reputation System"
      },
      {
        "@id": "urn:ngm:class:snapshot-voting",
        "label": "Snapshot Voting"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:centralised-governance",
        "label": "Centralised Governance"
      },
      {
        "@id": "urn:ngm:class:corporate-governance",
        "label": "Corporate Board Governance"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-governance-and-ethics",
        "label": "AI Governance and Ethics"
      },
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:defi-protocol",
        "label": "DeFi Protocol"
      },
      {
        "@id": "urn:ngm:class:token-economics",
        "label": "Token Economics"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:decentralised-governance",
      "label": "Decentralised Governance"
    },
    {
      "@id": "urn:ngm:class:on-chain-governance",
      "label": "On-chain Governance"
    }
  ],
  "quality": 0.68,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:dao-governance:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:71aa001af0ef7f09506e4e57f429194b7d9cd7fd42e07b050e6a55aee8c27d63"
  },
  "vc:resolutions": [
    {
      "raw": "[[Decentralised Decision-Making]]",
      "resolved": "urn:visionflow:linked:decentralised-decision-making",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
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
  - DAO governance refers to the decision-making structures and voting mechanisms within Decentralised Autonomous Organisations, enabling token holders to collectively govern protocol parameters, treasury allocations, and organisational direction through on-chain and off-chain processes. DAOs are non-hierarchical organisations that perform and record routine tasks on peer-to-peer, cryptographically secure networks, with governance rules encoded as smart contracts that automatically execute approved decisions.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:DaoGovernance
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - enables:: [[Decentralised Decision-Making]]

  - bridges-to:: [[Blockchain]] (bc)
- ### Content

  ## Overview

  Decentralised Autonomous Organisations (DAOs) represent an extreme example of decentralised governance, fundamentally altering how organisations are created, managed, and operated. As of 2025, over 13,000 DAOs manage $24.5 billion in combined treasuries with 11.1 million governance token holders collectively making decisions about protocol upgrades, grant funding, and partnerships.

  ## Voting Mechanisms

  ### Token-Based Voting
  - Most common mechanism where one token equals one vote
  - Creates plutocratic systems where large holders wield significant influence
  - Simple to implement but susceptible to wealth concentration

  ### Quadratic Voting
  - Cost of votes increases quadratically: buying N votes costs N squared tokens
  - Reduces whale influence whilst empowering smaller community members
  - Encourages broader participation in governance decisions

  ### Conviction Voting
  - Vote weight increases the longer a vote remains unchanged
  - Changing votes is possible but sacrifices accumulated weight
  - Eliminates last-minute vote manipulation
  - Encourages long-term thinking over short-term speculation

  ### Delegated Voting
  - Token holders transfer voting rights to delegates who vote on their behalf
  - Form of liquid democracy blending direct and representative democracy
  - Delegation can be revoked or reassigned at any time
  - Addresses voter apathy whilst maintaining decentralisation principles

  ### Holographic Consensus
  - Designed to screen and focus attention on proposals most likely to pass
  - Members predict whether proposals will pass or fail using tokens
  - Solves governance scalability-resilience problem in decentralised organisations
  - Prioritises high-value proposals whilst filtering low-priority items

  ## Governance Challenges

  ### Whale Influence
  - Large token holders can dominate governance outcomes
  - Concentrated ownership creates unique agency problems
  - Interests of whales may diverge from smaller token holders (users)
  - Results in governance vulnerabilities and potential cartel formation

  ### Centralisation Concerns
  - DAOs are neither perfectly decentralised nor completely autonomous in practice
  - Off-chain governance solutions still require trusted parties
  - Non-algorithmic off-chain voting leads to substantial discount in DAO value
  - Critical decisions often rely on centralised bodies despite decentralisation aspirations

  ### Participation Rates
  - Voter apathy affects all DAO governance systems
  - Token holders often prefer passive holding over active participation
  - Solutions include delegation, reduced quorum requirements, and participation incentives

  ## Emerging Innovations

  ### Reputation-Based Governance
  - Voting power earned through contribution rather than token purchase
  - Contributors gain influence by completing bounties and demonstrating expertise
  - Meritocratic approach rewards value creation
  - Requires complex tracking systems for reputation management

  ### Weighted Delegation Constraints
  - Limits on how much voting power can be delegated to single delegates
  - Prevents concentration of delegated power
  - Maintains distributed decision-making even with delegation

  ### Soulbound Tokens
  - Non-transferable tokens representing credentials or achievements
  - Provides governance rights based on participation rather than wealth
  - Addresses plutocracy concerns in token-based systems

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
