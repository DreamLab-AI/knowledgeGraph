public:: true
alias:: RGB-Protocol

# RGB Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:rgb-protocol",
  "@type": "Page",
  "vc:slug": "rgb-protocol",
  "title": "RGB Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:rgb-protocol",
  "@type": "Class",
  "label": "RGB Protocol",
  "definition": "RGB Protocol is a client-side validation smart-contract system built on Bitcoin and the Lightning Network that enables issuance, transfer, and programmable logic over tokenised assets (fungible and non-fungible) without placing contract state on the public blockchain. Contract state is stored in off-chain client-held directed acyclic graphs (DAGs), with only cryptographic commitments anchored to Bitcoin UTXOs via single-use seals, inheriting Bitcoin's security and censorship resistance while providing scalability, privacy, and programmability unavailable to purely on-chain designs. The AluVM virtual machine executes contract validation logic deterministically off-chain, and Lightning Network channels enable instant, low-fee RGB asset transfers. Developed by the LNP/BP Association from 2018 onward, RGB reached production stability in 2024 with standardised schemas RGB20 (fungible tokens) and RGB21 (non-fungible tokens).",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-protocol",
      "label": "Blockchain Protocol"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:rgb-smart-contracts",
      "label": "RGB Smart Contracts"
    },
    {
      "@id": "urn:ngm:class:rgb-client-side-validation",
      "label": "RGB Client-Side Validation"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-network",
        "label": "Bitcoin Network"
      },
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      },
      {
        "@id": "urn:ngm:class:utxo-model",
        "label": "UTXO Model"
      },
      {
        "@id": "urn:ngm:class:cryptographic-commitment",
        "label": "Cryptographic Commitment"
      },
      {
        "@id": "urn:ngm:class:single-use-seals",
        "label": "Single-Use Seal"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:asset-tokenisation",
        "label": "Asset Tokenization"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:layer-2-scaling",
        "label": "Layer 2 Scaling"
      },
      {
        "@id": "urn:ngm:class:non-fungible-token",
        "label": "Non-Fungible Token"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-computation",
        "label": "Privacy-Preserving Computation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:bitcoin-transaction",
        "label": "Bitcoin Transaction"
      },
      {
        "@id": "urn:ngm:class:taproot",
        "label": "Taproot"
      },
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:client-side-validation",
        "label": "Client-Side Validation"
      },
      {
        "@id": "urn:ngm:class:deterministic-bitcoin-commitment",
        "label": "Deterministic Bitcoin Commitment"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:taproot-assets",
        "label": "Taproot Assets"
      },
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform-smart-contracts",
        "label": "Ethereum Smart Contract"
      },
      {
        "@id": "urn:ngm:class:ordinals",
        "label": "Ordinals Protocol"
      },
      {
        "@id": "urn:ngm:class:runes-protocol",
        "label": "Runes Protocol"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:rgb-and-client-side-validation",
        "label": "RGB and Client Side Validation"
      },
      {
        "@id": "urn:ngm:class:lnp-bp-standards-association",
        "label": "LNP/BP Association"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:digital-asset-management",
        "label": "Digital Asset Management"
      }
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - RGB Protocol is a [[Client-Side Validation]] smart-contract system anchored to the [[Bitcoin Network]] via [[Single-Use Seal]] commitments on [[UTXO Model]] outputs, enabling private, scalable [[Asset Tokenisation]], [[Smart Contract]] execution, and [[Non-Fungible Token]] issuance without exposing contract state on-chain. It operates as a genuine [[Layer 2 Scaling]] solution when combined with the [[Lightning Network]], inheriting Bitcoin's security model while delivering programmability and confidentiality that purely on-chain designs cannot achieve.

- ### Overview
  - RGB Protocol addresses a fundamental limitation of blockchain-based smart contracts: the trade-off between on-chain transparency and scalability. Traditional platforms such as [[Ethereum Smart Contract]] systems publish all contract state publicly, creating privacy risks and throughput constraints. RGB inverts this model — only cryptographic commitment hashes are anchored to Bitcoin transactions; the actual contract state lives in client-held data structures validated locally.
  - The protocol was conceived by Peter Todd through his research on [[Client-Side Validation]] and [[Single-Use Seal]] cryptographic primitives. Giacomo Zucco and the [[LNP/BP Association]] formalised and developed it from 2018, expanding scope from simple [[Coloured Coins]] issuance to a full-featured smart-contract ecosystem.
  - The name "RGB" originally referenced the metaphor of red, green, and blue components combined to produce arbitrary colours — reflecting the original intent to issue diverse asset types on Bitcoin. The scope subsequently grew far beyond that metaphor.
  - By 2024–2025 RGB reached production stability (v0.10/v0.11 releases), with the Iris Wallet providing a mobile interface and command-line tooling from the LNP/BP Association enabling developer integrations.

- ### Key Components
  - **Schema Definitions**
    - Schemas describe contract types, state shapes, validation rules, and business logic. They are analogous to Solidity class definitions in [[Ethereum Smart Contract]] but executed by [[AluVM]] entirely off-chain.
    - RGB20 is the standard schema for [[Fungible Token]] issuance (analogous to ERC-20).
    - RGB21 covers non-fungible assets and collectibles, analogous to ERC-721.
  - **Single-Use Seals**
    - [[Single-Use Seal]] primitives, derived from Peter Todd's research, bind a state transition to exactly one [[Bitcoin Transaction]] UTXO. Once a seal is closed (spent), the associated state transition is irreversibly committed, preventing double-spend at the protocol level.
  - **Deterministic Bitcoin Commitments**
    - RGB uses two commitment schemes anchored in Bitcoin transactions: Tapret (using [[Taproot]] script paths) and Opret (using OP_RETURN outputs). Both embed a [[Merkle Tree]] root of the state transition graph into a standard Bitcoin transaction with minimal on-chain footprint.
    - The [[Deterministic Bitcoin Commitment]] standard ensures that any verifier can independently locate and verify the commitment from the blockchain without ambiguity.
  - **AluVM Virtual Machine**
    - [[AluVM]] is a register-based, deterministic virtual machine developed specifically for RGB contract validation. It executes validation scripts that enforce business logic (transfer rules, issuance caps, royalty enforcement) without any on-chain execution cost.
  - **State History DAG**
    - Contract state is represented as a [[Directed Acyclic Graph]] of state transitions. Asset recipients must obtain and validate the relevant DAG history client-side, verifying all ancestor transitions back to the genesis.
  - **Genesis Transaction**
    - The genesis is the initial issuance event that anchors a new contract to a specific [[UTXO Model]] output, establishing the initial supply and ownership.
  - **Lightning Network Integration**
    - Integration with [[Lightning Network]] channels allows instant RGB asset transfers at channel capacity, making it a genuine second-layer payment and asset transfer network. [[Layer 2 Scaling]] benefits apply fully to RGB token flows.

- ### Mechanisms
  - **Client-Side Validation Flow**
    - A sender constructs a state transition referencing the current owner's UTXO seal, signs it, and commits it to a [[Bitcoin Transaction]] via Tapret or Opret.
    - The receiver obtains the state transition data off-chain (via peer-to-peer channels), validates the entire history DAG, and confirms the on-chain commitment anchors are consistent with the received data.
    - Third parties see only an opaque hash in the Bitcoin transaction; they cannot infer asset ownership or transfer details, providing strong [[Privacy-Preserving Computation]] properties by default.
  - **Batch Commitments**
    - Multiple RGB state transitions from different contracts or parties can be batched into a single [[Bitcoin Transaction]] commitment, dramatically improving throughput relative to one-on-chain-transaction-per-transfer models.
  - **Consignments**
    - Asset transfers use a "consignment" data package — a bundle of all state transitions required for the recipient to independently validate ownership. Consignments are transmitted off-chain via direct peer-to-peer communication or specialised data transports.
  - **Fungibility and Privacy**
    - Because state history is private, RGB20 tokens achieve a degree of fungibility not possible for on-chain tokens whose history is publicly traceable (cf. chain-analysis techniques applied to [[Bitcoin Network]] UTXOs or Ethereum tokens).

- ### Applications / Use Cases
  - **Stablecoin Issuance on Bitcoin**
    - RGB enables fiat-backed stablecoins (e.g., RGB20 tokens pegged to USD or EUR) settled on Bitcoin and transferred via [[Lightning Network]], without requiring a separate blockchain. Bitfinex has explored USDt issuance on RGB.
  - **Security Token Offerings**
    - [[Asset Tokenisation]] of equity, bonds, and real-world assets benefits from RGB's privacy properties — investors' holdings are not publicly enumerable on-chain.
  - **NFT and Digital Collectibles**
    - RGB21 supports non-fungible assets with royalty enforcement and media attachment metadata, providing [[Non-Fungible Token]] capabilities anchored to Bitcoin's security model.
  - **Decentralised Finance on Bitcoin**
    - RGB provides a foundation for [[Decentralised Finance]] primitives (lending, swaps, derivatives) on Bitcoin without the trust assumptions introduced by bridge-based Layer 2 designs.
  - **Cross-Asset Lightning Payments**
    - By combining RGB asset channels with [[Lightning Network]] routing, multi-hop payments in custom tokens become possible, enabling merchant acceptance of Bitcoin-settled RGB tokens.
  - **Digital Asset Management**
    - Enterprise [[Digital Asset Management]] systems can use RGB to track provenance and ownership of digital rights, certificates, and credentials privately on the Bitcoin ledger.

- ### Relationships
  - uses:: [[Bitcoin Network]]
  - uses:: [[Lightning Network]]
  - uses:: [[UTXO Model]]
  - uses:: [[Cryptographic Commitment]]
  - uses:: [[Single-Use Seal]]
  - uses:: [[AluVM]]
  - enables:: [[Asset Tokenisation]]
  - enables:: [[Smart Contract]]
  - enables:: [[Layer 2 Scaling]]
  - enables:: [[Non-Fungible Token]]
  - enables:: [[Privacy-Preserving Computation]]
  - requires:: [[Bitcoin Transaction]]
  - requires:: [[Taproot]]
  - requires:: [[Merkle Tree]]
  - implements:: [[Client-Side Validation]]
  - implements:: [[Deterministic Bitcoin Commitment]]
  - contrastsWith:: [[Taproot Assets]]
  - contrastsWith:: [[Ethereum Smart Contract]]
  - contrastsWith:: [[Ordinals Protocol]]
  - contrastsWith:: [[Runes Protocol]]
  - relatedTo:: [[RGB and Client Side Validation]]
  - relatedTo:: [[Coloured Coins]]
  - relatedTo:: [[LNP/BP Association]]
  - relatedTo:: [[Zero-Knowledge Proof]]
  - bridges-to:: [[Decentralised Finance]]
  - bridges-to:: [[Digital Asset Management]]

- ### Historical Context
  - **Origins (2013–2018)**
    - [[Coloured Coins]] were Bitcoin's earliest attempt at in-protocol asset issuance, embedding metadata in transactions. Peter Todd formalised [[Client-Side Validation]] and [[Single-Use Seal]] theory as more rigorous cryptographic primitives to replace metadata-based colouring.
    - Giacomo Zucco proposed RGB as a system implementing these primitives in 2018, initially focused on simple token issuance.
  - **Development Phase (2018–2022)**
    - The LNP/BP Association drove protocol development through multiple iterations. The protocol expanded from coloured coins to full smart-contract support with schema-driven validation.
  - **Maturation (2023–2025)**
    - RGB v0.10 and v0.11 stabilised core protocol components. The [[LNP/BP Association]] shipped production-grade tooling: the Iris mobile wallet, the RGB command-line interface, and developer SDKs.
    - Competing protocols — [[Taproot Assets]] (Lightning Labs), [[Ordinals Protocol]], and [[Runes Protocol]] — emerged in the same period, validating the design space while offering alternative trade-offs.
  - **Competitive Landscape**
    - [[Taproot Assets]] (formerly Taro) uses a similar single-use seal approach but targets simpler token use cases with tighter Lightning Labs integration.
    - [[Ordinals Protocol]] and [[Runes Protocol]] prioritise simplicity and on-chain provenance over privacy and programmability.
    - RGB's distinguishing strengths remain: richer smart-contract expressiveness, stronger privacy guarantees, and full [[AluVM]] programmability.

- ### Standards & Context
  - **LNP/BP Standards**
    - The [[LNP/BP Association]] maintains the RGB specifications as open standards, including: RGB Core (consensus layer), RGB20 (fungible tokens), RGB21 (NFTs), and AluVM instruction set architecture.
  - **Relationship to Bitcoin Improvement Proposals**
    - RGB builds on [[Taproot]] (BIP 341/342) for Tapret commitments but does not require any new Bitcoin consensus changes — it is a pure application-layer protocol atop existing Bitcoin primitives.
  - **Interoperability**
    - The [[Deterministic Bitcoin Commitment]] standard ensures commitment scheme interoperability across wallet and node implementations.
    - Consignment formats are standardised to allow interoperability between different RGB wallet implementations.
  - **Governance**
    - Protocol governance resides with the [[LNP/BP Association]], a non-profit standards body. Specification changes go through a structured RFC process, analogous to Bitcoin's BIP process.

- ### Provenance
  - sources:: LNP/BP Association RGB specification; Peter Todd client-side validation research; Giacomo Zucco RGB technical talks; Bitfinex RGB integration announcements
  - updated:: 2026-06-13
