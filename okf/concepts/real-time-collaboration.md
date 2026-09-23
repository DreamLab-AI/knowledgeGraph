---
okf_version: "0.2"
type: Class
title: Real Time Collaboration
resource: urn:ngm:class:real-time-collaboration
domain: distributed-systems
description: Real-time collaboration is the practice and technology of multiple users working concurrently on shared content with changes propagated and merged with minimal latency. It relies on synchronisation algorithms that resolve concurrent edits while preserving each participant's intent. It underpins collaborative editors, shared design tools, and multi-user virtual environments.
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:distributed-collaboration
  - urn:ngm:class:synchronous-collaboration
requires:
  - urn:ngm:class:conflict-resolution
  - urn:ngm:class:state-synchronisation
enables:
  - urn:ngm:class:distributed-collaboration
dependsOn:
  - urn:ngm:class:low-latency
  - urn:ngm:class:real-time-communication
contrastsWith:
  - urn:ngm:class:version-control
bridgesTo:
  - urn:ngm:class:operational-transformation
uses:
  - urn:ngm:class:operational-transformation
  - urn:ngm:class:crdt
supports:
  - urn:ngm:class:version-control
partOf:
  - urn:ngm:class:distributed-collaboration
relatedTo:
  - urn:ngm:class:state-synchronisation
  - urn:ngm:class:distributed-systems
---

# Real Time Collaboration

Real-time collaboration is the practice and technology of multiple users working concurrently on shared content with changes propagated and merged with minimal latency. It relies on synchronisation algorithms that resolve concurrent edits while preserving each participant's intent. It underpins collaborative editors, shared design tools, and multi-user virtual environments.
