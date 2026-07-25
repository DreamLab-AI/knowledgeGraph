public:: true

# Algorand
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:algorand",
  "@type": "Page",
  "vc:slug": "algorand",
  "title": "Algorand",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:algorand",
  "@type": "Class",
  "label": "Algorand",
  "definition": "Algorand is a permissionless, pure proof-of-stake Layer 1 blockchain protocol designed by MIT cryptographer Silvio Micali, providing instant transaction finality, high throughput, and carbon-negative operation through a cryptographically random committee-selection consensus mechanism. It resolves the blockchain trilemma of security, scalability, and decentralisation without forks by ensuring all confirmed blocks are final. The Algorand Virtual Machine (AVM) supports smart contract execution in TEAL bytecode and, via ARC standards, enables NFTs, DeFi, and tokenised assets at scale.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-protocol",
      "label": "Blockchain Protocol"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:pure-proof-of-stake",
        "label": "Pure Proof of Stake"
      },
      {
        "@id": "urn:ngm:class:verifiable-random-function",
        "label": "Verifiable Random Function"
      },
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:byzantine-agreement",
        "label": "Byzantine Agreement"
      },
      {
        "@id": "urn:ngm:class:cryptographic-sortition",
        "label": "Cryptographic Sortition"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:decentralized-application",
        "label": "Decentralized Application"
      },
      {
        "@id": "urn:ngm:class:asset-tokenization",
        "label": "Asset Tokenization"
      },
      {
        "@id": "urn:ngm:class:decentralized-finance",
        "label": "Decentralized Finance"
      },
      {
        "@id": "urn:ngm:class:central-bank-digital-currency",
        "label": "Central Bank Digital Currency"
      },
      {
        "@id": "urn:ngm:class:non-fungible-token",
        "label": "Non-Fungible Token"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:on-chain-governance",
        "label": "On-chain Governance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:cross-border-payments",
        "label": "Cross-Border Payment"
      },
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      },
      {
        "@id": "urn:ngm:class:real-world-asset-tokenisation",
        "label": "Real-World Asset Tokenization"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof Of Work"
      },
      {
        "@id": "urn:ngm:class:delegated-proof-of-stake",
        "label": "Delegated Proof of Stake"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:financial-technology",
        "label": "Financial Technology"
      },
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:blockchain-scalability",
        "label": "Blockchain Scalability"
      },
      {
        "@id": "urn:ngm:class:state-proof",
        "label": "State Proof"
      },
      {
        "@id": "urn:ngm:class:blockchain-interoperability",
        "label": "Blockchain Interoperability"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:algorand-network",
      "label": "Algorand Network"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Algorand]] is a pure proof-of-stake Layer 1 blockchain designed by Silvio Micali that achieves instant, fork-free transaction finality by using [[Verifiable Random Function|verifiable random functions]] to cryptographically elect consensus committees from the entire token-holding population.

- ### Relationships
  - Algorand's consensus mechanism is built on [[Pure Proof of Stake]], eliminating mining and making the protocol inherently [[Blockchain Energy Consumption|energy-efficient]]. Its [[Smart Contract]] layer (AVM/TEAL) enables [[Decentralized Application|decentralised applications]] and [[Asset Tokenization|asset tokenisation]] at network scale, positioning it alongside [[Blockchain Scalability]] solutions without sacrificing the single-round finality property central to [[Financial Technology]] adoption.

- ### Content
  - Algorand was founded in 2017 by Turing Award-winning cryptographer Silvio Micali and launched its MainNet in June 2019. The project emerged from Micali's academic work on verifiable random functions and Byzantine agreement, aiming to build a blockchain capable of supporting global financial infrastructure without the energy costs of proof-of-work or the stake-concentration risks of delegated systems.

  - The protocol operates by randomly selecting a small committee of block proposers and validators from all ALGO holders on a per-round basis using a cryptographic lottery tied to verifiable random functions. This selection is performed locally and privately, so validators are not known until they broadcast their credential, making targeted attacks computationally infeasible. Every round concludes with Byzantine Agreement in two message steps, producing blocks with sub-4-second finality that can never be reversed.

  - Algorand supports a dual-layer smart contract model: layer-1 stateless contracts (TEAL logic signatures) run at consensus speed with no additional fees, while stateful contracts (AVM applications) maintain on-chain key-value stores. ARC token standards underpin a rich ecosystem of DeFi protocols, NFT marketplaces, stablecoins (USDC), and central bank digital currency pilots. The Algorand Foundation's governance mechanism allows ALGO holders to vote on protocol parameters while earning rewards.

  - As of 2024-2025 Algorand hosts hundreds of dApps, maintains sub-3.9-second block finality at throughput exceeding 6,000 transactions per second in stress tests, and has achieved carbon-negative certification through offsets and low per-transaction energy. Key ecosystem focus areas include real-world asset tokenisation, identity, and cross-border settlement infrastructure, with ongoing research into zero-knowledge proofs, co-chains, and state proofs for interoperability with other networks.

