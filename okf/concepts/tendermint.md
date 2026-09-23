---
okf_version: "0.2"
type: Class
title: Tendermint
resource: urn:ngm:class:tendermint
domain: blockchain
description: "Tendermint is a Byzantine fault-tolerant (BFT) consensus engine that implements a partially synchronous, round-based, leader-elected protocol providing deterministic finality on each block. It separates the consensus layer from the application layer via the Application BlockChain Interface (ABCI), allowing any deterministic state machine to be driven by its consensus guarantees. Tendermint is the "
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
requires:
  - urn:ngm:class:validator-set
  - urn:ngm:class:partial-synchrony
  - urn:ngm:class:digital-signature
enables:
  - urn:ngm:class:cosmos-ibc
  - urn:ngm:class:application-specific-blockchain
  - urn:ngm:class:cross-chain-communication
dependsOn:
  - urn:ngm:class:practical-byzantine-fault-tolerance
implements:
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:deterministic-finality
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:state-machine-replication
contrastsWith:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:nakamoto-consensus
  - urn:ngm:class:hot-stuff
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:decentralised-ai
uses:
  - urn:ngm:class:abci
  - urn:ngm:class:cosmos-sdk
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:gossip-protocol
partOf:
  - urn:ngm:class:cosmos
  - urn:ngm:class:cosmos
relatedTo:
  - urn:ngm:class:cap-theorem
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:smart-contract-platform
---

# Tendermint

Tendermint is a Byzantine fault-tolerant (BFT) consensus engine that implements a partially synchronous, round-based, leader-elected protocol providing deterministic finality on each block. It separates the consensus layer from the application layer via the Application BlockChain Interface (ABCI), allowing any deterministic state machine to be driven by its consensus guarantees. Tendermint is the consensus core of the Cosmos SDK and underpins a large family of interoperable application-specific blockchains, offering safety guarantees so long as fewer than one-third of validator voting power is Byzantine. Its design derives from Practical Byzantine Fault Tolerance (PBFT) but introduces pragmatic modifications — rotating proposers, weighted voting, and a three-phase commit protocol — optimised for open, permissionless validator sets.
