---
okf_version: "0.2"
type: Class
title: Timestamp Authority
resource: urn:ngm:class:timestamp-authority
domain: security
description: A Timestamp Authority (TSA) is a trusted third party that issues cryptographically signed timestamps attesting that a particular piece of data existed at or before a specified point in time, in accordance with the RFC 3161 Internet X.509 Public Key Infrastructure Time-Stamp Protocol. The TSA receives a hash of the document or data, signs it together with the current time using its private key, and
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:certificate-authority
requires:
  - urn:ngm:class:trust-service-provider
enables:
  - urn:ngm:class:audit-trail
  - urn:ngm:class:compliance-audit-trail
  - urn:ngm:class:virtual-notary-service
  - urn:ngm:class:long-term-archival
implements:
  - urn:ngm:class:eidas-regulation
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:governance
uses:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:cryptographic-signature
  - urn:ngm:class:x-509-certificate
supports:
  - urn:ngm:class:digital-signature-verification
  - urn:ngm:class:archival-standards
standardizedBy:
  - urn:ngm:class:etsi
  - urn:ngm:class:ietf
relatedTo:
  - urn:ngm:class:timestamp
  - urn:ngm:class:digital-certificate
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:non-repudiation
---

# Timestamp Authority

A Timestamp Authority (TSA) is a trusted third party that issues cryptographically signed timestamps attesting that a particular piece of data existed at or before a specified point in time, in accordance with the RFC 3161 Internet X.509 Public Key Infrastructure Time-Stamp Protocol. The TSA receives a hash of the document or data, signs it together with the current time using its private key, and returns a TimeStampToken that can be independently verified by any party holding the TSA's public key certificate. Timestamp tokens are widely used in digital signature workflows to prove long-term validity—establishing that signatures were made before certificate revocation or expiry. Under eIDAS regulation in Europe, qualified TSAs form part of trust service infrastructure with legal standing equivalent to notarisation.
