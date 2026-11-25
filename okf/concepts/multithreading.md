---
okf_version: "0.2"
type: Class
title: Multithreading
resource: urn:ngm:class:multithreading
domain: infrastructure
description: "Multithreading is a programming and execution model in which a single process contains multiple threads of execution that share the process's memory and resources while running concurrently. It enables responsiveness and parallel use of multiple CPU cores, but introduces the need for synchronisation to avoid race conditions and deadlocks. The operating system scheduler interleaves or parallelises "
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:concurrency
  - urn:ngm:class:parallel-computing
requires:
  - urn:ngm:class:scheduler
enables:
  - urn:ngm:class:parallel-computing
  - urn:ngm:class:throughput
dependsOn:
  - urn:ngm:class:operating-system
  - urn:ngm:class:concurrency
implements:
  - urn:ngm:class:concurrency
contrastsWith:
  - urn:ngm:class:message-passing
uses:
  - urn:ngm:class:concurrency
  - urn:ngm:class:operating-system
  - urn:ngm:class:scheduler
supports:
  - urn:ngm:class:parallel-computing
  - urn:ngm:class:throughput
partOf:
  - urn:ngm:class:operating-system
relatedTo:
  - urn:ngm:class:shared-memory
  - urn:ngm:class:process
  - urn:ngm:class:latency
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Multithreading

Multithreading is a programming and execution model in which a single process contains multiple threads of execution that share the process's memory and resources while running concurrently. It enables responsiveness and parallel use of multiple CPU cores, but introduces the need for synchronisation to avoid race conditions and deadlocks. The operating system scheduler interleaves or parallelises threads, and shared mutable state must be coordinated with locks or other primitives.
