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
  - urn:ngm:class:cdn
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
---

# Congestion Control

Congestion Control is the set of mechanisms and algorithms that regulate the rate of data transmission across a network to prevent any sender, link, or node from being overwhelmed by more traffic than it can handle, thereby maintaining overall network stability and fairness. Operating primarily at the transport layer, congestion control algorithms infer network capacity from signals such as packet loss, explicit congestion notification, and round-trip time variations, adjusting sender rates accordingly. Classical implementations include TCP Tahoe, Reno, CUBIC, and BBR; modern variants extend to QUIC, WebRTC, and multipath scenarios where joint path management adds additional complexity.
