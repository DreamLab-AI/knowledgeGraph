---
okf_version: "0.2"
type: Class
title: Transmission Delay
resource: urn:ngm:class:transmission-delay
domain: infrastructure
description: The time required to push all of a packet's bits onto the transmission medium, calculated as packet size divided by the link's transmission rate. It is one of the four canonical components of network latency alongside propagation, processing, and queueing delay, dominates end-to-end delay on low-bandwidth links, and shrinks proportionally as link capacity increases, which is why upgrading link spe
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:network-latency
dependsOn:
  - urn:ngm:class:bandwidth
contrastsWith:
  - urn:ngm:class:propagation-delay
partOf:
  - urn:ngm:class:latency
  - urn:ngm:class:network-latency
relatedTo:
  - urn:ngm:class:packet-switching
---

# Transmission Delay

The time required to push all of a packet's bits onto the transmission medium, calculated as packet size divided by the link's transmission rate. It is one of the four canonical components of network latency alongside propagation, processing, and queueing delay, dominates end-to-end delay on low-bandwidth links, and shrinks proportionally as link capacity increases, which is why upgrading link speed reduces this component but leaves propagation delay unchanged.
