---
okf_version: "0.2"
type: Class
title: Bitcoin Protocol
resource: urn:ngm:class:bitcoin-protocol
domain: blockchain
description: The set of rules governing how Bitcoin transactions are formed, validated, and ordered into blocks by proof-of-work consensus, including the UTXO model, scripting system, block reward schedule, and difficulty adjustment mechanism.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:bitcoin-proof-of-work-protocol
hasPart:
  - urn:ngm:class:bitcoin-script
  - urn:ngm:class:block-reward
  - urn:ngm:class:difficulty-adjustment
  - urn:ngm:class:mempool
requires:
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:utxo
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:digital-signature
enables:
  - urn:ngm:class:bitcoin-script
  - urn:ngm:class:lightning-network
  - urn:ngm:class:peer-to-peer-payment
implements:
  - urn:ngm:class:nakamoto-consensus
  - urn:ngm:class:byzantine-fault-tolerance
contrastsWith:
  - urn:ngm:class:ethereum
  - urn:ngm:class:proof-of-stake
bridgesTo:
  - urn:ngm:class:de-fi
  - urn:ngm:class:digital-currency
  - urn:ngm:class:block-reward
uses:
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:sha-256
  - urn:ngm:class:elliptic-curve-cryptography
relatedTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:mining
---

# Bitcoin Protocol

The set of rules governing how Bitcoin transactions are formed, validated, and ordered into blocks by proof-of-work consensus, including the UTXO model, scripting system, block reward schedule, and difficulty adjustment mechanism.
