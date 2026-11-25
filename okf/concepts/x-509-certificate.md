---
okf_version: "0.2"
type: Class
title: X.509 Certificate
resource: urn:ngm:class:x-509-certificate
domain: security
description: A standardised digital certificate format that binds a public key to an entity identity, together with validity period and usage constraints, and is signed by a certificate authority within a public key infrastructure so that relying parties can cryptographically verify its authenticity.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:digital-certificate
hasPart:
  - urn:ngm:class:public-key
requires:
  - urn:ngm:class:public-key-infrastructure
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:asymmetric-cryptography
  - urn:ngm:class:digital-signature
enables:
  - urn:ngm:class:authentication
  - urn:ngm:class:transport-layer-security
  - urn:ngm:class:mutual-tls
  - urn:ngm:class:secure-email
  - urn:ngm:class:code-signing
dependsOn:
  - urn:ngm:class:certificate-revocation-list
  - urn:ngm:class:online-certificate-status-protocol
implements:
  - urn:ngm:class:rfc-5280
contrastsWith:
  - urn:ngm:class:self-signed-certificate
  - urn:ngm:class:web-of-trust
bridgesTo:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:digital-signature
standardizedBy:
  - urn:ngm:class:itu-t
  - urn:ngm:class:ietf
relatedTo:
  - urn:ngm:class:root-certificate
  - urn:ngm:class:certificate-authority
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# X.509 Certificate

A standardised digital certificate format that binds a public key to an entity identity, together with validity period and usage constraints, and is signed by a certificate authority within a public key infrastructure so that relying parties can cryptographically verify its authenticity.
