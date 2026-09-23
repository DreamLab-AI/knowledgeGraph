---
okf_version: "0.2"
type: Class
title: Hash Rate
resource: urn:ngm:class:hash-rate
domain: blockchain
description: "Hash rate is the aggregate computational throughput of a proof-of-work blockchain network, measured as the number of hash function evaluations performed per unit of time across all participating mining nodes. It serves as the primary quantitative indicator of a network's security: a higher hash rate means an attacker must control and operate more hardware to execute a 51% attack, making double-spe"
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:proof-of-work
hasPart:
  - urn:ngm:class:network-hash-rate
requires:
  - urn:ngm:class:hash-function
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:compute-resources
  - urn:ngm:class:application-specific-integrated-circuit
  - urn:ngm:class:energy-consumption
enables:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:nakamoto-consensus
  - urn:ngm:class:double-spend-prevention
dependsOn:
  - urn:ngm:class:mining
  - urn:ngm:class:mining-pool
  - urn:ngm:class:block-reward
contrastsWith:
  - urn:ngm:class:proof-of-stake
bridgesTo:
  - urn:ngm:class:energy-efficiency
  - urn:ngm:class:infrastructure
supports:
  - urn:ngm:class:blockchain
  - urn:ngm:class:network-security
relatedTo:
  - urn:ngm:class:difficulty
  - urn:ngm:class:difficulty-adjustment
  - urn:ngm:class:51-attack
  - urn:ngm:class:bitcoin-proof-of-work-protocol-mining
  - urn:ngm:class:halving
  - urn:ngm:class:block-time
---

# Hash Rate

Hash rate is the aggregate computational throughput of a proof-of-work blockchain network, measured as the number of hash function evaluations performed per unit of time across all participating mining nodes. It serves as the primary quantitative indicator of a network's security: a higher hash rate means an attacker must control and operate more hardware to execute a 51% attack, making double-spend attacks proportionally more expensive. Hash rate is typically expressed in hashes per second (H/s) with SI prefixes (kH/s, MH/s, GH/s, TH/s, PH/s, EH/s) and fluctuates with the entry or exit of miners, hardware efficiency improvements, and changes in mining profitability.
