---
okf_version: "0.2"
type: Class
title: Consensus Protocol
resource: urn:ngm:class:consensus-protocol
domain: blockchain
description: A consensus protocol is a set of rules and algorithms by which distributed network participants reach agreement on a single shared state or value without requiring centralised authority, ensuring liveness, safety, and Byzantine fault tolerance up to a specified threshold of adversarial nodes. Classical families include compute-bound Proof-of-Work, stake-weighted Proof-of-Stake, and message-passing
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
hasPart:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:finality-gadget
requires:
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:digital-signature
enables:
  - urn:ngm:class:blockchain
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:smart-contract
  - urn:ngm:class:de-fi
dependsOn:
  - urn:ngm:class:network-topology
  - urn:ngm:class:sybil-resistance
implements:
  - urn:ngm:class:state-machine-replication
  - urn:ngm:class:distributed-agreement
  - urn:ngm:class:state-machine-replication
contrastsWith:
  - urn:ngm:class:centralised-database
  - urn:ngm:class:raft-consensus
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:multi-agent-coordination
relatedTo:
  - urn:ngm:class:paxos
  - urn:ngm:class:leader-election
  - urn:ngm:class:fork-choice-rule
  - urn:ngm:class:validator-node
  - urn:ngm:class:block-production
---

# Consensus Protocol

A consensus protocol is a set of rules and algorithms by which distributed network participants reach agreement on a single shared state or value without requiring centralised authority, ensuring liveness, safety, and Byzantine fault tolerance up to a specified threshold of adversarial nodes. Classical families include compute-bound Proof-of-Work, stake-weighted Proof-of-Stake, and message-passing BFT protocols such as PBFT, Tendermint, and HotStuff. Each protocol specifies leader election, block proposal, voting rounds, and finality conditions that together determine throughput, latency, decentralisation, and security trade-offs. Consensus protocols underpin blockchains, distributed databases, and any replicated state machine requiring deterministic agreement across potentially unreliable or malicious peers.
