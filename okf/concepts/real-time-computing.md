---
okf_version: "0.2"
type: Class
title: Real-Time Computing
resource: urn:ngm:class:real-time-computing
domain: infrastructure
description: Real-time computing is a computational paradigm in which the correctness of a system depends not only on producing logically correct results but also on producing them within specified timing constraints. Systems are classified as hard real-time (where a missed deadline constitutes a system failure, e.g. aircraft fly-by-wire), firm real-time (where late results are useless but non-catastrophic), o
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:distributed-systems
hasPart:
  - urn:ngm:class:deadline-scheduling
  - urn:ngm:class:hard-real-time
  - urn:ngm:class:soft-real-time
requires:
  - urn:ngm:class:real-time-operating-system
  - urn:ngm:class:deterministic-scheduling
  - urn:ngm:class:interrupt-handling
enables:
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:control-system
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:control-system
dependsOn:
  - urn:ngm:class:latency
  - urn:ngm:class:clock-synchronization
  - urn:ngm:class:clock-synchronization
contrastsWith:
  - urn:ngm:class:batch-processing
  - urn:ngm:class:time-sharing
bridgesTo:
  - urn:ngm:class:inference
  - urn:ngm:class:digital-twin
  - urn:ngm:class:inference
uses:
  - urn:ngm:class:priority-scheduling
  - urn:ngm:class:memory-management
  - urn:ngm:class:watchdog-timer
supports:
  - urn:ngm:class:cyber-physical-systems
  - urn:ngm:class:edge-computing
  - urn:ngm:class:robotics
standardizedBy:
  - urn:ngm:class:posix
  - urn:ngm:class:iso-26262
relatedTo:
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:concurrency
---

# Real-Time Computing

Real-time computing is a computational paradigm in which the correctness of a system depends not only on producing logically correct results but also on producing them within specified timing constraints. Systems are classified as hard real-time (where a missed deadline constitutes a system failure, e.g. aircraft fly-by-wire), firm real-time (where late results are useless but non-catastrophic), or soft real-time (where occasional deadline misses degrade quality rather than cause failure, e.g. multimedia streaming). Achieving real-time guarantees requires deterministic scheduling, bounded interrupt latency, and careful resource management throughout the entire software stack.
