---
okf_version: "0.2"
type: Class
title: Blockchain Transaction
resource: urn:ngm:class:blockchain-transaction
domain: blockchain
description: A Blockchain Transaction is an atomic, cryptographically signed instruction that encodes a state-change on a distributed ledger — such as a transfer of digital assets, invocation of a smart contract function, or mutation of on-chain data. Transactions are broadcast to a peer-to-peer network, validated against protocol rules and the active consensus mechanism, and permanently recorded in an ordered
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:network-component
hasPart:
  - urn:ngm:class:utxo
  - urn:ngm:class:transaction-input
  - urn:ngm:class:transaction-output
  - urn:ngm:class:nonce
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:utxo-unspent-transaction-output
  - urn:ngm:class:nonce
requires:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:consensus-algorithm
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:transaction-fee
enables:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:payment-system
  - urn:ngm:class:de-fi
  - urn:ngm:class:tokenization
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:neural-network-text-tokenisation
contrastsWith:
  - urn:ngm:class:transaction
  - urn:ngm:class:transaction
  - urn:ngm:class:traditional-payment
bridgesTo:
  - urn:ngm:class:supply-chain-traceability
  - urn:ngm:class:digital-identity
uses:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:mempool
partOf:
  - urn:ngm:class:blockchain
  - urn:ngm:class:distributed-ledger
relatedTo:
  - urn:ngm:class:block
  - urn:ngm:class:layer-2-protocol
  - urn:ngm:class:transaction-throughput
---

# Blockchain Transaction

A Blockchain Transaction is an atomic, cryptographically signed instruction that encodes a state-change on a distributed ledger — such as a transfer of digital assets, invocation of a smart contract function, or mutation of on-chain data. Transactions are broadcast to a peer-to-peer network, validated against protocol rules and the active consensus mechanism, and permanently recorded in an ordered block once accepted. The transaction model differs fundamentally between UTXO-based chains (e.g. Bitcoin) and account-based chains (e.g. Ethereum), affecting parallelism, privacy, and composability.
