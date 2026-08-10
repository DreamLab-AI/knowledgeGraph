public:: true

# zkSync
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e704b7567069cb6cabdc2b757a9a6dad6fb32032e7a8c1ba22d9e43e15438929",
  "@type": "Page",
  "vc:slug": "zk-sync",
  "title": "zkSync",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:rollup",
      "vc:label": "Rollup"
    },
    {
      "@id": "urn:visionflow:linked:zero-knowledge-proof",
      "vc:label": "Zero Knowledge Proof"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-finance",
      "vc:label": "Decentralised Finance Domain"
    },
    {
      "@id": "urn:visionflow:linked:optimism",
      "vc:label": "Optimism"
    },
    {
      "@id": "urn:visionflow:linked:arbitrum",
      "vc:label": "Arbitrum"
    },
    {
      "@id": "urn:visionflow:linked:polygon",
      "vc:label": "Polygon"
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
      "vc:value": "zkSync"
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
  "@id": "urn:ngm:class:zk-sync",
  "@type": "Class",
  "label": "zkSync",
  "definition": "zkSync is an Ethereum layer-2 scaling network developed by Matter Labs that uses zero-knowledge rollup technology to settle transactions on Ethereum with validity proofs. Its main network, zkSync Era, is a zk-rollup with an EVM-compatible execution environment, allowing many Ethereum smart contracts and tools to be used with minimal changes. By posting succinct proofs that each batch of transactions is valid, the network achieves Ethereum-level settlement security without an optimistic challenge period. zkSync is part of a broader effort to scale Ethereum through zero-knowledge cryptography.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-network-component",
      "label": "Network Component"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:validity-proof",
        "label": "Validity Proof"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum Ecosystem"
      },
      {
        "@id": "urn:ngm:class:layer-2-scaling",
        "label": "Layer-2 Scaling Ecosystem"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform",
        "label": "Ethereum Smart Contract Platform"
      },
      {
        "@id": "urn:ngm:class:rollup",
        "label": "Rollup"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:data-availability",
        "label": "Data Availability"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:blockchain-transaction",
        "label": "Low-Cost Blockchain Transaction"
      },
      {
        "@id": "urn:ngm:class:cross-chain-bridge",
        "label": "Cross-Chain Bridging"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum Mainnet"
      },
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hash Function"
      },
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:zk-rollup",
        "label": "ZK Rollup"
      },
      {
        "@id": "urn:ngm:class:evm-compatibility",
        "label": "EVM Compatibility"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:zk-snark",
        "label": "ZK-SNARK"
      },
      {
        "@id": "urn:ngm:class:zk-starks",
        "label": "ZK-STARK"
      },
      {
        "@id": "urn:ngm:class:solidity",
        "label": "Solidity"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:erc-20-tokens",
        "label": "ERC-20 Token"
      },
      {
        "@id": "urn:ngm:class:non-fungible-token",
        "label": "Non-Fungible Token"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:optimism",
        "label": "Optimism"
      },
      {
        "@id": "urn:ngm:class:arbitrum",
        "label": "Arbitrum"
      },
      {
        "@id": "urn:ngm:class:starknet",
        "label": "Starknet"
      },
      {
        "@id": "urn:ngm:class:optimistic-rollup",
        "label": "Optimistic Rollup"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:security",
        "label": "Security"
      },
      {
        "@id": "urn:ngm:class:finance",
        "label": "Finance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:polygon",
        "label": "Polygon"
      },
      {
        "@id": "urn:ngm:class:polygon-zkevm",
        "label": "Polygon zkEVM"
      },
      {
        "@id": "urn:ngm:class:layer-2-networks",
        "label": "Layer-2 Network"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:zk-sync-era",
      "label": "zkSync Era"
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
  "@id": "urn:visionflow:annotation:link-resolutions:zk-sync:5dd5631330aa",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e704b7567069cb6cabdc2b757a9a6dad6fb32032e7a8c1ba22d9e43e15438929"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Rollup]]",
      "resolved": "urn:visionflow:linked:rollup",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Zero Knowledge Proof]]",
      "resolved": "urn:visionflow:linked:zero-knowledge-proof",
      "kind": "StubLink"
    },
    {
      "raw": "[[Decentralised Finance Domain]]",
      "resolved": "urn:visionflow:linked:decentralised-finance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Optimism]]",
      "resolved": "urn:visionflow:linked:optimism",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Arbitrum]]",
      "resolved": "urn:visionflow:linked:arbitrum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Polygon]]",
      "resolved": "urn:visionflow:linked:polygon",
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
  - zkSync is an Ethereum layer-2 scaling network developed by Matter Labs that uses zero-knowledge rollup technology to settle transactions on Ethereum with validity proofs. Its main network, zkSync Era, is a zk-rollup with an EVM-compatible execution environment, allowing many Ethereum smart contracts and tools to be used with minimal changes. By posting succinct proofs that each batch of transactions is valid, the network achieves Ethereum-level settlement security without an optimistic challenge period. zkSync is part of a broader effort to scale Ethereum through zero-knowledge cryptography.

- ### Semantic Classification
  - owl-class:: bc:ZkSync
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Optimism]], [[Arbitrum]], [[Polygon]]
  - requires:: [[Ethereum Smart Contract Platform]], [[Rollup]], [[Zero Knowledge Proof]]
  - enables:: [[Decentralised Finance Domain]]

- ### Content
  - zkSync scales Ethereum using the zero-knowledge rollup model, in which transactions are executed off-chain and a succinct validity proof is generated attesting that the resulting state transition is correct. The proof is verified on Ethereum, so the network does not need the multi-day challenge windows associated with optimistic rollups before funds can be withdrawn securely.
  - zkSync Era provides an EVM-compatible environment, letting developers deploy Solidity contracts and use familiar tooling while the underlying system handles proof generation. This compatibility lowers the barrier to porting existing Ethereum applications onto the layer-2.
  - Matter Labs has also developed the ZK Stack, a framework for launching custom zk-powered chains, reflecting a wider trend toward modular rollup ecosystems. zkSync is one of several leading zk-rollups competing to scale Ethereum through validity proofs rather than fraud proofs.

- ### Current Landscape (2026)
  - The Atlas upgrade (announced 7 October 2025, live November 2025) rebuilt the ZK Stack around ZKsync OS plus the Airbender prover, delivering a 15,000+ TPS sequencer, roughly one-second ZK finality and proving costs of about $0.0001 per transfer.
  - Airbender, unveiled 24 June 2025 as the fastest open-source RISC-V zkVM (21.8 MHz on a single H100, over 6x faster than rivals), reached approximately 1-second block proving on consumer hardware (two RTX 5090 GPUs) by Q4 2025, making real-time institutional settlement viable.
  - ZKsync pivoted from a single rollup to the "Elastic Network" of interoperable chains: Era migrated to the ZKsync Gateway on 28 July 2025, v29 shipped interop messaging and 200 ms block times, and the v31 upgrade (announced May 2026) adds native cross-chain interoperability with fees denominated in the ZK token.
  - The original ZKsync Lite rollup is being deprecated, with block production scheduled to cease on 4 May 2026 and its state permanently frozen, consolidating development on the modern ZK Stack.
  - Prividium, the permissioned privacy-preserving platform launched May 2025, drove heavy institutional adoption: a Q2-Q3 2025 pilot with 35+ financial institutions, Deutsche Bank's Memento-based DAMA 2 chain, and the ADI Chain mainnet launch (Nov 2025) backing a regulated digital Dirham with First Abu Dhabi Bank and the UAE central bank.
  - Tokenomics were overhauled by founder Alex Gluchowski's "ZK Token Proposal" (late 2025), shifting ZK from governance-only to a usage-linked utility with buybacks, burns and staking; November 2025 introduced permissionless burning and a hard-capped 21 billion max supply, and a ZK Token MiCA white paper was published for EU compliance.
  - Open challenges as of 2026 include proving sustained real-world throughput beyond lab benchmarks, sequencer decentralisation, converting institutional pilots (e.g. the Cari Network's targeted Q3 2026 five-bank tokenised-deposit pilot) into production revenue, and demonstrating that the fee-to-token value flywheel generates durable on-chain revenue.

- ### References
  - 1. ZKsync / Matter Labs (2025). Upgrades and migrations (protocol changelog). https://docs.zksync.io/zksync-protocol/upgrades-and-migrations
  - 2. ZKsync (2025). Introducing the ZK Stack's Atlas upgrade: beyond 15K TPS. https://www.zksync.io/blog/introducing-the-zk-stacks-atlas-upgrade
  - 3. Matter Labs (2026). Q4 2025 Deliverables Report (ZK Nation forum). https://forum.zknation.io/t/matter-labs-q4-2025-deliverables-report/910
  - 4. Matter Labs (2025). Q3 2025 Deliverables Report (ZK Nation forum). https://forum.zknation.io/t/matter-labs-q3-2025-deliverables-report/834
  - 5. CoinMarketCap (2026). Latest ZKsync (ZK) News Update: v31 interoperability, ZKsync Lite deprecation, tokenomics. https://coinmarketcap.com/cmc-ai/zksync/latest-updates/

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
