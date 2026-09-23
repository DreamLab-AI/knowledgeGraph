---
okf_version: "0.2"
type: Class
title: Scheduler
resource: urn:ngm:class:scheduler
domain: infrastructure
description: A scheduler is a system component that decides which units of work run, where they run and in what order, allocating finite computing resources among competing tasks over time. Schedulers exist at many layers, from operating-system process and thread scheduling to cluster and container orchestration that places workloads across machines. Their policies trade off throughput, latency, fairness and r
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:resource-management
hasPart:
  - urn:ngm:class:priority-queue
requires:
  - urn:ngm:class:resource-allocation
enables:
  - urn:ngm:class:throughput
  - urn:ngm:class:autoscaling
implements:
  - urn:ngm:class:kubernetes
uses:
  - urn:ngm:class:resource-allocation
  - urn:ngm:class:load-balancing
supports:
  - urn:ngm:class:batch-processing
  - urn:ngm:class:container-orchestration
  - urn:ngm:class:concurrency
partOf:
  - urn:ngm:class:resource-management
  - urn:ngm:class:operating-system
relatedTo:
  - urn:ngm:class:latency
  - urn:ngm:class:orchestration
  - urn:ngm:class:real-time-operating-system
---

# Scheduler

A scheduler is a system component that decides which units of work run, where they run and in what order, allocating finite computing resources among competing tasks over time. Schedulers exist at many layers, from operating-system process and thread scheduling to cluster and container orchestration that places workloads across machines. Their policies trade off throughput, latency, fairness and resource utilisation according to the goals of the platform.
