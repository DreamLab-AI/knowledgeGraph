---
okf_version: "0.2"
type: Class
title: Network Bandwidth
resource: urn:ngm:class:network-bandwidth
domain: infrastructure
description: Network bandwidth is the maximum rate at which data can be transferred across a network path, typically measured in bits per second. It defines the capacity of a communication channel rather than its current utilisation or the time taken for an individual message to traverse the path. Bandwidth interacts with latency and packet loss to determine the effective throughput experienced by applications
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:network-infrastructure
hasPart:
  - urn:ngm:class:quality-of-service
requires:
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:network-protocol
enables:
  - urn:ngm:class:scalability
dependsOn:
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:congestion-control
supports:
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:cdn
relatedTo:
  - urn:ngm:class:latency
  - urn:ngm:class:network-latency
  - urn:ngm:class:quality-of-service
  - urn:ngm:class:cdn
---

# Network Bandwidth

Network bandwidth is the maximum rate at which data can be transferred across a network path, typically measured in bits per second. It defines the capacity of a communication channel rather than its current utilisation or the time taken for an individual message to traverse the path. Bandwidth interacts with latency and packet loss to determine the effective throughput experienced by applications.
