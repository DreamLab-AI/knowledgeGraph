---
okf_version: "0.2"
type: Class
title: Bitcoin Network
resource: urn:ngm:class:bitcoin-proof-of-work-protocol-network
domain: blockchain
description: The Bitcoin Network is the global, permissionless peer-to-peer infrastructure underpinning the Bitcoin cryptocurrency, comprising full nodes, mining nodes, and the gossip protocol that propagates signed transactions and mined blocks across the internet without central coordination. It employs the Nakamoto consensus mechanism—proof-of-work mining on the SHA-256 hash function—to achieve Byzantine-fa
maturity: mature
quality: 0.75
is-a:
  - urn:ngm:class:peer-to-peer-network
hasPart:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-mining
  - urn:ngm:class:mempool
  - urn:ngm:class:utxo-model
  - urn:ngm:class:full-node
  - urn:ngm:class:bitcoin-script
requires:
  - urn:ngm:class:internet-protocol
  - urn:ngm:class:distributed-ledger-technology
enables:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:cryptocurrency
  - urn:ngm:class:digital-asset-custody
  - urn:ngm:class:de-fi
dependsOn:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:merkle-tree
implements:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-improvement-proposals
  - urn:ngm:class:segregated-witness
  - urn:ngm:class:bitcoin-proof-of-work-protocol-improvement-proposals
contrastsWith:
  - urn:ngm:class:ethereum
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:ethereum
bridgesTo:
  - urn:ngm:class:financial-infrastructure
  - urn:ngm:class:central-bank-digital-currency-cbdc
uses:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:nakamoto-consensus
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:sha-256
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:gossip-protocol
supports:
  - urn:ngm:class:multisignature
  - urn:ngm:class:spv-verification
relatedTo:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-technical-overview
  - urn:ngm:class:blockchain
  - urn:ngm:class:digital-currency
---

# Bitcoin Network

The Bitcoin Network is the global, permissionless peer-to-peer infrastructure underpinning the Bitcoin cryptocurrency, comprising full nodes, mining nodes, and the gossip protocol that propagates signed transactions and mined blocks across the internet without central coordination. It employs the Nakamoto consensus mechanism—proof-of-work mining on the SHA-256 hash function—to achieve Byzantine-fault-tolerant agreement on a single shared transaction ledger among mutually distrusting participants. The network enforces deterministic monetary policy through its protocol rules, automatically adjusting mining difficulty every 2,016 blocks to target a ten-minute inter-block interval and capping total issuance at 21 million BTC via a geometric halving schedule. Launched in January 2009, it is the longest-continuously-operated public blockchain and the foundational reference implementation for decentralised digital value transfer.
