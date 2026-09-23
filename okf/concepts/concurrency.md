---
okf_version: "0.2"
type: Class
title: Concurrency
resource: urn:ngm:class:concurrency
domain: infrastructure
description: "Concurrency is the composition of independently executing computations that make progress within overlapping time periods, whether or not they run simultaneously on separate processors. It is a way of structuring a program so that multiple tasks can be in flight at once, coordinating access to shared state through synchronisation primitives. Concurrency is distinct from parallelism: it concerns th"
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:software-engineering
requires:
  - urn:ngm:class:operating-system
enables:
  - urn:ngm:class:real-time-analytics
dependsOn:
  - urn:ngm:class:multithreading
contrastsWith:
  - urn:ngm:class:parallel-computing
uses:
  - urn:ngm:class:message-passing
  - urn:ngm:class:multithreading
  - urn:ngm:class:event-loop
  - urn:ngm:class:asynchronous-programming
supports:
  - urn:ngm:class:parallel-computing
  - urn:ngm:class:high-throughput-computing
relatedTo:
  - urn:ngm:class:actor-model
  - urn:ngm:class:parallel-processing
  - urn:ngm:class:flow-control
---

# Concurrency

Concurrency is the composition of independently executing computations that make progress within overlapping time periods, whether or not they run simultaneously on separate processors. It is a way of structuring a program so that multiple tasks can be in flight at once, coordinating access to shared state through synchronisation primitives. Concurrency is distinct from parallelism: it concerns the dealing with many things at once, while parallelism concerns the doing of many things at once.
