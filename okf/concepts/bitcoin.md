---
okf_version: "0.2"
type: Class
title: Bitcoin
resource: urn:ngm:class:bitcoin
domain: blockchain
description: "Bitcoin is the first decentralised, permissionless, peer-to-peer electronic cash system, introduced by the pseudonymous Satoshi Nakamoto in a 2008 whitepaper and launched as open-source software in January 2009. It maintains a globally shared, tamper-evident ledger — the blockchain — through a proof-of-work consensus mechanism called Nakamoto Consensus, in which miners compete to extend the chain "
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:cryptocurrency
hasPart:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-mining
  - urn:ngm:class:bitcoin-proof-of-work-protocol-layer-2
  - urn:ngm:class:bitcoin-proof-of-work-protocol-halving
  - urn:ngm:class:bitcoin-script
  - urn:ngm:class:bitcoin-proof-of-work-protocol-whitepaper
  - urn:ngm:class:bitcoin-proof-of-work-protocol-core
enables:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:de-fi
  - urn:ngm:class:self-custody
  - urn:ngm:class:censorship-resistance
  - urn:ngm:class:store-of-value
  - urn:ngm:class:financial-inclusion
implements:
  - urn:ngm:class:blockchain
  - urn:ngm:class:sound-money
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:distributed-ledger-technology
contrastsWith:
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:solana
  - urn:ngm:class:digital-currency
  - urn:ngm:class:monetary-system
bridgesTo:
  - urn:ngm:class:nostr
  - urn:ngm:class:fedimint
  - urn:ngm:class:decentralised-identity
uses:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:utxo-model
  - urn:ngm:class:nakamoto-consensus
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:elliptic-curve-cryptography
standardizedBy:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-improvement-proposals
  - urn:ngm:class:bip-341-taproot
relatedTo:
  - urn:ngm:class:mining-pool
  - urn:ngm:class:digital-asset
  - urn:ngm:class:blockchain-scalability
---

# Bitcoin

Bitcoin is the first decentralised, permissionless, peer-to-peer electronic cash system, introduced by the pseudonymous Satoshi Nakamoto in a 2008 whitepaper and launched as open-source software in January 2009. It maintains a globally shared, tamper-evident ledger — the blockchain — through a proof-of-work consensus mechanism called Nakamoto Consensus, in which miners compete to extend the chain by finding nonces satisfying a difficulty-adjusted SHA-256 hash target, earning new bitcoin and transaction fees as reward. The monetary supply is strictly bounded by a 21 million coin cap enforced deterministically via a halving schedule that reduces the block subsidy approximately every four years, conferring programmatic scarcity and censorship-resistant value transfer without reliance on any trusted intermediary. Bitcoin's UTXO model, Script-based transaction authorisation, and secp256k1 elliptic-curve cryptography together form the foundational substrate upon which Lightning Network payment channels, Taproot smart contracting, and a growing ecosystem of Layer 2 protocols are built.
