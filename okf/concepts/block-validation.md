---
okf_version: "0.2"
type: Class
title: Block Validation
resource: urn:ngm:class:block-validation
domain: blockchain
description: Block Validation is the process by which a blockchain node verifies that a candidate block satisfies all protocol rules before accepting it into the chain. It checks the proof-of-work or consensus proof, the block header structure, the Merkle root, and the validity of every contained transaction including signatures, double-spend constraints, and balances. Successful validation is the precondition
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:consensus-mechanism
requires:
  - urn:ngm:class:block-header
  - urn:ngm:class:proof-of-work
enables:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:transaction-validation
dependsOn:
  - urn:ngm:class:consensus-mechanism
bridgesTo:
  - urn:ngm:class:distributed-ledger
uses:
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:hash-function
  - urn:ngm:class:digital-signature
supports:
  - urn:ngm:class:full-node
partOf:
  - urn:ngm:class:blockchain
relatedTo:
  - urn:ngm:class:transaction-validation
  - urn:ngm:class:full-node
  - urn:ngm:class:byzantine-fault-tolerance
---

# Block Validation

Block Validation is the process by which a blockchain node verifies that a candidate block satisfies all protocol rules before accepting it into the chain. It checks the proof-of-work or consensus proof, the block header structure, the Merkle root, and the validity of every contained transaction including signatures, double-spend constraints, and balances. Successful validation is the precondition for extending the canonical chain and is central to trustless consensus.
