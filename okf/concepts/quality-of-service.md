---
okf_version: "0.2"
type: Class
title: Quality Of Service
resource: urn:ngm:class:quality-of-service
domain: infrastructure
description: Quality of Service (QoS) is a set of network management techniques, policies, and protocols that prioritise, shape, and guarantee specified performance characteristics—including latency, jitter, throughput, and packet loss—for distinct traffic classes traversing shared network infrastructure. QoS mechanisms operate at multiple OSI layers, using traffic classification, queuing disciplines, scheduli
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:network-infrastructure
requires:
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:network-protocol
  - urn:ngm:class:traffic-classification
enables:
  - urn:ngm:class:real-time
  - urn:ngm:class:telecollaboration
  - urn:ngm:class:low-latency-networking
  - urn:ngm:class:service-level-agreement
dependsOn:
  - urn:ngm:class:packet-switching
  - urn:ngm:class:routing-protocol
  - urn:ngm:class:routing-protocol
implements:
  - urn:ngm:class:differentiated-services
  - urn:ngm:class:integrated-services
contrastsWith:
  - urn:ngm:class:best-effort-delivery
bridgesTo:
  - urn:ngm:class:extended-reality
  - urn:ngm:class:edge-computing
uses:
  - urn:ngm:class:traffic-shaping
  - urn:ngm:class:queuing-discipline
  - urn:ngm:class:admission-control
supports:
  - urn:ngm:class:voice-over-ip
  - urn:ngm:class:video-streaming
  - urn:ngm:class:cloud-computing
standardizedBy:
  - urn:ngm:class:ietf
  - urn:ngm:class:ieee-802-x
  - urn:ngm:class:ieee-802-x
relatedTo:
  - urn:ngm:class:latency
  - urn:ngm:class:bandwidth-adaptation
  - urn:ngm:class:network-congestion
  - urn:ngm:class:jitter
---

# Quality Of Service

Quality of Service (QoS) is a set of network management techniques, policies, and protocols that prioritise, shape, and guarantee specified performance characteristics—including latency, jitter, throughput, and packet loss—for distinct traffic classes traversing shared network infrastructure. QoS mechanisms operate at multiple OSI layers, using traffic classification, queuing disciplines, scheduling algorithms, and admission control to meet differentiated service-level objectives. In real-time systems such as XR, telepresence, and cloud-native distributed applications, QoS is essential for maintaining acceptable user experience under variable load. Standardised frameworks including IntServ, DiffServ, and IEEE 802.1p provide interoperable models for end-to-end QoS across heterogeneous networks.
