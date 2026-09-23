---
okf_version: "0.2"
type: Class
title: Network Resilience
resource: urn:ngm:class:network-resilience
domain: infrastructure
description: Network resilience is a network's capacity to maintain an acceptable level of connectivity and service in the face of node or link failure, congestion, attack or partition, typically achieved through redundancy, self-healing routing and peer diversity. It is measured by how quickly and completely the network restores full functionality after a disruptive event. In peer-to-peer and blockchain netwo
maturity: draft
quality: 0.55
is-a:
  - urn:ngm:class:resilience
requires:
  - urn:ngm:class:peer-discovery
partOf:
  - urn:ngm:class:resilience
---

# Network Resilience

Network resilience is a network's capacity to maintain an acceptable level of connectivity and service in the face of node or link failure, congestion, attack or partition, typically achieved through redundancy, self-healing routing and peer diversity. It is measured by how quickly and completely the network restores full functionality after a disruptive event. In peer-to-peer and blockchain networks it depends heavily on robust peer discovery mechanisms that keep nodes well connected.
