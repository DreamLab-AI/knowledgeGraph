---
okf_version: "0.2"
type: Class
title: Deterministic Networking
resource: urn:ngm:class:deterministic-networking
domain: infrastructure
description: "Deterministic networking is a class of networking techniques that provide bounded latency, low jitter and negligible packet loss for time-critical traffic over shared packet-switched infrastructure, typically through reserved bandwidth, scheduled transmission windows and time synchronisation across network nodes. It underpins standards such as IEEE Time-Sensitive Networking and IETF DetNet, which "
maturity: established
quality: 0.55
is-a:
  - urn:ngm:class:network-protocol
partOf:
  - urn:ngm:class:network-protocol
relatedTo:
  - urn:ngm:class:time-sensitive-networking
  - urn:ngm:class:profinet
---

# Deterministic Networking

Deterministic networking is a class of networking techniques that provide bounded latency, low jitter and negligible packet loss for time-critical traffic over shared packet-switched infrastructure, typically through reserved bandwidth, scheduled transmission windows and time synchronisation across network nodes. It underpins standards such as IEEE Time-Sensitive Networking and IETF DetNet, which extend best-effort Ethernet and IP networks with guarantees suitable for industrial control, robotics and audio-video applications. Deterministic behaviour is achieved by combining traffic shaping, redundancy and precise clock synchronisation rather than relying on statistical over-provisioning alone.
