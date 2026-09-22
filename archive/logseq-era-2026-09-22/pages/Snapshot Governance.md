public:: true

# Snapshot Governance

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:snapshot-governance",
  "@type": "Page",
  "title": "Snapshot Governance",
  "vc:slug": "snapshot-governance",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:snapshot-governance",
  "@type": "Class",
  "label": "Snapshot Governance",
  "definition": "Snapshot Governance is an off-chain voting mechanism used in decentralised autonomous organisations whereby token holders cast gasless ballots whose weight is determined by a verified snapshot of holdings at a specific block height. The system enables low-friction community governance without requiring on-chain transaction costs for each vote. Results are typically ratified by a multisig or on-chain executor that enforces the outcome. It represents a pragmatic compromise between full on-chain governance and centralised decision-making.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    },
    {
      "@id": "urn:ngm:class:bc-governance-and-regulation",
      "label": "Governance and Regulation"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:token-voting",
        "label": "Token Voting"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:ipfs",
        "label": "Ipfs"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:decentralised-autonomous-organisation",
        "label": "Decentralised Autonomous Organisation"
      },
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      },
      {
        "@id": "urn:ngm:class:on-chain-governance",
        "label": "On-Chain Governance"
      },
      {
        "@id": "urn:ngm:class:voting-power",
        "label": "Voting Power"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:on-chain-governance",
        "label": "On-Chain Governance"
      },
      {
        "@id": "urn:ngm:class:delegated-governance",
        "label": "Delegated Governance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:community-governance",
        "label": "Community Governance"
      },
      {
        "@id": "urn:ngm:class:protocol-upgrade",
        "label": "Protocol Upgrade"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:cryptographic-signature",
        "label": "Cryptographic Signature"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:dao-treasury",
        "label": "Dao Treasury"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Snapshot Governance]] is an off-chain voting system used by [[Decentralised Autonomous Organisation]] communities to ratify decisions without gas costs.
  - Voting weight is determined by a [[Blockchain]] snapshot of [[Governance Token]] holdings at a fixed block height.
  - Results are enforced via [[Smart Contract]] multisig execution or on-chain proposals.
  - It contrasts with [[On-Chain Governance]], where every vote consumes transaction fees.

- ### Overview
  - Snapshot Governance emerged as a practical solution to the prohibitive gas costs of fully on-chain voting in Ethereum-based DAOs.
  - The Snapshot platform (snapshot.org) popularised the pattern and now hosts thousands of DAO governance spaces.
  - Token holders sign votes with their wallet private key; signatures are stored on [[Ipfs]] or Arweave.
  - A designated executor (often a Gnosis Safe multisig) implements passing proposals on-chain.

- ### Key Aspects
  - **Gasless voting**: participants sign messages off-chain, incurring no transaction fee.
  - **Block-height snapshot**: holdings are frozen at a specified block to prevent vote-buying during the voting window.
  - **Flexible strategies**: quorum, weighted, approval, and ranked-choice voting strategies are configurable.
  - **Transparency**: all proposals and votes are publicly verifiable via content-addressed storage.
  - **Trust assumption**: the executor multisig must be trusted to faithfully implement outcomes.

- ### Mechanisms
  - A proposal is created specifying a voting window and a snapshot block number.
  - Eligible voters are determined by querying on-chain token balances at that block height.
  - Voters sign EIP-712 typed messages off-chain; signatures are aggregated by the Snapshot relayer.
  - After the voting window closes, the result is computed and the executor enforces the outcome.

- ### Applications
  - DAO treasury allocation and grant distribution decisions.
  - Protocol parameter changes (fee tiers, collateral ratios) in [[Decentralised Finance]] protocols.
  - Electing council members or delegates in governance frameworks.
  - Ratifying roadmap priorities for open-source blockchain projects.

- ### Relationships
  - uses:: [[Token Voting]]
  - uses:: [[Smart Contract]]
  - uses:: [[Ipfs]]
  - relatedTo:: [[Decentralised Autonomous Organisation]]
  - relatedTo:: [[Governance Token]]
  - relatedTo:: [[On-Chain Governance]]
  - contrastsWith:: [[On-Chain Governance]]
  - contrastsWith:: [[Delegated Governance]]
  - enables:: [[Community Governance]]
  - enables:: [[Protocol Upgrade]]
  - dependsOn:: [[Blockchain]]
  - dependsOn:: [[Cryptographic Signature]]
  - supports:: [[Decentralised Finance]]

- ### Provenance
  - updated:: 2026-06-15
