---
okf_version: "0.2"
type: Class
title: Blockchain Consensus
resource: urn:ngm:class:blockchain-consensus
domain: blockchain
description: "Blockchain Consensus refers to the family of distributed agreement protocols by which independent, potentially adversarial nodes in a blockchain network reach agreement on a single canonical version of the transaction ledger, including the ordering, validity, and finality of all blocks. These protocols must tolerate Byzantine faults — nodes that may behave maliciously or arbitrarily — and operate "
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:consensus-mechanism
hasPart:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:nakamoto-consensus
  - urn:ngm:class:delegated-proof-of-stake
  - urn:ngm:class:practical-byzantine-fault-tolerance
  - urn:ngm:class:tendermint
requires:
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:validator-node
  - urn:ngm:class:digital-signature
enables:
  - urn:ngm:class:finality
  - urn:ngm:class:sybil-resistance
  - urn:ngm:class:double-spend-prevention
  - urn:ngm:class:permissionless-participation
dependsOn:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:merkle-tree
contrastsWith:
  - urn:ngm:class:centralised-database
  - urn:ngm:class:raft-consensus
  - urn:ngm:class:paxos
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:decentralised-governance
uses:
  - urn:ngm:class:game-theory
  - urn:ngm:class:public-key-cryptography
partOf:
  - urn:ngm:class:blockchain-protocol
  - urn:ngm:class:distributed-ledger-technology
relatedTo:
  - urn:ngm:class:blockchain-ledger
  - urn:ngm:class:fork-choice-rule
  - urn:ngm:class:slashing
  - urn:ngm:class:block-production
---

# Blockchain Consensus

Blockchain Consensus refers to the family of distributed agreement protocols by which independent, potentially adversarial nodes in a blockchain network reach agreement on a single canonical version of the transaction ledger, including the ordering, validity, and finality of all blocks. These protocols must tolerate Byzantine faults — nodes that may behave maliciously or arbitrarily — and operate across open, permissionless networks without a trusted coordinator. The choice of consensus mechanism fundamentally shapes a blockchain's security model, throughput, energy consumption, and degree of decentralisation.
