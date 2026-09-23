---
okf_version: "0.2"
type: Class
title: Difficulty
resource: urn:ngm:class:difficulty
domain: blockchain
description: Difficulty is a dynamic parameter in proof-of-work blockchain systems that expresses the computational effort required to find a valid block hash—specifically, the number of leading zeros (or equivalent target threshold) that a candidate block hash must satisfy for the block to be accepted by the network. The difficulty value is adjusted periodically by the protocol based on the observed rate of b
maturity: established
quality: 0
is-a:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:cryptographic-primitive
hasPart:
  - urn:ngm:class:nonce
  - urn:ngm:class:difficulty-adjustment
requires:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:hash-function
enables:
  - urn:ngm:class:mining
  - urn:ngm:class:consensus-protocol
dependsOn:
  - urn:ngm:class:blockchain-network
partOf:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:blockchain-protocol
relatedTo:
  - urn:ngm:class:block-time
  - urn:ngm:class:block-height
  - urn:ngm:class:blockchain-energy-consumption
  - urn:ngm:class:mining-reward
---

# Difficulty

Difficulty is a dynamic parameter in proof-of-work blockchain systems that expresses the computational effort required to find a valid block hash—specifically, the number of leading zeros (or equivalent target threshold) that a candidate block hash must satisfy for the block to be accepted by the network. The difficulty value is adjusted periodically by the protocol based on the observed rate of block production relative to the target interval, ensuring that new blocks are produced at a predictable rate regardless of fluctuations in aggregate network hash rate. Difficulty is the primary mechanism by which proof-of-work blockchains self-regulate their monetary policy and security budget.
