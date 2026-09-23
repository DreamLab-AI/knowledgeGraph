---
okf_version: "0.2"
type: Class
title: CDN
resource: urn:ngm:class:cdn
domain: infrastructure
description: A Content Delivery Network (CDN) is a geographically distributed network of proxy servers and data centres that caches and serves web content from locations physically close to end users, reducing latency, relieving origin server load, and improving resilience against traffic spikes and denial-of-service attacks. CDNs operate through anycast routing, edge caching policies, and real-time traffic st
maturity: mature
quality: 0.72
hasPart:
  - urn:ngm:class:point-of-presence
  - urn:ngm:class:web-application-firewall
requires:
  - urn:ngm:class:origin-server
  - urn:ngm:class:load-balancing
enables:
  - urn:ngm:class:bandwidth-optimization
  - urn:ngm:class:latency
  - urn:ngm:class:ddos-mitigation
  - urn:ngm:class:serverless-architecture
dependsOn:
  - urn:ngm:class:cloud-infrastructure
contrastsWith:
  - urn:ngm:class:peer-to-peer-network
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:network-protocol
  - urn:ngm:class:network-security
  - urn:ngm:class:anycast-routing
  - urn:ngm:class:tls
  - urn:ngm:class:dns
supports:
  - urn:ngm:class:video-streaming
  - urn:ngm:class:adaptive-bitrate-streaming
  - urn:ngm:class:api-gateway
partOf:
  - urn:ngm:class:internet-infrastructure
relatedTo:
  - urn:ngm:class:cloud-infrastructure
  - urn:ngm:class:internet-infrastructure
  - urn:ngm:class:content-delivery-network-cdn
  - urn:ngm:class:http-caching
---

# CDN

A Content Delivery Network (CDN) is a geographically distributed network of proxy servers and data centres that caches and serves web content from locations physically close to end users, reducing latency, relieving origin server load, and improving resilience against traffic spikes and denial-of-service attacks. CDNs operate through anycast routing, edge caching policies, and real-time traffic steering algorithms to deliver optimal user experience across diverse network conditions.
