---
okf_version: "0.2"
type: Class
title: Edge Server
resource: urn:ngm:class:edge-server
domain: infrastructure
description: A server deployed at a network point of presence geographically and topologically close to end users, which caches and serves content, terminates TLS connections, and increasingly executes application logic on behalf of a distant origin server; edge servers are the building blocks of content delivery networks and edge computing platforms, cutting round-trip latency, absorbing traffic spikes and DD
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:network-infrastructure
enables:
  - urn:ngm:class:edge-computing
contrastsWith:
  - urn:ngm:class:origin-server
partOf:
  - urn:ngm:class:cdn
---

# Edge Server

A server deployed at a network point of presence geographically and topologically close to end users, which caches and serves content, terminates TLS connections, and increasingly executes application logic on behalf of a distant origin server; edge servers are the building blocks of content delivery networks and edge computing platforms, cutting round-trip latency, absorbing traffic spikes and DDoS load, and reducing bandwidth demand on origin infrastructure.
