---
okf_version: "0.2"
type: Class
title: Guaranteed Bandwidth
resource: urn:ngm:class:guaranteed-bandwidth
domain: spatial-computing
description: Guaranteed Bandwidth is a network quality commitment that ensures a minimum throughput level is reserved for a specific application or user session, regardless of concurrent network load. In spatial computing and XR contexts, it is a prerequisite for low-latency immersive streaming, enabling consistent frame delivery without compression artefacts or stutter that would degrade presence. It is typic
maturity: emerging
quality: 0.75
is-a:
  - urn:ngm:class:network-quality-metric
requires:
  - urn:ngm:class:quality-of-service
  - urn:ngm:class:telecommunications-infrastructure
enables:
  - urn:ngm:class:real-time-processing
  - urn:ngm:class:immersive-communication
  - urn:ngm:class:spatial-computing
partOf:
  - urn:ngm:class:network-quality-metric
  - urn:ngm:class:network-infrastructure
relatedTo:
  - urn:ngm:class:latency
  - urn:ngm:class:edge-computing
  - urn:ngm:class:bandwidth-adaptation
  - urn:ngm:class:latency-management-protocol
---

# Guaranteed Bandwidth

Guaranteed Bandwidth is a network quality commitment that ensures a minimum throughput level is reserved for a specific application or user session, regardless of concurrent network load. In spatial computing and XR contexts, it is a prerequisite for low-latency immersive streaming, enabling consistent frame delivery without compression artefacts or stutter that would degrade presence. It is typically enforced through Quality of Service mechanisms, traffic prioritisation, or network slicing in 5G infrastructure.
