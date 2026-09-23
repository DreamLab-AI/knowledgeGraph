---
okf_version: "0.2"
type: Class
title: Qualified Electronic Signature
resource: urn:ngm:class:qualified-electronic-signature
domain: security
description: A qualified electronic signature (QES) is the highest-assurance class of electronic signature defined by the European Union's eIDAS regulation, created with a qualified signature-creation device and backed by a qualified certificate issued by an accredited trust service provider. It is legally equivalent to a handwritten signature across the EU and provides strong guarantees of signer identity and
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:digital-signature-verification
requires:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:identity-verification
enables:
  - urn:ngm:class:authentication
  - urn:ngm:class:digital-identity
implements:
  - urn:ngm:class:digital-signature
contrastsWith:
  - urn:ngm:class:biometric-authentication
bridgesTo:
  - urn:ngm:class:digital-identity
uses:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:cryptography
  - urn:ngm:class:certificate-authority
supports:
  - urn:ngm:class:compliance
standardizedBy:
  - urn:ngm:class:eidas-regulation
partOf:
  - urn:ngm:class:digital-signature-verification
relatedTo:
  - urn:ngm:class:eidas-regulation
  - urn:ngm:class:digital-signature-verification
  - urn:ngm:class:digital-signature
---

# Qualified Electronic Signature

A qualified electronic signature (QES) is the highest-assurance class of electronic signature defined by the European Union's eIDAS regulation, created with a qualified signature-creation device and backed by a qualified certificate issued by an accredited trust service provider. It is legally equivalent to a handwritten signature across the EU and provides strong guarantees of signer identity and document integrity. QES underpins cross-border legal acts requiring the highest evidentiary weight.
