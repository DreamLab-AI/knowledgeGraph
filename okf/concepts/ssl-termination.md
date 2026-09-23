---
okf_version: "0.2"
type: Class
title: Ssl Termination
resource: urn:ngm:class:ssl-termination
domain: infrastructure
description: SSL termination is the practice of decrypting inbound TLS-encrypted traffic at a dedicated network endpoint, typically a reverse proxy or load balancer, before forwarding the now-plaintext requests to backend servers. By centralising the cryptographic handshake and certificate management at the edge, it offloads CPU-intensive encryption work from application servers and simplifies certificate life
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:reverse-proxy
hasPart:
  - urn:ngm:class:tls
enables:
  - urn:ngm:class:http
  - urn:ngm:class:http
implements:
  - urn:ngm:class:network-security
uses:
  - urn:ngm:class:tls
  - urn:ngm:class:tls
  - urn:ngm:class:cryptography
supports:
  - urn:ngm:class:infrastructure
partOf:
  - urn:ngm:class:reverse-proxy
  - urn:ngm:class:load-balancer
relatedTo:
  - urn:ngm:class:load-balancer
  - urn:ngm:class:caching
  - urn:ngm:class:cdn
  - urn:ngm:class:edge-computing
  - urn:ngm:class:http
---

# Ssl Termination

SSL termination is the practice of decrypting inbound TLS-encrypted traffic at a dedicated network endpoint, typically a reverse proxy or load balancer, before forwarding the now-plaintext requests to backend servers. By centralising the cryptographic handshake and certificate management at the edge, it offloads CPU-intensive encryption work from application servers and simplifies certificate lifecycle administration. The terminating node holds the private keys and performs the handshake, then routes traffic over the internal network. It is a foundational pattern in modern web infrastructure, often paired with re-encryption to backends for end-to-end security.
