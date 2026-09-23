---
okf_version: "0.2"
type: Class
title: Atomic Broadcast
resource: urn:ngm:class:atomic-broadcast
domain: distributed-systems
description: Atomic broadcast (also called total-order broadcast) is a distributed communication primitive guaranteeing that all correct processes deliver the same set of messages in the same total order. It strengthens reliable broadcast with an ordering property, ensuring agreement on both the content and sequence of delivered messages. Atomic broadcast is equivalent in power to consensus and underpins state
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:distributed-systems
requires:
  - urn:ngm:class:message-passing
  - urn:ngm:class:fault-tolerance
enables:
  - urn:ngm:class:state-machine-replication
  - urn:ngm:class:replication
  - urn:ngm:class:consensus
dependsOn:
  - urn:ngm:class:distributed-system
contrastsWith:
  - urn:ngm:class:byzantine-generals-problem
bridgesTo:
  - urn:ngm:class:practical-byzantine-fault-tolerance
uses:
  - urn:ngm:class:paxos
  - urn:ngm:class:raft
supports:
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:crash-fault-tolerance
relatedTo:
  - urn:ngm:class:consensus
  - urn:ngm:class:clock-synchronization
  - urn:ngm:class:blockchain-consensus
---

# Atomic Broadcast

Atomic broadcast (also called total-order broadcast) is a distributed communication primitive guaranteeing that all correct processes deliver the same set of messages in the same total order. It strengthens reliable broadcast with an ordering property, ensuring agreement on both the content and sequence of delivered messages. Atomic broadcast is equivalent in power to consensus and underpins state-machine replication.
