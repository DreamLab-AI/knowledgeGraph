---
okf_version: "0.2"
type: Class
title: Conflict Free Replicated Data Type
resource: urn:ngm:class:conflict-free-replicated-data-type
domain: distributed-collaboration
description: A conflict-free replicated data type (CRDT) is a data structure that can be replicated across many nodes and updated independently, with mathematical guarantees that all replicas converge to the same state once they have exchanged updates. By designing operations to be commutative or merges to be monotonic, CRDTs avoid the need for coordination or central conflict resolution. They are a foundation
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:eventual-consistency
requires:
  - urn:ngm:class:eventual-consistency
enables:
  - urn:ngm:class:operational-transformation
  - urn:ngm:class:state-synchronisation
  - urn:ngm:class:conflict-resolution
dependsOn:
  - urn:ngm:class:replication
  - urn:ngm:class:concurrency
implements:
  - urn:ngm:class:eventual-consistency
contrastsWith:
  - urn:ngm:class:operational-transformation
bridgesTo:
  - urn:ngm:class:distributed-system
uses:
  - urn:ngm:class:vector-clock
  - urn:ngm:class:replication
supports:
  - urn:ngm:class:distributed-collaboration
  - urn:ngm:class:state-synchronisation
partOf:
  - urn:ngm:class:distributed-collaboration
  - urn:ngm:class:distributed-system
relatedTo:
  - urn:ngm:class:conflict-resolution
  - urn:ngm:class:vector-clock
  - urn:ngm:class:concurrency
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Conflict Free Replicated Data Type

A conflict-free replicated data type (CRDT) is a data structure that can be replicated across many nodes and updated independently, with mathematical guarantees that all replicas converge to the same state once they have exchanged updates. By designing operations to be commutative or merges to be monotonic, CRDTs avoid the need for coordination or central conflict resolution. They are a foundational technique for offline-first and real-time collaborative distributed systems.
