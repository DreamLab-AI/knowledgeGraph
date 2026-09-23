---
okf_version: "0.2"
type: Class
title: Asynchronous Programming
resource: urn:ngm:class:asynchronous-programming
domain: infrastructure
description: Asynchronous programming is a concurrency model in which operations that would otherwise block — such as input/output, network calls or timers — are initiated without halting the executing thread, allowing other work to proceed until results become available. It uses constructs such as callbacks, promises, futures and async/await to express continuations cleanly. The approach improves responsivene
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:concurrency
  - urn:ngm:class:software-engineering
requires:
  - urn:ngm:class:software-engineering
enables:
  - urn:ngm:class:scalability
contrastsWith:
  - urn:ngm:class:parallel-processing
uses:
  - urn:ngm:class:python
  - urn:ngm:class:multithreading
supports:
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:cloud-computing
partOf:
  - urn:ngm:class:software-engineering
relatedTo:
  - urn:ngm:class:concurrency
  - urn:ngm:class:multithreading
  - urn:ngm:class:parallel-computing
  - urn:ngm:class:software-development
---

# Asynchronous Programming

Asynchronous programming is a concurrency model in which operations that would otherwise block — such as input/output, network calls or timers — are initiated without halting the executing thread, allowing other work to proceed until results become available. It uses constructs such as callbacks, promises, futures and async/await to express continuations cleanly. The approach improves responsiveness and throughput for input/output-bound workloads without the overhead of one thread per task.
