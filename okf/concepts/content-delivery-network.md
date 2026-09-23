---
okf_version: "0.2"
type: Class
title: Content Delivery Network
resource: urn:ngm:class:content-delivery-network
domain: infrastructure
description: A Content Delivery Network (CDN) is a geographically distributed system of edge servers and Points of Presence (PoPs) that cache, replicate, and serve web assets — static files, media streams, and increasingly dynamic API responses — from locations physically near end users, substantially reducing round-trip latency and offloading origin-server load. CDNs use anycast routing, DNS-based request ste
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:network-infrastructure
hasPart:
  - urn:ngm:class:edge-server
  - urn:ngm:class:point-of-presence
  - urn:ngm:class:web-application-firewall
  - urn:ngm:class:load-balancer
requires:
  - urn:ngm:class:anycast-routing
  - urn:ngm:class:dns
  - urn:ngm:class:tls
enables:
  - urn:ngm:class:low-latency
  - urn:ngm:class:edge-computing
  - urn:ngm:class:ddos-mitigation
  - urn:ngm:class:low-latency
  - urn:ngm:class:origin-offload
contrastsWith:
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:origin-server
bridgesTo:
  - urn:ngm:class:edge-inference
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:edge-inference
uses:
  - urn:ngm:class:http-caching
  - urn:ngm:class:encryption
  - urn:ngm:class:quic
  - urn:ngm:class:anycast-routing
  - urn:ngm:class:quic
supports:
  - urn:ngm:class:scalability-pattern
  - urn:ngm:class:cloud-infrastructure
  - urn:ngm:class:streaming-media
  - urn:ngm:class:microservices-architecture
partOf:
  - urn:ngm:class:internet-infrastructure
relatedTo:
  - urn:ngm:class:network-latency
  - urn:ngm:class:reverse-proxy
  - urn:ngm:class:caching
  - urn:ngm:class:web-performance
---

# Content Delivery Network

A Content Delivery Network (CDN) is a geographically distributed system of edge servers and Points of Presence (PoPs) that cache, replicate, and serve web assets — static files, media streams, and increasingly dynamic API responses — from locations physically near end users, substantially reducing round-trip latency and offloading origin-server load. CDNs use anycast routing, DNS-based request steering, and intelligent load balancing to direct each client request to the nearest healthy PoP, with cache coherence governed by HTTP cache-control semantics (RFC 9111) and conditional request mechanisms. Modern CDNs have evolved into full edge-compute platforms, offering TLS termination, DDoS mitigation, Web Application Firewall (WAF) services, and serverless edge runtimes (e.g. Cloudflare Workers, Fastly Compute) that execute application logic at PoPs without origin round-trips, blurring the boundary between network infrastructure and distributed application hosting.
