---
okf_version: "0.2"
type: Class
title: Digital Twin Synchronisation Bus
resource: urn:ngm:class:digital-twin-synchronisation-bus
domain: spatial-computing
description: Digital Twin Synchronisation Bus is a type of Digital Twin Infrastructure in the spatial computing domain.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-platform-and-environment
hasPart:
  - urn:ngm:class:conflict-resolution
  - urn:ngm:class:message-broker
  - urn:ngm:class:state-synchronisation
  - urn:ngm:class:event-stream-processor
  - urn:ngm:class:state-synchronisation
  - urn:ngm:class:conflict-resolution
requires:
  - urn:ngm:class:event-log
  - urn:ngm:class:message-queue
  - urn:ngm:class:network-protocol
  - urn:ngm:class:state-store
enables:
  - urn:ngm:class:real-time-digital-twin-synchronization
  - urn:ngm:class:multi-instance-state-coherence
  - urn:ngm:class:distributed-twin-orchestration
  - urn:ngm:class:bidirectional-data-flow
dependsOn:
  - urn:ngm:class:distributed-system
  - urn:ngm:class:event-driven-architecture
  - urn:ngm:class:publish-subscribe-pattern
partOf:
  - urn:ngm:class:digital-twin-infrastructure
---

# Digital Twin Synchronisation Bus

Digital Twin Synchronisation Bus is a type of Digital Twin Infrastructure in the spatial computing domain.
