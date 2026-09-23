---
okf_version: "0.2"
type: Class
title: Computational Resources
resource: urn:ngm:class:computational-resources
domain: infrastructure
description: Computational Resources denotes the aggregate hardware and software infrastructure — encompassing processors (CPUs, GPUs, NPUs, TPUs), memory hierarchies, storage systems, network fabrics, and associated middleware — that a computing system makes available to execute workloads. The capacity, performance characteristics, and allocation policies of these resources determine achievable throughput, la
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:computing-infrastructure
hasPart:
  - urn:ngm:class:central-processing-unit
  - urn:ngm:class:graphics-processing-unit
  - urn:ngm:class:memory-subsystem
  - urn:ngm:class:storage-systems
  - urn:ngm:class:network-fabric
  - urn:ngm:class:neural-processing-unit
  - urn:ngm:class:storage-systems
requires:
  - urn:ngm:class:hardware
  - urn:ngm:class:power-management
enables:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:extended-reality
  - urn:ngm:class:digital-twin
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:edge-computing
dependsOn:
  - urn:ngm:class:operating-system
  - urn:ngm:class:virtualisation
contrastsWith:
  - urn:ngm:class:latency
  - urn:ngm:class:bandwidth
bridgesTo:
  - urn:ngm:class:neural-processing-unit
  - urn:ngm:class:federated-learning
supports:
  - urn:ngm:class:rendering-engine
  - urn:ngm:class:simulation
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:machine-learning-discipline
relatedTo:
  - urn:ngm:class:resource-scheduling
  - urn:ngm:class:load-balancing
  - urn:ngm:class:scalability
  - urn:ngm:class:optimisation
  - urn:ngm:class:optimisation
---

# Computational Resources

Computational Resources denotes the aggregate hardware and software infrastructure — encompassing processors (CPUs, GPUs, NPUs, TPUs), memory hierarchies, storage systems, network fabrics, and associated middleware — that a computing system makes available to execute workloads. The capacity, performance characteristics, and allocation policies of these resources determine achievable throughput, latency, and quality of service across application domains from real-time simulation and AI inference to distributed data processing. Resource management disciplines — including scheduling, load balancing, virtualisation, and power efficiency — govern how competing workloads share finite physical capacity, making computational resources a foundational abstraction in systems design and infrastructure planning.
