---
okf_version: "0.2"
type: Class
title: X509 Standard
resource: urn:ngm:class:x509-standard
domain: security
description: The X.509 standard defines the format of public-key certificates that bind a public key to an identity, together with the structures for certificate paths and revocation lists used in public-key infrastructure. An X.509 certificate carries fields such as subject, issuer, validity period, public key and extensions, and is signed by a certificate authority so that relying parties can verify it by tr
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:digital-certificate
hasPart:
  - urn:ngm:class:digital-certificate
requires:
  - urn:ngm:class:certificate-authority
enables:
  - urn:ngm:class:tls
dependsOn:
  - urn:ngm:class:certificate-authority
implements:
  - urn:ngm:class:cryptographic-protocol
contrastsWith:
  - urn:ngm:class:cryptography
bridgesTo:
  - urn:ngm:class:authentication
uses:
  - urn:ngm:class:cryptography
supports:
  - urn:ngm:class:authentication
standardizedBy:
  - urn:ngm:class:standards
partOf:
  - urn:ngm:class:trust-infrastructure
relatedTo:
  - urn:ngm:class:tls
  - urn:ngm:class:trust-infrastructure
---

# X509 Standard

The X.509 standard defines the format of public-key certificates that bind a public key to an identity, together with the structures for certificate paths and revocation lists used in public-key infrastructure. An X.509 certificate carries fields such as subject, issuer, validity period, public key and extensions, and is signed by a certificate authority so that relying parties can verify it by tracing a chain to a trusted root. It is the foundational certificate format underlying TLS, secure email and many authentication systems.
