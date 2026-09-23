---
okf_version: "0.2"
type: Class
title: Origin Server
resource: urn:ngm:class:origin-server
domain: infrastructure
description: An origin server is the authoritative source of truth for web content, hosting the original, canonical version of resources that a content delivery network and its edge caches replicate and serve to end users. When an edge node lacks a requested resource or its cached copy has expired, it fetches the content from the origin server. By concentrating authoritative content and offloading repeat deliv
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:cdn
hasPart:
  - urn:ngm:class:caching
requires:
  - urn:ngm:class:http
  - urn:ngm:class:infrastructure
enables:
  - urn:ngm:class:cdn
  - urn:ngm:class:caching
dependsOn:
  - urn:ngm:class:http
contrastsWith:
  - urn:ngm:class:edge-server
bridgesTo:
  - urn:ngm:class:infrastructure
uses:
  - urn:ngm:class:http
  - urn:ngm:class:reverse-proxy
supports:
  - urn:ngm:class:cdn
  - urn:ngm:class:load-balancer
partOf:
  - urn:ngm:class:cdn
relatedTo:
  - urn:ngm:class:reverse-proxy
  - urn:ngm:class:edge-server
---

# Origin Server

An origin server is the authoritative source of truth for web content, hosting the original, canonical version of resources that a content delivery network and its edge caches replicate and serve to end users. When an edge node lacks a requested resource or its cached copy has expired, it fetches the content from the origin server. By concentrating authoritative content and offloading repeat delivery to caches, the origin-edge model improves performance, scalability, and resilience.
