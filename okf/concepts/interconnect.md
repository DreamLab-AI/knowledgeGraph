---
okf_version: "0.2"
type: Class
title: Interconnect
resource: urn:ngm:class:interconnect
domain: infrastructure
description: An interconnect is the network fabric that links compute nodes, processors, accelerators and memory within or across systems, providing the high-bandwidth, low-latency communication paths required for parallel and distributed workloads. In high-performance computing and data centres, interconnects determine how efficiently many processors can exchange data and synchronise. Examples include on-chip
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:computing-infrastructure
requires:
  - urn:ngm:class:network-topology
  - urn:ngm:class:networking
enables:
  - urn:ngm:class:parallel-processing
  - urn:ngm:class:high-performance-computing
  - urn:ngm:class:collective-communication
bridgesTo:
  - urn:ngm:class:networking
uses:
  - urn:ngm:class:ethernet
  - urn:ngm:class:network-topology
supports:
  - urn:ngm:class:message-passing
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:scalability
partOf:
  - urn:ngm:class:high-performance-computing
relatedTo:
  - urn:ngm:class:gpu
  - urn:ngm:class:cloud-computing
---

# Interconnect

An interconnect is the network fabric that links compute nodes, processors, accelerators and memory within or across systems, providing the high-bandwidth, low-latency communication paths required for parallel and distributed workloads. In high-performance computing and data centres, interconnects determine how efficiently many processors can exchange data and synchronise. Examples include on-chip buses, PCIe links between devices, and cluster fabrics such as InfiniBand or high-speed Ethernet.
