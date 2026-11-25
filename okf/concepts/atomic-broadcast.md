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
  - urn:ngm:class:time-synchronisation
  - urn:ngm:class:blockchain-consensus
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Atomic Broadcast

Atomic broadcast (also called total-order broadcast) is a distributed communication primitive guaranteeing that all correct processes deliver the same set of messages in the same total order. It strengthens reliable broadcast with an ordering property, ensuring agreement on both the content and sequence of delivered messages. Atomic broadcast is equivalent in power to consensus and underpins state-machine replication.
