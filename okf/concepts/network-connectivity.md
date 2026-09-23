---
okf_version: "0.2"
type: Class
title: Network Connectivity
resource: urn:ngm:class:network-connectivity
domain: infrastructure
description: Network Connectivity is the capability of computing nodes, devices, or systems to establish, maintain, and exchange data across communication links spanning local area networks, wide area networks, and heterogeneous internet topologies. It encompasses the physical transmission medium (copper, fibre, radio), link-layer and network-layer addressing, routing protocols that guide packets across autono
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:network-infrastructure
hasPart:
  - urn:ngm:class:network-protocol
  - urn:ngm:class:network-topology
  - urn:ngm:class:routing-protocol
  - urn:ngm:class:physical-layer
requires:
  - urn:ngm:class:ip-addressing
  - urn:ngm:class:dns
  - urn:ngm:class:network-interface
enables:
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:edge-computing
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:real-time-communication
dependsOn:
  - urn:ngm:class:bandwidth
  - urn:ngm:class:latency
  - urn:ngm:class:reliability
  - urn:ngm:class:reliability
contrastsWith:
  - urn:ngm:class:air-gap
  - urn:ngm:class:network-isolation
bridgesTo:
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:federated-learning
  - urn:ngm:class:spatial-computing
supports:
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:software-defined-networking
  - urn:ngm:class:cdn
standardizedBy:
  - urn:ngm:class:ieee-802-x
  - urn:ngm:class:ietf-rfc
  - urn:ngm:class:ieee-802-x
relatedTo:
  - urn:ngm:class:network-security
  - urn:ngm:class:quality-of-service
---

# Network Connectivity

Network Connectivity is the capability of computing nodes, devices, or systems to establish, maintain, and exchange data across communication links spanning local area networks, wide area networks, and heterogeneous internet topologies. It encompasses the physical transmission medium (copper, fibre, radio), link-layer and network-layer addressing, routing protocols that guide packets across autonomous systems, and transport-layer mechanisms that provide reliability, ordering, and flow control. Together these layers enable end-to-end data delivery on which all higher-order distributed services — from cloud orchestration and edge computing to consensus protocols and collaborative applications — ultimately depend.
