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
  - urn:ngm:class:content-delivery-network
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Edge Server

A server deployed at a network point of presence geographically and topologically close to end users, which caches and serves content, terminates TLS connections, and increasingly executes application logic on behalf of a distant origin server; edge servers are the building blocks of content delivery networks and edge computing platforms, cutting round-trip latency, absorbing traffic spikes and DDoS load, and reducing bandwidth demand on origin infrastructure.
