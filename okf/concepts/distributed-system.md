---
okf_version: "0.2"
type: Class
title: Distributed System
resource: urn:ngm:class:distributed-system
domain: distributed-systems
description: A distributed system is a collection of autonomous computing nodes interconnected by a network, coordinating their actions through message passing to appear as a single coherent system to end users or applications. The architecture is governed by fundamental trade-offs formalised in the CAP theorem — a system can guarantee at most two of consistency, availability, and partition tolerance simultane
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:infra-computing-and-cloud
hasPart:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:message-passing
  - urn:ngm:class:replication
requires:
  - urn:ngm:class:network-protocol
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:data-replication
  - urn:ngm:class:cryptographic-hash
enables:
  - urn:ngm:class:blockchain
  - urn:ngm:class:microservices
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:edge-computing
  - urn:ngm:class:distributed-databases
  - urn:ngm:class:distributed-databases
implements:
  - urn:ngm:class:cap-theorem
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:eventual-consistency
contrastsWith:
  - urn:ngm:class:centralised-system
  - urn:ngm:class:monolithic-architecture
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:decentralised-autonomous-organisation
uses:
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:distributed-hash-table
  - urn:ngm:class:load-balancing
relatedTo:
  - urn:ngm:class:sharding
  - urn:ngm:class:service-mesh
---

# Distributed System

A distributed system is a collection of autonomous computing nodes interconnected by a network, coordinating their actions through message passing to appear as a single coherent system to end users or applications. The architecture is governed by fundamental trade-offs formalised in the CAP theorem — a system can guarantee at most two of consistency, availability, and partition tolerance simultaneously. Correctness in the presence of node failures and malicious actors is addressed by Byzantine Fault Tolerance protocols and consensus mechanisms such as Paxos, Raft, and Practical Byzantine Fault Tolerance. Canonical instantiations span peer-to-peer networks, blockchain ledgers, microservices architectures, distributed databases, and large-scale cloud infrastructure.
