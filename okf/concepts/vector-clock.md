---
okf_version: "0.2"
type: Class
title: Vector Clock
resource: urn:ngm:class:vector-clock
domain: distributed-collaboration
description: A vector clock is a data structure used in distributed systems to capture causal relationships between events across multiple nodes without relying on synchronised physical time. Each node maintains a counter for every other node in the system, incrementing its own counter on each local event and merging received counters on communication. By comparing vector timestamps, systems can determine whet
maturity: established
quality: 0.7
is-a:
  - urn:ngm:class:dc-protocol-and-infra
enables:
  - urn:ngm:class:crdt
  - urn:ngm:class:operational-transformation
relatedTo:
  - urn:ngm:class:real-time-synchronisation
---

# Vector Clock

A vector clock is a data structure used in distributed systems to capture causal relationships between events across multiple nodes without relying on synchronised physical time. Each node maintains a counter for every other node in the system, incrementing its own counter on each local event and merging received counters on communication. By comparing vector timestamps, systems can determine whether events are causally related, concurrent, or ordered, which is fundamental for conflict detection and resolution in collaborative editing.
