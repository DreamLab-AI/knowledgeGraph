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
  - urn:ngm:class:transport-layer-security
bridgesTo:
  - urn:ngm:class:network-security
uses:
  - urn:ngm:class:symmetric-encryption
  - urn:ngm:class:asymmetric-encryption
supports:
  - urn:ngm:class:authentication
standardizedBy:
  - urn:ngm:class:transport-layer-security
relatedTo:
  - urn:ngm:class:transport-layer-security
  - urn:ngm:class:digital-signature
  - urn:ngm:class:certificate-authority
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Ssl

SSL (Secure Sockets Layer) is a deprecated cryptographic protocol for establishing encrypted, authenticated connections between networked applications, and its name remains in common use as a colloquial label for its successor, TLS. SSL introduced the handshake model in which peers negotiate cipher suites, authenticate via certificates and derive symmetric session keys to protect subsequent traffic. All SSL versions are now considered insecure and have been superseded by Transport Layer Security. The term persists in product naming, certificates and developer vocabulary even though modern deployments use TLS.
