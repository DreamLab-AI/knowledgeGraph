---
okf_version: "0.2"
type: Class
title: Validator Set
resource: urn:ngm:class:validator-set
domain: blockchain
description: "A validator set is the finite, dynamically managed collection of nodes in a proof-of-stake or delegated consensus blockchain that are authorised to propose blocks, attest to their validity, and participate in the finality process during each epoch. Membership is gated by a minimum stake bond whose collateral is subject to slashing penalties for protocol violations such as equivocation or surround "
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:consensus-mechanism
hasPart:
  - urn:ngm:class:validator-node
  - urn:ngm:class:slashing-condition
  - urn:ngm:class:staking
  - urn:ngm:class:staking
requires:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:staking
  - urn:ngm:class:epoch
enables:
  - urn:ngm:class:finality
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:block-proposal
  - urn:ngm:class:finality
dependsOn:
  - urn:ngm:class:delegation
  - urn:ngm:class:cryptographic-signature
implements:
  - urn:ngm:class:tendermint-consensus
  - urn:ngm:class:casper-ffg
  - urn:ngm:class:tendermint-consensus
contrastsWith:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:mining-pool
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:decentralised-ai-inference
uses:
  - urn:ngm:class:threshold-signature-scheme
  - urn:ngm:class:verifiable-random-function
  - urn:ngm:class:threshold-signature-scheme
relatedTo:
  - urn:ngm:class:delegated-proof-of-stake
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:governance-token
  - urn:ngm:class:committee-rotation
---

# Validator Set

A validator set is the finite, dynamically managed collection of nodes in a proof-of-stake or delegated consensus blockchain that are authorised to propose blocks, attest to their validity, and participate in the finality process during each epoch. Membership is gated by a minimum stake bond whose collateral is subject to slashing penalties for protocol violations such as equivocation or surround voting, aligning validator incentives with network security. The set is recomposed at epoch boundaries according to delegation weights, unbonding queues, and slashing events, and its cardinality governs the fundamental trade-off between decentralisation, Byzantine fault tolerance, and consensus latency. In sharded or layered architectures, validator sets may be further partitioned into sub-committees to scale throughput while preserving cryptographic security guarantees.
