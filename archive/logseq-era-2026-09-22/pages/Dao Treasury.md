public:: true

# Dao Treasury

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:dao-treasury", "@type": "Page", "title": "Dao Treasury", "vc:slug": "dao-treasury", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:dao-treasury",
  "@type": "Class",
  "label": "Dao Treasury",
  "definition": "A DAO treasury is the pool of on-chain assets collectively owned and governed by a decentralised autonomous organisation, typically held in smart contracts and controlled through member governance. It funds operations, grants and incentives, with disbursements authorised by token-weighted votes and executed by multisignature or programmatic controls. Treasury management balances runway, diversification and accountability without a central custodian.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dao",
      "label": "DAO"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:dao",
        "label": "DAO"
      },
      {
        "@id": "urn:ngm:class:decentralized-governance",
        "label": "Decentralized Governance"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      },
      {
        "@id": "urn:ngm:class:multisig",
        "label": "Multisig"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:treasury-management",
        "label": "Treasury Management"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decentralized-governance",
        "label": "Decentralized Governance"
      },
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:staking",
        "label": "Staking"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:tokenomics",
        "label": "Tokenomics"
      },
      {
        "@id": "urn:ngm:class:token",
        "label": "Token"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - The collectively governed on-chain asset pool of a [[DAO]].
  - Held and disbursed via [[Smart Contract]] and [[Multisig]] controls.
  - Allocated through [[Decentralized Governance]] votes.
- ### Overview
  - Assets often include the native [[Governance Token]], stablecoins and protocol revenue.
  - Spending proposals are ratified by token-weighted voting before execution.
  - Applies [[Treasury Management]] discipline to runway and diversification.
- ### Key aspects
  - On-chain custody removes reliance on a single trusted party.
  - Multisignature and timelock controls gate disbursement.
  - Proposal-and-vote workflows authorise grants and budgets.
  - Transparency and accountability follow from public ledgers.
- ### Applications
  - Funding protocol development and grants programmes.
  - Liquidity provisioning and incentive distribution.
  - Community-directed budgeting and reserves management.
- ### Relationships
  - subClassOf:: [[DAO]]
  - partOf:: [[DAO]]
  - partOf:: [[Decentralized Governance]]
  - hasPart:: [[Governance Token]]
  - hasPart:: [[Multisig]]
  - uses:: [[Smart Contract]]
  - uses:: [[Treasury Management]]
  - supports:: [[Decentralized Governance]]
  - supports:: [[Liquidity]]
  - requires:: [[Smart Contract]]
  - enables:: [[Staking]]
  - relatedTo:: [[Tokenomics]]
  - relatedTo:: [[Token]]
- ### Provenance
  - updated:: 2026-06-15
  - generatedBy:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
