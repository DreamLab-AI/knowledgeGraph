---
okf_version: "0.2"
type: Class
title: Network Layer
resource: urn:ngm:class:network-layer
domain: infrastructure
description: Architectural layer governing communication protocols, packet routing, congestion control, and network topology. Provides reliable end-to-end message delivery, bandwidth management, and quality-of-service guarantees for distributed systems across heterogeneous networks.
maturity: draft
quality: 0.68
is-a:
  - urn:ngm:class:infra-network-and-comms
  - urn:ngm:class:architectural-layer
hasPart:
  - urn:ngm:class:congestion-control
  - urn:ngm:class:protocol-stack
  - urn:ngm:class:network-topology
  - urn:ngm:class:packet-switching
  - urn:ngm:class:network-interface
  - urn:ngm:class:routing-engine
  - urn:ngm:class:qos-manager
requires:
  - urn:ngm:class:physical-layer
  - urn:ngm:class:data-link-layer
enables:
  - urn:ngm:class:latency-management-protocol
  - urn:ngm:class:network-resilience
  - urn:ngm:class:message-delivery
  - urn:ngm:class:latency-management-protocol
  - urn:ngm:class:bandwidth-allocation
dependsOn:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:ip-addressing
  - urn:ngm:class:physical-layer
  - urn:ngm:class:technology-infrastructure-domain-layer
implements:
  - urn:ngm:class:internet-protocol
contrastsWith:
  - urn:ngm:class:transport-layer
  - urn:ngm:class:application-layer
bridgesTo:
  - urn:ngm:class:architectural-layer
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:software-defined-networking
  - urn:ngm:class:physical-layer
  - urn:ngm:class:middleware-layer
supports:
  - urn:ngm:class:middleware-layer
  - urn:ngm:class:transport-layer
  - urn:ngm:class:overlay-network
standardizedBy:
  - urn:ngm:class:ietf
  - urn:ngm:class:ieee-802-x
partOf:
  - urn:ngm:class:osi-model
  - urn:ngm:class:internet-protocol-suite
relatedTo:
  - urn:ngm:class:network-security
  - urn:ngm:class:firewall
  - urn:ngm:class:virtual-private-network
---

# Network Layer

Architectural layer governing communication protocols, packet routing, congestion control, and network topology. Provides reliable end-to-end message delivery, bandwidth management, and quality-of-service guarantees for distributed systems across heterogeneous networks.
