---
okf_version: "0.2"
type: Class
title: Propagation Delay
resource: urn:ngm:class:propagation-delay
domain: infrastructure
description: Propagation delay is the time a signal takes to travel from sender to receiver across a transmission medium, determined by the physical distance divided by the signal's propagation speed. Bounded by the speed of light and reduced in copper or fibre by the medium's refractive properties, it sets a hard floor on network latency that no amount of bandwidth can remove. Propagation delay is one of seve
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:network-latency
hasPart:
  - urn:ngm:class:latency
requires:
  - urn:ngm:class:network-topology
enables:
  - urn:ngm:class:round-trip-time
dependsOn:
  - urn:ngm:class:network-topology
  - urn:ngm:class:packet-switching
contrastsWith:
  - urn:ngm:class:transmission-delay
  - urn:ngm:class:bandwidth
bridgesTo:
  - urn:ngm:class:infrastructure
supports:
  - urn:ngm:class:low-latency
partOf:
  - urn:ngm:class:network-latency
relatedTo:
  - urn:ngm:class:transmission-delay
  - urn:ngm:class:jitter
  - urn:ngm:class:bandwidth
---

# Propagation Delay

Propagation delay is the time a signal takes to travel from sender to receiver across a transmission medium, determined by the physical distance divided by the signal's propagation speed. Bounded by the speed of light and reduced in copper or fibre by the medium's refractive properties, it sets a hard floor on network latency that no amount of bandwidth can remove. Propagation delay is one of several additive components of end-to-end latency, alongside transmission, queuing, and processing delays.
