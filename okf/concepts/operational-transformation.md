---
okf_version: "0.2"
type: Class
title: Operational Transformation
resource: urn:ngm:class:operational-transformation
domain: distributed-systems
description: Operational Transformation (OT) is a concurrency control technique for real-time collaborative editing systems that enables multiple users to concurrently modify a shared document by representing edits as discrete operations and automatically transforming each incoming operation against previously applied operations to preserve user intent. The core insight is that when two concurrent operations a
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:dc-protocol-and-infra
  - urn:ngm:class:concurrency-control
requires:
  - urn:ngm:class:concurrency-control
  - urn:ngm:class:state-synchronisation
  - urn:ngm:class:causality-tracking
enables:
  - urn:ngm:class:collaboration-tools
  - urn:ngm:class:collaborative-editing
  - urn:ngm:class:eventual-consistency
implements:
  - urn:ngm:class:replication
  - urn:ngm:class:replication
contrastsWith:
  - urn:ngm:class:crdt
  - urn:ngm:class:synchronisation
  - urn:ngm:class:pessimistic-locking
  - urn:ngm:class:synchronisation
bridgesTo:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:multi-user-systems
  - urn:ngm:class:multi-user-systems
uses:
  - urn:ngm:class:vector-clock
  - urn:ngm:class:operation-log
  - urn:ngm:class:transformation-function
partOf:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:real-time-collaboration
relatedTo:
  - urn:ngm:class:conflict-resolution
  - urn:ngm:class:distributed-systems-theory
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:distributed-systems-theory
  - urn:ngm:class:merge-algorithm
---

# Operational Transformation

Operational Transformation (OT) is a concurrency control technique for real-time collaborative editing systems that enables multiple users to concurrently modify a shared document by representing edits as discrete operations and automatically transforming each incoming operation against previously applied operations to preserve user intent. The core insight is that when two concurrent operations are applied in different orders across distributed replicas, at least one must be adjusted — transformed — so that the final document state converges to a consistent result. OT requires a pair of transformation functions (IT and ET for inclusion and exclusion transformation) and must satisfy formal consistency properties (TP1 and TP2) to guarantee convergence under all interleavings. It underpins real-time collaborative editors including Google Docs, Apache Wave, and Etherpad, and remains a foundational technique in distributed collaboration research despite the later emergence of CRDTs.
