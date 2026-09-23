---
okf_version: "0.2"
type: Class
title: Transaction Finality
resource: urn:ngm:class:transaction-finality
domain: blockchain
description: The point at which a blockchain transaction becomes irreversible and cannot be altered or removed, providing settlement certainty for participants. Finality types include probabilistic (increasing confidence with confirmations), deterministic (explicit protocol guarantee), and economic (cost to revert exceeds benefit).
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain
hasPart:
  - urn:ngm:class:deterministic-finality
  - urn:ngm:class:probabilistic-finality
  - urn:ngm:class:economic-finality
requires:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:block-confirmation
  - urn:ngm:class:byzantine-fault-tolerance
enables:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:decentralized-finance-de-fi
  - urn:ngm:class:cross-chain-bridge
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:settlement
dependsOn:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:network-partition-tolerance
  - urn:ngm:class:consensus-mechanism
implements:
  - urn:ngm:class:transaction-confirmation
  - urn:ngm:class:slashing-condition
contrastsWith:
  - urn:ngm:class:double-spending
  - urn:ngm:class:51-attack
bridgesTo:
  - urn:ngm:class:payment-settlement
  - urn:ngm:class:distributed-ledger-technology
uses:
  - urn:ngm:class:fork-choice-rule
partOf:
  - urn:ngm:class:blockchain
  - urn:ngm:class:transaction
relatedTo:
  - urn:ngm:class:transaction-confirmation
  - urn:ngm:class:liveness
  - urn:ngm:class:safety
---

# Transaction Finality

The point at which a blockchain transaction becomes irreversible and cannot be altered or removed, providing settlement certainty for participants. Finality types include probabilistic (increasing confidence with confirmations), deterministic (explicit protocol guarantee), and economic (cost to revert exceeds benefit).
