---
okf_version: "0.2"
type: Class
title: Content Delivery Network (CDN)
resource: urn:ngm:class:content-delivery-network-cdn
domain: infrastructure
description: A geographically distributed network of proxy servers and data centers designed to provide high availability, high performance, and low latency content delivery by caching content closer to end-users.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:infra-network-and-comms
  - urn:ngm:class:network-infrastructure
hasPart:
  - urn:ngm:class:cache-layer
  - urn:ngm:class:edge-server
  - urn:ngm:class:load-balancer
  - urn:ngm:class:origin-server
  - urn:ngm:class:routing-protocol
  - urn:ngm:class:cache-layer
requires:
  - urn:ngm:class:dns
  - urn:ngm:class:storage-systems
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:storage-systems
  - urn:ngm:class:dns
enables:
  - urn:ngm:class:low-latency-content-delivery
  - urn:ngm:class:scalable-distribution
  - urn:ngm:class:geographic-redundancy
  - urn:ngm:class:ddos-protection
dependsOn:
  - urn:ngm:class:internet-service-provider
  - urn:ngm:class:data-centre
  - urn:ngm:class:network-protocol
bridgesTo:
  - urn:ngm:class:computer-vision
partOf:
  - urn:ngm:class:network-infrastructure
---

# Content Delivery Network (CDN)

A geographically distributed network of proxy servers and data centers designed to provide high availability, high performance, and low latency content delivery by caching content closer to end-users.
