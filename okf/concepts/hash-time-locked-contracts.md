---
okf_version: "0.2"
type: Class
title: Hash Time-Locked Contracts
resource: urn:ngm:class:hash-time-locked-contracts
domain: blockchain
description: A type of smart contract that conditions a payment on the recipient revealing a cryptographic preimage before a deadline, enabling trustless conditional and cross-chain transfers.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:smart-contracts
requires:
  - urn:ngm:class:cryptographic-hash
  - urn:ngm:class:timelock
  - urn:ngm:class:preimage
  - urn:ngm:class:digital-signature
enables:
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:cross-chain-asset-transfer
  - urn:ngm:class:payment-routing
  - urn:ngm:class:trustless-escrow
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:consensus-mechanism
implements:
  - urn:ngm:class:smart-contracts
  - urn:ngm:class:conditional-payment
contrastsWith:
  - urn:ngm:class:trusted-third-party
  - urn:ngm:class:multisignature
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:security
  - urn:ngm:class:lightning-network
uses:
  - urn:ngm:class:sha-256
  - urn:ngm:class:bitcoin-script
  - urn:ngm:class:merkle-tree
supports:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:decentralized-exchange
  - urn:ngm:class:interoperability
relatedTo:
  - urn:ngm:class:payment-channel
  - urn:ngm:class:state-channel
  - urn:ngm:class:bitcoin
---

# Hash Time-Locked Contracts

A type of smart contract that conditions a payment on the recipient revealing a cryptographic preimage before a deadline, enabling trustless conditional and cross-chain transfers.
