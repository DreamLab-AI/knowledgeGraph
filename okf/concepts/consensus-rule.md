---
okf_version: "0.2"
type: Class
title: Consensus Rule
resource: urn:ngm:class:consensus-rule
domain: blockchain
description: "A Consensus Rule is a protocol-level validation requirement that every fully-validating node in a blockchain network must enforce uniformly to reach and maintain agreement on the canonical chain state. Consensus rules define which blocks and transactions are valid, covering aspects such as block structure, cryptographic proofs, transaction format, gas limits, and state-transition logic. Deviation "
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:consensus-protocol
hasPart:
  - urn:ngm:class:fork-choice-rule
requires:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:distributed-ledger
enables:
  - urn:ngm:class:finality
  - urn:ngm:class:blockchain-governance
  - urn:ngm:class:smart-contract
contrastsWith:
  - urn:ngm:class:governance-model
relatedTo:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:validator-set
  - urn:ngm:class:51-attack
  - urn:ngm:class:blockchain
---

# Consensus Rule

A Consensus Rule is a protocol-level validation requirement that every fully-validating node in a blockchain network must enforce uniformly to reach and maintain agreement on the canonical chain state. Consensus rules define which blocks and transactions are valid, covering aspects such as block structure, cryptographic proofs, transaction format, gas limits, and state-transition logic. Deviation from consensus rules — whether accidental or deliberate — results in a fork, splitting the network into incompatible chains.
