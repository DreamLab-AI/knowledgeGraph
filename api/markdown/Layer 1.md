public:: true

# Layer 1
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:29a6effe54c83991003cd33f87eec45a4b62f9ea041a955810873ceae8d79aa1",
  "@type": "Page",
  "vc:slug": "layer-1",
  "title": "Layer 1",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:consensus-protocol",
      "vc:label": "Consensus Protocol"
    },
    {
      "@id": "urn:visionflow:linked:layer-2-networks",
      "vc:label": "Layer 2 Networks"
    },
    {
      "@id": "urn:visionflow:linked:distributed-ledger",
      "vc:label": "Distributed Ledger"
    },
    {
      "@id": "urn:visionflow:linked:blockchain",
      "vc:label": "Blockchain Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Layer 1"
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
  "@id": "urn:ngm:class:layer-1",
  "@type": "Class",
  "label": "Layer 1",
  "definition": "Layer 1 is the foundational base protocol of a blockchain network that maintains its own independently verified state, executes a native consensus mechanism, and provides cryptographically final transaction ordering without relying on any external chain. It defines the canonical ledger, enforces network rules (including token issuance schedules and validity criteria), and serves as the trust anchor from which all higher-order protocols derive their security guarantees. Notable examples include Bitcoin, Ethereum, Solana, Cardano, and Avalanche, each differing in their consensus approach, throughput characteristics, and programmability.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:consensus-protocol",
        "label": "Consensus Protocol"
      },
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hash Function"
      },
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      },
      {
        "@id": "urn:ngm:class:validator-node",
        "label": "Validator Node"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:layer-2-networks",
        "label": "Layer 2 Networks"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:decentralised-application",
        "label": "Decentralised Application"
      },
      {
        "@id": "urn:ngm:class:tokenisation",
        "label": "Tokenisation"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      },
      {
        "@id": "urn:ngm:class:mempool",
        "label": "Mempool"
      },
      {
        "@id": "urn:ngm:class:block",
        "label": "Block"
      },
      {
        "@id": "urn:ngm:class:native-token",
        "label": "Native Token"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:layer-2-networks",
        "label": "Layer 2 Networks"
      },
      {
        "@id": "urn:ngm:class:sidechain",
        "label": "Sidechain"
      },
      {
        "@id": "urn:ngm:class:centralised-database",
        "label": "Centralised Database"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof Of Work"
      },
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      },
      {
        "@id": "urn:ngm:class:blockchain-scalability",
        "label": "Blockchain Scalability Trilemma"
      },
      {
        "@id": "urn:ngm:class:finality",
        "label": "Finality"
      },
      {
        "@id": "urn:ngm:class:sharding",
        "label": "Sharding"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:data-provenance",
        "label": "Data Provenance"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ethereum-improvement-proposal",
        "label": "Ethereum Improvement Proposal"
      },
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-improvement-proposals",
        "label": "Bitcoin Improvement Proposal"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:base-layer",
      "label": "Base Layer"
    },
    {
      "@id": "urn:ngm:class:settlement-layer",
      "label": "Settlement Layer"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:layer-1:922badbaf192",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:29a6effe54c83991003cd33f87eec45a4b62f9ea041a955810873ceae8d79aa1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Consensus Protocol]]",
      "resolved": "urn:visionflow:linked:consensus-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Layer 2 Networks]]",
      "resolved": "urn:visionflow:linked:layer-2-networks",
      "kind": "StubLink"
    },
    {
      "raw": "[[Distributed Ledger]]",
      "resolved": "urn:visionflow:linked:distributed-ledger",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Domain]]",
      "resolved": "urn:visionflow:linked:blockchain",
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
  - A **Layer 1** is the foundational base protocol of a [[Blockchain Domain]] — the network layer that maintains its own independently verified state, runs a native [[Consensus Protocol]], and produces cryptographically [[Finality|final]] transaction ordering without delegating trust to any external chain. It defines the canonical [[Distributed Ledger]], enforces network rules (including native asset issuance), and acts as the ultimate security and data-availability anchor from which [[Layer 2 Networks]], [[Smart Contract]] platforms, and [[Decentralised Application]] ecosystems derive their guarantees. Well-known Layer 1 networks include Bitcoin, Ethereum (post-Merge), Solana, Cardano, and Avalanche.

- ### Overview
  - Layer 1 establishes the ground truth of a decentralised network. Every [[Validator Node]] independently executes the same rules, and the [[Consensus Protocol]] ensures that all honest nodes converge on a single canonical history without a central authority.
  - The term "Layer 1" became widespread as the scaling debate in blockchain matured. Researchers and developers recognised that a single chain cannot simultaneously maximise security, decentralisation, and throughput — the [[Blockchain Scalability Trilemma]] — which motivated off-chain solutions ([[Layer 2 Networks]], [[Sidechain|Sidechains]]) that anchor back to Layer 1 for settlement.
  - Layer 1 networks carry their own [[Native Token]] (e.g. BTC, ETH, SOL) used to pay transaction fees and, in [[Proof of Stake]] systems, to collateralise validators.
  - Security model: every full [[Validator Node]] replays all transactions, guaranteeing that no single party can alter history without controlling a majority of the network's consensus power — whether measured in hash-rate ([[Proof of Work]]) or staked capital ([[Proof of Stake]]).

- ### Key Components
  - **[[Consensus Protocol]]** — the algorithm by which geographically dispersed nodes agree on the next valid [[Block]] and reject invalid ones. Variants include Nakamoto-style longest-chain [[Proof of Work]], BFT-family [[Proof of Stake]], and hybrid designs.
  - **[[Distributed Ledger]]** — the append-only, replicated data store whose state transitions are validated by the consensus mechanism. Each [[Block]] contains an ordered set of transactions and a reference to the previous block's hash, forming the chain.
  - **[[Mempool]]** — the in-memory pool of unconfirmed transactions awaiting inclusion in the next block; nodes gossip transactions across the [[Peer-to-Peer Network]] until miners or validators select them.
  - **[[Native Token]]** — the protocol-level asset whose issuance schedule and supply rules are hard-coded in the Layer 1 protocol (e.g. Bitcoin's 21 million cap). Native tokens incentivise honest participation and pay for computation.
  - **[[Cryptographic Hash Function]]** — underpins block linking and Merkle tree construction, making history tamper-evident; SHA-256 is canonical for Bitcoin, Keccak-256 for Ethereum.
  - **[[Validator Node]]** — full participants that store the complete ledger state, validate all transactions and blocks, and participate in consensus. The diversity and geographic distribution of validators determines decentralisation.
  - **[[Finality]]** — the property by which a committed transaction becomes irreversible. Probabilistic finality (Bitcoin after six confirmations) differs from deterministic/economic finality offered by BFT-based Layer 1 systems.

- ### Mechanisms
  - **[[Proof of Work]]** — miners compete to solve a hash-based computational puzzle; the winner appends the next block and earns the block reward. High energy expenditure is the economic guarantee against rewriting history.
  - **[[Proof of Stake]]** — validators lock ([[Staking|stake]]) native tokens as collateral; a randomised (often weighted) selection process chooses the next block proposer. Slashing punishes equivocation, replacing energy cost with economic risk.
  - **[[Sharding]]** — an intra-Layer-1 scaling strategy that partitions the global state into sub-chains (shards) processed in parallel; [[Cross-Shard Communication]] reintroduces complexity but raises aggregate throughput without exiting Layer 1.
  - **Block time and throughput** — Layer 1 design choices (block size, block interval, execution environment complexity) determine baseline throughput. Changing these parameters involves hard forks or governance processes encoded in [[Bitcoin Improvement Proposal|BIPs]] or [[Ethereum Improvement Proposal|EIPs]].
  - **[[Data Availability]]** — Layer 1 must make block data publicly available for a sufficient window so that fraud proofs and validity proofs from [[Layer 2 Networks]] can be verified by anyone, not just by the original proposer.

- ### Applications / Use Cases
  - **[[Decentralised Finance]] (DeFi)** — Layer 1 chains host liquidity pools, lending protocols, and decentralised exchanges. Settlement finality on Layer 1 backstops the economic guarantees of all DeFi positions.
  - **[[Tokenisation]]** — real-world assets (bonds, equities, real estate) are being tokenised on Layer 1 networks, with [[Smart Contract]] logic enforcing transfer restrictions and compliance.
  - **[[Digital Identity]]** — self-sovereign identity schemes anchor public key registries and credential revocation lists to Layer 1, leveraging its censorship-resistance and tamper-evident history.
  - **[[Non-Fungible Token|NFTs]]** — Layer 1 provides the ownership record for non-fungible tokens; on-chain provenance and transfer history are permanent once inscribed.
  - **[[Data Provenance]]** — supply-chain and scientific-data applications hash datasets and commit the digest to Layer 1 to create an immutable timestamp and integrity check.
  - **[[Cross-Chain Bridge|Cross-Chain Bridges]]** — bridge contracts on two Layer 1 networks lock assets on one chain while minting synthetic representations on another, enabling interoperability at the cost of added smart-contract risk.
  - **Central Bank Digital Currencies (CBDCs)** — several jurisdictions are experimenting with permissioned Layer 1 networks to provide sovereign digital currency infrastructure, combining finality with regulatory controls.

- ### Relationships
  - partOf:: [[Blockchain Domain]]
  - requires:: [[Consensus Protocol]]
  - requires:: [[Cryptographic Hash Function]]
  - requires:: [[Peer-to-Peer Network]]
  - requires:: [[Validator Node]]
  - enables:: [[Layer 2 Networks]]
  - enables:: [[Smart Contract]]
  - enables:: [[Decentralised Application]]
  - enables:: [[Tokenisation]]
  - hasPart:: [[Distributed Ledger]]
  - hasPart:: [[Mempool]]
  - hasPart:: [[Block]]
  - hasPart:: [[Native Token]]
  - relatedTo:: [[Proof of Work]]
  - relatedTo:: [[Proof of Stake]]
  - relatedTo:: [[Blockchain Scalability Trilemma]]
  - relatedTo:: [[Finality]]
  - relatedTo:: [[Sharding]]
  - contrastsWith:: [[Layer 2 Networks]]
  - contrastsWith:: [[Sidechain]]
  - contrastsWith:: [[Centralised Database]]
  - bridgesTo:: [[Decentralised Finance]]
  - bridgesTo:: [[Digital Identity]]
  - bridgesTo:: [[Data Provenance]]
  - standardizedBy:: [[Ethereum Improvement Proposal]]
  - standardizedBy:: [[Bitcoin Improvement Proposal]]

- ### Standards & Context
  - **[[Bitcoin Improvement Proposal]] (BIP)** — the process by which changes to the Bitcoin Layer 1 protocol are proposed, discussed, and ratified. Soft forks (SegWit, Taproot) and hard forks both flow through BIP-style deliberation.
  - **[[Ethereum Improvement Proposal]] (EIP)** — Ethereum's analogous change-management process; EIPs govern Layer 1 parameters such as gas pricing (EIP-1559), the Merge (EIP-3675), and future [[Sharding]] milestones.
  - **[[ISO TC 307]]** — the ISO technical committee for blockchain and distributed ledger technologies, producing standards relevant to Layer 1 interoperability and vocabulary.
  - **[[W3C DID]] Core** — while not Layer-1-specific, Decentralised Identifiers are frequently anchored on Layer 1 networks, and W3C has published the DID Core specification as a W3C Recommendation.
  - Layer 1 networks operating as financial market infrastructure in major jurisdictions are increasingly subject to regulatory frameworks: MiCA in the European Union, guidance from the SEC and CFTC in the United States, and forthcoming frameworks in the UK (FCA).

- ### Provenance
  - sources:: Bitcoin Whitepaper (Nakamoto 2008); Ethereum Yellow Paper (Wood 2014); Ethereum Research blog; academic literature on Byzantine Fault Tolerance; Solana, Cardano, and Avalanche technical documentation
  - updated:: 2026-06-13
