---
okf_version: "0.2"
type: Class
title: Fault Tolerance System
resource: urn:ngm:class:fault-tolerance-system
domain: blockchain
description: A Fault Tolerance System is an engineering design framework enabling a distributed system to continue correct operation despite component failures, network disruptions, or malicious behaviour by a subset of participants. These systems employ redundancy, error detection, and automatic recovery to mask failures from end users, with Byzantine fault tolerance being the gold standard for adversarial en
maturity: established
quality: 0
is-a:
  - urn:ngm:class:network-component
  - urn:ngm:class:blockchain-entity
hasPart:
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:replication-system
  - urn:ngm:class:data-replication
requires:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:distributed-system
  - urn:ngm:class:distributed-systems
enables:
  - urn:ngm:class:high-availability
  - urn:ngm:class:operational-resilience
  - urn:ngm:class:blockchain
contrastsWith:
  - urn:ngm:class:distributed-ledger-technology
uses:
  - urn:ngm:class:practical-byzantine-fault-tolerance
  - urn:ngm:class:federated-byzantine-fault-tolerance
relatedTo:
  - urn:ngm:class:distributed-architecture
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:byzantine-fault-tolerant-system
---

# Fault Tolerance System

A Fault Tolerance System is an engineering design framework enabling a distributed system to continue correct operation despite component failures, network disruptions, or malicious behaviour by a subset of participants. These systems employ redundancy, error detection, and automatic recovery to mask failures from end users, with Byzantine fault tolerance being the gold standard for adversarial environments such as public blockchains, which require at least 3f+1 total nodes to tolerate f Byzantine failures.
