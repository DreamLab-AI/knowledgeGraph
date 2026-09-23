---
okf_version: "0.2"
type: Class
title: Anycast Routing
resource: urn:ngm:class:anycast-routing
domain: infrastructure
description: Anycast routing is a network addressing and routing technique in which a single IP address is advertised from multiple geographically distributed locations, and packets are delivered to whichever instance is nearest by the routing metric. It uses standard internet routing to steer each client to the closest available node, reducing latency and distributing load without client awareness. Anycast un
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:routing-protocol
requires:
  - urn:ngm:class:geographic-distribution
enables:
  - urn:ngm:class:failover
  - urn:ngm:class:high-availability
dependsOn:
  - urn:ngm:class:load-balancing
bridgesTo:
  - urn:ngm:class:edge-computing
uses:
  - urn:ngm:class:ip-addressing
  - urn:ngm:class:routing-protocol
  - urn:ngm:class:network-routing
supports:
  - urn:ngm:class:cdn
  - urn:ngm:class:dns
  - urn:ngm:class:cdn
relatedTo:
  - urn:ngm:class:latency
  - urn:ngm:class:load-balancer
  - urn:ngm:class:infrastructure
---

# Anycast Routing

Anycast routing is a network addressing and routing technique in which a single IP address is advertised from multiple geographically distributed locations, and packets are delivered to whichever instance is nearest by the routing metric. It uses standard internet routing to steer each client to the closest available node, reducing latency and distributing load without client awareness. Anycast underpins resilient DNS, content delivery, and DDoS mitigation by enabling automatic failover and traffic absorption across many sites.
