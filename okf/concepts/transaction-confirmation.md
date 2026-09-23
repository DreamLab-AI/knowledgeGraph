---
okf_version: "0.2"
type: Class
title: Transaction Confirmation
resource: urn:ngm:class:transaction-confirmation
domain: blockchain
description: "The process by which a blockchain transaction achieves inclusion in a mined or validated block and subsequently accumulates additional blocks on top of it, reducing the probability of reversal. The number of confirmations required for sufficient security depends on consensus mechanism and transaction value; Bitcoin typically requires 6 confirmations while Proof-of-Stake systems with deterministic "
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:distributed-data-structure
  - urn:ngm:class:distributed-data-structure
requires:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:validator-node
enables:
  - urn:ngm:class:blockchain-compliance
  - urn:ngm:class:audit-trail
uses:
  - urn:ngm:class:block
  - urn:ngm:class:block-time
  - urn:ngm:class:timestamp
relatedTo:
  - urn:ngm:class:finality
  - urn:ngm:class:transaction-finality
  - urn:ngm:class:deterministic-finality
  - urn:ngm:class:blockchain-transaction
---

# Transaction Confirmation

The process by which a blockchain transaction achieves inclusion in a mined or validated block and subsequently accumulates additional blocks on top of it, reducing the probability of reversal. The number of confirmations required for sufficient security depends on consensus mechanism and transaction value; Bitcoin typically requires 6 confirmations while Proof-of-Stake systems with deterministic finality may confirm in a single block.
