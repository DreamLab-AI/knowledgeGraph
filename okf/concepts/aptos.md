---
okf_version: "0.2"
type: Class
title: Aptos
resource: urn:ngm:class:aptos
domain: blockchain
description: Aptos is a Layer 1 proof-of-stake blockchain platform founded in 2022 by former Diem (Meta) engineers, designed for safety, scalability, and high throughput. It employs the Move programming language — a resource-oriented, formally verifiable language originally created for the Diem project — to express accounts, digital assets, and smart contracts. Its primary performance innovation is Block-STM (
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:blockchain-network
requires:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:validator-node
enables:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:de-fi
  - urn:ngm:class:non-fungible-token
  - urn:ngm:class:digital-asset
implements:
  - urn:ngm:class:layer-1
  - urn:ngm:class:parallel-execution
  - urn:ngm:class:resource-oriented-programming
contrastsWith:
  - urn:ngm:class:ethereum
  - urn:ngm:class:solana
  - urn:ngm:class:sui
bridgesTo:
  - urn:ngm:class:formal-verification
  - urn:ngm:class:software-transactional-memory
uses:
  - urn:ngm:class:move-programming-language
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:block-stm
  - urn:ngm:class:aptosbft
partOf:
  - urn:ngm:class:layer-1
  - urn:ngm:class:blockchain-network
relatedTo:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:tokenomics
  - urn:ngm:class:cryptographic-proof
  - urn:ngm:class:diem
---

# Aptos

Aptos is a Layer 1 proof-of-stake blockchain platform founded in 2022 by former Diem (Meta) engineers, designed for safety, scalability, and high throughput. It employs the Move programming language — a resource-oriented, formally verifiable language originally created for the Diem project — to express accounts, digital assets, and smart contracts. Its primary performance innovation is Block-STM (Software Transactional Memory), a parallel transaction execution engine that speculatively executes transactions and resolves conflicts at runtime, enabling high concurrent throughput without requiring developers to pre-declare access sets. The network uses a Byzantine Fault Tolerant consensus mechanism (AptosBFT, derived from HotStuff) to reach finality with low latency.
