---
okf_version: "0.2"
type: Class
title: Linearizability
resource: urn:ngm:class:linearizability
domain: distributed-systems
description: "Linearizability is a strong consistency model for concurrent and distributed systems requiring that every operation appears to take effect atomically at a single point in time between its invocation and its response, consistent with a global real-time ordering. It is a composable (local) property: a system is linearizable if each individual object is linearizable. Informally it guarantees that onc"
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:consistency-model
requires:
  - urn:ngm:class:consensus-algorithm
  - urn:ngm:class:quorum
enables:
  - urn:ngm:class:state-machine-replication
  - urn:ngm:class:fault-tolerance
dependsOn:
  - urn:ngm:class:distributed-consensus
contrastsWith:
  - urn:ngm:class:cap-theorem
uses:
  - urn:ngm:class:raft
  - urn:ngm:class:paxos
supports:
  - urn:ngm:class:distributed-systems
relatedTo:
  - urn:ngm:class:consensus-algorithm
  - urn:ngm:class:distributed-consensus
  - urn:ngm:class:concurrency-control
  - urn:ngm:class:replication
---

# Linearizability

Linearizability is a strong consistency model for concurrent and distributed systems requiring that every operation appears to take effect atomically at a single point in time between its invocation and its response, consistent with a global real-time ordering. It is a composable (local) property: a system is linearizable if each individual object is linearizable. Informally it guarantees that once a write completes, all subsequent reads observe that write or a later one, giving the illusion of a single, instantaneous copy of the data. Formalised by Herlihy and Wing, it is the gold standard against which weaker models such as eventual consistency are contrasted.
