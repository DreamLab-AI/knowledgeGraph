---
okf_version: "0.2"
type: Class
title: Congestion Control
resource: urn:ngm:class:congestion-control
domain: infrastructure
description: Congestion Control is the set of mechanisms and algorithms that regulate the rate of data transmission across a network to prevent any sender, link, or node from being overwhelmed by more traffic than it can handle, thereby maintaining overall network stability and fairness. Operating primarily at the transport layer, congestion control algorithms infer network capacity from signals such as packet
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:network-protocol
hasPart:
  - urn:ngm:class:active-queue-management
requires:
  - urn:ngm:class:packet-loss-recovery
  - urn:ngm:class:round-trip-time-measurement
enables:
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:latency-management-protocol
  - urn:ngm:class:fairness
dependsOn:
  - urn:ngm:class:transport-layer
  - urn:ngm:class:internet-protocol
implements:
  - urn:ngm:class:tcp-cubic
  - urn:ngm:class:bbr-algorithm
  - urn:ngm:class:quic
contrastsWith:
  - urn:ngm:class:flow-control
  - urn:ngm:class:traffic-shaping
bridgesTo:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:content-delivery-network
uses:
  - urn:ngm:class:sliding-window-protocol
supports:
  - urn:ngm:class:networking-infrastructure
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:real-time-communication
standardizedBy:
  - urn:ngm:class:ietf
relatedTo:
  - urn:ngm:class:quality-of-service
  - urn:ngm:class:network-latency
  - urn:ngm:class:bandwidth-adaptation
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Congestion Control

Congestion Control is the set of mechanisms and algorithms that regulate the rate of data transmission across a network to prevent any sender, link, or node from being overwhelmed by more traffic than it can handle, thereby maintaining overall network stability and fairness. Operating primarily at the transport layer, congestion control algorithms infer network capacity from signals such as packet loss, explicit congestion notification, and round-trip time variations, adjusting sender rates accordingly. Classical implementations include TCP Tahoe, Reno, CUBIC, and BBR; modern variants extend to QUIC, WebRTC, and multipath scenarios where joint path management adds additional complexity.
