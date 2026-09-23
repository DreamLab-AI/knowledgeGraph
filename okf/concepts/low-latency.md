---
okf_version: "0.2"
type: Class
title: Low Latency
resource: urn:ngm:class:low-latency
domain: infrastructure
description: "Low latency is an engineering design property characterising systems in which the elapsed time between an input event and the corresponding system response is minimised to meet real-time interaction requirements. It is a cross-cutting concern spanning network topology, compute placement, operating-system scheduling, memory hierarchy, and hardware design. Achievable thresholds are domain-dependent "
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:latency
requires:
  - urn:ngm:class:network-topology-optimisation
  - urn:ngm:class:co-location
  - urn:ngm:class:real-time-operating-system
enables:
  - urn:ngm:class:real-time
  - urn:ngm:class:real-time-ai-inference
  - urn:ngm:class:extended-reality-xr
  - urn:ngm:class:high-frequency-trading
  - urn:ngm:class:robotics
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:robotics
  - urn:ngm:class:industrial-automation
dependsOn:
  - urn:ngm:class:network-latency
  - urn:ngm:class:propagation-delay
  - urn:ngm:class:queuing-delay
contrastsWith:
  - urn:ngm:class:throughput
  - urn:ngm:class:high-throughput-computing
bridgesTo:
  - urn:ngm:class:edge-ai
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:tactile-internet
uses:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:hardware-acceleration
  - urn:ngm:class:fpga
  - urn:ngm:class:rdma
  - urn:ngm:class:kernel-bypass-networking
standardizedBy:
  - urn:ngm:class:ietf
  - urn:ngm:class:3-gpp
relatedTo:
  - urn:ngm:class:quality-of-service
  - urn:ngm:class:5-g
  - urn:ngm:class:web-rtc
  - urn:ngm:class:cdn
  - urn:ngm:class:network-slicing
---

# Low Latency

Low latency is an engineering design property characterising systems in which the elapsed time between an input event and the corresponding system response is minimised to meet real-time interaction requirements. It is a cross-cutting concern spanning network topology, compute placement, operating-system scheduling, memory hierarchy, and hardware design. Achievable thresholds are domain-dependent — sub-100 µs in high-frequency trading, under 20 ms for vestibulo-ocular reflex alignment in extended-reality headsets, and under 150 ms for interactive video — and are reached through a combination of edge computing, kernel-bypass networking, hardware acceleration, and optimised serialisation. As a foundational property of distributed infrastructure, low latency is a prerequisite for real-time AI inference, immersive spatial computing, autonomous robotics, and ultra-reliable industrial control.
