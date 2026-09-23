---
okf_version: "0.2"
type: Class
title: TLS 1.3
resource: urn:ngm:class:tls-1-3
domain: security
description: TLS 1.3 (Transport Layer Security version 1.3, standardised in RFC 8446, August 2018) is the current major version of the TLS protocol, redesigned to eliminate legacy cryptographic weaknesses, reduce handshake round-trips from two to one (zero for session resumption), mandate forward secrecy on every connection, and restrict the cipher suite to a small set of authenticated encryption algorithms. I
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:tls
  - urn:ngm:class:encryption-protocol
requires:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:certificate-authority
enables:
  - urn:ngm:class:quic
  - urn:ngm:class:network-security
  - urn:ngm:class:http
  - urn:ngm:class:forward-secrecy
contrastsWith:
  - urn:ngm:class:tls
  - urn:ngm:class:ssl
bridgesTo:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:distributed-collaboration
uses:
  - urn:ngm:class:key-exchange
  - urn:ngm:class:cryptography
  - urn:ngm:class:elliptic-curve-diffie-hellman
  - urn:ngm:class:authenticated-encryption
  - urn:ngm:class:digital-certificate
  - urn:ngm:class:x-509-certificate
standardizedBy:
  - urn:ngm:class:ietf
  - urn:ngm:class:rfc-8446
relatedTo:
  - urn:ngm:class:certificate-transparency
  - urn:ngm:class:post-quantum-cryptography
  - urn:ngm:class:http-protocol
  - urn:ngm:class:mutual-tls
---

# TLS 1.3

TLS 1.3 (Transport Layer Security version 1.3, standardised in RFC 8446, August 2018) is the current major version of the TLS protocol, redesigned to eliminate legacy cryptographic weaknesses, reduce handshake round-trips from two to one (zero for session resumption), mandate forward secrecy on every connection, and restrict the cipher suite to a small set of authenticated encryption algorithms. It replaces TLS 1.2 as the baseline secure transport for HTTPS, QUIC, and virtually all authenticated internet communications.
