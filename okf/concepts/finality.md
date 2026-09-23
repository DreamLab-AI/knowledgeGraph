---
okf_version: "0.2"
type: Class
title: Finality
resource: urn:ngm:class:finality
domain: blockchain
description: "The property of a blockchain transaction or block whereby it becomes irreversible and cannot be reverted by any future state of the network. Probabilistic finality—as in proof-of-work chains—increases with confirmation depth, while deterministic finality—as in BFT-based protocols—is achieved at the point of commitment, with strong consequences for payment settlement, cross-chain interoperability, "
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:networkcomponent
hasPart:
  - urn:ngm:class:probabilistic-finality
  - urn:ngm:class:deterministic-finality
  - urn:ngm:class:transaction-finality
  - urn:ngm:class:economic-finality
requires:
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:transaction-confirmation
  - urn:ngm:class:cryptographic-signature
enables:
  - urn:ngm:class:payment-settlement
  - urn:ngm:class:cross-chain-interoperability
  - urn:ngm:class:smart-contract-execution
  - urn:ngm:class:atomic-swap
dependsOn:
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:network-synchrony
contrastsWith:
  - urn:ngm:class:chain-reorganization
  - urn:ngm:class:double-spending
  - urn:ngm:class:fork
bridgesTo:
  - urn:ngm:class:settlement-finality
partOf:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:blockchain-security
relatedTo:
  - urn:ngm:class:nakamoto-consensus
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:byzantine-agreement
  - urn:ngm:class:tendermint
---

# Finality

The property of a blockchain transaction or block whereby it becomes irreversible and cannot be reverted by any future state of the network. Probabilistic finality—as in proof-of-work chains—increases with confirmation depth, while deterministic finality—as in BFT-based protocols—is achieved at the point of commitment, with strong consequences for payment settlement, cross-chain interoperability, and user trust.
