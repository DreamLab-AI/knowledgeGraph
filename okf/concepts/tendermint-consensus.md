---
okf_version: "0.2"
type: Class
title: Tendermint Consensus
resource: urn:ngm:class:tendermint-consensus
domain: blockchain
description: Tendermint Consensus is a Byzantine Fault Tolerant consensus engine that combines Practical Byzantine Fault Tolerance (PBFT) with Proof-of-Stake validator sets to achieve immediate block finality and high transaction throughput. It underpins the Cosmos ecosystem and enables inter-blockchain communication by guaranteeing that committed blocks are never reverted, eliminating the probabilistic finali
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:byzantine-fault-tolerance
requires:
  - urn:ngm:class:validator-node
  - urn:ngm:class:proof-of-stake
enables:
  - urn:ngm:class:cosmos-ibc
  - urn:ngm:class:blockchain-interoperability
contrastsWith:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:delegated-proof-of-stake
uses:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptographic-hash
partOf:
  - urn:ngm:class:blockchain-protocol
relatedTo:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:blockchain-scalability
  - urn:ngm:class:low-energy-consumption
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Tendermint Consensus

Tendermint Consensus is a Byzantine Fault Tolerant consensus engine that combines Practical Byzantine Fault Tolerance (PBFT) with Proof-of-Stake validator sets to achieve immediate block finality and high transaction throughput. It underpins the Cosmos ecosystem and enables inter-blockchain communication by guaranteeing that committed blocks are never reverted, eliminating the probabilistic finality of Proof-of-Work chains.
