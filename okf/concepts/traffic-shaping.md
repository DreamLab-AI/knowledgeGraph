---
okf_version: "0.2"
type: Class
title: Traffic Shaping
resource: urn:ngm:class:traffic-shaping
domain: infrastructure
description: A network traffic management technique that regulates the rate and burstiness of outgoing packet flows by buffering packets and releasing them according to a configured profile, classically implemented with token bucket or leaky bucket algorithms. By smoothing bursts and holding flows to contracted rates, shaping delays rather than drops excess traffic, enforcing bandwidth allocations and protecti
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:traffic-management
enables:
  - urn:ngm:class:quality-of-service
contrastsWith:
  - urn:ngm:class:congestion-control
  - urn:ngm:class:rate-limiting
relatedTo:
  - urn:ngm:class:bandwidth
---

# Traffic Shaping

A network traffic management technique that regulates the rate and burstiness of outgoing packet flows by buffering packets and releasing them according to a configured profile, classically implemented with token bucket or leaky bucket algorithms. By smoothing bursts and holding flows to contracted rates, shaping delays rather than drops excess traffic, enforcing bandwidth allocations and protecting latency-sensitive classes as a core mechanism of quality-of-service policy at network edges.
