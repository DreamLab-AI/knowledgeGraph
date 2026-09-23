---
okf_version: "0.2"
type: Class
title: Reverse Proxy
resource: urn:ngm:class:reverse-proxy
domain: infrastructure
description: A reverse proxy is a server that sits in front of one or more backend servers and forwards client requests to them, presenting a single entry point to the outside world. It terminates client connections, can offload TLS, cache responses, compress payloads and apply access controls before relaying traffic. By decoupling clients from backends it improves security, scalability and operational flexibi
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:network-architecture
hasPart:
  - urn:ngm:class:ssl-termination
  - urn:ngm:class:caching
requires:
  - urn:ngm:class:http
  - urn:ngm:class:tcp-ip
enables:
  - urn:ngm:class:high-availability
  - urn:ngm:class:rate-limiting
dependsOn:
  - urn:ngm:class:http
  - urn:ngm:class:dns
contrastsWith:
  - urn:ngm:class:api-gateway
bridgesTo:
  - urn:ngm:class:load-balancer
  - urn:ngm:class:cdn
uses:
  - urn:ngm:class:ssl-termination
  - urn:ngm:class:caching
supports:
  - urn:ngm:class:microservices
  - urn:ngm:class:web-application-firewall
partOf:
  - urn:ngm:class:network-architecture
  - urn:ngm:class:cloud-infrastructure
relatedTo:
  - urn:ngm:class:load-balancer
  - urn:ngm:class:api-gateway
---

# Reverse Proxy

A reverse proxy is a server that sits in front of one or more backend servers and forwards client requests to them, presenting a single entry point to the outside world. It terminates client connections, can offload TLS, cache responses, compress payloads and apply access controls before relaying traffic. By decoupling clients from backends it improves security, scalability and operational flexibility.
