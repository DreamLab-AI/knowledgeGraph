public:: true
alias:: BlockchainScalability

# Blockchain Scalability
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b93bdabea566799526167e092d49b7a1d884dda164ad584ff460e4880de2b336",
  "@type": "Page",
  "vc:slug": "blockchain-scalability",
  "title": "Blockchain Scalability",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ai-energy-optimisation",
      "vc:label": "AI Energy Optimisation"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-technology",
      "vc:label": "Blockchain Technology"
    },
    {
      "@id": "urn:visionflow:linked:high-throughput",
      "vc:label": "High Throughput"
    },
    {
      "@id": "urn:visionflow:linked:layer-2-solution",
      "vc:label": "Layer 2 Solution"
    },
    {
      "@id": "urn:visionflow:linked:low-latency",
      "vc:label": "Low Latency"
    },
    {
      "@id": "urn:visionflow:linked:mass-adoption",
      "vc:label": "Mass Adoption"
    },
    {
      "@id": "urn:visionflow:linked:protocol-architecture",
      "vc:label": "Protocol Architecture"
    },
    {
      "@id": "urn:visionflow:linked:rollup",
      "vc:label": "Rollup"
    },
    {
      "@id": "urn:visionflow:linked:rollups",
      "vc:label": "Rollups"
    },
    {
      "@id": "urn:visionflow:linked:sharding",
      "vc:label": "Sharding"
    },
    {
      "@id": "urn:visionflow:linked:system-performance",
      "vc:label": "System Performance"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-entity",
      "vc:label": "Blockchain Entity"
    },
    {
      "@id": "urn:visionflow:owl:class:consensus-mechanism",
      "vc:label": "Consensus Mechanism"
    },
    {
      "@id": "urn:visionflow:owl:class:data-compression",
      "vc:label": "Data Compression"
    },
    {
      "@id": "urn:visionflow:owl:class:network-infrastructure",
      "vc:label": "Network Infrastructure"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:owl:class:state-channel",
      "vc:label": "State Channel"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0602"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Blockchain Scalability"
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
  "@id": "urn:ngm:class:blockchain-scalability",
  "@type": "Class",
  "label": "Blockchain Scalability",
  "definition": "Blockchain Scalability encompasses the technical solutions and architectural approaches designed to increase the transaction throughput, reduce latency, and improve the efficiency of blockchain networks while maintaining security and decentralisation.",
  "domain": "blockchain",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:bc-protocol-and-consensus",
    "label": "Protocol and Consensus"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:layer-2-solutions",
        "label": "Layer 2 Solutions"
      },
      {
        "@id": "urn:ngm:class:rollup",
        "label": "Rollup"
      },
      {
        "@id": "urn:ngm:class:sharding",
        "label": "Sharding"
      },
      {
        "@id": "urn:ngm:class:state-channel",
        "label": "State Channel"
      },
      {
        "@id": "urn:ngm:class:optimistic-rollup",
        "label": "Optimistic Rollup"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-rollup",
        "label": "Zero-Knowledge Rollup"
      },
      {
        "@id": "urn:ngm:class:payment-channel",
        "label": "Payment Channel"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:blockchain-technology",
        "label": "Blockchain Technology"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger-technology",
        "label": "Distributed Ledger Technology"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:network-infrastructure",
        "label": "Network Infrastructure"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:data-availability",
        "label": "Data Availability"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:low-latency",
        "label": "Low Latency"
      },
      {
        "@id": "urn:ngm:class:mass-adoption",
        "label": "Mass Adoption"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:micropayment",
        "label": "Micropayment"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:cryptographic-proof",
        "label": "Cryptographic Proof"
      },
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      },
      {
        "@id": "urn:ngm:class:data-compression",
        "label": "Data Compression"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:fraud-proof",
        "label": "Fraud Proof"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:blockchain-trilemma",
        "label": "Blockchain Trilemma"
      },
      {
        "@id": "urn:ngm:class:on-chain-transaction",
        "label": "On-Chain Transaction"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-energy-optimisation",
        "label": "AI Energy Optimisation"
      },
      {
        "@id": "urn:ngm:class:performance",
        "label": "System Performance"
      },
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      },
      {
        "@id": "urn:ngm:class:danksharding",
        "label": "Danksharding"
      },
      {
        "@id": "urn:ngm:class:transaction-finality",
        "label": "Transaction Finality"
      },
      {
        "@id": "urn:ngm:class:blockchain-interoperability",
        "label": "Blockchain Interoperability"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:blockchain-throughput-scaling",
      "label": "Blockchain Throughput Scaling"
    },
    {
      "@id": "urn:ngm:class:distributed-ledger-scalability",
      "label": "Distributed Ledger Scalability"
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
  "@id": "urn:visionflow:annotation:link-resolutions:blockchain-scalability:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b93bdabea566799526167e092d49b7a1d884dda164ad584ff460e4880de2b336"
  },
  "vc:resolutions": [
    {
      "raw": "[[AI Energy Optimisation]]",
      "resolved": "urn:visionflow:linked:ai-energy-optimisation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Technology]]",
      "resolved": "urn:visionflow:linked:blockchain-technology",
      "kind": "StubLink"
    },
    {
      "raw": "[[High Throughput]]",
      "resolved": "urn:visionflow:linked:high-throughput",
      "kind": "StubLink"
    },
    {
      "raw": "[[Layer 2 Solution]]",
      "resolved": "urn:visionflow:linked:layer-2-solution",
      "kind": "StubLink"
    },
    {
      "raw": "[[Low Latency]]",
      "resolved": "urn:visionflow:linked:low-latency",
      "kind": "StubLink"
    },
    {
      "raw": "[[Mass Adoption]]",
      "resolved": "urn:visionflow:linked:mass-adoption",
      "kind": "StubLink"
    },
    {
      "raw": "[[Protocol Architecture]]",
      "resolved": "urn:visionflow:linked:protocol-architecture",
      "kind": "StubLink"
    },
    {
      "raw": "[[Rollup]]",
      "resolved": "urn:visionflow:linked:rollup",
      "kind": "StubLink"
    },
    {
      "raw": "[[Rollups]]",
      "resolved": "urn:visionflow:linked:rollups",
      "kind": "StubLink"
    },
    {
      "raw": "[[Sharding]]",
      "resolved": "urn:visionflow:linked:sharding",
      "kind": "StubLink"
    },
    {
      "raw": "[[System Performance]]",
      "resolved": "urn:visionflow:linked:system-performance",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Entity]]",
      "resolved": "urn:visionflow:owl:class:blockchain-entity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Consensus Mechanism]]",
      "resolved": "urn:visionflow:owl:class:consensus-mechanism",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Compression]]",
      "resolved": "urn:visionflow:owl:class:data-compression",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Network Infrastructure]]",
      "resolved": "urn:visionflow:owl:class:network-infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:owl:class:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[State Channel]]",
      "resolved": "urn:visionflow:owl:class:state-channel",
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
  - Blockchain Scalability encompasses the technical solutions and architectural approaches designed to increase the transaction throughput, reduce latency, and improve the efficiency of blockchain networks while maintaining security and decentralisation. Key approaches include Layer 2 solutions, sharding, rollups, and state channels.

- ### Semantic Classification
  - owl-class:: blockchain:BlockchainScalability
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain Technology]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[System Performance]], [[Protocol Architecture]]
  - requires:: [[Consensus Mechanism]], [[Smart Contract]], [[Network Infrastructure]]
  - enables:: [[High Throughput]], [[Low Latency]], [[Mass Adoption]]
  - has-part:: [[Layer 2 Solution]], [[Sharding]], [[Rollup]], [[State Channel]]
  - bridges-to:: [[AI Energy Optimisation]], [[Data Compression]]

- ### Content

  Blockchain Scalability addresses the fundamental tension between decentralisation, security, and transaction throughput. Bitcoin processes approximately 7 transactions per second whilst Ethereum historically handled around 15, far below Visa's 65,000 transactions per second capacity. Layer 2 solutions operate above the base blockchain, bundling transactions and settling them periodically on-chain. Lightning Network enables near-instantaneous Bitcoin payments with microsecond finality for micropayments, whilst [[Rollups]] on Ethereum compress hundreds of transactions into single on-chain proofs.

  Sharding partitions blockchain state across parallel chains, enabling simultaneous transaction processing on different chain shards. Danksharding advances this through data availability sampling, reducing validator hardware requirements. State channels enable counterparties to execute transactions off-chain, updating shared state only when disagreements occur or channels close.

  Scalability solutions introduce trade-offs: Layer 2 solutions may reduce decentralisation if few operators exist, whilst sharding increases protocol complexity. The optimal scalability architecture depends on application requirements—instant micropayments prioritise latency, financial settlements prioritise final security, and data availability systems prioritise throughput.

- ### Current Landscape (2026)
  - Ethereum's rollup-centric roadmap has become the dominant scaling paradigm: the Dencun upgrade (March 2024, EIP-4844 proto-danksharding) introduced "blob" data and cut Layer 2 fees by roughly 90%, and by mid-2026 the network settles over 100 million transactions daily across its L2 ecosystem while mainnet gas often sits below 0.5 gwei.
  - The Pectra upgrade activated on 7 May 2025, doubling blob throughput (EIP-7691, from 3/6 to 6/9 blobs per block), adding EOA-to-smart-contract execution for account abstraction (EIP-7702) and raising the maximum effective validator balance to 2,048 ETH (EIP-7251).
  - Fusaka went live on 3 December 2025, shipping PeerDAS (EIP-7594) so validators sample blob data via erasure coding instead of downloading it in full — enabling roughly an 8x theoretical increase in blob capacity without raising node hardware requirements — and standardising the L1 gas limit at 60M (up from 30M through 2025).
  - Fusaka also introduced lightweight "Blob Parameter Only" (BPO) forks to raise capacity without full hard forks: BPO1 (9 December 2025) lifted the blob target/max from 6/9 to 10/15, and BPO2 (7 January 2026) pushed it to 14/21.
  - The L2 market has consolidated sharply: L2Beat lists roughly 73-80 active rollups holding around $45-48bn TVL by mid-2026, with Arbitrum One and Base together commanding about 77% of L2 DeFi liquidity as many smaller general-purpose rollups shut down in 2025-2026.
  - Modular data-availability layers now compete on raw bandwidth: Celestia holds around 50% of the external DA market and its Matcha (v6) upgrade lifted maximum block size from 8MB to 128MB, while EigenDA V2 advertises around 100 MB/s and Celestia's experimental Fibre protocol targets terabit-per-second throughput.
  - Open challenges as of 2026 remain sequencer centralisation (most rollups still use a single sequencer), cross-chain bridge security, state growth, and cross-rollup interoperability; the next named upgrade, Glamsterdam (expected mid-2026), targets enshrined proposer-builder separation (EIP-7732) and Block-level Access Lists (EIP-7928), with full danksharding still years away.

- ### References
  - 1. Ethereum Foundation (2025). Fusaka Mainnet Announcement. https://blog.ethereum.org/2025/11/06/fusaka-mainnet-announcement
  - 2. Ethereum Foundation (2026). Protocol Priorities Update for 2026. https://blog.ethereum.org/2026/02/18/protocol-priorities-update-2026
  - 3. The Block (2025). Ethereum developers activate Pectra upgrade with 11 EIPs. https://www.theblock.co/news/ecosystems/2025-05-07-ethereum-pectra-upgrade-353407
  - 4. Ethereum.org (2026). Building on Ethereum in 2026: what has changed. https://ethereum.org/latest/building-on-ethereum-in-2026/
  - 5. UEEx (2026). Layer 2 Explained: Ethereum's Scaling Race in 2026. https://blog.ueex.com/crypto-terms/layer-2-2/
  - 6. BlockEden (2026). The 2026 Data Availability Race: Celestia, EigenDA, and Avail. https://blockeden.xyz/blog/2026/02/24/modular-blockchain-wars-data-availability/

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
