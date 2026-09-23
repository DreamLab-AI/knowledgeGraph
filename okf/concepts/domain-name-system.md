---
okf_version: "0.2"
type: Class
title: Domain Name System
resource: urn:ngm:class:domain-name-system
domain: infrastructure
description: The Domain Name System (DNS) is a hierarchical, distributed naming system that translates human-readable domain names into the numerical addresses used to locate computers and services on a network. It is a foundational component of the Internet, resolving names through a delegated tree of authoritative servers, recursive resolvers and caching layers. DNS also carries service, security and routing
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:networking-infrastructure
hasPart:
  - urn:ngm:class:dns
  - urn:ngm:class:caching
  - urn:ngm:class:name-resolution
requires:
  - urn:ngm:class:network-protocol
  - urn:ngm:class:ietf
enables:
  - urn:ngm:class:service-discovery
  - urn:ngm:class:http
  - urn:ngm:class:load-balancing
dependsOn:
  - urn:ngm:class:network-protocol
contrastsWith:
  - urn:ngm:class:ip-address
uses:
  - urn:ngm:class:caching
supports:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:availability
standardizedBy:
  - urn:ngm:class:ietf
partOf:
  - urn:ngm:class:networking-infrastructure
relatedTo:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:security
---

# Domain Name System

The Domain Name System (DNS) is a hierarchical, distributed naming system that translates human-readable domain names into the numerical addresses used to locate computers and services on a network. It is a foundational component of the Internet, resolving names through a delegated tree of authoritative servers, recursive resolvers and caching layers. DNS also carries service, security and routing metadata that many higher-level protocols depend upon.
