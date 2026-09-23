---
okf_version: "0.2"
type: Class
title: Biometric Verification
resource: urn:ngm:class:biometric-verification
domain: security
description: Biometric verification is the one-to-one matching process in which a live biometric sample presented by a claimant is compared against a single pre-enrolled template associated with the claimed identity, producing an accept or reject decision based on a similarity threshold. It is distinct from biometric identification, which performs a one-to-many search across an entire database, making verifica
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:identity-verification
requires:
  - urn:ngm:class:data-protection
  - urn:ngm:class:presentation-attack-detection
enables:
  - urn:ngm:class:biometric-authentication
  - urn:ngm:class:kyc
  - urn:ngm:class:access-control
  - urn:ngm:class:identity-proofing
contrastsWith:
  - urn:ngm:class:biometric-identification
  - urn:ngm:class:password-authentication
bridgesTo:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:distributed-collaboration
uses:
  - urn:ngm:class:biometric-binding-mechanism
  - urn:ngm:class:tee
  - urn:ngm:class:liveness-detection
  - urn:ngm:class:feature-extraction
supports:
  - urn:ngm:class:digital-identity
  - urn:ngm:class:zero-trust-architecture
standardizedBy:
  - urn:ngm:class:iso-iec
relatedTo:
  - urn:ngm:class:digital-identity-verification
  - urn:ngm:class:aml-kyc-compliance
  - urn:ngm:class:face-recognition
  - urn:ngm:class:privacy-preserving-authentication
---

# Biometric Verification

Biometric verification is the one-to-one matching process in which a live biometric sample presented by a claimant is compared against a single pre-enrolled template associated with the claimed identity, producing an accept or reject decision based on a similarity threshold. It is distinct from biometric identification, which performs a one-to-many search across an entire database, making verification faster and more privacy-preserving for authentication use cases.
