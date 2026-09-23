---
okf_version: "0.2"
type: Class
title: Transport Layer
resource: urn:ngm:class:transport-layer
domain: infrastructure
description: The Transport Layer is the stratum that provides end-to-end delivery of data between endpoints over a network. It sits above the Network Layer that routes packets and below the protocol and integration strata that rely on reliable channels. It contains segmentation, flow and congestion control, and connection management.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:infra-network-and-comms
  - urn:ngm:class:owl-thing
hasPart:
  - urn:ngm:class:congestion-control
  - urn:ngm:class:flow-control
  - urn:ngm:class:segmentation-and-reassembly
  - urn:ngm:class:connection-management
  - urn:ngm:class:error-detection-and-correction
requires:
  - urn:ngm:class:network-layer
  - urn:ngm:class:ip-addressing
enables:
  - urn:ngm:class:protocol-layer
  - urn:ngm:class:integration-layer
  - urn:ngm:class:application-layer
  - urn:ngm:class:session-layer
dependsOn:
  - urn:ngm:class:packet-switching
  - urn:ngm:class:internet-protocol
implements:
  - urn:ngm:class:transmission-control-protocol
  - urn:ngm:class:user-datagram-protocol
  - urn:ngm:class:quic
  - urn:ngm:class:stream-control-transmission-protocol
contrastsWith:
  - urn:ngm:class:data-link-layer
  - urn:ngm:class:physical-layer
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:network-security
  - urn:ngm:class:tls
  - urn:ngm:class:transmission-control-protocol
  - urn:ngm:class:congestion-control
uses:
  - urn:ngm:class:port-number
  - urn:ngm:class:socket-api
standardizedBy:
  - urn:ngm:class:ietf
  - urn:ngm:class:osi-model
relatedTo:
  - urn:ngm:class:multiplexing
  - urn:ngm:class:end-to-end-principle
  - urn:ngm:class:quality-of-service
---

# Transport Layer

The Transport Layer is the stratum that provides end-to-end delivery of data between endpoints over a network. It sits above the Network Layer that routes packets and below the protocol and integration strata that rely on reliable channels. It contains segmentation, flow and congestion control, and connection management.
