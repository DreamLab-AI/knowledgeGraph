---
okf_version: "0.2"
type: Class
title: Total Order Broadcast
resource: urn:ngm:class:total-order-broadcast
domain: distributed-systems
description: Total order broadcast, also called atomic broadcast, is a communication primitive in distributed systems that guarantees all correct processes deliver the same set of messages in exactly the same order. It strengthens reliable broadcast with a total ordering property, ensuring that every replica observes an identical sequence of events. Total order broadcast is provably equivalent to consensus and
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:distributed-systems
requires:
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:quorum
  - urn:ngm:class:leader-election
enables:
  - urn:ngm:class:linearizability
  - urn:ngm:class:replication
dependsOn:
  - urn:ngm:class:byzantine-fault-tolerance
implements:
  - urn:ngm:class:state-machine-replication
bridgesTo:
  - urn:ngm:class:distributed-systems
uses:
  - urn:ngm:class:paxos
  - urn:ngm:class:raft
relatedTo:
  - urn:ngm:class:consensus
  - urn:ngm:class:consensus-algorithm
  - urn:ngm:class:distributed-ledger
---

# Total Order Broadcast

Total order broadcast, also called atomic broadcast, is a communication primitive in distributed systems that guarantees all correct processes deliver the same set of messages in exactly the same order. It strengthens reliable broadcast with a total ordering property, ensuring that every replica observes an identical sequence of events. Total order broadcast is provably equivalent to consensus and forms the foundation of state machine replication.
