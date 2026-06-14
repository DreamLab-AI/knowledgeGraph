public:: true

# Tezos
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e1b182a2295cb100a7062fdb4c02c3e236315a89ec72ab2b6906268b8e644238",
  "@type": "Page",
  "vc:slug": "tezos",
  "title": "Tezos",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:liquid-proof-of-stake",
      "vc:label": "Liquid Proof of Stake"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:consensus-protocol",
      "vc:label": "Consensus Protocol"
    },
    {
      "@id": "urn:visionflow:linked:layer-1",
      "vc:label": "Layer 1"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Tezos"
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
  "@id": "urn:ngm:class:tezos",
  "@type": "Class",
  "label": "Tezos",
  "definition": "Tezos is a self-amending, proof-of-stake Layer 1 blockchain platform launched in 2018 that enables on-chain governance through a formal, stakeholder-driven amendment process, allowing protocol upgrades to be proposed, debated, and applied without hard forks. It uses a Liquid Proof of Stake consensus mechanism in which token holders (XTZ holders) may either bake blocks themselves or delegate their stake to bakers, earning proportional rewards. The platform supports Turing-complete smart contracts written in Michelson and higher-level languages such as Ligo and SmartPy, targeting decentralised finance, NFT issuance, and digital asset custody. Its on-chain governance model is considered a pioneering example of decentralised protocol evolution and formal verification-friendly contract design.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:layer-1",
      "label": "Layer 1"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:liquid-proof-of-stake",
        "label": "Liquid Proof of Stake"
      },
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:non-fungible-token",
        "label": "Non-Fungible Token"
      },
      {
        "@id": "urn:ngm:class:on-chain-governance",
        "label": "On-chain Governance"
      },
      {
        "@id": "urn:ngm:class:digital-asset-custody",
        "label": "Digital Asset Custody"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:michelson",
        "label": "Michelson"
      },
      {
        "@id": "urn:ngm:class:formal-verification",
        "label": "Formal Verification"
      },
      {
        "@id": "urn:ngm:class:consensus-protocol",
        "label": "Consensus Protocol"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:on-chain-governance",
        "label": "On-chain Governance"
      },
      {
        "@id": "urn:ngm:class:bft-consensus",
        "label": "BFT Consensus"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:cardano",
        "label": "Cardano"
      },
      {
        "@id": "urn:ngm:class:polkadot",
        "label": "Polkadot"
      },
      {
        "@id": "urn:ngm:class:solana",
        "label": "Solana"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:cryptographic-token",
        "label": "Cryptographic Token"
      },
      {
        "@id": "urn:ngm:class:staking",
        "label": "Staking"
      },
      {
        "@id": "urn:ngm:class:protocol-upgrade",
        "label": "Protocol Upgrade"
      },
      {
        "@id": "urn:ngm:class:decentralised-application",
        "label": "Decentralised Application"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:formal-methods",
        "label": "Formal Methods"
      },
      {
        "@id": "urn:ngm:class:institutional-finance",
        "label": "Institutional Finance"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:tezos-improvement-proposal",
        "label": "Tezos Improvement Proposal"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:xtz",
      "label": "XTZ"
    }
  ],
  "quality": 0.72,
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
  "@id": "urn:visionflow:annotation:link-resolutions:tezos:afefb91b3856",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e1b182a2295cb100a7062fdb4c02c3e236315a89ec72ab2b6906268b8e644238"
  },
  "vc:resolutions": [
    {
      "raw": "[[Liquid Proof of Stake]]",
      "resolved": "urn:visionflow:linked:liquid-proof-of-stake",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Consensus Protocol]]",
      "resolved": "urn:visionflow:linked:consensus-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Layer 1]]",
      "resolved": "urn:visionflow:linked:layer-1",
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
  - Tezos is a self-amending, open-source [[Layer 1]] [[Blockchain]] platform that combines [[Liquid Proof of Stake]] consensus with on-chain protocol governance. Unlike chains that rely on hard forks for upgrades, Tezos encodes an amendment procedure directly into the protocol: stakeholders propose, vote on, and automatically apply changes to the live chain. Its [[Smart Contract]] environment is built around the formally-specified [[Michelson]] stack language, which facilitates [[Formal Verification]] of contract correctness and makes Tezos particularly attractive for security-critical and institutional use cases.

- ### Overview
  - Tezos was conceived by Arthur and Kathleen Breitman and launched its mainnet in September 2018 following one of the largest ICOs of 2017. The native token is XTZ (commonly called "tez" or "ꜩ").
  - The core design philosophy prioritises **correctness**, **longevity**, and **decentralised self-governance** over raw throughput. Rather than exporting governance off-chain (as most chains do), Tezos formalises it: every protocol upgrade goes through a structured proposal-and-vote cycle encoded in the running protocol itself.
  - The chain is operated by **bakers** — validators who lock ("bond") XTZ collateral and produce blocks. Ordinary holders who lack the minimum bond can **delegate** their stake to bakers without relinquishing custody, earning a share of block rewards. This design is called [[Liquid Proof of Stake]].
  - Tezos separates concerns into a **shell** (networking, storage, peer-to-peer) and an **economic protocol** (consensus rules, transaction types, governance). Only the economic protocol is upgraded through voting; the shell changes require a conventional software release.

- ### Key Components
  - **Liquid Proof of Stake (LPoS)**
    - Token holders choose between self-baking and delegation to a [[Staking]] baker.
    - Delegation does not transfer custody: the delegator retains control of their XTZ at all times.
    - Bakers must meet a minimum bond requirement to be eligible for block production; over-bonded bakers improve security.
  - **On-Chain Governance**
    - Protocol amendments proceed through five phases: Proposal → Exploration Vote → Cooldown → Promotion Vote → Adoption.
    - Quorum thresholds and supermajority rules prevent low-participation upgrades from passing.
    - The mechanism enables continuous protocol evolution — Tezos has undergone many named upgrades (Athens, Babylon, Carthage, Delphi, Edo, Florence, Granada, Hangzhou, Ithaca, Jakarta, Kathmandu, Lima, Mumbai, Nairobi, Oxford, Paris, Quebec …) without contentious forks.
    - Related concept: [[On-Chain Governance]].
  - **Michelson**
    - A low-level, stack-based, statically-typed language designed for [[Formal Verification]].
    - Contracts are deterministic and side-effect-free, enabling mathematical proofs of correctness.
    - Higher-level languages (Ligo, SmartPy, ArcheType, Cameligo) compile down to [[Michelson]].
  - **Sapling / Shielded Transactions**
    - An optional privacy layer based on zk-SNARKs that allows confidential token transfers within a shielded pool, similar in concept to [[Zero-Knowledge Proof]] applications on other chains.
  - **Optimistic and ZK Rollups**
    - Layer 2 solutions (e.g. Tezos Rollup / Smart Rollups introduced in the Mumbai upgrade) extend throughput by moving execution off-chain while anchoring proofs on the Layer 1.
    - Connects Tezos to the broader [[Layer 2 Scaling]] ecosystem.
  - **Baking Accounts and Consensus (Tenderbake)**
    - The Ithaca upgrade introduced Tenderbake, a [[BFT Consensus]] variant that provides single-block finality (finality in roughly 30 seconds).
    - Replaces the earlier Emmy* algorithm, significantly reducing latency for downstream applications.
  - **Tezos Improvement Proposals (TIPs / TZIP)**
    - The off-chain standards process (Tezos Improvement Proposals) coordinates interface standards for tokens (FA1.2, FA2) and metadata, complementing on-chain governance.
    - Analogous to [[Ethereum]]'s ERC standards.

- ### Applications and Use Cases
  - **Decentralised Finance (DeFi)**
    - Tezos hosts a DeFi ecosystem including [[Decentralised Finance]] protocols (DEXes such as Plenty and Quipuswap, lending markets, stablecoin issuance).
    - The formal-verification bias reduces smart-contract exploit risk, attracting security-conscious DeFi developers.
  - **NFT Issuance and Digital Art**
    - Tezos became a prominent [[Non-Fungible Token]] platform; marketplaces such as objkt.com and fx(hash) emerged as major venues for generative art NFTs.
    - Low transaction fees (relative to Ethereum) made Tezos attractive for high-volume NFT minting.
  - **Digital Asset Custody and Institutional Finance**
    - The formal-verification capabilities and regulatory engagement of the Tezos Foundation attracted institutional interest in [[Digital Asset Custody]] and tokenised securities.
    - Partners including Société Générale-FORGE have issued tokenised bonds on Tezos.
  - **Central Bank Digital Currencies (CBDCs)**
    - Tezos has been explored as an infrastructure layer for CBDC pilots, particularly in francophone jurisdictions, given its auditability and formal-methods heritage.
    - Connects to [[Institutional Finance]] and [[Governance]] domains.
  - **Gaming and Metaverse Assets**
    - The FA2 multi-token standard supports gaming item issuance and interoperable [[Decentralised Application]] ecosystems.

- ### Relationships
  - subClassOf:: [[Layer 1]]
  - requires:: [[Liquid Proof of Stake]]
  - requires:: [[Proof of Stake]]
  - enables:: [[Smart Contract]]
  - enables:: [[Decentralised Finance]]
  - enables:: [[Non-Fungible Token]]
  - enables:: [[On-Chain Governance]]
  - enables:: [[Digital Asset Custody]]
  - uses:: [[Michelson]]
  - uses:: [[Formal Verification]]
  - uses:: [[Consensus Protocol]]
  - implements:: [[On-Chain Governance]]
  - implements:: [[BFT Consensus]]
  - contrastsWith:: [[Ethereum]]
  - contrastsWith:: [[Cardano]]
  - contrastsWith:: [[Polkadot]]
  - contrastsWith:: [[Solana]]
  - relatedTo:: [[Blockchain]]
  - relatedTo:: [[Cryptographic Token]]
  - relatedTo:: [[Staking]]
  - relatedTo:: [[Protocol Upgrade]]
  - relatedTo:: [[Decentralised Application]]
  - bridges-to:: [[Formal Methods]]
  - bridges-to:: [[Institutional Finance]]
  - standardizedBy:: [[Tezos Improvement Proposal]]

- ### Standards and Context
  - **TZIP Standards** — Tezos Improvement Proposals define contract interfaces and metadata schemas. Key standards include:
    - TZIP-7 (FA1.2): fungible token standard analogous to ERC-20.
    - TZIP-12 (FA2): multi-asset standard supporting fungible, non-fungible, and semi-fungible tokens; analogous to ERC-1155.
    - TZIP-16: contract metadata standard.
  - **Formal Methods Alignment** — Michelson's design was informed by programming language theory research; its type system enables machine-checked proofs, placing Tezos in dialogue with [[Formal Methods]] and [[Program Verification]] traditions.
  - **Regulatory Engagement** — The Tezos Foundation (a Swiss foundation) has actively engaged with regulators in the EU and US, positioning Tezos as a compliance-friendly platform for tokenised securities under frameworks such as MiCA.
  - **Energy Efficiency** — As a pure proof-of-stake chain since genesis, Tezos has no proof-of-work legacy, making it relevant to discussions of [[Sustainable Computing]] in the blockchain space.

- ### Comparison with Peer Layer-1 Platforms
  - [[Ethereum]]: the dominant smart contract platform; uses a similar PoS model (since the Merge) but governance is off-chain (EIP process + client teams); Solidity vs Michelson is a core differentiator.
  - [[Cardano]]: also targets formal verification (Plutus/Haskell ecosystem); uses a different governance model (Voltaire CIP process); competes directly in the institutional market.
  - [[Polkadot]]: heterogeneous sharding rather than a single amended chain; on-chain governance via OpenGov; different scalability trade-off.
  - [[Solana]]: prioritises throughput and low latency over formal correctness; uses Proof of History; far higher TPS but a different security-cost trade-off.

- ### Provenance
  - sources:: Tezos whitepaper (L.M. Goodman, 2014); Tezos Foundation annual reports; Tenderbake specification (Nomadic Labs); TZIP standards repository
  - updated:: 2026-06-13
  - migration-date:: 2026-05-29T00:00:00Z
