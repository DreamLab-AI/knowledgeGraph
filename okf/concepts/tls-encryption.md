---
okf_version: "0.2"
type: Class
title: TLS Encryption
resource: urn:ngm:class:tls-encryption
domain: security
description: TLS (Transport Layer Security) encryption is the cryptographic protocol layer that provides confidentiality, integrity, and server authentication for communications over TCP/IP networks, most visibly as the foundation of HTTPS. It operates through a handshake that negotiates cipher suites, authenticates servers (and optionally clients) via X.509 certificates, establishes ephemeral session keys usi
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:cryptographic-protocol
requires:
  - urn:ngm:class:x-509-certificate
  - urn:ngm:class:tcp-ip
enables:
  - urn:ngm:class:secure-communication
  - urn:ngm:class:network-security
  - urn:ngm:class:http
  - urn:ngm:class:forward-secrecy
dependsOn:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:hash-function
implements:
  - urn:ngm:class:tls
contrastsWith:
  - urn:ngm:class:ssl
  - urn:ngm:class:ipsec
bridgesTo:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:distributed-collaboration
uses:
  - urn:ngm:class:asymmetric-encryption
  - urn:ngm:class:symmetric-encryption
  - urn:ngm:class:digital-certificate
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:elliptic-curve-diffie-hellman
supports:
  - urn:ngm:class:mutual-authentication
  - urn:ngm:class:data-integrity
relatedTo:
  - urn:ngm:class:tls
  - urn:ngm:class:cryptographic-key-management
  - urn:ngm:class:key-derivation-function
  - urn:ngm:class:certificate-transparency
---

# TLS Encryption

TLS (Transport Layer Security) encryption is the cryptographic protocol layer that provides confidentiality, integrity, and server authentication for communications over TCP/IP networks, most visibly as the foundation of HTTPS. It operates through a handshake that negotiates cipher suites, authenticates servers (and optionally clients) via X.509 certificates, establishes ephemeral session keys using asymmetric key exchange (ECDHE), and then encrypts all subsequent data using symmetric ciphers (AES-GCM). TLS 1.3 (RFC 8446, 2018) is the current standard, eliminating obsolete constructs and reducing handshake latency to one round trip.
