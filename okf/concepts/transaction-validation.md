---
okf_version: "0.2"
type: Class
title: Transaction Validation
resource: urn:ngm:class:transaction-validation
domain: blockchain
description: Transaction validation is the process by which network participants check that a blockchain transaction conforms to the protocol rules before accepting it. It ensures only valid transactions enter the ledger by verifying signatures, input availability, and compliance with consensus rules.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:consensus
hasPart:
  - urn:ngm:class:digital-signature-verification
requires:
  - urn:ngm:class:cryptography
  - urn:ngm:class:digital-signature
  - urn:ngm:class:unspent-transaction-output
  - urn:ngm:class:merkle-tree
enables:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-network
  - urn:ngm:class:finality
  - urn:ngm:class:double-spend-prevention
dependsOn:
  - urn:ngm:class:full-node
  - urn:ngm:class:transaction
implements:
  - urn:ngm:class:bitcoin-script
  - urn:ngm:class:proof-of-work
contrastsWith:
  - urn:ngm:class:permissioned-blockchain
bridgesTo:
  - urn:ngm:class:smart-contract-execution
  - urn:ngm:class:payment-settlement
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:transaction
uses:
  - urn:ngm:class:hash-function
  - urn:ngm:class:cryptographic-infrastructure
supports:
  - urn:ngm:class:ledger
  - urn:ngm:class:trustless-system
partOf:
  - urn:ngm:class:consensus
  - urn:ngm:class:block-production
relatedTo:
  - urn:ngm:class:mempool
  - urn:ngm:class:transaction-propagation
---

# Transaction Validation

Transaction validation is the process by which network participants check that a blockchain transaction conforms to the protocol rules before accepting it. It ensures only valid transactions enter the ledger by verifying signatures, input availability, and compliance with consensus rules.
