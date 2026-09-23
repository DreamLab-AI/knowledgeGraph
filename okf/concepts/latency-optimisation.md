---
okf_version: "0.2"
type: Class
title: Latency Optimisation
resource: urn:ngm:class:latency-optimisation
domain: distributed-collaboration
description: Latency optimisation is the set of techniques used to minimise the time between a request and its corresponding response in networked and distributed systems. It targets propagation, processing, queueing, and serialisation delays through measures such as edge placement, caching, protocol tuning, and concurrency. Low latency is critical for real-time communication, interactive collaboration, and re
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:distributed-collaboration
  - urn:ngm:class:dc-protocol-and-infra
requires:
  - urn:ngm:class:monitoring
  - urn:ngm:class:observability
enables:
  - urn:ngm:class:real-time-communication
  - urn:ngm:class:real-time
dependsOn:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:cdn
bridgesTo:
  - urn:ngm:class:bandwidth-adaptation
  - urn:ngm:class:distributed-systems
uses:
  - urn:ngm:class:caching
  - urn:ngm:class:cdn
supports:
  - urn:ngm:class:user-experience
  - urn:ngm:class:quality-of-service
partOf:
  - urn:ngm:class:distributed-collaboration
relatedTo:
  - urn:ngm:class:latency
  - urn:ngm:class:network-latency
  - urn:ngm:class:throughput
---

# Latency Optimisation

Latency optimisation is the set of techniques used to minimise the time between a request and its corresponding response in networked and distributed systems. It targets propagation, processing, queueing, and serialisation delays through measures such as edge placement, caching, protocol tuning, and concurrency. Low latency is critical for real-time communication, interactive collaboration, and responsive user experiences.
