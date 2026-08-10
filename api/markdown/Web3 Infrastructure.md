public:: true

# Web3 Infrastructure
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:48288d06bcb9a1172a94d4604571ebc39ff09d8bbc63a523018326264d0ecaea",
  "@type": "Page",
  "vc:slug": "web-3-infrastructure",
  "title": "Web3 Infrastructure",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:distributed-ledger-technology",
      "vc:label": "Distributed Ledger Technology"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-identity",
      "vc:label": "Decentralised Identity"
    },
    {
      "@id": "urn:visionflow:linked:interoperability",
      "vc:label": "Interoperability"
    },
    {
      "@id": "urn:visionflow:linked:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:linked:https-ethereum-org-en-developers-docs",
      "vc:label": "https://ethereum.org/en/developers/docs/"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-web-3",
      "vc:label": "https://en.wikipedia.org/wiki/Web3"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Web3 Infrastructure"
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
  "@id": "urn:ngm:class:web-3-infrastructure",
  "@type": "Class",
  "label": "Web3 Infrastructure",
  "definition": "Web3 infrastructure is the set of protocols, nodes, storage and tooling that supports decentralised applications built on blockchain networks, encompassing peer-to-peer communication layers, decentralised storage, indexing services, cross-chain bridges, and wallet primitives.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    },
    {
      "@id": "urn:ngm:class:decentralised-web",
      "label": "Decentralised Web"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:blockchain-node",
        "label": "Blockchain Node"
      },
      {
        "@id": "urn:ngm:class:decentralised-storage",
        "label": "Decentralised Storage"
      },
      {
        "@id": "urn:ngm:class:cross-chain-bridge",
        "label": "Cross-Chain Bridge"
      },
      {
        "@id": "urn:ngm:class:blockchain-oracle",
        "label": "Blockchain Oracle"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:decentralised-web",
        "label": "Decentralised Web"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:distributed-ledger-technology",
        "label": "Distributed Ledger Technology"
      },
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      },
      {
        "@id": "urn:ngm:class:cryptographic-key-management",
        "label": "Cryptographic Key Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      },
      {
        "@id": "urn:ngm:class:decentralised-application",
        "label": "Decentralised Application"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:tokenization",
        "label": "Tokenisation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum Protocol"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:ipfs",
        "label": "IPFS"
      },
      {
        "@id": "urn:ngm:class:wallet",
        "label": "Wallet"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:non-fungible-token",
        "label": "Non-Fungible Token"
      },
      {
        "@id": "urn:ngm:class:decentralised-autonomous-organisation",
        "label": "Decentralised Autonomous Organisation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:cloud-infrastructure",
        "label": "Centralised Cloud Infrastructure"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:layer-2-scaling",
        "label": "Layer 2 Scaling"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:decentralised-network-infrastructure",
      "label": "Decentralised Network Infrastructure"
    },
    {
      "@id": "urn:ngm:class:blockchain-infrastructure",
      "label": "Blockchain Infrastructure"
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
  "@id": "urn:visionflow:annotation:link-resolutions:web-3-infrastructure:2c92c4123aa1",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:48288d06bcb9a1172a94d4604571ebc39ff09d8bbc63a523018326264d0ecaea"
  },
  "vc:resolutions": [
    {
      "raw": "[[Distributed Ledger Technology]]",
      "resolved": "urn:visionflow:linked:distributed-ledger-technology",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralised Identity]]",
      "resolved": "urn:visionflow:linked:decentralised-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Interoperability]]",
      "resolved": "urn:visionflow:linked:interoperability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:linked:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://ethereum.org/en/developers/docs/]]",
      "resolved": "urn:visionflow:linked:https-ethereum-org-en-developers-docs",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Web3]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-web-3",
      "kind": "StubLink"
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
  - Web3 infrastructure is the set of protocols, nodes, storage and tooling that supports decentralised applications built on blockchain networks.

- ### Semantic Classification
  - owl-class:: distributed-systems:Web3Infrastructure
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Blockchain]]
  - bridges-to:: [[Interoperability]]
  - requires:: [[Distributed Ledger Technology]]
  - enables:: [[Decentralised Identity]]

- ### Content
  - Web3 infrastructure includes blockchain nodes, remote procedure call endpoints, decentralised storage, indexing services and wallet tooling. These components allow applications to read from and write to distributed ledgers.
  - Providers operate node networks and indexing layers so that developers can build without running full chain infrastructure themselves. Cross-chain bridges and oracles extend connectivity between networks and external data.

- ### Current Landscape (2026)
  - Ethereum's Fusaka upgrade activated on mainnet on 3 December 2025, shipping PeerDAS (EIP-7594) data-availability sampling so nodes verify rollup blob data by sampling rather than full download; paired with config-only Blob Parameter Only (BPO) forks it raised the per-block blob target from 6 to 14 (max 9 to 21) by January 2026, roughly 8x theoretical blob throughput for Layer 2s.
  - Following Dencun (March 2024), Pectra (May 2025) and Fusaka (December 2025), the L1 gas limit was standardised at 60M (EIP-7935) with a 16.78M per-transaction cap (EIP-7825); by mid-2026 a basic ETH transfer settled for under a cent and Layer 2 daily transaction volume ran roughly 12-14x mainnet, with the next upgrade Glamsterdam (ePBS, block-level access lists) targeted for H2 2026.
  - Account abstraction reached mainstream wallets via Pectra's EIP-7702, giving ordinary EOAs smart-account behaviour (batching, gas sponsorship, session keys, passkey/WebAuthn flows, aided by native secp256r1 verification in Fusaka's EIP-7951) without account migration.
  - Real-world asset (RWA) tokenisation matured into an institutional category: BlackRock's BUIDL fund (launched March 2024) passed 1 billion dollars AUM and became usable as collateral, Franklin Templeton's Benji platform expanded across Ethereum, Arbitrum, Avalanche, Aptos and Base, and by July 2026 Ethereum mainnet hosted around 17 billion dollars of tokenised RWA plus roughly 156 billion in stablecoins.
  - Regulation shifted from enforcement-by-litigation to hard statutory deadlines: the EU's MiCA transitional grandfathering ended 1 July 2026 (USDT withdrawn from major EU venues after Tether declined EMT authorisation, leaving USDC the only authorised top-10 stablecoin), and an EBA no-action deadline of 2 March 2026 pulled e-money-token services into dual MiCA/PSD2 licensing.
  - In the US the GENIUS Act (Public Law 119-27, signed 18 July 2025) created the first federal payment-stablecoin framework mandating 1:1 high-quality liquid reserves, monthly attestations and Bank Secrecy Act AML duties; final implementing rules were statutorily due 18 July 2026 with the regime binding in early 2027, and proposed OCC/FDIC terms include a 5 million dollar capital floor and same-day redeemability thresholds.
  - Frontier problems as of 2026 centre on Layer 2 fragmentation, being addressed by shared sequencing and cross-rollup composability (atomic cross-rollup transactions) and initiatives such as the Optimism Superchain; alongside DePIN maturation (Helium's LoRaWAN-to-5G migration, proof-of-coverage shifting toward demand-linked rewards) and the convergence of on-chain payments with autonomous AI agents settling on stablecoin rails.

- ### References
  - 1. ethereum.org (2026). Fulu-Osaka (Fusaka) and Building on Ethereum in 2026: what has changed. https://ethereum.org/latest/building-on-ethereum-in-2026/
  - 2. Ethereum Foundation (2025). Fusaka Mainnet Announcement. https://blog.ethereum.org/2025/11/06/fusaka-mainnet-announcement
  - 3. Chainstack (2026). How regulation is reshaping crypto infrastructure in 2026. https://chainstack.com/crypto-regulation-in-2026/
  - 4. thirdweb (2026). GENIUS Act Stablecoin Rules: What Web3 Builders Need to Know. https://blog.thirdweb.com/genius-act-deadline-what-the-309b-stablecoin-rulebook-means-for-web3-builders/
  - 5. AMINA Group (2025). Ethereum Fusaka Upgrade: Scaling Infrastructure Through Data Efficiency. https://aminagroup.com/research/ethereum-fusaka-upgrade-scaling-infrastructure-through-data-efficiency/
  - 6. Paul Simroth (2026). Blockchain and Web3 Trends for 2026 and Beyond. https://www.paulsimroth.at/blog/blockchain-trends-2026

- ### Provenance
  - sources:: [[https://ethereum.org/en/developers/docs/]], [[https://en.wikipedia.org/wiki/Web3]]
  - migration-date:: 2026-05-29T00:00:00Z
