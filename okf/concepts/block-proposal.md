---
okf_version: "0.2"
type: Class
title: Block Proposal
resource: urn:ngm:class:block-proposal
domain: blockchain
description: Block proposal is the step in a blockchain consensus protocol where a designated participant assembles a candidate block of ordered transactions and broadcasts it to the network for validation and agreement. The proposer selects transactions from the mempool, constructs the block header referencing the prior block, and signs the proposal so peers can verify its authorship. In proof-of-stake system
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:consensus-mechanism
hasPart:
  - urn:ngm:class:block
  - urn:ngm:class:cryptographic-signature
requires:
  - urn:ngm:class:leader-election
  - urn:ngm:class:mempool
  - urn:ngm:class:validator
enables:
  - urn:ngm:class:attestation
  - urn:ngm:class:finality-gadget
dependsOn:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:fork-choice-rule
contrastsWith:
  - urn:ngm:class:attestation
uses:
  - urn:ngm:class:digital-signature
partOf:
  - urn:ngm:class:consensus-mechanism
relatedTo:
  - urn:ngm:class:slashing
  - urn:ngm:class:blockchain
---

# Block Proposal

Block proposal is the step in a blockchain consensus protocol where a designated participant assembles a candidate block of ordered transactions and broadcasts it to the network for validation and agreement. The proposer selects transactions from the mempool, constructs the block header referencing the prior block, and signs the proposal so peers can verify its authorship. In proof-of-stake systems the proposer is chosen by a leader-election procedure for each slot, after which validators attest to the proposed block.
