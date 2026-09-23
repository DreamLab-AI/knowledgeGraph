---
okf_version: "0.2"
type: Class
title: Ssl
resource: urn:ngm:class:ssl
domain: security
description: SSL (Secure Sockets Layer) is a deprecated cryptographic protocol for establishing encrypted, authenticated connections between networked applications, and its name remains in common use as a colloquial label for its successor, TLS. SSL introduced the handshake model in which peers negotiate cipher suites, authenticate via certificates and derive symmetric session keys to protect subsequent traffi
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:cryptographic-protocol
requires:
  - urn:ngm:class:certificate-authority
enables:
  - urn:ngm:class:secure-communication
dependsOn:
  - urn:ngm:class:cryptography
  - urn:ngm:class:encryption
implements:
  - urn:ngm:class:encryption
contrastsWith:
  - urn:ngm:class:tls
bridgesTo:
  - urn:ngm:class:network-security
uses:
  - urn:ngm:class:symmetric-encryption
  - urn:ngm:class:asymmetric-encryption
supports:
  - urn:ngm:class:authentication
standardizedBy:
  - urn:ngm:class:tls
relatedTo:
  - urn:ngm:class:tls
  - urn:ngm:class:digital-signature
  - urn:ngm:class:certificate-authority
---

# Ssl

SSL (Secure Sockets Layer) is a deprecated cryptographic protocol for establishing encrypted, authenticated connections between networked applications, and its name remains in common use as a colloquial label for its successor, TLS. SSL introduced the handshake model in which peers negotiate cipher suites, authenticate via certificates and derive symmetric session keys to protect subsequent traffic. All SSL versions are now considered insecure and have been superseded by Transport Layer Security. The term persists in product naming, certificates and developer vocabulary even though modern deployments use TLS.
