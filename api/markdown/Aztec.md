public:: true

# Aztec
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ec3d155457fd47ac1f199db85bcc7eaf319693f0b35963c087251ded1bcf3ce1",
  "@type": "Page",
  "vc:slug": "aztec",
  "title": "Aztec",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:zero-knowledge-proof",
      "vc:label": "Zero-Knowledge Proof"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:privacy",
      "vc:label": "Privacy"
    },
    {
      "@id": "urn:visionflow:linked:aztec-protocol",
      "vc:label": "Aztec Protocol"
    },
    {
      "@id": "urn:visionflow:linked:layer-2-networks",
      "vc:label": "Layer 2 Networks"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Aztec"
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
  "@id": "urn:ngm:class:aztec",
  "@type": "Class",
  "label": "Aztec",
  "definition": "A privacy-focused Layer 2 network for Ethereum that uses zero-knowledge proofs to enable confidential transactions and private smart contract execution, supporting encrypted notes, private state transitions, and programmable privacy at the application layer.",
  "domain": "blockchain",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:layer-2-networks",
      "label": "Layer 2 Networks"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform",
        "label": "Ethereum Smart Contract Platform"
      },
      {
        "@id": "urn:ngm:class:zk-snark",
        "label": "ZK-SNARK"
      },
      {
        "@id": "urn:ngm:class:rollup",
        "label": "Rollup"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      },
      {
        "@id": "urn:ngm:class:confidential-transactions",
        "label": "Confidential Transaction"
      },
      {
        "@id": "urn:ngm:class:private-smart-contract",
        "label": "Private Smart Contract"
      },
      {
        "@id": "urn:ngm:class:programmable-privacy",
        "label": "Programmable Privacy"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:aztec-protocol",
        "label": "Aztec Protocol"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum Ecosystem"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:noir",
        "label": "Noir Programming Language"
      },
      {
        "@id": "urn:ngm:class:homomorphic-encryption",
        "label": "Homomorphic Encryption"
      },
      {
        "@id": "urn:ngm:class:utxo-model",
        "label": "UTXO Model"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:cryptographic-proof",
        "label": "Cryptographic Proof"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:optimistic-rollup",
        "label": "Optimistic Rollup"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-computation",
        "label": "Privacy-Preserving Computation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decentralized-finance",
        "label": "Decentralized Finance"
      },
      {
        "@id": "urn:ngm:class:digital-asset",
        "label": "Digital Asset"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Transparent Blockchain"
      },
      {
        "@id": "urn:ngm:class:optimism",
        "label": "Optimism"
      },
      {
        "@id": "urn:ngm:class:arbitrum",
        "label": "Arbitrum"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:security",
        "label": "Security"
      },
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:starknet",
        "label": "StarkNet"
      },
      {
        "@id": "urn:ngm:class:polygon-zkevm",
        "label": "Polygon zkEVM"
      },
      {
        "@id": "urn:ngm:class:tornado-cash",
        "label": "Tornado Cash"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:aztec-network",
      "label": "Aztec Network"
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
  "@id": "urn:visionflow:annotation:link-resolutions:aztec:4fcd983f1118",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ec3d155457fd47ac1f199db85bcc7eaf319693f0b35963c087251ded1bcf3ce1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Zero-Knowledge Proof]]",
      "resolved": "urn:visionflow:linked:zero-knowledge-proof",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Privacy]]",
      "resolved": "urn:visionflow:linked:privacy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Aztec Protocol]]",
      "resolved": "urn:visionflow:linked:aztec-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[Layer 2 Networks]]",
      "resolved": "urn:visionflow:linked:layer-2-networks",
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
  - A privacy-focused Layer 2 network for Ethereum that uses zero-knowledge proofs to enable confidential transactions and private smart contract execution.

- ### Semantic Classification
  - owl-class:: blockchain:Aztec
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Layer 2 Networks]]
  - bridges-to:: [[Aztec Protocol]]
  - requires:: [[Zero-Knowledge Proof]], [[Ethereum Smart Contract Platform]]
  - enables:: [[Privacy]]

- ### Content
  - Aztec applies zero-knowledge proofs so that transaction amounts and participants can remain hidden while still being verifiable. The network aims to bring confidential state and private contract logic to an Ethereum rollup.
  - Encrypted notes represent value, and proofs attest that state transitions are valid without revealing their contents. This combines the scaling benefits of a rollup with privacy at the application layer.

- ### Current Landscape (2026)
  - Aztec's decentralised mainnet coordination layer, the Ignition Chain, went live on 19 November 2025 as one of the first Ethereum L2s Vitalik Buterin recognised as reaching "Stage 2" decentralisation; it launched consensus-first (producing blocks with hardcoded decentralised sequencing) but with the private smart-contract execution layer deliberately switched off at genesis.
  - The network grew rapidly after launch, reaching 3,400+ sequencers and 50+ provers across five continents, maintaining a 99%+ attestation rate and crossing 75k blocks with zero downtime, including through Ethereum's Fusaka upgrade in December 2025; top operators include P2P.org, Nethermind and ZKV.
  - The $AZTEC token generation event executed on 12 February 2026 after a community governance vote cleared on 26 January 2026, opening an AZTEC/ETH Uniswap v4 pool; the preceding on-chain public sale (2-6 December 2025) used a Continuous Clearing Auction co-developed with Uniswap Labs, raising 19,476 ETH (~$61M) from 16,700+ participants against a 10.35 billion genesis supply, with validators required to stake 200,000 AZTEC.
  - Aztec launched its Alpha Network with full private smart-contract execution in late March 2026, then shipped the v5 alpha (version 5.1.0) on 21 July 2026, moving zero-knowledge proof generation client-side onto users' own phones and browsers via the CHONK proving system, which the team says more than halved private-transaction times and cut typical private-transfer fees below $0.05.
  - Contracts are written in Noir, Aztec's Rust-like DSL, which reached a stable 1.0 pre-release; the architecture uses a hybrid state model (UTXO-like private note trees plus key-value public trees) and decoupled proving backends (UltraHonk, Plonky2, Halo2), with settlement to Ethereum roughly every 12 seconds.
  - In May 2026 Aztec acquired ZKPassport (pledged to remain open source), adding zero-knowledge identity tooling for selective disclosure and Sybil-resistant sanctions screening, already used during the token sale.
  - Open challenges as of 2026 remain acute: a critical vulnerability in the proving system disclosed on 27 March 2026 (theft-of-funds severity) was only patched in the delayed v5 release; the network still runs at very low throughput with 36-72 second block times, targeting a competitive ~4 seconds only by year-end; and in early August 2026 the Aztec Foundation cut roughly 55% of its workforce amid restructuring, days after v5 shipped.

- ### References
  - 1. BlockchainDose (2026). What Is Aztec Network? Ethereum's Privacy-First ZkRollup. https://blockchaindose.com/aztec-network-ethereum-explained/
  - 2. SpendNode (2026). Aztec Network Launches $AZTEC Token as Ethereum's First Privacy L2 Goes Live With 3,400 Sequencers. https://www.spendnode.io/blog/aztec-network-launches-aztec-token-privacy-l2-ethereum-tge/
  - 3. KuCoin News (2026). Aztec v5 Alpha Launches: Client-Side ZK Enables Privacy-Native Smart Contracts on Ethereum. https://www.kucoin.com/news/flash/aztec-v5-alpha-launches-client-side-zk-enables-privacy-native-smart-contracts-on-ethereum
  - 4. The Defiant (2026). Aztec Launches Alpha Network, Ethereum's First L2 for Private Smart Contracts. https://thedefiant.io/news/blockchains/aztec-launches-alpha-network-ethereum-s-first-l2-for-private-smart-contracts
  - 5. Aztec Network (2026). Aztec Ignition Chain Update. https://aztec.network/blog/aztec-ignition-chain-update
  - 6. Crypto Briefing (2026). Aztec Foundation lays off 55% of workforce amid restructuring. https://cryptobriefing.com/aztec-foundation-layoffs-restructuring/

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
