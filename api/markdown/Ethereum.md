public:: true
alias:: BC-0066-ethereum

# Ethereum
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ethereum",
  "@type": "Page",
  "vc:slug": "ethereum",
  "title": "Ethereum",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ethereum",
  "@type": "Class",
  "label": "Ethereum",
  "definition": "Ethereum is a decentralised, open-source blockchain platform that introduced Turing-complete smart contracts, enabling programmable, self-executing agreements without trusted intermediaries. Launched in 2015 by Vitalik Buterin and co-founders, it underpins the largest ecosystem of decentralised applications (dApps), decentralised finance (DeFi), and NFT markets. Its transition to proof-of-stake consensus via The Merge in September 2022 dramatically reduced its energy footprint while preserving security.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:blockchain-network", "label": "Blockchain Network"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:proof-of-stake", "label": "Proof of Stake"},
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:decentralized-finance-de-fi", "label": "Decentralized Finance (DeFi)"},
      {"@id": "urn:ngm:class:nft", "label": "NFT"},
      {"@id": "urn:ngm:class:dao", "label": "DAO"},
      {"@id": "urn:ngm:class:token-standard", "label": "Token Standard"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:cryptocurrency", "label": "Cryptocurrency"},
      {"@id": "urn:ngm:class:distributed-ledger-technology", "label": "Distributed Ledger Technology"},
      {"@id": "urn:ngm:class:mi-ca-regulation", "label": "MiCA Regulation"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:blockchain-protocol", "label": "Blockchain Protocol"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Ethereum is a programmable blockchain platform that pioneered smart contracts and serves as the foundational infrastructure for the decentralised application ecosystem, transitioning to proof-of-stake consensus in 2022.

- ### Relationships
  - Ethereum is an instance of [[Blockchain Network]] and extends [[Blockchain]] technology with general-purpose programmability via [[Smart Contract]] execution. It underpins [[Decentralized Finance (DeFi)]], [[NFT]] markets, and [[DAO]] governance structures. The [[Token Standard]] ERC-20 and ERC-721, defined on Ethereum, dominate [[Cryptocurrency]] and digital-asset issuance. [[MiCA Regulation]] directly targets Ethereum-issued assets and stablecoins. Its consensus shift draws on [[Proof of Stake]] principles and [[Consensus Mechanism]] research.

- ### Content
  - Ethereum was proposed in a 2013 white paper by Vitalik Buterin and launched in July 2015 after a crowdfunded development phase. Its core innovation was the Ethereum Virtual Machine (EVM), a sandboxed runtime that executes bytecode deterministically across all nodes, enabling developers to deploy arbitrary programs — smart contracts — whose state transitions are recorded immutably on-chain.

  - The platform's native currency, Ether (ETH), pays transaction fees ("gas") and incentivises validators. Prior to The Merge, Ethereum used proof-of-work mining analogous to Bitcoin; the September 2022 transition to the Beacon Chain's proof-of-stake consensus reduced energy consumption by approximately 99.95 % and paved the way for subsequent scalability improvements (proto-danksharding, EIP-4844, full danksharding roadmap).

  - Ethereum's smart-contract layer spawned the ERC-20 fungible-token standard and ERC-721 non-fungible token standard, catalysing the ICO boom of 2017–2018 and the NFT wave of 2020–2022. DeFi protocols — Uniswap, Aave, Compound, MakerDAO — collectively locked billions of dollars in smart-contract collateral, creating on-chain financial primitives (automated market makers, lending pools, algorithmic stablecoins) that operate without custodians.

  - Scalability remains a central engineering challenge. Layer-2 solutions — Optimistic Rollups (Optimism, Arbitrum) and ZK-Rollups (zkSync, StarkNet, Polygon zkEVM) — batch transactions off-chain and post compressed proofs or data to Ethereum's Layer-1, increasing throughput by orders of magnitude while inheriting base-layer security. EIP-4844 ("proto-danksharding"), activated in March 2024, introduced blob-carrying transactions that further reduce L2 data-posting costs.

  - From a regulatory perspective, Ethereum and assets issued on it fall under the EU's Markets in Crypto-Assets (MiCA) framework. Ether itself is classified as a crypto-asset not covered by the stablecoin or e-money token sub-categories, leaving its treatment partly to national competent authorities. The Ethereum Foundation's non-profit structure and the network's decentralised validator set complicate the identification of a single "issuer" responsible for regulatory compliance, a tension that regulators and courts continue to adjudicate.
