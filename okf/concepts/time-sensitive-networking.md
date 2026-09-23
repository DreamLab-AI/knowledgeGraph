---
okf_version: "0.2"
type: Class
title: Time-Sensitive Networking
resource: urn:ngm:class:time-sensitive-networking
domain: infrastructure
description: Time-Sensitive Networking (TSN) is a set of IEEE 802.1 standards that add deterministic, bounded-latency delivery to standard Ethernet, enabling time-critical and best-effort traffic to share the same network. TSN provides precise time synchronisation, traffic scheduling, frame preemption, and reservation mechanisms so that control-loop and audio-video data arrive within guaranteed time windows. I
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:network-protocol
requires:
  - urn:ngm:class:precision-time-protocol
  - urn:ngm:class:ethernet
  - urn:ngm:class:network-switch
enables:
  - urn:ngm:class:interoperability
  - urn:ngm:class:deterministic-networking
  - urn:ngm:class:industrial-automation
contrastsWith:
  - urn:ngm:class:fieldbus
  - urn:ngm:class:profinet
  - urn:ngm:class:best-effort-networking
bridgesTo:
  - urn:ngm:class:operational-technology
  - urn:ngm:class:ethernet
  - urn:ngm:class:industry-4-0
uses:
  - urn:ngm:class:clock-synchronization
  - urn:ngm:class:quality-of-service
standardizedBy:
  - urn:ngm:class:ieee-802-x
  - urn:ngm:class:ieee
relatedTo:
  - urn:ngm:class:networking-standard
  - urn:ngm:class:communication-protocol
---

# Time-Sensitive Networking

Time-Sensitive Networking (TSN) is a set of IEEE 802.1 standards that add deterministic, bounded-latency delivery to standard Ethernet, enabling time-critical and best-effort traffic to share the same network. TSN provides precise time synchronisation, traffic scheduling, frame preemption, and reservation mechanisms so that control-loop and audio-video data arrive within guaranteed time windows. It is foundational to industrial automation, automotive in-vehicle networks, and professional media, replacing proprietary fieldbuses with converged standard Ethernet.
