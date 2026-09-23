---
okf_version: "0.2"
type: Class
title: Litecoin
resource: urn:ngm:class:litecoin
domain: blockchain
description: "Litecoin is a peer-to-peer cryptocurrency created in 2011 by Charlie Lee as an early fork of the Bitcoin codebase. It was designed for faster confirmation, using a target block time of around 2.5 minutes, and it uses the Scrypt hashing algorithm for proof-of-work in place of Bitcoin's SHA-256. It is often described as a lighter complement to Bitcoin and has served as a testing ground for protocol "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:cryptocurrency
  - urn:ngm:class:blockchain-domain
requires:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:scrypt
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:blockchain-node
enables:
  - urn:ngm:class:digital-payments
  - urn:ngm:class:micropayments
  - urn:ngm:class:cross-border-payments
dependsOn:
  - urn:ngm:class:mining
  - urn:ngm:class:consensus-mechanism
implements:
  - urn:ngm:class:segregated-witness
  - urn:ngm:class:utxo-model
  - urn:ngm:class:fixed-supply-schedule
contrastsWith:
  - urn:ngm:class:bitcoin
  - urn:ngm:class:ethereum
  - urn:ngm:class:bitcoin-proof-of-work-protocol-cash
bridgesTo:
  - urn:ngm:class:de-fi
  - urn:ngm:class:payment-network
  - urn:ngm:class:bitcoin-proof-of-work-protocol
  - urn:ngm:class:bitcoin-proof-of-work-protocol-lightning-network
uses:
  - urn:ngm:class:sha-256
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:digital-signature
supports:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:atomic-swap
partOf:
  - urn:ngm:class:cryptocurrency
relatedTo:
  - urn:ngm:class:cryptocurrency
---

# Litecoin

Litecoin is a peer-to-peer cryptocurrency created in 2011 by Charlie Lee as an early fork of the Bitcoin codebase. It was designed for faster confirmation, using a target block time of around 2.5 minutes, and it uses the Scrypt hashing algorithm for proof-of-work in place of Bitcoin's SHA-256. It is often described as a lighter complement to Bitcoin and has served as a testing ground for protocol changes such as Segregated Witness.
