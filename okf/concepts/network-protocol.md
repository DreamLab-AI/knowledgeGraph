---
okf_version: "0.2"
type: Class
title: Network Protocol
resource: urn:ngm:class:network-protocol
domain: infrastructure
description: A network protocol is a set of established rules that specify how to format, send, and receive data between networked devices, enabling diverse communication systems to interact using standard procedures. Protocols are organized into layered architectures (OSI, TCP/IP) and govern addressing, routing, error detection, session management, and application-layer services.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:infra-network-and-comms
hasPart:
  - urn:ngm:class:protocol-stack
requires:
  - urn:ngm:class:network-addressing
enables:
  - urn:ngm:class:network-communication
  - urn:ngm:class:interoperability
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:internet-connectivity
  - urn:ngm:class:data-transmission
dependsOn:
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:physical-layer
implements:
  - urn:ngm:class:osi-model
  - urn:ngm:class:tcp-ip-model
contrastsWith:
  - urn:ngm:class:proprietary-protocol
bridgesTo:
  - urn:ngm:class:distributed-collaboration
  - urn:ngm:class:cryptographic-protocol
uses:
  - urn:ngm:class:packet-switching
  - urn:ngm:class:flow-control
  - urn:ngm:class:routing-algorithm
supports:
  - urn:ngm:class:network-security
  - urn:ngm:class:quality-of-service
standardizedBy:
  - urn:ngm:class:ietf
  - urn:ngm:class:iso
  - urn:ngm:class:ieee
relatedTo:
  - urn:ngm:class:bandwidth
  - urn:ngm:class:latency
---

# Network Protocol

A network protocol is a set of established rules that specify how to format, send, and receive data between networked devices, enabling diverse communication systems to interact using standard procedures. Protocols are organized into layered architectures (OSI, TCP/IP) and govern addressing, routing, error detection, session management, and application-layer services.
