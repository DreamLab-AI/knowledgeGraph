---
okf_version: "0.2"
type: Class
title: Network Addressing
resource: urn:ngm:class:network-addressing
domain: infrastructure
description: Network addressing is the scheme by which devices and services on a network are assigned unique identifiers — such as IP addresses or protocol-specific identifiers — that allow packets to be routed to the correct destination. It is a foundational function of network protocols and a prerequisite for service discovery in distributed systems, which must resolve human- or service-readable names to add
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:network-protocol
partOf:
  - urn:ngm:class:network-protocol
---

# Network Addressing

Network addressing is the scheme by which devices and services on a network are assigned unique identifiers — such as IP addresses or protocol-specific identifiers — that allow packets to be routed to the correct destination. It is a foundational function of network protocols and a prerequisite for service discovery in distributed systems, which must resolve human- or service-readable names to addressable network locations. Addressing schemes range from flat, globally unique assignments to hierarchical, topology-aware allocations that support efficient routing.
