---
okf_version: "0.2"
type: Class
title: Double Spending
resource: urn:ngm:class:double-spending
domain: blockchain
description: Double spending is the fraudulent attempt to spend the same digital asset more than once by broadcasting conflicting transactions to different parts of a blockchain network before they are confirmed. It represents the fundamental security problem that consensus mechanisms are designed to prevent in distributed ledger systems.
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
requires:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:transaction-finality
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:peer-to-peer-network
enables:
  - urn:ngm:class:attack-vector
  - urn:ngm:class:51-attack
dependsOn:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:utxo
  - urn:ngm:class:transaction-propagation
contrastsWith:
  - urn:ngm:class:finality
  - urn:ngm:class:transaction-confirmation
  - urn:ngm:class:byzantine-fault-tolerance
bridgesTo:
  - urn:ngm:class:digital-currency
  - urn:ngm:class:central-bank-digital-currency-cbdc
partOf:
  - urn:ngm:class:cybersecurity
  - urn:ngm:class:blockchain-security
relatedTo:
  - urn:ngm:class:sybil-attack
  - urn:ngm:class:selfish-mining
  - urn:ngm:class:eclipse-attack
  - urn:ngm:class:cryptographic-signature
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:block-confirmation
  - urn:ngm:class:payment-channel
---

# Double Spending

Double spending is the fraudulent attempt to spend the same digital asset more than once by broadcasting conflicting transactions to different parts of a blockchain network before they are confirmed. It represents the fundamental security problem that consensus mechanisms are designed to prevent in distributed ledger systems.
