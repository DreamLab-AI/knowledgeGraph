---
okf_version: "0.2"
type: Class
title: Real-Time Synchronisation
resource: urn:ngm:class:real-time-synchronisation
domain: infrastructure
description: Real-time synchronisation is the continuous propagation of state changes across distributed participants so that all observers converge on a consistent, up-to-date view with minimal delay. It combines low-latency transport, conflict resolution, and clock or causal ordering to keep replicas aligned. It is essential for collaborative tools, multiplayer environments, and digital-twin mirroring.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:distributed-systems
enables:
  - urn:ngm:class:multi-user-systems
uses:
  - urn:ngm:class:web-socket-protocol
  - urn:ngm:class:consensus-protocol
relatedTo:
  - urn:ngm:class:distributed-collaboration
  - urn:ngm:class:digital-twin
  - urn:ngm:class:state-synchronisation
  - urn:ngm:class:crdt
  - urn:ngm:class:real-time-digital-twin-synchronization
  - urn:ngm:class:network-synchronization
---

# Real-Time Synchronisation

Real-time synchronisation is the continuous propagation of state changes across distributed participants so that all observers converge on a consistent, up-to-date view with minimal delay. It combines low-latency transport, conflict resolution, and clock or causal ordering to keep replicas aligned. It is essential for collaborative tools, multiplayer environments, and digital-twin mirroring.
