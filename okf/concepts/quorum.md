---
okf_version: "0.2"
type: Class
title: Quorum
resource: urn:ngm:class:quorum
domain: blockchain
description: "A quorum is the minimum number or proportion of participants—nodes, validators, voters, or signers—that must concur or be present for a decision, transaction, or consensus round to be considered valid in a distributed system or governance process. In distributed computing, quorum systems are collections of node subsets with the intersection property: any two quorums share at least one member, prev"
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:consensus-mechanism
requires:
  - urn:ngm:class:validator-set
  - urn:ngm:class:membership-protocol
enables:
  - urn:ngm:class:on-chain-governance
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:linearizability
  - urn:ngm:class:decentralised-decision-making
  - urn:ngm:class:linearizability
implements:
  - urn:ngm:class:paxos
  - urn:ngm:class:raft
  - urn:ngm:class:tendermint
contrastsWith:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:longest-chain-rule
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:distributed-ai-training
uses:
  - urn:ngm:class:voting-mechanism
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:threshold-signature-scheme
  - urn:ngm:class:token-weighted-voting
  - urn:ngm:class:threshold-signature-scheme
  - urn:ngm:class:token-weighted-voting
supports:
  - urn:ngm:class:dao-governance
  - urn:ngm:class:blockchain-governance
  - urn:ngm:class:multi-signature-wallet
  - urn:ngm:class:treasury-management
relatedTo:
  - urn:ngm:class:consensus-algorithm
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:distributed-system
  - urn:ngm:class:network-partition
  - urn:ngm:class:liveness
  - urn:ngm:class:safety
---

# Quorum

A quorum is the minimum number or proportion of participants—nodes, validators, voters, or signers—that must concur or be present for a decision, transaction, or consensus round to be considered valid in a distributed system or governance process. In distributed computing, quorum systems are collections of node subsets with the intersection property: any two quorums share at least one member, preventing contradictory decisions across network partitions. In blockchain and DAO governance, quorum thresholds set the participation floor required before a vote or proposal carries binding weight, balancing decision liveness against resistance to minority capture. Threshold signature schemes and multi-signature wallets operationalise quorum as an m-of-n approval requirement that eliminates single points of failure in key custody.
