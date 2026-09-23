---
okf_version: "0.2"
type: Class
title: Bitcoin Core
resource: urn:ngm:class:bitcoin-proof-of-work-protocol-core
domain: blockchain
description: Bitcoin Core is the canonical, open-source reference implementation of the Bitcoin protocol, written primarily in C++, which full nodes run to independently validate transactions, enforce consensus rules, and maintain a complete local copy of the blockchain. Originally released by Satoshi Nakamoto in January 2009 and subsequently maintained by a global community of contributors, it establishes the
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:blockchain-protocol
hasPart:
  - urn:ngm:class:json-data-interchange-format-rpc
  - urn:ngm:class:bitcoin-wallet
  - urn:ngm:class:bitcoin-scripting-language
  - urn:ngm:class:json-data-interchange-format-rpc
requires:
  - urn:ngm:class:full-node
  - urn:ngm:class:distributed-ledger
enables:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:de-fi
  - urn:ngm:class:digital-asset-custody
dependsOn:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-network
  - urn:ngm:class:open-source-software
implements:
  - urn:ngm:class:nakamoto-consensus
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:utxo-model
contrastsWith:
  - urn:ngm:class:ethereum
  - urn:ngm:class:proof-of-stake
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:cryptography
uses:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:digital-signature
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:merkle-tree
relatedTo:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-mining
  - urn:ngm:class:bitcoin-proof-of-work-protocol-improvement-proposals
  - urn:ngm:class:segregated-witness
  - urn:ngm:class:taproot
  - urn:ngm:class:soft-fork
---

# Bitcoin Core

Bitcoin Core is the canonical, open-source reference implementation of the Bitcoin protocol, written primarily in C++, which full nodes run to independently validate transactions, enforce consensus rules, and maintain a complete local copy of the blockchain. Originally released by Satoshi Nakamoto in January 2009 and subsequently maintained by a global community of contributors, it establishes the authoritative behaviour of the Bitcoin network through its codebase. The software bundles a peer-to-peer networking layer, a UTXO-based scripting engine, a deterministic wallet, a mining interface, and a JSON-RPC API for integration with higher-level applications. Protocol changes are introduced exclusively via Bitcoin Improvement Proposals, requiring broad community review and backward-compatible soft-fork activation to preserve network cohesion.
