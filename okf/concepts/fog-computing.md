---
okf_version: "0.2"
type: Class
title: Fog Computing
resource: urn:ngm:class:fog-computing
domain: infrastructure
description: Fog computing is a distributed architecture that places compute, storage, and networking resources in an intermediate tier between end devices and the cloud, typically in gateways, routers, and local servers near the data source. It extends cloud capabilities toward the network edge to reduce latency, conserve bandwidth, and improve resilience and privacy for geographically dispersed Internet-of-T
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:distributed-computing
enables:
  - urn:ngm:class:low-latency-computing
uses:
  - urn:ngm:class:edge-computing
relatedTo:
  - urn:ngm:class:cloud-computing
---

# Fog Computing

Fog computing is a distributed architecture that places compute, storage, and networking resources in an intermediate tier between end devices and the cloud, typically in gateways, routers, and local servers near the data source. It extends cloud capabilities toward the network edge to reduce latency, conserve bandwidth, and improve resilience and privacy for geographically dispersed Internet-of-Things deployments. Distinct from edge computing's focus on the device itself, fog computing emphasises a coordinated, hierarchical layer of regional nodes orchestrating many edges.
