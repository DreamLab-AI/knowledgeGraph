---
okf_version: "0.2"
type: Class
title: Memory Bandwidth
resource: urn:ngm:class:memory-bandwidth
domain: infrastructure
description: "Memory bandwidth is the rate at which data can be read from or written to memory, typically measured in gigabytes per second. It is a primary performance constraint for data-intensive workloads such as deep-learning inference and real-time rendering, where compute units stall waiting for data. High-bandwidth memory technologies are deployed precisely to relieve this bottleneck on accelerators and "
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:hardware
requires:
  - urn:ngm:class:high-bandwidth-memory
enables:
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:inference
contrastsWith:
  - urn:ngm:class:latency
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:interconnect
supports:
  - urn:ngm:class:neural-network-training
  - urn:ngm:class:rendering-pipeline
  - urn:ngm:class:hardware-and-edge
partOf:
  - urn:ngm:class:hardware
  - urn:ngm:class:memory-hierarchy
relatedTo:
  - urn:ngm:class:hardware-and-edge
  - urn:ngm:class:rendering-pipeline
  - urn:ngm:class:operator-fusion
  - urn:ngm:class:quantisation
---

# Memory Bandwidth

Memory bandwidth is the rate at which data can be read from or written to memory, typically measured in gigabytes per second. It is a primary performance constraint for data-intensive workloads such as deep-learning inference and real-time rendering, where compute units stall waiting for data. High-bandwidth memory technologies are deployed precisely to relieve this bottleneck on accelerators and edge hardware.
