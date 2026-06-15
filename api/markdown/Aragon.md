public:: true

# Aragon
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e7c04479cde0e5a245fc94928ec043e437a2e784ad18759a5bad8a55890f58fb",
  "@type": "Page",
  "vc:slug": "aragon",
  "title": "Aragon",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:decentralised-autonomous-organisation",
      "vc:label": "Decentralised Autonomous Organisation"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:smart-contracts",
      "vc:label": "Smart Contracts"
    },
    {
      "@id": "urn:visionflow:linked:governance",
      "vc:label": "Governance"
    },
    {
      "@id": "urn:visionflow:linked:dao",
      "vc:label": "DAO"
    },
    {
      "@id": "urn:visionflow:linked:dao-tooling",
      "vc:label": "DAO Tooling"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Aragon"
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
  "@id": "urn:ngm:class:aragon",
  "@type": "Class",
  "label": "Aragon",
  "definition": "A framework and set of smart contracts for creating and operating decentralised autonomous organisations on Ethereum, providing modular governance, treasury and permission components.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dao-tooling",
      "label": "DAO Tooling"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:decentralised-autonomous-organisation",
        "label": "Decentralised Autonomous Organisation"
      },
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform",
        "label": "Ethereum Smart Contract Platform"
      },
      {
        "@id": "urn:ngm:class:smart-contracts",
        "label": "Smart Contracts"
      },
      {
        "@id": "urn:ngm:class:token-voting",
        "label": "Token Voting"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:on-chain-voting",
        "label": "On-Chain Voting"
      },
      {
        "@id": "urn:ngm:class:treasury-management",
        "label": "Treasury Management"
      },
      {
        "@id": "urn:ngm:class:decentralised-governance",
        "label": "Decentralised Governance"
      },
      {
        "@id": "urn:ngm:class:permissioned-roles",
        "label": "Permissioned Roles"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:aragon-os",
        "label": "AragonOS"
      },
      {
        "@id": "urn:ngm:class:aragon-client",
        "label": "Aragon Client"
      },
      {
        "@id": "urn:ngm:class:aragon-app",
        "label": "Aragon App"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      },
      {
        "@id": "urn:ngm:class:proxy-pattern",
        "label": "Proxy Pattern"
      },
      {
        "@id": "urn:ngm:class:multisig-wallet",
        "label": "Multisig Wallet"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:dao-governance-protocol",
        "label": "DAO Governance Protocol"
      },
      {
        "@id": "urn:ngm:class:modular-smart-contract-architecture",
        "label": "Modular Smart Contract Architecture"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:compound-governance",
        "label": "Compound Governance"
      },
      {
        "@id": "urn:ngm:class:moloch-dao",
        "label": "MolochDAO"
      },
      {
        "@id": "urn:ngm:class:snapshot",
        "label": "Snapshot"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:decentralised-autonomous-organisation",
        "label": "Decentralised Autonomous Organisation"
      },
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      },
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:aragon-network",
      "label": "Aragon Network"
    }
  ],
  "quality": 0.72,
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
  "@id": "urn:visionflow:annotation:link-resolutions:aragon:626e57b7df39",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e7c04479cde0e5a245fc94928ec043e437a2e784ad18759a5bad8a55890f58fb"
  },
  "vc:resolutions": [
    {
      "raw": "[[Decentralised Autonomous Organisation]]",
      "resolved": "urn:visionflow:linked:decentralised-autonomous-organisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contracts]]",
      "resolved": "urn:visionflow:linked:smart-contracts",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Governance]]",
      "resolved": "urn:visionflow:linked:governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DAO]]",
      "resolved": "urn:visionflow:linked:dao",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DAO Tooling]]",
      "resolved": "urn:visionflow:linked:dao-tooling",
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
  - A framework and set of smart contracts for creating and operating decentralised autonomous organisations on Ethereum, providing modular governance, treasury and permission components.

- ### Semantic Classification
  - owl-class:: governance:Aragon
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[DAO Tooling]]
  - bridges-to:: [[DAO]]
  - requires:: [[Decentralised Autonomous Organisation]], [[Ethereum Smart Contract Platform]], [[Smart Contracts]]
  - enables:: [[Governance]]

- ### Content
  - Aragon offers a modular stack of smart contracts and applications that let groups deploy and run decentralised autonomous organisations. Its components manage membership, voting, treasury control and granular permissions, allowing organisations to encode their governance rules on chain.
  - The framework emphasises composability and upgradeability so that a DAO can adopt different voting mechanisms and plugins over time while keeping assets and decisions under collective control.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
