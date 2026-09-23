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
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:asymmetric-cryptography
  - urn:ngm:class:digital-signature
enables:
  - urn:ngm:class:authentication
  - urn:ngm:class:tls
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
  - urn:ngm:class:decentralized-identity
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:digital-signature
standardizedBy:
  - urn:ngm:class:itu-t
  - urn:ngm:class:ietf
relatedTo:
  - urn:ngm:class:root-certificate
  - urn:ngm:class:certificate-authority
---

# X.509 Certificate

A standardised digital certificate format that binds a public key to an entity identity, together with validity period and usage constraints, and is signed by a certificate authority within a public key infrastructure so that relying parties can cryptographically verify its authenticity.
