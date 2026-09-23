---
okf_version: "0.2"
type: Class
title: Byzantine Fault Tolerant System
resource: urn:ngm:class:byzantine-fault-tolerant-system
domain: distributed-systems
description: A Byzantine Fault Tolerant System is a distributed computing system designed to continue operating correctly even when a fraction of its nodes exhibit arbitrary, potentially malicious failures — including sending conflicting, incorrect, or no messages to different peers. Such systems implement consensus protocols that guarantee safety (agreement) and liveness (progress) provided strictly fewer tha
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:infra-computing-and-cloud
hasPart:
  - urn:ngm:class:leader-election
  - urn:ngm:class:view-change-protocol
  - urn:ngm:class:two-phase-commit
requires:
  - urn:ngm:class:consensus-algorithm
  - urn:ngm:class:message-authentication
  - urn:ngm:class:quorum-system
enables:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:atomic-broadcast
dependsOn:
  - urn:ngm:class:cryptographic-signature
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:network-communication
implements:
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:state-machine-replication
contrastsWith:
  - urn:ngm:class:paxos
  - urn:ngm:class:raft-consensus
  - urn:ngm:class:crash-fault-tolerant-system
  - urn:ngm:class:paxos
bridgesTo:
  - urn:ngm:class:smart-contract-platform
  - urn:ngm:class:de-fi
supports:
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:permissioned-blockchain
  - urn:ngm:class:state-machine-replication
  - urn:ngm:class:state-machine-replication
relatedTo:
  - urn:ngm:class:byzantine-generals-problem
  - urn:ngm:class:pbft
  - urn:ngm:class:tendermint
  - urn:ngm:class:hotstuff-protocol
  - urn:ngm:class:practical-byzantine-fault-tolerance
---

# Byzantine Fault Tolerant System

A Byzantine Fault Tolerant System is a distributed computing system designed to continue operating correctly even when a fraction of its nodes exhibit arbitrary, potentially malicious failures — including sending conflicting, incorrect, or no messages to different peers. Such systems implement consensus protocols that guarantee safety (agreement) and liveness (progress) provided strictly fewer than one-third of participating nodes are faulty, a bound established by the foundational Byzantine Generals Problem. BFT systems underpin the security of permissioned and permissionless blockchain networks, replicated state machines, and safety-critical distributed infrastructure where adversarial behaviour must be tolerated without compromising overall correctness.
