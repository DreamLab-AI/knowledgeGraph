---
okf_version: "0.2"
type: Class
title: Transaction
resource: urn:ngm:class:transaction
domain: blockchain
description: State-changing operation on blockchain within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:distributed-data-structure
  - urn:ngm:class:distributed-data-structure
hasPart:
  - urn:ngm:class:transaction-fee
  - urn:ngm:class:mempool
  - urn:ngm:class:gas
enables:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:digital-payments
  - urn:ngm:class:smart-contract-execution
dependsOn:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:cryptographic-primitive
bridgesTo:
  - urn:ngm:class:virtual-economy
relatedTo:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:block
  - urn:ngm:class:double-spending
  - urn:ngm:class:deterministic-finality
  - urn:ngm:class:block-time
---

# Transaction

State-changing operation on blockchain within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
